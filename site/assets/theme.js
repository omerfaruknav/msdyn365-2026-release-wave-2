(function () {
  var root = document.documentElement;
  try { var saved = localStorage.getItem("theme"); if (saved) root.setAttribute("data-theme", saved); } catch (e) {}
  function current() { var t = root.getAttribute("data-theme"); if (t) return t; return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; }
  function label(btn) { btn.textContent = current() === "dark" ? "Light" : "Dark"; btn.setAttribute("aria-label", "Switch to " + btn.textContent.toLowerCase() + " theme"); }
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".theme-toggle"); if (!btn) return; label(btn);
    btn.addEventListener("click", function () { var next = current() === "dark" ? "light" : "dark"; root.setAttribute("data-theme", next); try { localStorage.setItem("theme", next); } catch (e) {} label(btn); document.dispatchEvent(new CustomEvent("themechange")); });
  });
  // sortable tables
  document.addEventListener("click", function (ev) {
    var th = ev.target.closest("table.sortable th"); if (!th) return;
    var table = th.closest("table"), idx = Array.prototype.indexOf.call(th.parentNode.children, th);
    var dir = th.getAttribute("aria-sort") === "ascending" ? "descending" : "ascending";
    th.parentNode.querySelectorAll("th").forEach(function (h) { h.removeAttribute("aria-sort"); }); th.setAttribute("aria-sort", dir);
    var rows = Array.prototype.slice.call(table.tBodies[0].rows);
    var num = th.classList.contains("num");
    rows.sort(function (a, b) { var x = a.cells[idx].getAttribute("data-v") || a.cells[idx].textContent.trim(), y = b.cells[idx].getAttribute("data-v") || b.cells[idx].textContent.trim(); if (num) { x = parseFloat(x) || 0; y = parseFloat(y) || 0; return dir === "ascending" ? x - y : y - x; } return dir === "ascending" ? x.localeCompare(y) : y.localeCompare(x); });
    rows.forEach(function (r) { table.tBodies[0].appendChild(r); });
  });
  // generic client-side filter for tables: inputs with data-filter="colname" inside .filters, rows with data-* attributes
  document.addEventListener("input", function (ev) { var f = ev.target.closest(".filters"); if (f) applyFilters(f); });
  document.addEventListener("change", function (ev) { var f = ev.target.closest(".filters"); if (f) applyFilters(f); });
  function applyFilters(f) {
    var target = document.querySelector(f.getAttribute("data-target")); if (!target) return;
    var ctrls = f.querySelectorAll("[data-filter]"); var rows = target.querySelectorAll("[data-row]"); var shown = 0;
    rows.forEach(function (r) {
      var ok = true;
      ctrls.forEach(function (c) { var key = c.getAttribute("data-filter"), v = (c.value || "").toLowerCase(); if (!v) return; var rv = (r.getAttribute("data-" + key) || "").toLowerCase(); if (key === "q") { if (rv.indexOf(v) < 0) ok = false; } else if (rv !== v) ok = false; });
      r.hidden = !ok; if (ok) shown++;
    });
    var count = f.querySelector(".count"); if (count) count.textContent = shown + " shown";
  }
})();
