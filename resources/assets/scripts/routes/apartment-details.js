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
      mode: 'lg-fade',
      thumbContHeight: 200,
      thumbWidth: 200,
    });
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
