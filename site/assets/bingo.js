(function () {
  var card = document.getElementById("card"); if (!card) return;
  var terms = JSON.parse(card.getAttribute("data-terms") || "[]");
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function draw() {
    var pick = shuffle(terms.slice()).slice(0, 24); var html = "";
    for (var i = 0; i < 25; i++) { if (i === 12) html += '<div class="free">FREE<br>(they said "agent")</div>'; else html += "<div>" + pick[i < 12 ? i : i - 1] + "</div>"; }
    card.innerHTML = html;
  }
  draw();
  var b = document.getElementById("shuffle"); if (b) b.addEventListener("click", draw);
  var p = document.getElementById("print"); if (p) p.addEventListener("click", function () { window.print(); });
})();
