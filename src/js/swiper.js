const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  // mousewheel: true,
  keyboard: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      // setWrapperSize: true
    }
  }
});
