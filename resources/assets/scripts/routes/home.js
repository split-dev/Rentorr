
export default {
  init() {
    let windowOffset = window.pageYOffset;
    let viewPort =  window.innerHeight;
    let x = $('.question__title').offset().top;
    $(window).on('scroll', function () {
      windowOffset = window.pageYOffset;
      if (windowOffset >= (x + viewPort - 150)) {
        $('.question__title').css('display', 'block');
      }
    });
      $('.apartment-details-map__gallery').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 1,
            },
          },
        ],
      });
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
