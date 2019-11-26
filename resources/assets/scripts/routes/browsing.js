import 'slick-carousel'


export default {
  init() {
    $('.apartment-tile__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
  })
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
