/* ============================================
   Autotrasporti Mingardi & Parzani — interazioni
   Vanilla JS, nessuna dipendenza
============================================ */
(function () {
  'use strict';

  /* ---------- Loader + avvio animazioni hero ---------- */
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (loader) loader.classList.add('is-done');
      document.body.classList.add('is-loaded');
    }, 1400);
  });
  // Fallback se 'load' tardasse
  setTimeout(() => {
    if (loader) loader.classList.add('is-done');
    document.body.classList.add('is-loaded');
  }, 2600);

  /* ---------- Navbar: sfondo allo scroll ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 80) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Menu mobile ---------- */
  const burger = document.getElementById('burger');
  if (burger) {
    burger.addEventListener('click', () => nav.classList.toggle('is-open'));
    nav.querySelectorAll('.nav__links a').forEach((a) =>
      a.addEventListener('click', () => nav.classList.remove('is-open'))
    );
  }

  /* ---------- Reveal allo scroll + contatori ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
      const num = entry.target.querySelector && entry.target.querySelector('[data-count]');
      if (num) animateCount(num);
    });
  }, { threshold: 0.18 });

  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  /* ---------- Contatore numerico ---------- */
  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    // Gli anni (es. 1963) non vengono "contati": restano fissi
    if (target >= 1900) { el.textContent = target; return; }
    const dur = 1500;
    const start = performance.now();
    (function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    })(start);
  }
})();
