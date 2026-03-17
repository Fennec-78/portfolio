/* ==============================================
   animations.js — Reveal au scroll + compteurs
   ============================================== */

(function () {
  'use strict';

  /* ---- 1. Reveal au scroll ---- */
  const revealTargets = document.querySelectorAll(
    '.skill-card, .project-card, .about-grid, .contact-grid, .section__title, .info-row'
  );

  revealTargets.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach(el => revealObserver.observe(el));


  /* ---- 2. Compteurs animés ---- */
  const counters = document.querySelectorAll('[data-count]');

  function animateCounter(el) {
    const target   = parseInt(el.dataset.count, 10);
    const duration = 1200;
    const start    = performance.now();

    function step(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(el => counterObserver.observe(el));
  const hero = document.getElementById('hero');
  if (hero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        hero.style.transform = `translateY(${y * 0.25}px)`;
        hero.style.opacity   = 1 - (y / window.innerHeight) * 0.6;
      }
    }, { passive: true });
  }

})();
