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
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipe: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.5,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.5,
          },
        },
        {
          breakpoint: 370,
          settings: {
            slidesToShow: 1.3,
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
      if (window.innerWidth > 991) {
        var header = document.querySelector('.apartment-details-header');
      }
      else  {
        // eslint-disable-next-line no-redeclare
        var header = document.querySelector('.apartment-details-header__slider');
      }
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

    let element = $('#aniimated-thumbnials').children('a');
    let count = 0;
    for (let i = 0; i <= element.length; i++) {
      if (i > 2) {
        $(element[i]).css('display', 'none');
        count = count + 1;
      }
    }
    let none = element.length - (count - 1);
    none = element.length - none;
    $(element[2]).attr('data-count', '+' + none);
    if (element.length <= 3) {
      let mass = element.length - 1;
      $(element[mass]).addClass('hide');
    }
    // Map filters
    $('.browsing__map-filter-btn').click(function (e) {
      e.preventDefault();
      $(this).toggleClass('browsing__map-filter-btn-active');
      $(this).parent('.browsing__map-filter').toggleClass('browsing__map-filter-active');
    });
    $(document).mouseup(function (e){
      if(jQuery('.browsing__map-filter').hasClass('browsing__map-filter-active')) {
        var div = $('#browsing__map-filter-show');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
          $('.browsing__map-filter').removeClass('browsing__map-filter-active');
          $('.browsing__map-filter-btn').removeClass('browsing__map-filter-btn-active');
        }
      }
    });
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
