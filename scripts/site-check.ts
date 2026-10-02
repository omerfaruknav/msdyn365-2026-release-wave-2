/**
 * Visual and layout checks against a running local server (npm run site:serve).
 *   tsx scripts/site-check.ts [--base http://localhost:4173/msdyn365-2026-release-wave-2/] [--shots docs/screenshots]
 * Reports console errors, horizontal overflow at 390px for every main page, and writes screenshots.
 */
import puppeteer from "puppeteer-core";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";

const args = process.argv.slice(2);
const opt = (k: string, d: string) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : d; };
const base = opt("base", "http://localhost:4173/msdyn365-2026-release-wave-2/");
const shots = opt("shots", "docs/screenshots");
const chrome = process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const pages = ["", "videos/", "features/", "airtime/", "dev-digest/", "what-they-didnt-say/", "bingo/", "ask/", "about/", ...(args.includes("--extra") ? opt("extra", "").split(",") : [])];
mkdirSync(shots, { recursive: true });
const browser = await puppeteer.launch({ executablePath: chrome, headless: true, args: ["--no-sandbox", "--disable-gpu"] });
let failed = 0;
try {
  for (const p of pages) {
    const page = await browser.newPage();
    const errors: string[] = [];
    page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
    page.on("pageerror", (e) => errors.push(String(e)));
    page.on("requestfailed", (r) => errors.push(`request failed ${r.url()}`));
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
    await page.goto(base + p, { waitUntil: "networkidle0", timeout: 60000 });
    await new Promise((r) => setTimeout(r, 400));
    const m = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth, wide: [...document.querySelectorAll("body *")].filter((e) => e.getBoundingClientRect().right > window.innerWidth + 1).slice(0, 5).map((e) => `${e.tagName.toLowerCase()}.${String(e.className).split(" ")[0]} right=${Math.round(e.getBoundingClientRect().right)}`) }));
    const overflow = m.sw > m.iw;
    if (overflow) failed++;
    const name = p ? p.replace(/\//g, "-").replace(/-$/, "") : "home";
    await page.screenshot({ path: resolve(shots, `${name}-390.png`), fullPage: false });
    await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 1 });
    await page.goto(base + p, { waitUntil: "networkidle0", timeout: 60000 });
    await new Promise((r) => setTimeout(r, 600));
    await page.screenshot({ path: resolve(shots, `${name}.png`), fullPage: false });
    console.log(`${overflow ? "FAIL" : "ok  "} ${p || "/"} 390px scrollWidth=${m.sw}${overflow ? ` overflowing: ${m.wide.join(", ")}` : ""}${errors.length ? ` console: ${errors.slice(0, 3).join(" | ")}` : ""}`);
    if (errors.length) failed++;
    await page.close();
  }
} finally { await browser.close(); }
console.log(failed ? `site-check: ${failed} problem(s)` : "site-check: all pages pass (no overflow at 390px, no console errors)");
process.exit(failed ? 1 : 0);
