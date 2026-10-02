# Mega-prompt: "The Wave Map" for Claude Design

> Paste everything below the line into Claude Design. Attach the official Business Central product icon (SVG or PNG) as the brand reference, and attach `videos.json` as data. If the coding agent has already produced `data/index/features.json` and `airtime.json`, attach those instead of the mock data at the bottom.

---

## What this is

Design a single-page, interactive, zoomable overview of everything Microsoft announced in the **Business Central 2026 release wave 2 launch event**: 38 videos, 7 hours 9 minutes, 10 functional areas, somewhere between 80 and 150 individual features. The page will be the home page of a static GitHub Pages site built by a developer agent; your output is the visual system and the interactive prototype that agent will implement with D3/SVG. Design for the real data shape, not for a poster.

The person behind it is waldo, a Business Central developer and MVP who makes things the community did not ask for but ends up using. The audience is BC developers, consultants and partners who want to know "what actually happened in this wave, and where do I click to hear them say it". Tone: confident, playful, technical, not corporate. Think "a developer's map of a release", not "a Microsoft marketing page". Avoid anything that could be mistaken for an official Microsoft property: no Microsoft wordmark, no Dynamics 365 lockup, a visible "unofficial, made by waldo" line.

Never use em-dashes in any copy. Use a plain hyphen.

## The brand hook: start from the BC icon

The attached Business Central icon is the seed. Do not redraw or modify the icon itself; use it as-is where a logo belongs (small, top-left, with the "unofficial" line), and **derive the visual language from it**: its geometry (angular, faceted, isometric suggestion), its palette (the teals/blues and their gradient steps), and its sense of depth. The release map should feel like it grew out of the icon: the center of the map is the icon, areas radiate from it, features sit on the outer rings. Pick one metaphor and commit to it. Three directions to explore, show all three as thumbnails, then develop one:

1. **Sunburst / radial**: center icon, ring 1 = areas (arc length = airtime), ring 2 = features (arc length = airtime, fill = status). Zoom by clicking an arc, which becomes the new center. Classic, legible, proven.
2. **Facets**: extend the icon's faceted geometry outward into a crystalline tiling where each facet is a feature, facet size = airtime, facet color = status, and facets cluster by area with a subtle shared tint. Zoom = the camera flies into a cluster. More distinctive, harder to keep legible, so prove it with real counts (10 areas, up to 150 facets).
3. **Circle packing**: nested circles, areas contain features, size = airtime. Easy zoom, friendly on mobile, less "BC".

Whatever wins, the geometry must survive these real numbers: areas range from 10 minutes (E-Documents, one video) to 89 minutes (Developer tools, six videos). Expense Agent alone has eight videos. The AL and Tools video is 35 minutes and will spawn 20+ features. Do not design for an evenly distributed dataset.

## Encodings (fixed, the developer agent will implement exactly this)

- **Size** = airtime in seconds (how long they talked about it).
- **Color (categorical)** = area, 10 areas: finance, supply-chain, e-documents, sustainability, expense-agent, copilot-and-agents, reporting-and-analytics, developer-tools, admin-and-platform, integration. Derive a 10-step palette from the icon's hues plus accents; it must be distinguishable in light and dark mode and pass contrast with its label.
- **Status** = preview / GA / announced / unclear. Encode with something other than hue (fill pattern, stroke style, saturation step, or a small glyph) so it stacks on top of the area color. Status matters more than area to this audience; make "preview" instantly visible.
- **Developer relevance** (high / medium / low) = an optional filter and a subtle marker, not a primary encoding.
- **Documentation match** (documented and shown / shown but not documented / documented but not shown) = shown only in the detail panel and in a dedicated "what they didn't say" view, never on the map itself. (Microsoft stopped publishing per-feature release plans this wave, so the baseline is the official "feature details" docs page; label it "docs", not "release plan".)

## Interaction

- Zoom levels: wave → area → feature. Breadcrumb at the top. Browser back works per level.
- Hover (desktop) shows name, minutes, status. Click opens the **detail panel** (right side on desktop, bottom sheet on mobile) with: feature name, area, status with the sentence that proves it, a 3-sentence summary, 3-5 quotes each with a timestamp chip that deep-links to YouTube at that second, the list of videos it appears in with thumbnails, the release-plan match with a confidence badge, and tags.
- Filters above the map: status, area, dev relevance, text search (filters dim non-matching shapes rather than removing them, so the shape of the wave stays recognizable).
- A **"minutes" legend** that doubles as a headline: "7h09 of video. 89 min developer tools. 73 min Expense Agent. N min of the word agentic." Numbers come from data, design the slots.
- Keyboard: arrows move between siblings, enter zooms, escape zooms out.
- A share button per feature that copies a URL with the feature slug in the hash.
- Loading and empty states (filters that match nothing; a wave with missing transcripts shows the missing videos as outlined ghosts, not as gaps).

## Secondary views (design as part of the same system, lower fidelity is fine)

