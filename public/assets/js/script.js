// Pricing table - mobile only slider
var init = false;
var pricingCardSwiper;
function swiperCard() {
  if (window.innerWidth <= 991) {
    if (!init) {
      init = true;
      pricingCardSwiper = new Swiper(".cardSlider", {
        slidesPerView: "1",
        spaceBetween: 0,
        grabCursor: true,
        keyboard: true,
        autoHeight: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          }
        },
      });
    }
  } else if (init) {
    pricingCardSwiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);