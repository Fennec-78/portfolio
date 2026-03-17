/* ==============================================
   nav.js — Navigation : sticky, active, hamburger
   ============================================== */

(function () {
  'use strict';

  const navbar    = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  const allLinks  = document.querySelectorAll('.nav-link');

  /* ---- Classe "scrolled" sur la navbar ---- */
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    updateActiveLink();
  }

  /* ---- Lien actif selon la section visible ---- */
  function updateActiveLink() {
    const sections = document.querySelectorAll('main section[id]');
    let current = '';

    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top <= 120) current = section.id;
    });

    allLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === current);
    });
  }

  /* ---- Menu hamburger (mobile) ---- */
  navToggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  /* Fermer le menu au clic sur un lien */
  allLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---- Écouter le scroll ---- */
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initialisation

})();
