/**
 * Enlystnow Economic Triad — motion design layer
 * Enterprise-dashboard rhythm (2–6s). Respects prefers-reduced-motion.
 */
(function () {
  "use strict";

  var band = document.getElementById("triad-viz");
  if (!band) return;

  var reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function formatPkr(n) {
    return n.toLocaleString("en-PK") + " PKR saved";
  }

  /* ── Graphic 1: savings counter 0 → 20,000 ── */
  function runSavingsCounter() {
    var el = document.getElementById("tv-savings");
    if (!el) return;
    if (reduce) {
      el.textContent = formatPkr(20000);
      return;
    }
    var steps = [0, 5000, 10000, 15000, 20000];
    var i = 0;
    function tick() {
      el.textContent = formatPkr(steps[i]);
      i = (i + 1) % steps.length;
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ── Graphic 1: Learn → Execute → Improve → Repeat ── */
  function runCycleWords() {
    var el = document.getElementById("tv-cycle-word");
    if (!el || reduce) return;
    var words = ["Learn", "Execute", "Improve", "Repeat"];
    var i = 0;
    function tick() {
      el.classList.remove("is-on");
      setTimeout(function () {
        el.textContent = words[i] + " · " + words[(i + 1) % 4] + " · " + words[(i + 2) % 4] + " · " + words[(i + 3) % 4];
        /* highlight current as first word alone for clarity */
        el.textContent = words[i];
        el.classList.add("is-on");
        i = (i + 1) % words.length;
      }, 280);
    }
    tick();
    setInterval(tick, 2800);
  }

  /* ── Graphic 2: Monitor → Verify → Approve ── */
  function runOversightWords() {
    var el = document.getElementById("tv-oversight-word");
    if (!el || reduce) return;
    var words = ["Monitor", "Verify", "Approve"];
    var i = 0;
    function tick() {
      el.classList.remove("is-on");
      setTimeout(function () {
        el.textContent = words[i];
        el.classList.add("is-on");
        i = (i + 1) % words.length;
      }, 260);
    }
    tick();
    setInterval(tick, 3200);
  }

  /* Start when band enters viewport once */
  function start() {
    runSavingsCounter();
    runCycleWords();
    runOversightWords();
  }

  if ("IntersectionObserver" in window) {
    var seen = false;
    var io = new IntersectionObserver(
      function (entries) {
        if (seen) return;
        for (var n = 0; n < entries.length; n++) {
          if (entries[n].isIntersecting) {
            seen = true;
            start();
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15 }
    );
    io.observe(band);
  } else {
    start();
  }
})();
