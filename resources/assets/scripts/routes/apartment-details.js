import 'slick-carousel';
import 'lightgallery/dist/js/lightgallery-all.min';

export default {
  init() {
    $('.apartment-tile__slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
    $('#aniimated-thumbnials').lightGallery({
      thumbnail:true,
      animateThumb: false,
      showThumbByDefault: true,
      width: '100%',
      thumbMargin: 20,
      mode: 'lg-fade',
      thumbContHeight: 120,
      thumbWidth: 120,
    });
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
