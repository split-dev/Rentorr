import 'slick-carousel';
import Forms from './forms';
import '@chenfengyuan/datepicker';
import 'ion-rangeslider';

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

     $('.filters-menu__items ul li').click(function () {
       $('.filters-menu__items ul li div').removeClass('filters-menu__dropdown-active')
      if($(this).children('.filters-menu__dropdown').hasClass('filters-menu__dropdown-active')) {
        // eslint-disable-next-line no-unused-vars
        let test;
      }
      else {
        $(this).children('.filters-menu__dropdown').toggleClass('filters-menu__dropdown-active');
        $(this).children('a').toggleClass('filters-menu__filter-color-active');
      }
    });
    $(document).mouseup(function (e){
      if ($('.datepicker-container').hasClass('datepicker-hide')) {
        if($('.filters-menu__dropdown').hasClass('filters-menu__dropdown-active')) {
          var div = $('.filters-menu__dropdown');
          if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.filters-menu__dropdown').removeClass('filters-menu__dropdown-active');
            $('.filters-menu__items ul li a').removeClass('filters-menu__filter-color-active');
          }
        }
      }
    });
    // fitters plus-minus
    $('.filters-menu__rooms-position .filters-menu__rooms-minus').click(function () {
      let elementMinus = $(this).parent().children('.filters-menu__rooms-input');
      let minusLink = $(this).parent().children('.filters-menu__rooms-minus');
      let value = Number(elementMinus.attr('data-value'));
      let dataMin = Number(elementMinus.attr('data-min'));
      let plusLink = $(this).parent().children('.filters-menu__rooms-plus');
      let dataMax = Number(elementMinus.attr('data-max'));
      if (value == dataMin) {
        minusLink.addClass('rooms-minus-disabled');
      } else {
        minusLink.removeClass('rooms-minus-disabled');
        let step = Number(elementMinus.attr('data-step'));
        let value = Number(elementMinus.attr('data-value'));
        value = value - step;
        elementMinus.attr('value', value + '+');
        elementMinus.attr('data-value', value );
        if (value == dataMin) {
          minusLink.addClass('rooms-minus-disabled');
        }
        if (value == dataMax) {
          plusLink.addClass('rooms-minus-disabled');
        } else {
          plusLink.removeClass('rooms-minus-disabled');
        }
      }
    });
    $('.filters-menu__rooms-position .filters-menu__rooms-plus').click(function () {
      let elementPlus = $(this).parent().children('.filters-menu__rooms-input');
      let plusLink = $(this).parent().children('.filters-menu__rooms-plus');
      let value = Number(elementPlus.attr('data-value'));
      let dataMax = Number(elementPlus.attr('data-max'));
      let minusLink = $(this).parent().children('.filters-menu__rooms-minus');
      let dataMin = Number(elementPlus.attr('data-min'));
      if (value == dataMax) {
        plusLink.addClass('rooms-minus-disabled');
      } else {
        plusLink.removeClass('rooms-minus-disabled');
        let step = Number(elementPlus.attr('data-step'));
        let value = Number(elementPlus.attr('data-value'));
        value = value + step;
        elementPlus.attr('value', value + '+');
        elementPlus.attr('data-value', value );
        if (value == dataMin) {
          minusLink.addClass('rooms-minus-disabled');
        } else {
          minusLink.removeClass('rooms-minus-disabled');
        }
        if (value == dataMax) {
          plusLink.addClass('rooms-minus-disabled');
        }
      }
    });
    //calendar
    setTimeout(function(){
      $('.datepicker-container').addClass('datepicker-hide');
    }, 50);
    $('[data-toggle="datepicker"]').datepicker( {
      autoShow: true,
      autoHide: true,
    });
    //range-slider

    $('.js-range-slider').ionRangeSlider({
      type: 'double',
      min: 1,
      max: 24,
    });

    const form = new Forms({
      wrap: '.field-wrap',
      forms: '.main-form__filters, filters-menu__input-position',
    });
    form.init();
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
