/**
 * Fetch the "documented features" baseline for a wave. Three sources, all optional:
 *   docs-preview-features   feature details page (H2 area, H3 feature, narrative text)
 *   docs-whatsnew-overview  update overview page (table: area, feature, availability, roadmap id)
 *   ai-at-work-roadmap      the roadmap behind aka.ms/AIatWorkRoadmap, read through the public
 *                           release communications API filtered on "Business Central"
 * Anything that cannot be fetched is recorded with status "unavailable" and the rest continues.
 */
import { slugify } from "../lib/text.js";

export interface DocItem {
  id: string; title: string; area_raw: string; area: string; doc_status: "ga" | "preview" | "unclear"; availability: string | null;
  roadmap_id: string | null; text: string; url: string; source_kind: string; roadmap?: { status: string; release_phase: string | null; ga_date: string | null; preview_date: string | null; description: string } | null;
}

const AREA_MAP: Record<string, string> = {
  "adapt faster with power platform": "integration", "copilot and agents": "copilot-and-agents", "development": "developer-tools",
  "e-documents": "e-documents", "ecommerce": "integration", "expense agent": "expense-agent", "finance": "finance",
  "governance and administration": "admin-and-platform", "reporting and data analysis": "reporting-and-analytics",
  "service and platform": "admin-and-platform", "supply chain management": "supply-chain", "sustainability management": "sustainability",
  "sustainabilty management": "sustainability", "user experience": "admin-and-platform", "user experiences": "admin-and-platform",
  "country/region": "finance", "country and regional": "finance", "legislation": "finance", "application": "admin-and-platform",
  "onboarding": "admin-and-platform", "customer experience": "admin-and-platform", "e-commerce": "integration",
};
export function mapArea(raw: string): string {
  const k = raw.toLowerCase().trim();
  if (AREA_MAP[k]) return AREA_MAP[k];
  for (const key of Object.keys(AREA_MAP)) if (k.includes(key)) return AREA_MAP[key];
  return "admin-and-platform";
}

const strip = (s: string) => decode(s.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
const decode = (s: string) => s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&#x27;/g, "'");

async function get(url: string): Promise<string> {
  const res = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 (msdyn365 wave repo pipeline)", accept: "text/html,application/json" }, signal: AbortSignal.timeout(45_000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

export function parseFeatureDetails(html: string, pageUrl: string): DocItem[] {
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? html;
  const re = /<h([23])[^>]*?id="([^"]*)"[^>]*>([\s\S]*?)<\/h\1>/g;
  const heads: { level: number; id: string; title: string; start: number; end: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(main))) heads.push({ level: +m[1], id: m[2], title: strip(m[3]), start: m.index, end: m.index + m[0].length });
  const items: DocItem[] = [];
  let area = "";
  for (let i = 0; i < heads.length; i++) {
    const h = heads[i];
    const next = heads[i + 1];
    if (h.level === 2) { area = h.title; continue; }
    if (h.level !== 3 || !area || /in this article|related information|feedback|additional resources/i.test(area)) continue;
    const body = strip(main.slice(h.end, next ? next.start : undefined)).slice(0, 6000);
    let areaRaw = area, title = h.title;
    const colon = title.match(/^([A-Za-z/ &-]{3,40}):\s+(.+)$/);
    if (colon && AREA_MAP[colon[1].toLowerCase()]) { areaRaw = colon[1]; title = colon[2]; }
    const status: DocItem["doc_status"] = /generally available|general availability/i.test(body) ? "ga" : /public preview|in preview|\bpreview\b/i.test(body) ? "preview" : "unclear";
    items.push({ id: h.id || slugify(title), title, area_raw: areaRaw, area: mapArea(areaRaw), doc_status: status, availability: null, roadmap_id: null, text: body, url: `${pageUrl}#${h.id}`, source_kind: "docs-preview-features" });
  }
  return items;
}

