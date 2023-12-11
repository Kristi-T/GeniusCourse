const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: ".pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".carousel-button.next",
    prevEl: ".carousel-button.prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
