import 'slick-carousel';

export default {
  init() {
    $('.apartment-tile__slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    })
    // $('.gallery-img').slick({
    // // $('.apartment-details-map__gallery').slick({
    // //   dots: true,
    //   // infinite: true,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    // })
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
