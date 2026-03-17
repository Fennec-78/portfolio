/* ==============================================
   carousel.js — Carousel d'images pour project cards
   ============================================== */

(function () {
  'use strict';

  document.querySelectorAll('[data-carousel]').forEach(function (carousel) {
    var track         = carousel.querySelector('.carousel__track');
    var slides        = carousel.querySelectorAll('.carousel__slide');
    var btnPrev       = carousel.querySelector('.carousel__btn--prev');
    var btnNext       = carousel.querySelector('.carousel__btn--next');
    var dotsContainer = carousel.querySelector('.carousel__dots');
    var total         = slides.length;

    if (!track || total === 0) return;

    /* Un seul slide : cacher les contrôles */
    if (total <= 1) {
      if (btnPrev) btnPrev.style.display = 'none';
      if (btnNext) btnNext.style.display = 'none';
      if (dotsContainer) dotsContainer.style.display = 'none';
      return;
    }

    /* Générer les dots */
    var dots = [];
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      for (var i = 0; i < total; i++) {
        var dot = document.createElement('button');
        dot.className = 'carousel__dot';
        dot.setAttribute('aria-label', 'Image ' + (i + 1));
        dot.setAttribute('type', 'button');
        dotsContainer.appendChild(dot);
        dots.push(dot);
      }
    }

    var current = 0;

    function goTo(index) {
      current = ((index % total) + total) % total;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === current);
      });
    }

    if (btnPrev) btnPrev.addEventListener('click', function () { goTo(current - 1); });
    if (btnNext) btnNext.addEventListener('click', function () { goTo(current + 1); });
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); });
    });

    var startX = 0;
    carousel.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
    }, { passive: true });
    carousel.addEventListener('touchend', function (e) {
      var diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
    });

    goTo(0);
  });

})();