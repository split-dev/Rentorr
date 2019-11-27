import 'slick-carousel'


export default {
  init() {
    $('.apartment-tile__slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
  })

    $('.open-map').click(function (e) {
      e.preventDefault();
      $('.browsing__tile-position').toggleClass('tile-position-map');
    });

    $('.filters-menu__send-me').click(function (e) {
      e.preventDefault();
      $('.send-me').addClass('send-me-active');
      $('html, body').addClass('send-me-hidden');
    });
    $('.send-me .send-me__close-position a').click(function (e) {
      e.preventDefault();
      $('.send-me').removeClass('send-me-active');
      $('html, body').removeClass('body-hidden');
      $('html, body').removeClass('send-me-hidden');
    });
    jQuery(function($){
      $(document).mouseup(function (e){
        if(jQuery('.send-me').hasClass('send-me-active')) {
          var div = $('#send-me-show');
          if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.send-me').removeClass('send-me-active');
            $('html, body').removeClass('body-hidden');
            $('html, body').removeClass('send-me-hidden');
          }
        }
      });
    });

    $('.send-me__button').click(function (e) {
      e.preventDefault();
      $('.keep-me').addClass('keep-me-active');
      $('html, body').addClass('keep-me-hidden');
      $('.send-me').removeClass('send-me-active');
    });
    $('.keep-me .keep-me__close-position a').click(function (e) {
      e.preventDefault();
      $('.keep-me').removeClass('keep-me-active');
      $('html, body').removeClass('body-hidden');
      $('html, body').removeClass('keep-me-hidden');
    });
    jQuery(function($){
      $(document).mouseup(function (e){
        if(jQuery('.keep-me').hasClass('keep-me-active')) {
          var div = $('#keep-me-show');
          if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.keep-me').removeClass('keep-me-active');
            $('html, body').removeClass('body-hidden');
            $('html, body').removeClass('keep-me-hidden');
          }
        }
      });
    });
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
