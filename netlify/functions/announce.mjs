// FragtionDecants automatic announcements.
// Netlify runs this once after every successful deploy. The site build compares the catalogue with the
// previous published version and lists what changed (new arrivals, coming soon, restocks, a new deal) in
// BATCHES below. Each batch is emailed once to the "FragtionDecants email alerts" list in Brevo.
// A batch is never sent twice: before sending, the function checks Brevo for a campaign with the same name.
// The key lives only in Netlify's environment variables: BREVO_API_KEY.
const BATCHES = [];
const SITE = "https://fragtiondecants.netlify.app/";
const SHOP = "FragtionDecants";
const ADDRESS = "";          // mailing address shown in the footer (required by US email law); empty = don't send
const LIST = "FragtionDecants email alerts";
const WINDOW = 3 * 86400000;            // only announce changes published in the last 3 days
const API = "https://api.brevo.com/v3";
const KEY = () => process.env.BREVO_API_KEY || "";

async function brevo(method, path, body) {
  const r = await fetch(API + path, { method, headers: { "api-key": KEY(), "Content-Type": "application/json", Accept: "application/json" }, body: body ? JSON.stringify(body) : undefined });
  const t = await r.text(); let json = null; try { json = t ? JSON.parse(t) : null; } catch (e) {}
  return { ok: r.ok, status: r.status, json };
}
const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const money = p => "$" + (p % 1 === 0 ? p : p.toFixed(2));
const join = a => a.length <= 2 ? a.join(" and ") : a.slice(0, 2).join(", ") + " and " + (a.length - 2) + " more";
const of = (b, t) => (b.events || []).filter(e => e.t === t);

function subject(b) {
  const landed = of(b, "landed"), back = of(b, "restock"), soon = of(b, "soon");
  if (landed.length) return "Just landed: " + join(landed.map(e => e.n));
  if (back.length) return "Back in stock: " + join(back.map(e => e.n));
  if (b.deal) return b.deal.text.length <= 78 ? b.deal.text : b.deal.text.slice(0, 75) + "…";
  return "Coming soon: " + join(soon.map(e => e.n));
}
function preview(b) {
  const landed = of(b, "landed"), back = of(b, "restock"), soon = of(b, "soon");
  if (landed.length) return "Now pouring from 2ml. Order today and it ships in 1–2 business days.";
  if (back.length) return "Back on the shelf and ready to pour.";
  if (b.deal) return "For alert subscribers first.";
  return soon.length ? "On the way to us. You'll hear the day it opens for orders." : "";
}
function row(e, cta) {
  const url = SITE + e.slug, img = e.photo ? `<td width="96" valign="top" style="padding:0 14px 0 0"><a href="${url}"><img src="${SITE + e.photo}-s.jpg" width="96" alt="${esc(e.disp)}" style="display:block;width:96px;border-radius:10px;border:0"></a></td>` : "";
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 16px"><tr>${img}<td valign="top">
    <div style="font:600 12px Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#a89c88">${esc(e.h)}</div>
    <div style="font:600 19px Georgia,serif;color:#f3ead9;margin:3px 0 4px"><a href="${url}" style="color:#f3ead9;text-decoration:none">${esc(e.n)}</a></div>
    <div style="font:14px Arial,sans-serif;color:#d8d0c4;margin:0 0 9px">Decants from ${money(e.from)}</div>
    <a href="${url}" style="font:600 13px Arial,sans-serif;color:#e2c48a;text-decoration:underline">${cta}</a></td></tr></table>`;
}
function section(title, note, events, cta) {
  if (!events.length) return "";
  return `<tr><td style="padding:22px 26px 4px"><div style="font:600 13px Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#c9a45c;margin:0 0 4px">${title}</div>
    ${note ? `<div style="font:14px Arial,sans-serif;color:#b9b0a2;line-height:1.5;margin:0 0 14px">${note}</div>` : `<div style="height:10px;line-height:10px">&nbsp;</div>`}
    ${events.map(e => row(e, cta)).join("")}</td></tr>`;
}
function html(b) {
  const deal = b.deal ? `<tr><td style="padding:22px 26px 0"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="background:#2a2317;border:1px solid #6b5830;border-radius:12px;padding:18px 20px">
    <div style="font:600 13px Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#c9a45c;margin:0 0 6px">New deal</div>
    <div style="font:600 20px Georgia,serif;color:#f3ead9;line-height:1.3">${esc(b.deal.text)}</div>
    ${b.deal.until ? `<div style="font:14px Arial,sans-serif;color:#d8d0c4;margin:6px 0 0">Ends ${esc(b.deal.until)}.</div>` : ""}
    <div style="margin:14px 0 0"><a href="${SITE}shop" style="display:inline-block;background:#c9a45c;color:#17130c;font:600 14px Arial,sans-serif;text-decoration:none;padding:11px 20px;border-radius:9px">Shop the menu</a></div></td></tr></table></td></tr>` : "";
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="dark"><title>${esc(subject(b))}</title></head>
<body style="margin:0;padding:0;background:#0f0d0a">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0f0d0a"><tr><td align="center" style="padding:18px 10px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#17140f;border:1px solid #2e2a22;border-radius:16px">
<tr><td align="center" style="padding:26px 26px 6px"><a href="${SITE}" style="font:600 26px Georgia,serif;color:#e2c48a;text-decoration:none">${SHOP}</a>
  <div style="font:italic 14px Georgia,serif;color:#a89c88;margin:4px 0 0">Try the bottle before you buy the bottle</div></td></tr>
${deal}
${section("Just landed", "Poured fresh and open for orders now. Ships in 1–2 business days, or pick up locally.", of(b, "landed"), "Order a decant")}
${section("Back in stock", "", of(b, "restock"), "Order a decant")}
${section("Coming soon", "On the way to us. Browse the notes now; it opens for orders the day the bottle arrives, and you'll hear from us when it does.", of(b, "soon"), "See the notes")}
<tr><td style="padding:14px 26px 26px;border-top:1px solid #2e2a22">
  <div style="font:12px Arial,sans-serif;color:#8f8676;line-height:1.6">You're getting this because you signed up for drop alerts at <a href="${SITE}" style="color:#a89c88">${SITE.replace(/^https?:\/\/|\/$/g, "")}</a>.
  <a href="{{ unsubscribe }}" style="color:#a89c88">Unsubscribe</a> any time.<br>${SHOP} · ${esc(ADDRESS)}</div></td></tr>
</table></td></tr></table></body></html>`;
}

