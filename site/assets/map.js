/* Zoomable sunburst: wave -> areas -> features. Driven entirely by data/index/features.json and airtime.json. */
(function () {
  var base = document.body.getAttribute("data-base") || "/";
  var el = document.getElementById("map"); if (!el || typeof d3 === "undefined") return;
  var panel = document.getElementById("panel");
  var STATUS = { ga: "GA", preview: "preview", announced: "announced", unclear: "not stated" };
  var fmtMin = function (s) { var m = Math.round(s / 60); return m < 60 ? m + " min" : Math.floor(m / 60) + "h" + String(m % 60).padStart(2, "0"); };
  var fmtT = function (s) { s = Math.floor(s); var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s % 60; return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(x).padStart(2, "0"); };
  var yt = function (id, t) { return "https://www.youtube.com/watch?v=" + id + "&t=" + Math.floor(t) + "s"; };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };

  Promise.all([fetch(base + "data/index/features.json").then(function (r) { return r.json(); }), fetch(base + "data/index/airtime.json").then(function (r) { return r.json(); })]).then(function (res) {
    var fj = res[0], at = res[1];
    var areaName = {}; fj.areas.forEach(function (a) { areaName[a.slug] = a.name; });
    var root = { name: fj.name, children: fj.areas.filter(function (a) { return a.feature_count > 0; }).map(function (a) {
      return { name: a.name, slug: a.slug, kind: "area", children: fj.features.filter(function (f) { return f.area === a.slug; }).map(function (f) { return { name: f.name, slug: f.slug, kind: "feature", value: Math.max(20, f.airtime_seconds), f: f, area: a.slug }; }) };
    }) };
    var W = 820, R = W / 2;
    var hierarchy = d3.hierarchy(root).sum(function (d) { return d.value || 0; }).sort(function (a, b) { return b.value - a.value; });
    var rootNode = d3.partition().size([2 * Math.PI, hierarchy.height + 1])(hierarchy);
    rootNode.each(function (d) { d.current = d; });
    var radius = R / 3.2;
    var arc = d3.arc().startAngle(function (d) { return d.x0; }).endAngle(function (d) { return d.x1; }).padAngle(function (d) { return Math.min((d.x1 - d.x0) / 2, 0.004); }).padRadius(radius * 1.5).innerRadius(function (d) { return d.y0 * radius; }).outerRadius(function (d) { return Math.max(d.y0 * radius, d.y1 * radius - 1); });
    var svg = d3.select(el).append("svg").attr("viewBox", [-R, -R, W, W]).attr("role", "img").attr("aria-label", "Zoomable map of the wave: inner ring areas, outer ring features, sized by airtime");
    var g = svg.append("g");
    var nodes = rootNode.descendants().slice(1);
    var path = g.append("g").selectAll("path").data(nodes).join("path")
      .attr("fill", function (d) { var a = d.depth === 1 ? d.data.slug : d.data.area; return "var(--area-" + a + ")"; })
      .attr("fill-opacity", function (d) { return arcVisible(d.current) ? (d.depth === 1 ? 0.95 : 0.7) : 0; })
      .attr("pointer-events", function (d) { return arcVisible(d.current) ? "auto" : "none"; })
      .attr("class", function (d) { return d.data.kind === "feature" ? "status-" + d.data.f.status : "area"; })
      .attr("tabindex", 0).attr("role", "button")
      .attr("aria-label", function (d) { return d.data.kind === "feature" ? d.data.name + ", " + fmtMin(d.data.f.airtime_seconds) + ", " + STATUS[d.data.f.status] : d.data.name + ", " + d.children.length + " features"; })
      .attr("d", function (d) { return arc(d.current); });
    path.append("title").text(function (d) { return d.data.kind === "feature" ? d.data.name + " · " + fmtMin(d.data.f.airtime_seconds) + " · " + STATUS[d.data.f.status] : d.data.name + " · " + fmtMin(d.value) + " · " + d.children.length + " features"; });
    path.on("click", function (ev, p) { if (p.data.kind === "feature") { showFeature(p.data.f); } else { zoom(p); showArea(p); } location.hash = (p.data.kind === "feature" ? "feature/" : "area/") + p.data.slug; });
    path.on("keydown", function (ev, p) { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); this.dispatchEvent(new MouseEvent("click")); } if (ev.key === "ArrowRight" || ev.key === "ArrowLeft") { ev.preventDefault(); var sib = p.parent.children, i = sib.indexOf(p), n = sib[(i + (ev.key === "ArrowRight" ? 1 : sib.length - 1)) % sib.length]; focusNode(n); } if (ev.key === "Escape") { zoom(rootNode); showEmpty(); location.hash = ""; } });
    var label = g.append("g").attr("pointer-events", "none").attr("text-anchor", "middle").selectAll("text").data(nodes).join("text")
      .attr("dy", "0.35em").attr("fill-opacity", function (d) { return +labelVisible(d.current); }).attr("transform", function (d) { return labelTransform(d.current); })
      .text(function (d) { return d.data.name.length > 22 ? d.data.name.slice(0, 21) + "…" : d.data.name; });
    var center = g.append("g").attr("class", "center").on("click", function () { zoom(rootNode); showEmpty(); location.hash = ""; });
    center.append("circle").attr("r", radius).attr("fill", "var(--surface)").attr("stroke", "var(--border)");
    var centerTitle = center.append("text").attr("y", -6).text(fj.name);
    var centerSub = center.append("text").attr("y", 14).style("font-size", "11px").style("font-weight", "400").text(fmtMin(at.total_video_seconds) + " · " + fj.counts.features + " features");
    var parent = rootNode;
    function zoom(p) {
      parent = p;
      centerTitle.text(p.depth ? p.data.name : fj.name);
      centerSub.text(p.depth ? fmtMin(p.value) + " · " + p.children.length + " features · click to zoom out" : fmtMin(at.total_video_seconds) + " · " + fj.counts.features + " features");
      rootNode.each(function (d) { d.target = { x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI, x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI, y0: Math.max(0, d.y0 - p.depth), y1: Math.max(0, d.y1 - p.depth) }; });
      var t = g.transition().duration(600);
      path.transition(t).tween("data", function (d) { var i = d3.interpolate(d.current, d.target); return function (tt) { d.current = i(tt); }; })
        .filter(function (d) { return +this.getAttribute("fill-opacity") || arcVisible(d.target); })
        .attr("fill-opacity", function (d) { return arcVisible(d.target) ? (d.depth === 1 ? 0.95 : 0.7) : 0; })
        .attr("pointer-events", function (d) { return arcVisible(d.target) ? "auto" : "none"; })
        .attrTween("d", function (d) { return function () { return arc(d.current); }; });
      label.filter(function (d) { return +this.getAttribute("fill-opacity") || labelVisible(d.target); }).transition(t).attr("fill-opacity", function (d) { return +labelVisible(d.target); }).attrTween("transform", function (d) { return function () { return labelTransform(d.current); }; });
      updateCrumbs();
    }
    function arcVisible(d) { return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0; }
    function labelVisible(d) { return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.045; }
    function labelTransform(d) { var x = ((d.x0 + d.x1) / 2) * 180 / Math.PI, y = ((d.y0 + d.y1) / 2) * radius; return "rotate(" + (x - 90) + ") translate(" + y + ",0) rotate(" + (x < 180 ? 0 : 180) + ")"; }
    function focusNode(n) { path.filter(function (d) { return d === n; }).node().focus(); }

    // panel
    function openPanel() { panel.classList.add("open"); }
    function showEmpty() { panel.innerHTML = '<p class="empty">Click an area to zoom in, a feature to see what they said about it. Arrow keys move between siblings, Enter zooms, Escape zooms out.</p>'; panel.classList.remove("open"); }
    function showArea(p) {
      var a = at.areas.find(function (x) { return x.slug === p.data.slug; }) || {};
      var fs = p.children.map(function (c) { return c.data.f; });
      panel.innerHTML = '<button class="close" type="button" aria-label="Close">×</button><h2><i class="area-dot" style="--area-color:var(--area-' + p.data.slug + ')"></i>' + esc(p.data.name) + '</h2>' +
        '<p class="meta">' + fs.length + ' features · ' + fmtMin(a.video_seconds || 0) + ' of video in ' + (a.videos || 0) + ' video' + (a.videos === 1 ? "" : "s") + ' · <a href="' + base + 'areas/' + p.data.slug + '/">area page</a></p>' +
        '<ul>' + fs.map(function (f) { return '<li><a href="#feature/' + f.slug + '" data-slug="' + f.slug + '">' + esc(f.name) + '</a> <span class="badge status-' + f.status + '">' + STATUS[f.status] + '</span> <span class="meta">' + fmtMin(f.airtime_seconds) + '</span></li>'; }).join("") + '</ul>';
      openPanel(); wirePanel();
    }
    function showFeature(f) {
      var rp = f.release_plan || {};
      panel.innerHTML = '<button class="close" type="button" aria-label="Close">×</button><h2>' + esc(f.name) + '</h2>' +
        '<p class="meta"><i class="area-dot" style="--area-color:var(--area-' + f.area + ')"></i>' + esc(areaName[f.area]) + ' · <span class="badge status-' + f.status + '">' + STATUS[f.status] + '</span> · ' + fmtMin(f.airtime_seconds) + ' · dev relevance ' + f.dev_relevance + '</p>' +
        '<p>' + esc(f.summary) + '</p>' +
        (f.status_evidence && f.status_evidence.quote ? '<p class="meta">Status evidence: <a class="chip t" target="_blank" rel="noopener" href="' + yt(f.status_evidence.video_id, f.status_evidence.t || 0) + '">' + fmtT(f.status_evidence.t || 0) + '</a> "' + esc(f.status_evidence.quote) + '"</p>' : '<p class="meta">The videos do not state preview or GA for this one.</p>') +
        '<h3>Quotes</h3>' + (f.quotes.length ? f.quotes.slice(0, 5).map(function (q) { return '<div class="quote"><a class="chip t" target="_blank" rel="noopener" href="' + yt(q.video_id, q.t) + '">' + fmtT(q.t) + '</a> ' + esc(q.text) + '<span class="why">' + esc(q.why_it_matters) + '</span></div>'; }).join("") : '<p class="meta">No validated quote inside this feature\'s range.</p>') +
        '<h3>Videos</h3><ul>' + f.videos.map(function (v) { return '<li><a href="' + base + 'videos/' + v.id + '/">' + esc(v.title) + '</a> <a class="chip t" target="_blank" rel="noopener" href="' + yt(v.id, v.t_start) + '">' + fmtT(v.t_start) + '</a> to ' + fmtT(v.t_end) + (v.demo ? ' · demo at <a class="chip t" target="_blank" rel="noopener" href="' + yt(v.id, v.demo.t_start) + '">' + fmtT(v.demo.t_start) + '</a>' : '') + '</li>'; }).join("") + '</ul>' +
        '<h3>Documented features</h3><p class="meta">' + (rp.matched ? '<a href="' + esc(rp.url) + '" target="_blank" rel="noopener">' + esc(rp.title) + '</a> <span class="badge conf-' + rp.confidence + '">' + rp.confidence + ' match</span>' + (rp.doc_status ? ' · docs say ' + STATUS[rp.doc_status] : '') : 'No documented item matched' + (rp.confidence === "low" && rp.title ? ' (nearest, low confidence: ' + esc(rp.title) + ')' : '') + '.') + '</p>' +
        '<p class="meta">tags: ' + f.tags.map(esc).join(", ") + '</p>' +
        '<p><a href="' + base + 'features/' + f.slug + '/">Feature page</a> · <button class="btn secondary share" type="button" data-slug="' + f.slug + '">Copy link</button></p>';
      openPanel(); wirePanel();
    }
    function wirePanel() {
      var c = panel.querySelector(".close"); if (c) c.addEventListener("click", function () { panel.classList.remove("open"); });
      panel.querySelectorAll("a[data-slug]").forEach(function (a) { a.addEventListener("click", function (ev) { ev.preventDefault(); var f = fj.features.find(function (x) { return x.slug === a.getAttribute("data-slug"); }); showFeature(f); location.hash = "feature/" + f.slug; }); });
      var sh = panel.querySelector(".share"); if (sh) sh.addEventListener("click", function () { var u = location.origin + location.pathname + "#feature/" + sh.getAttribute("data-slug"); (navigator.clipboard ? navigator.clipboard.writeText(u) : Promise.reject()).then(function () { sh.textContent = "Copied"; }, function () { prompt("Copy this link", u); }); });
    }
    // breadcrumb
    var crumbs = document.getElementById("crumbs");
    function updateCrumbs() { if (!crumbs) return; var items = ['<button type="button" data-zoom="root">' + esc(fj.name) + '</button>']; if (parent.depth) items.push('<span>›</span><span>' + esc(parent.data.name) + '</span>'); crumbs.innerHTML = items.join(" "); var b = crumbs.querySelector("button"); if (b) b.addEventListener("click", function () { zoom(rootNode); showEmpty(); location.hash = ""; }); }
    // filters: dim non-matching
    var form = document.getElementById("map-filters");
    function applyFilters() {
      if (!form) return;
      var st = Array.prototype.slice.call(form.querySelectorAll("input[name=status]:checked")).map(function (i) { return i.value; });
      var dev = form.querySelector("select[name=dev]").value; var q = form.querySelector("input[name=q]").value.toLowerCase().trim();
      var ok = function (f) { return st.indexOf(f.status) >= 0 && (!dev || f.dev_relevance === dev) && (!q || (f.name + " " + f.summary + " " + f.tags.join(" ")).toLowerCase().indexOf(q) >= 0); };
      var visibleAreas = {};
      path.classed("dim", function (d) { if (d.data.kind === "feature") { var o = ok(d.data.f); if (o) visibleAreas[d.data.area] = true; return !o; } return false; });
      path.filter(function (d) { return d.data.kind === "area"; }).classed("dim", function (d) { return !visibleAreas[d.data.slug]; });
      var n = fj.features.filter(ok).length; var cnt = document.getElementById("map-count"); if (cnt) cnt.textContent = n + " of " + fj.features.length + " features match";
    }
    if (form) { form.addEventListener("input", applyFilters); form.addEventListener("change", applyFilters); }
    // hash routing
    function fromHash() {
      var h = location.hash.replace(/^#/, ""); if (!h) { zoom(rootNode); showEmpty(); return; }
      var m = h.split("/"); if (m[0] === "feature") { var f = fj.features.find(function (x) { return x.slug === m[1]; }); if (f) { var an = rootNode.children.find(function (c) { return c.data.slug === f.area; }); if (an && parent !== an) zoom(an); showFeature(f); } }
      else if (m[0] === "area") { var a = rootNode.children.find(function (c) { return c.data.slug === m[1]; }); if (a) { zoom(a); showArea(a); } }
    }
    window.addEventListener("hashchange", fromHash);
    updateCrumbs(); showEmpty(); fromHash();
    document.addEventListener("keydown", function (ev) { if (ev.key === "Escape" && !ev.target.closest("input,select")) { zoom(rootNode); showEmpty(); location.hash = ""; } });
  }).catch(function (e) { el.innerHTML = '<p class="notice">Could not load the map data (' + esc(e.message) + ').</p>'; });
})();
