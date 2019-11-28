import 'slick-carousel';
import Forms from './forms';

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
      if ($('.open-map img').attr('data-number') == 0) {
        $('.open-map img').attr('src', 'images/browsing/map-blue.svg');
        $('.open-map img').attr('data-number','1');
      } else {
        $('.open-map img').attr('src', 'images/browsing/map-black.svg');
        $('.open-map img').attr('data-number','0');
      }
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
    // filters on browsing.html

    $('.filters-menu__items ul li').click(function (e) {
      e.preventDefault();
      $(this).children('div').toggleClass('filters-menu__dropdown-active');
      $(this).children('a').toggleClass('filters-menu__filter-color-active');
    });
    jQuery(function($){
      $(document).mouseup(function (e){
        if(jQuery('.filters-menu__dropdown').hasClass('filters-menu__dropdown-active')) {
          var div = $('.filters-menu__dropdown-show');
          if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.filters-menu__dropdown').removeClass('filters-menu__dropdown-active');
            $('.filters-menu__items ul li a').removeClass('filters-menu__filter-color-active');
          }
        }
      });
    });
    const form = new Forms({
      wrap: '.field-wrap',
      forms: '.main-form__filters',
    });
    form.init();
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
