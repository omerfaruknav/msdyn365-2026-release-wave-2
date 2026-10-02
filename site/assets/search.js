/* Ask the event: client-side full text search over data/index/search.json with MiniSearch.
   Optional: bring your own Anthropic key (stored in localStorage only) to get an answer with citations. */
(function () {
  var base = document.body.getAttribute("data-base") || "/";
  var input = document.getElementById("q"), out = document.getElementById("results"), status = document.getElementById("search-status");
  if (!input || typeof MiniSearch === "undefined") return;
  var fmtT = function (s) { s = Math.floor(s); var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s % 60; return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(x).padStart(2, "0"); };
  var yt = function (id, t) { return "https://www.youtube.com/watch?v=" + id + "&t=" + Math.floor(t) + "s"; };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var KIND = { p: "transcript", s: "summary", c: "chapter", q: "quote", f: "feature" };
  var data = null, ms = null, last = [];
  status.textContent = "Loading index…";
  fetch(base + "data/index/search.json").then(function (r) { return r.json(); }).then(function (d) {
    data = d;
    ms = new MiniSearch({ fields: ["text"], storeFields: ["k", "v", "t", "text", "slug"], searchOptions: { boost: { text: 1 }, fuzzy: 0.15, prefix: true, combineWith: "AND" } });
    ms.addAll(d.docs);
    status.textContent = d.docs.length + " passages from " + Object.keys(d.videos).length + " videos" + (d.mode === "public" ? " (public build: summaries, chapters, quotes and features; full transcript passages are only in the private build)" : "") + ". Type a question or a few words.";
    var q0 = new URLSearchParams(location.search).get("q"); if (q0) { input.value = q0; run(); }
  }).catch(function (e) { status.textContent = "Could not load the search index: " + e.message; });
  function highlight(text, terms) { var t = esc(text); terms.forEach(function (w) { if (w.length < 3) return; t = t.replace(new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi"), "<mark>$1</mark>"); }); return t; }
  function run() {
    var q = input.value.trim(); if (!ms) return; if (!q) { out.innerHTML = ""; return; }
    var res = ms.search(q); if (res.length < 5) res = res.concat(ms.search(q, { combineWith: "OR" }).filter(function (r) { return !res.some(function (x) { return x.id === r.id; }); }));
    last = res.slice(0, 25);
    var terms = q.toLowerCase().split(/\s+/);
    out.innerHTML = last.length ? last.map(function (r) { var v = data.videos[r.v] || { title: r.v }; return '<div class="result"><div>' + highlight(r.text, terms) + '</div><div class="src"><a class="chip t" target="_blank" rel="noopener" href="' + yt(r.v, r.t) + '">' + fmtT(r.t) + '</a> <a href="' + base + 'videos/' + r.v + '/">' + esc(v.title) + '</a> · ' + (KIND[r.k] || r.k) + (r.slug ? ' · <a href="' + base + 'features/' + r.slug + '/">feature page</a>' : '') + '</div></div>'; }).join("") : '<p class="notice">Nothing found. Try fewer or different words; the captions are auto-generated, so product names are sometimes mangled (co-pilot, EL query, Shopify becomes shop a fight).</p>';
    history.replaceState(null, "", "?q=" + encodeURIComponent(q));
  }
  var timer; input.addEventListener("input", function () { clearTimeout(timer); timer = setTimeout(run, 180); });
  input.form && input.form.addEventListener("submit", function (ev) { ev.preventDefault(); run(); });
  // BYO key
  var keyBox = document.getElementById("api-key"), askBtn = document.getElementById("ask-llm"), answer = document.getElementById("answer");
  if (keyBox) { try { keyBox.value = localStorage.getItem("anthropic_key") || ""; } catch (e) {} keyBox.addEventListener("change", function () { try { localStorage.setItem("anthropic_key", keyBox.value.trim()); } catch (e) {} }); }
  if (askBtn) askBtn.addEventListener("click", function () {
    var key = (keyBox.value || "").trim(), q = input.value.trim();
    if (!key) { answer.textContent = "Paste an Anthropic API key first. It stays in your browser (localStorage) and is sent only to api.anthropic.com."; return; }
    if (!q) { answer.textContent = "Type a question first."; return; }
    if (!last.length) run();
    var ctx = last.slice(0, 12).map(function (r, i) { var v = data.videos[r.v] || { title: r.v }; return "[" + (i + 1) + "] (" + v.title + " at " + fmtT(r.t) + ", " + yt(r.v, r.t) + ") " + r.text; }).join("\n\n");
    answer.textContent = "Asking…";
    fetch("https://api.anthropic.com/v1/messages", { method: "POST", headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true" },
      body: JSON.stringify({ model: "claude-sonnet-5-5", max_tokens: 700, system: "You answer questions about the Business Central launch event using only the numbered transcript passages provided. Cite passages as [n]. If the passages do not answer the question, say so. Be brief. No em-dashes.", messages: [{ role: "user", content: "Question: " + q + "\n\nPassages:\n" + ctx }] }) })
      .then(function (r) { return r.json(); }).then(function (d) {
        if (d.error) { answer.textContent = "API error: " + (d.error.message || JSON.stringify(d.error)); return; }
        var text = (d.content || []).map(function (c) { return c.text || ""; }).join("\n");
        answer.innerHTML = esc(text).replace(/\[(\d+)\]/g, function (m, n) { var r = last[n - 1]; return r ? '<a class="chip t" target="_blank" rel="noopener" href="' + yt(r.v, r.t) + '">' + n + ' · ' + fmtT(r.t) + '</a>' : m; });
      }).catch(function (e) { answer.textContent = "Request failed: " + e.message; });
  });
})();
