// FragtionDecants alert sign-ups (email and text).
// The sign-up box on the site posts here; this adds the person to the mailing lists kept in Brevo.
// The key lives only in Netlify's environment variables: BREVO_API_KEY. Nothing secret is sent to the page.
// Two lists are used so consent stays clear:
//   "FragtionDecants email alerts"  everyone who gave an email address
//   "FragtionDecants text alerts"   only people who ticked the box agreeing to marketing texts
const KEY = () => process.env.BREVO_API_KEY || "";
const API = "https://api.brevo.com/v3";
const LISTS = { email: "FragtionDecants email alerts", text: "FragtionDecants text alerts" };
const FOLDER = "FragtionDecants";
const reply = (statusCode, body) => ({ statusCode, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }, body: JSON.stringify(body) });
const clean = (v, max) => String(v == null ? "" : v).replace(/\s+/g, " ").trim().slice(0, max);

async function brevo(method, path, body) {
  const r = await fetch(API + path, { method, headers: { "api-key": KEY(), "Content-Type": "application/json", Accept: "application/json" }, body: body ? JSON.stringify(body) : undefined });
  const t = await r.text(); let json = null; try { json = t ? JSON.parse(t) : null; } catch (e) {}
  return { ok: r.ok, status: r.status, json };
}

// Find the two lists by name, creating whichever is missing. Cached while the function stays warm.
let listIds = null;
async function lists() {
  if (listIds) return listIds;
  const got = await brevo("GET", "/contacts/lists?limit=50&offset=0");
  if (!got.ok) throw new Error("lists " + got.status);
  const ids = {}, have = (got.json && got.json.lists) || [];
  for (const k of Object.keys(LISTS)) { const l = have.find(x => x.name === LISTS[k]); if (l) ids[k] = l.id; }
  if (Object.keys(ids).length < Object.keys(LISTS).length) {
    const f = await brevo("GET", "/contacts/folders?limit=50&offset=0");
    let folder = f.ok && f.json && f.json.folders && f.json.folders[0] && f.json.folders[0].id;
    if (!folder) { const nf = await brevo("POST", "/contacts/folders", { name: FOLDER }); if (!nf.ok) throw new Error("folder " + nf.status); folder = nf.json.id; }
    for (const k of Object.keys(LISTS)) if (!ids[k]) {
      const nl = await brevo("POST", "/contacts/lists", { name: LISTS[k], folderId: folder });
      if (!nl.ok) throw new Error("list " + nl.status); ids[k] = nl.json.id;
    }
  }
  return (listIds = ids);
}

exports.handler = async event => {
  if (event.httpMethod === "GET") return reply(200, { configured: !!KEY() });
  if (event.httpMethod !== "POST") return reply(405, { error: "method" });
  let b; try { b = JSON.parse(event.body || "{}"); } catch (e) { return reply(400, { error: "bad_request" }); }
  if (clean(b.bot, 50)) return reply(200, { ok: true });                         // honeypot: quietly ignore bots
  const name = clean(b.name, 40).replace(/[<>]/g, "");
  const email = clean(b.email, 120).toLowerCase();
  const digits = String(b.phone == null ? "" : b.phone).replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");
  const textOk = b.consent === true || b.consent === "yes";
  if (email && !/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/.test(email)) return reply(400, { error: "email" });
  if (digits && digits.length !== 10) return reply(400, { error: "phone" });
  const phone = digits && textOk ? "+1" + digits : "";                            // a number is only kept with the texting consent box ticked
  if (!email && !phone) return reply(400, { error: digits ? "consent" : "missing" });
  if (!KEY()) return reply(503, { error: "not_configured" });
  try {
    const ids = await lists();
    const make = (withName, withPhone) => {
      const c = { updateEnabled: true, listIds: [], attributes: {} };
      if (email) { c.email = email; c.listIds.push(ids.email); }
      if (withPhone && phone) { c.attributes.SMS = phone; c.listIds.push(ids.text); }
      if (withName && name) c.attributes.FIRSTNAME = name;
      return c;
    };
    // Full record first. If Brevo refuses it (number already on another contact, or the name field
    // isn't set up in the account), keep the parts it will take rather than losing the sign-up.
    const tries = [[true, true], [true, false], [false, true], [false, false]].filter(([n, p]) => (n ? name : true) && (p ? phone : true) && (p ? true : email));
    let r = null, kept = null;
    for (const t of tries) { r = await brevo("POST", "/contacts", make(t[0], t[1])); if (r.ok) { kept = t; break; } if (r.status !== 400) break; }
    if (!kept) {
      const dup = r && r.status === 400 && /duplicate|already/i.test(JSON.stringify(r.json || ""));
      if (dup && !email) return reply(200, { ok: true, email: false, text: true });   // that number is already signed up
      console.log("subscribe failed:", r && r.status, r && JSON.stringify(r.json).slice(0, 200));
      return reply(502, { error: "provider" });
    }
    return reply(200, { ok: true, email: !!email, text: !!(phone && kept[1]) });
  } catch (e) {
    console.log("subscribe error:", e && e.message);
    return reply(502, { error: "provider" });
  }
};
