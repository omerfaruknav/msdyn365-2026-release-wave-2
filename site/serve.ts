// Tiny static server for local checks: tsx site/serve.ts [port]  (serves site/dist under the base path)
import { createServer } from "node:http";
import { readFileSync, existsSync, statSync } from "node:fs";
import { resolve, extname } from "node:path";
const port = Number(process.argv[2] ?? 4173);
const base = process.env.SITE_BASE ?? "/msdyn365-2026-release-wave-2/";
const root = resolve("site/dist");
const types: Record<string, string> = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".txt": "text/plain; charset=utf-8", ".ico": "image/x-icon" };
createServer((req, res) => {
  let p = decodeURIComponent((req.url ?? "/").split("?")[0]);
  if (p === "/") { res.writeHead(302, { location: base }); res.end(); return; }
  if (!p.startsWith(base)) { res.writeHead(404); res.end("not under base " + base); return; }
  p = p.slice(base.length);
  let file = resolve(root, p);
  if (existsSync(file) && statSync(file).isDirectory()) file = resolve(file, "index.html");
  if (!existsSync(file)) { res.writeHead(404, { "content-type": "text/html" }); res.end(existsSync(resolve(root, "404.html")) ? readFileSync(resolve(root, "404.html")) : "404"); return; }
  res.writeHead(200, { "content-type": types[extname(file)] ?? "application/octet-stream", "cache-control": "no-cache" });
  res.end(readFileSync(file));
}).listen(port, () => console.log(`serving site/dist at http://localhost:${port}${base}`));
