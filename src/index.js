//swiper
var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView: 4,
  spaceBetween: 18,

  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2.5,
    },
    1159: {
      slidesPerView: 4,
    },
    1: {
      slidesPerView: 1,
    },
  },
});

var swiper = new Swiper('.reviewSwiper', {
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView: 3,
  spaceBetween: 28,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1159: {
      slidesPerView: 3,
    },
    1: {
      slidesPerView: 1,
    },
  },
});

// Hamburger

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
    ? 'disableBodyScroll'
    : 'enableBodyScroll';
  bodyScrollLock[scrollLockMethod](document.body); 
  };  

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

      window.matchMedia('(max-width: 767px)').addEventListener('change', e => {
    if (!e.matches) return;

      openMenuBtn.style.display = 'block';
   
  });
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      openMenuBtn.style.display = 'none';
    bodyScrollLock.enableBodyScroll(document.body);
  });

})();