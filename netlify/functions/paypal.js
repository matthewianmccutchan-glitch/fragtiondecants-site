// FragtionDecants PayPal checkout (PayPal and Venmo buttons).
// The page asks this function to create a PayPal order and, once the customer approves it, to capture it.
// Prices are never taken from the page: the cart is re-priced here with the same code as the card checkout.
// Keys live only in Netlify's environment variables: PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET
// (optional PAYPAL_ENV=sandbox for testing). Nothing secret is ever sent to the page.
const { _price: price } = require("./checkout.js");

const ID = () => process.env.PAYPAL_CLIENT_ID || "", SECRET = () => process.env.PAYPAL_CLIENT_SECRET || "";
const SANDBOX = () => process.env.PAYPAL_ENV === "sandbox";
const API = () => SANDBOX() ? "https://api-m.sandbox.paypal.com" : "https://api-m.paypal.com";
const usd = c => (c / 100).toFixed(2);
const money = c => "$" + (c % 100 === 0 ? c / 100 : (c / 100).toFixed(2));
const reply = (statusCode, body) => ({ statusCode, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }, body: JSON.stringify(body) });
const clean = (v, max) => String(v == null ? "" : v).replace(/\s+/g, " ").trim().slice(0, max);
const amt = c => ({ currency_code: "USD", value: usd(c) });

// Build the PayPal order from the server-side price. giftLine adds the free 2ml as a $0 line so it shows on the receipt.
function orderRequest(p, body, giftLine) {
  const items = p.lines.filter(l => l.base_price_money.amount > 0).map(l => ({
    name: l.name.slice(0, 127), quantity: l.quantity, unit_amount: amt(l.base_price_money.amount), category: "PHYSICAL_GOODS",
    ...(l.note ? { description: l.note.slice(0, 127) } : {}) }));
  if (giftLine && p.gift) items.push({ name: ("FREE 2ml gift: " + p.gift).slice(0, 127), quantity: "1", unit_amount: amt(0), category: "PHYSICAL_GOODS" });
  const breakdown = { item_total: amt(p.subtotal) };
  if (p.shipping) breakdown.shipping = amt(p.shipping);
  if (p.discount) breakdown.discount = amt(p.discount);
  const who = [p.fulfil === "Shipping" ? "SHIP" : "LOCAL PICKUP", clean(body.name, 40), clean(body.contact, 60)].filter(Boolean).join(" | ");
  const extra = [];
  if (p.gift) extra.push("Free 2ml: " + p.gift);
  if (body.isGift === true) {
    extra.push("GIFT" + (clean(body.giftTo, 40) ? " for " + clean(body.giftTo, 40) : "") + ", no prices in box");
    if (clean(body.giftNote, 200)) extra.push("Gift note: " + clean(body.giftNote, 200));
  }
  if (clean(body.notes, 160)) extra.push("Notes: " + clean(body.notes, 160));
  const unit = { description: ("FragtionDecants: " + who).slice(0, 127), amount: { ...amt(p.total), breakdown }, items };
  if (extra.length) unit.custom_id = extra.join(" | ").slice(0, 127);
  return { intent: "CAPTURE", purchase_units: [unit],
    application_context: { brand_name: "FragtionDecants", user_action: "PAY_NOW", shipping_preference: p.fulfil === "Shipping" ? "GET_FROM_FILE" : "NO_SHIPPING" } };
}

let tok = null;
async function token() {
  if (tok && tok.exp > Date.now() + 60000) return tok.v;
  const r = await fetch(API() + "/v1/oauth2/token", { method: "POST", body: "grant_type=client_credentials",
    headers: { "Authorization": "Basic " + Buffer.from(ID() + ":" + SECRET()).toString("base64"), "Content-Type": "application/x-www-form-urlencoded" } });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || !j.access_token) throw new Error("PayPal sign-in failed (" + (j.error || r.status) + ")");
  tok = { v: j.access_token, exp: Date.now() + (Number(j.expires_in) || 300) * 1000 };
  return tok.v;
}
async function paypal(path, payload) {
  const r = await fetch(API() + path, { method: "POST", body: JSON.stringify(payload || {}),
    headers: { "Authorization": "Bearer " + await token(), "Content-Type": "application/json",
      "PayPal-Request-Id": (globalThis.crypto && crypto.randomUUID) ? crypto.randomUUID() : require("crypto").randomUUID() } });
  const j = await r.json().catch(() => ({}));
  return { ok: r.ok, status: r.status, j };
}
const issue = j => (j && j.details && j.details[0] && j.details[0].issue) || (j && j.name) || "";

exports.handler = async (event) => {
  const configured = !!(ID() && SECRET());
  if (event.httpMethod === "GET") return reply(200, { configured, clientId: configured ? ID() : "", sandbox: SANDBOX() });   // the client ID is public by design
  if (event.httpMethod !== "POST") return reply(405, { error: "method" });
  if (!configured) return reply(503, { error: "not_configured" });
  let body; try { body = JSON.parse(event.body || "{}"); } catch (e) { return reply(400, { error: "bad_cart", message: "Please refresh the page and try again." }); }
  try {
    if (body.action === "capture") {
      const id = String(body.orderID || "");
      if (!/^[A-Z0-9]{8,32}$/.test(id)) return reply(400, { error: "bad_order", message: "Please try again." });
      const c = await paypal("/v2/checkout/orders/" + id + "/capture");
      if (c.ok && c.j.status === "COMPLETED") return reply(200, { status: "COMPLETED", id: c.j.id });
      if (issue(c.j) === "INSTRUMENT_DECLINED") return reply(402, { error: "declined", message: "PayPal couldn't use that payment method. Please pick another one." });
      if (issue(c.j) === "ORDER_ALREADY_CAPTURED") return reply(200, { status: "COMPLETED", id });
      console.error("paypal capture failed:", c.status, issue(c.j));
      return reply(502, { error: "paypal", message: "PayPal couldn't complete the payment. You have not been charged." });
    }
    let p;
    try { p = price(body); } catch (e) { if (e && e.code && e.status) return reply(e.status, { error: e.code, message: e.message }); throw e; }
    if (body.total != null && Math.round(Number(body.total) * 100) !== p.total)
      return reply(409, { error: "price_changed", message: `Prices were updated. Your new total is ${money(p.total)}. Please refresh the page to see it.`, total: p.total / 100 });
    let o = await paypal("/v2/checkout/orders", orderRequest(p, body, true));
    if (!o.ok && p.gift) o = await paypal("/v2/checkout/orders", orderRequest(p, body, false));   // if PayPal refuses a $0 line, the gift stays in the order notes
    if (!o.ok || !o.j.id) { console.error("paypal create failed:", o.status, issue(o.j)); return reply(502, { error: "paypal", message: "PayPal checkout isn't available right now." }); }
    return reply(200, { id: o.j.id, total: p.total / 100 });
  } catch (e) {
    console.error("paypal failed:", e.message);
    return reply(502, { error: "paypal", message: "PayPal checkout isn't available right now." });
  }
};
exports._orderRequest = orderRequest;
