//swiper
var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView: 4,
  spaceBetween: 18,
  autoplay: {
    delay: 3000,
  },
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
  autoplay: {
    delay: 3000,
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
