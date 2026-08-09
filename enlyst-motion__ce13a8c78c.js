(() => {
  'use strict';
  const nav = document.getElementById('mainNav');
  if (nav) {
    const onScroll = () => {
      const y = window.scrollY > 48;
      nav.classList.toggle('scrolled', y);
      document.body.classList.toggle('nav-dark', y);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('on'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('on');
        io.unobserve(e.target);
      }
    }),
    { threshold: 0.06, rootMargin: '0px 0px -32px 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  document.querySelectorAll('[data-count]').forEach((el) => {
    const target = parseFloat(el.dataset.count);
    if (!target) return;
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        let cur = 0;
        const step = target / 48;
        const t = setInterval(() => {
          cur = Math.min(cur + step, target);
          el.textContent = prefix + (Number.isInteger(target) ? Math.round(cur) : cur.toFixed(1)) + suffix;
          if (cur >= target) clearInterval(t);
        }, 22);
        obs.unobserve(el);
      });
    }, { threshold: 0.4 });
    obs.observe(el);
  });

  document.querySelectorAll('.ticker-track').forEach((track) => {
    if (track.dataset.duplicated) return;
    track.innerHTML += track.innerHTML;
    track.dataset.duplicated = '1';
  });
})();
