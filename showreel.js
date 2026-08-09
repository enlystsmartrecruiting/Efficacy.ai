/**
 * Enlyst Showreel — division, intensity, Enlystnow brand motion.
 * Motion lives on the mark + wordmark — not background particles.
 * FOR SHOW ONLY.
 */
(function () {
  const html = document.documentElement;
  const DIVISIONS = ['enlyst', 'enlysum', 'enlybiz', 'enlysoft'];
  const DEFAULT_INTENSITY = 'cinematic';

  function prefersReduced() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function setIntensity(tier) {
    // Reduced-motion users stay calm; everyone else keeps the requested tier.
    if (prefersReduced()) tier = 'calm';
    if (!['calm', 'standard', 'cinematic'].includes(tier)) tier = DEFAULT_INTENSITY;
    html.setAttribute('data-intensity', tier);
    document.querySelectorAll('[data-intensity-btn]').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.intensityBtn === tier));
    });
    syncBrandMotion();
    window.dispatchEvent(new CustomEvent('showreel:intensity', { detail: { tier } }));
  }

  function setDivision(key) {
    if (!DIVISIONS.includes(key)) key = 'enlyst';
    html.setAttribute('data-division', key);
    const sel = document.getElementById('sr-division');
    if (sel) sel.value = key;
    recolorMark();
    window.dispatchEvent(new CustomEvent('showreel:division', { detail: { key } }));
  }

  function recolorMark() {
    const accent = getComputedStyle(html).getPropertyValue('--accent').trim();
    document.querySelectorAll('.mark-stripe').forEach((el) => {
      el.setAttribute('fill', accent);
    });
  }

  /**
   * Clear any leftover inline animation:none from older builds.
   * CSS owns spin/float/glow; JS only forces off for calm / reduced-motion.
   */
  function syncBrandMotion() {
    const rig = document.getElementById('logo-rig');
    const word = document.getElementById('hero-wordmark');
    const em = word ? word.querySelector('em') : null;
    const tier = html.getAttribute('data-intensity') || DEFAULT_INTENSITY;
    const off = prefersReduced() || tier === 'calm';

    [rig, word, em].forEach((el) => {
      if (!el) return;
      if (off) {
        el.style.animation = 'none';
      } else {
        el.style.removeProperty('animation');
      }
    });
  }

  /**
   * Pointer-tilt on the Enlystnow brand stage (mark + wordmark).
   * Borrowed craft: /html action-door easing + Atmosphere Lab 3D stage.
   */
  function initBrandTilt() {
    const stage = document.getElementById('brand-stage');
    const tilt = document.getElementById('brand-tilt');
    if (!stage || !tilt) return;

    let mx = 0.5;
    let my = 0.5;
    let tx = 0.5;
    let ty = 0.5;
    let raf = 0;

    function maxTilt() {
      const tier = html.getAttribute('data-intensity') || DEFAULT_INTENSITY;
      if (prefersReduced() || tier === 'calm') return 0;
      if (tier === 'cinematic') return 16;
      return 10;
    }

    function frame() {
      tx += (mx - tx) * 0.1;
      ty += (my - ty) * 0.1;
      const max = maxTilt();
      if (max === 0) {
        tilt.style.transform = 'rotateX(0deg) rotateY(0deg)';
      } else {
        const ry = (tx - 0.5) * max * 2;
        const rx = (0.5 - ty) * max;
        tilt.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      }
      raf = requestAnimationFrame(frame);
    }

    stage.addEventListener('pointermove', (e) => {
      const r = stage.getBoundingClientRect();
      mx = (e.clientX - r.left) / Math.max(r.width, 1);
      my = (e.clientY - r.top) / Math.max(r.height, 1);
    });

    stage.addEventListener('pointerleave', () => {
      mx = 0.5;
      my = 0.5;
    });

    window.addEventListener('showreel:intensity', () => {
      if (maxTilt() === 0) {
        mx = 0.5;
        my = 0.5;
      }
    });

    raf = requestAnimationFrame(frame);
    window.addEventListener('beforeunload', () => cancelAnimationFrame(raf));
  }

  /**
   * Education Learning Path — cycle five entities on the curriculum spine.
   * Pause on hover/focus; honour reduced-motion / calm intensity.
   */
  function initEducationPath() {
    const path = document.getElementById('learn-path');
    const fill = document.getElementById('learn-spine-fill');
    const board = document.getElementById('learn-panel');
    if (!path || !board) return;

    const nodes = Array.from(path.querySelectorAll('.learn-node'));
    const panels = Array.from(board.querySelectorAll('.learn-panel'));
    const order = ['education', 'academy', 'ai', 'forge', 'route'];
    let idx = 0;
    let timer = 0;
    let paused = false;

    function show(key, fromUser) {
      const i = order.indexOf(key);
      if (i < 0) return;
      idx = i;

      nodes.forEach((n) => {
        const on = n.dataset.learn === key;
        n.classList.toggle('is-active', on);
        n.setAttribute('aria-selected', String(on));
      });

      panels.forEach((p) => {
        const on = p.dataset.panel === key;
        p.hidden = !on;
        p.classList.toggle('is-active', on);
        if (on && fromUser) {
          p.style.animation = 'none';
          // reflow for restart
          void p.offsetWidth;
          p.style.animation = '';
        }
      });

      if (fill) {
        const step = 100 / order.length;
        fill.style.width = step + '%';
        fill.style.transform = 'translateX(' + idx * 100 + '%)';
      }
    }

    function tick() {
      if (paused || prefersReduced()) return;
      const tier = html.getAttribute('data-intensity') || DEFAULT_INTENSITY;
      if (tier === 'calm') return;
      const next = (idx + 1) % order.length;
      show(order[next], false);
    }

    function start() {
      clearInterval(timer);
      if (prefersReduced()) return;
      const tier = html.getAttribute('data-intensity') || DEFAULT_INTENSITY;
      if (tier === 'calm') return;
      timer = window.setInterval(tick, 4200);
    }

    nodes.forEach((n) => {
      n.addEventListener('click', () => {
        show(n.dataset.learn, true);
        start();
      });
      n.addEventListener('focus', () => {
        paused = true;
        show(n.dataset.learn, true);
      });
      n.addEventListener('blur', () => {
        paused = false;
      });
    });

    path.addEventListener('pointerenter', () => {
      paused = true;
    });
    path.addEventListener('pointerleave', () => {
      paused = false;
    });

    document.querySelectorAll('[data-learn-jump]').forEach((a) => {
      a.addEventListener('click', () => {
        const key = a.getAttribute('data-learn-jump');
        if (key) {
          // Slight delay so hash scroll lands, then activate
          window.setTimeout(() => show(key, true), 50);
        }
      });
    });

    window.addEventListener('showreel:intensity', () => {
      start();
    });

    show('education', false);
    start();
  }

  /**
   * Talent Forge deepen — dual GCP/Azure track toggle inside #education.
   */
  function initTalentForgeDeep() {
    const root = document.querySelector('.learn-panel.tf-deep');
    if (!root) return;
    const btns = root.querySelectorAll('.tf-track-btn');
    const panels = root.querySelectorAll('.tf-rail-panel');
    const tracks = root.querySelector('.tf-tracks');
    if (!btns.length) return;

    function show(track) {
      btns.forEach((b) => {
        const on = b.dataset.track === track;
        b.classList.toggle('is-on', on);
        b.setAttribute('aria-selected', String(on));
      });
      panels.forEach((p) => {
        const on = p.dataset.rail === track;
        p.hidden = !on;
        p.classList.toggle('is-on', on);
      });
    }

    btns.forEach((b) => b.addEventListener('click', (e) => {
      e.stopPropagation();
      show(b.dataset.track);
    }));

    if (!prefersReduced()) {
      let i = 0;
      const order = ['gcp', 'azure'];
      window.setInterval(() => {
        const forgeOn = root.classList.contains('is-active') && !root.hidden;
        if (!forgeOn) return;
        if (tracks && tracks.matches(':hover')) return;
        i = (i + 1) % 2;
        show(order[i]);
      }, 7000);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-intensity-btn]').forEach((btn) => {
      btn.addEventListener('click', () => setIntensity(btn.dataset.intensityBtn));
    });
    const sel = document.getElementById('sr-division');
    if (sel) sel.addEventListener('change', (e) => setDivision(e.target.value));

    setDivision('enlyst');
    // Default cinematic so Enlystnow motion is unmistakable; calm only via toggle or OS reduce.
    setIntensity(prefersReduced() ? 'calm' : DEFAULT_INTENSITY);
    recolorMark();
    syncBrandMotion();
    initBrandTilt();
    initEducationPath();
    initTalentForgeDeep();

    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      if (e.matches) setIntensity('calm');
      else setIntensity(DEFAULT_INTENSITY);
    });
  });
})();
