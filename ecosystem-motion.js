/**
 * Enlystnow Ecosystem motion — craft behaviours for the locked stack
 * Pair with: patterns/ecosystem-craft.css · tokens/ecosystem.tokens.css
 * Law: VISION.md · docs/INVENTION_MANDATE.md
 *
 * Features:
 *  - Scroll reveal (.rv → .rv.on)
 *  - Door-in entrance when intersecting
 *  - Respects data-intensity + prefers-reduced-motion
 *  - Does NOT spin Framework badge / static logos
 */
(function (global) {
  'use strict';

  var REDUCED =
    typeof matchMedia === 'function' &&
    matchMedia('(prefers-reduced-motion: reduce)').matches;

  function intensity() {
    var root = document.documentElement;
    var v = (root.getAttribute('data-intensity') || 'standard').toLowerCase();
    if (REDUCED || v === 'calm') return 'calm';
    if (v === 'cinematic') return 'cinematic';
    return 'standard';
  }

  function revealAllStatic() {
    document.querySelectorAll('.rv').forEach(function (el) {
      el.classList.add('on');
    });
  }

  function initScrollReveal() {
    if (intensity() === 'calm' || REDUCED) {
      revealAllStatic();
      return;
    }
    if (!('IntersectionObserver' in global)) {
      revealAllStatic();
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('on');
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );
    document.querySelectorAll('.rv').forEach(function (el) {
      io.observe(el);
    });
  }

  function freezeFrameworkBadge() {
    document.querySelectorAll('.framework-badge').forEach(function (el) {
      el.style.animation = 'none';
    });
  }

  function init() {
    freezeFrameworkBadge();
    initScrollReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  global.EnlystEcosystemMotion = {
    init: init,
    intensity: intensity,
    revealAllStatic: revealAllStatic
  };
})(typeof window !== 'undefined' ? window : this);