- **Video timeline strip**: one horizontal bar per video, chapters as segments, demo ranges as a brighter band, "preview / subject to change" disclaimer moments as small ticks, feature mentions as dots. Clickable anywhere, jumps to YouTube at that second. Design the strip once; it repeats 38 times on the videos page and once on each video page.
- **Airtime charts**: stacked bars per area (preview vs GA), top 15 features by minutes, audience split, and the "Copilot/agents vs everything else" single big number. Same palette, same type system. No chart junk.
- **Buzzword bingo**: a heatmap (videos × words) and a printable 5×5 bingo card. This is the fun page; let it be a bit louder, still on-system.
- **Developer digest**: a reading page with a "playlist" of deep links; design the list item (thumbnail, timestamp chip, one-line why) and the typographic scale for long-form.
- **Ask the event**: a search box, a results list of transcript passages with the matched words highlighted and a timestamp chip, and an optional "explain with your own API key" expander. Make it feel like a dev tool, not a chatbot.

## Design system deliverables

- Palette tokens for light and dark (background, surface, text, 10 area colors, 4 status treatments, accent, link), with contrast ratios listed.
- Type system: one UI face, one mono for timestamps, slugs and code. Sizes for display, headline, body, caption, and the mono chip.
- Components: map node (3 zoom levels), detail panel, timestamp chip (the most repeated element on the site, make it great: `12:34 ▶` style, hover reveals the video title), filter bar, breadcrumb, status badge, confidence badge, video card, timeline strip, legend/headline block, bingo cell, search result row.
- Motion: zoom transition (duration, easing), hover, panel open/close, filter dim. Subtle; this runs on GitHub Pages on a laptop in a conference hallway.
- Responsive: 1440, 1024, 390 widths for the map page. On 390 the map must still be navigable (it is acceptable to switch from sunburst to a stacked list of areas with mini-arcs).
- Social preview image template (1200×630) for the home page and for a single feature page: icon, wave name, a big number, a short line.
- Favicon derived from the icon's geometry (not the icon itself).

## What to hand back

1. The three direction thumbnails with one paragraph each on why / why not.
2. The chosen direction at full fidelity: home map at the three zoom levels, detail panel open, filters active, dark and light, desktop and mobile.
3. The secondary views at medium fidelity.
4. The design system page with tokens, components and motion specs, written so a coding agent can implement without asking questions. Export tokens as JSON (`design/tokens.json`) and name every component the way the layout above names it.
5. A `design/HANDOFF.md`: implementation notes per component, the SVG structure you expect for the map (groups per level, class names), and anything that is intentionally not pixel-exact.

## Data contract (what the map consumes)

```json
{
  "wave": { "id": "2026w2", "name": "2026 release wave 2", "total_seconds": 25741, "video_count": 38 },
  "areas": [
    { "slug": "developer-tools", "name": "Developer tools", "seconds": 5340, "videos": 6 },
    { "slug": "expense-agent", "name": "Expense Agent", "seconds": 4380, "videos": 8 },
    { "slug": "supply-chain", "name": "Supply chain", "seconds": 3420, "videos": 3 },
    { "slug": "integration", "name": "Integration (Fabric, Shopify, MDM)", "seconds": 3420, "videos": 4 },
    { "slug": "admin-and-platform", "name": "Admin and platform", "seconds": 2580, "videos": 5 },
    { "slug": "reporting-and-analytics", "name": "Reporting and analytics", "seconds": 2040, "videos": 4 },
    { "slug": "copilot-and-agents", "name": "Copilot and agents", "seconds": 1500, "videos": 3 },
    { "slug": "finance", "name": "Finance", "seconds": 1140, "videos": 2 },
    { "slug": "sustainability", "name": "Sustainability", "seconds": 1080, "videos": 2 },
    { "slug": "e-documents", "name": "E-Documents", "seconds": 600, "videos": 1 }
  ],
  "features": [
    {
      "slug": "mcp-server",
      "name": "MCP Server",
      "area": "developer-tools",
      "status": "preview",
      "seconds": 495,
      "dev_relevance": "high",
      "release_plan": { "matched": true, "confidence": "high" },
      "videos": [{ "id": "qs1cg-GoDeQ", "title": "What's new: MCP Server", "t_start": 0, "t_end": 495 }],
      "summary": "Three sentences.",
      "quotes": [{ "t": 132, "text": "verbatim quote", "video_id": "qs1cg-GoDeQ" }],
      "tags": ["agents", "al", "api"]
    }
  ]
}
```

Area seconds above are approximated from video lengths by title; the real numbers will come from chapter-level extraction and will be more uneven, not less. Build the mock with ~90 features distributed roughly proportional to area seconds, with 40% preview, 45% GA, 10% announced, 5% unclear.

## Appendix: the 38 videos

Use `videos.json` for titles, IDs and lengths. Thumbnails are at `https://i.ytimg.com/vi/<id>/hqdefault.jpg`. Deep links are `https://www.youtube.com/watch?v=<id>&t=<seconds>s`.
