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
    $('.apartment-details-map__gallery2').slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipe: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
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
    function stickyElement() {
      var header = document.querySelector('.header');
      var headerHeight = getComputedStyle(header).height.split('px')[0];
      var navbar = document.querySelector('.navigation');
      var scrollValue = window.scrollY;
      if (scrollValue > headerHeight){
        navbar.classList.add('is-fixed');
      } else if (scrollValue < headerHeight){
        navbar.classList.remove('is-fixed');
      }
    }
    window.addEventListener('scroll', stickyElement);
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