export function parseWhatsNewTable(html: string): { area: string; feature: string; availability: string; roadmap_id: string | null }[] {
  const table = html.match(/<table[^>]*>([\s\S]*?)<\/table>/)?.[1];
  if (!table) return [];
  const rows = [...table.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)].map((r) => [...r[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((c) => c[1]));
  const out: { area: string; feature: string; availability: string; roadmap_id: string | null }[] = [];
  let area = "";
  for (const cells of rows) {
    if (cells.length < 3) continue;
    const a = strip(cells[0]); if (a) area = a;
    const feature = strip(cells[1]); const availability = strip(cells[2]);
    const rid = cells[3] ? (strip(cells[3]).match(/\d{5,7}/)?.[0] ?? null) : null;
    if (feature) out.push({ area, feature, availability, roadmap_id: rid });
  }
  return out;
}

export async function fetchBaseline(wave: string, sources: { kind: string; url: string }[]) {
  const fetched_at = new Date().toISOString();
  const report: { kind: string; url: string; status: "ok" | "unavailable"; items?: number; error?: string }[] = [];
  let items: DocItem[] = [];
  let table: ReturnType<typeof parseWhatsNewTable> = [];
  let roadmap: any[] = [];
  for (const s of sources) {
    try {
      if (s.kind === "docs-preview-features") {
        items = parseFeatureDetails(await get(s.url), s.url);
        report.push({ kind: s.kind, url: s.url, status: "ok", items: items.length });
      } else if (s.kind === "docs-whatsnew-overview") {
        table = parseWhatsNewTable(await get(s.url));
        report.push({ kind: s.kind, url: s.url, status: "ok", items: table.length });
      } else if (s.kind === "ai-at-work-roadmap") {
        const api = "https://www.microsoft.com/releasecommunications/api/v1/m365?$filter=contains(title,%27Business%20Central%27)";
        roadmap = JSON.parse(await get(api));
        report.push({ kind: s.kind, url: s.url, status: "ok", items: roadmap.length });
      }
    } catch (e: any) {
      report.push({ kind: s.kind, url: s.url, status: "unavailable", error: String(e?.message ?? e) });
    }
  }
  // enrich feature items with the table (availability + roadmap id) and the roadmap API
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  for (const it of items) {
    const row = table.find((r) => norm(r.feature) === norm(it.title)) ?? table.find((r) => norm(r.feature).includes(norm(it.title)) || norm(it.title).includes(norm(r.feature)));
    if (row) {
      it.availability = row.availability; it.roadmap_id = row.roadmap_id;
      if (/general availability/i.test(row.availability)) it.doc_status = "ga"; else if (/preview/i.test(row.availability)) it.doc_status = "preview";
    }
    const rm = roadmap.find((r) => it.roadmap_id && String(r.id) === it.roadmap_id) ?? roadmap.find((r) => norm(String(r.title)).endsWith(norm(it.title)));
    it.roadmap = rm ? {
      status: rm.status, release_phase: rm.tagsContainer?.releasePhase?.[0]?.tagName ?? null,
      ga_date: rm.publicDisclosureAvailabilityDate || null, preview_date: rm.publicPreviewDate || null, description: strip(String(rm.description ?? "")).slice(0, 800),
    } : null;
    if (rm && !it.roadmap_id) it.roadmap_id = String(rm.id);
  }
  // table rows / roadmap items that are not on the feature details page become items of their own
  for (const r of table) {
    if (items.some((it) => norm(it.title) === norm(r.feature))) continue;
    if (items.some((it) => it.roadmap_id && it.roadmap_id === r.roadmap_id)) continue;
    const rm = roadmap.find((x) => String(x.id) === r.roadmap_id);
    items.push({
      id: slugify(r.feature), title: r.feature, area_raw: r.area, area: mapArea(r.area), availability: r.availability,
      doc_status: /general availability/i.test(r.availability) ? "ga" : /preview/i.test(r.availability) ? "preview" : "unclear",
      roadmap_id: r.roadmap_id, text: rm ? strip(String(rm.description ?? "")).slice(0, 6000) : "", url: sources.find((s) => s.kind === "docs-whatsnew-overview")!.url,
      source_kind: "docs-whatsnew-overview",
      roadmap: rm ? { status: rm.status, release_phase: rm.tagsContainer?.releasePhase?.[0]?.tagName ?? null, ga_date: rm.publicDisclosureAvailabilityDate || null, preview_date: rm.publicPreviewDate || null, description: strip(String(rm.description ?? "")).slice(0, 800) } : null,
    });
  }
  for (const rm of roadmap) {
    if (items.some((it) => it.roadmap_id === String(rm.id))) continue;
    const t = String(rm.title).replace(/^Dynamics 365 Business Central:\s*/i, "");
    const [areaRaw, ...rest] = t.split(" - ");
    const title = rest.length ? rest.join(" - ") : t;
    items.push({
      id: slugify(title), title, area_raw: rest.length ? areaRaw : "", area: mapArea(rest.length ? areaRaw : ""), availability: rm.tagsContainer?.releasePhase?.[0]?.tagName ?? null,
      doc_status: /general availability/i.test(rm.tagsContainer?.releasePhase?.[0]?.tagName ?? "") ? "ga" : /preview/i.test(rm.tagsContainer?.releasePhase?.[0]?.tagName ?? "") ? "preview" : "unclear",
      roadmap_id: String(rm.id), text: strip(String(rm.description ?? "")).slice(0, 6000), url: `https://www.microsoft.com/en-us/microsoft-365/roadmap?id=${rm.id}`, source_kind: "ai-at-work-roadmap",
      roadmap: { status: rm.status, release_phase: rm.tagsContainer?.releasePhase?.[0]?.tagName ?? null, ga_date: rm.publicDisclosureAvailabilityDate || null, preview_date: rm.publicPreviewDate || null, description: strip(String(rm.description ?? "")).slice(0, 800) },
    });
  }
  // unique ids
  const seen = new Set<string>();
  for (const it of items) { let id = it.id, n = 2; while (seen.has(id)) id = `${it.id}-${n++}`; seen.add(id); it.id = id; }
  const status = report.some((r) => r.status === "ok") ? "ok" : "unavailable";
  return { wave, fetched_at, status, note: "Microsoft no longer publishes per-feature release plans for this wave; the baseline is the official documentation (feature details page, update overview table) plus the AI at Work roadmap entries for Business Central. Call this 'documented features' in the UI.", sources: report, items };
}