async function run(event) {
  const ctx = event && event.deploy && event.deploy.context;
  if (ctx && ctx !== "production") return "skip: not a production deploy";
  const now = Date.now(), due = BATCHES.filter(b => { const age = now - Date.parse(b.at); return age < WINDOW && age > -86400000; });
  if (!due.length) return "nothing new to announce";
  if (!KEY()) return "skip: BREVO_API_KEY is not set";
  if (!ADDRESS) return "skip: no mailing address set for the email footer";
  const camps = await brevo("GET", "/emailCampaigns?limit=50&offset=0");
  if (!camps.ok) return "stop: could not check earlier announcements (" + camps.status + ")";   // never risk a double send
  const seen = {}; for (const c of (camps.json && camps.json.campaigns) || []) seen[c.name] = c;
  const ls = await brevo("GET", "/contacts/lists?limit=50&offset=0");
  const list = ls.ok && ((ls.json && ls.json.lists) || []).find(l => l.name === LIST);
  if (!list) return "skip: no sign-ups yet (list not created)";
  let from = process.env.ALERT_SENDER_EMAIL || "";
  if (!from) { const s = await brevo("GET", "/senders"); const a = s.ok && ((s.json && s.json.senders) || []).find(x => x.active); from = a ? a.email : ""; }
  if (!from) return "skip: no verified sender in Brevo";
  const out = [];
  for (const b of due) {
    const name = "Site alert " + b.id; let id = null;
    if (seen[name]) { if (seen[name].status !== "draft") { out.push(name + ": already sent"); continue; } id = seen[name].id; }
    if (!id) {
      const c = await brevo("POST", "/emailCampaigns", { name, subject: subject(b), previewText: preview(b), sender: { name: SHOP, email: from }, htmlContent: html(b), recipients: { listIds: [list.id] }, tag: "site-alert" });
      if (!c.ok) { out.push(name + ": could not create (" + c.status + " " + JSON.stringify(c.json).slice(0, 160) + ")"); continue; }
      id = c.json.id;
    }
    const s = await brevo("POST", "/emailCampaigns/" + id + "/sendNow");
    out.push(name + (s.ok ? ": sent" : ": saved as a draft, send failed (" + s.status + " " + JSON.stringify(s.json).slice(0, 160) + ")"));
  }
  return out.join("; ");
}

export default {
  async deploySucceeded(event) {
    try { console.log("alerts:", await run(event)); } catch (e) { console.log("alerts failed:", e && e.message); }
  },
};
