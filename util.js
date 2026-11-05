import { SHOP } from "./config.js";

export const WD = ["Жс","Дс","Сс","Ср","Бс","Жм","Сб"];
export const MON = ["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"];
export const pad = n => String(n).padStart(2, "0");

const OFF = SHOP.tzOffsetHours * 3600e3;

// Шаштараздың жергілікті уақытымен жұмыс істейміз (клиенттің браузері қай уақыт белдеуінде болса да).
export function shopToday() {
  const d = new Date(Date.now() + OFF);
  d.setUTCHours(0, 0, 0, 0);
  return d;                                   // UTC-getters арқылы оқылады
}
export const dayKey = d => d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate());
export const tstr = m => pad(Math.floor(m / 60)) + ":" + pad(m % 60);
export const slotId = (key, m) => key + "_" + pad(Math.floor(m / 60)) + pad(m % 60);

export function startOf(key, m) {
  const [y, mo, d] = key.split("-").map(Number);
  return new Date(Date.UTC(y, mo - 1, d, 0, m) - OFF);
}
export const isPast = (key, m) => startOf(key, m).getTime() <= Date.now();

export function dayList() {
  const base = shopToday(), out = [];
  for (let i = 0; i < SHOP.daysAhead; i++) out.push(new Date(base.getTime() + i * 864e5));
  return out;
}
export function timeList() {
  const out = [];
  for (let m = SHOP.openHour * 60; m < SHOP.closeHour * 60; m += SHOP.stepMin) out.push(m);
  return out;
}
export function dayTitle(d, i) {
  return d.getUTCDate() + " " + MON[d.getUTCMonth()] + ", " + (i === 0 ? "бүгін" : i === 1 ? "ертең" : WD[d.getUTCDay()]);
}
export function waDigits(phone) {
  let d = String(phone).replace(/\D/g, "");
  if (d.length === 11 && d[0] === "8") d = "7" + d.slice(1);
  if (d.length === 10) d = "7" + d;
  return d;
}
export function el(tag, props = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k === "class") e.className = v;
    else if (k.startsWith("on")) e[k] = v;
    else if (k === "text") e.textContent = v;
    else e.setAttribute(k, v);
  }
  e.append(...kids);
  return e;
}
