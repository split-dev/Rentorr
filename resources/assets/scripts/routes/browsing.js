import 'slick-carousel';
import Forms from './forms';
import 'ion-rangeslider';
import Lightpick from 'lightpick/lightpick'

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
        $(this).children('.filters-menu__dropdown').addClass('filters-menu__dropdown-active');
        $(this).children('a').addClass('filters-menu__filter-color-active');
      }
    });
    $(document).mousedown(function (e){
      if ($('.lightpick').hasClass('is-hidden')) {
        $('.filters-menu__calendar-data').removeClass('calendar-active');
        if($('.filters-menu__dropdown').hasClass('filters-menu__dropdown-active')) {
          var div = $('.filters-menu__dropdown');
          if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.filters-menu__dropdown').removeClass('filters-menu__dropdown-active');
            $('.filters-menu__items ul li a').removeClass('filters-menu__filter-color-active');
            $('.browsing__search-result a').removeClass('triangle-blue');
            $('.filters-menu__calendar-data').removeClass('calendar-active');
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
    // eslint-disable-next-line no-unused-vars
    var picker = new Lightpick ({
      field: document.getElementById('datepicker'),
      singleDate: true,
      autoclose: false,
      footer: true,
    });
    $('.filters-menu__calendar-data .main-form__filters .field-wrap input').click(function () {
      if ($('.filters-menu__calendar-data .main-form__filters .field-wrap' ).hasClass('is-focused')) {
        $('.filters-menu__calendar-data').addClass('calendar-active');
      }
    });
    $('.lightpick__reset-action').text('CLEAR');
    $('.lightpick__apply-action').click(function () {
      $('.filters-menu__calendar').addClass('filters-menu__dropdown-active');
    })
    //range-slider
    $('.js-range-slider').ionRangeSlider({
      type: 'double',
      min: 1,
      max: 24,
      // eslint-disable-next-line no-unused-vars
      onUpdate: function (data) {
        // eslint-disable-next-line no-undef
        highlight('onUpdate');
      },
    });

    //clear button
    $('.filters-menu__apartment .filters-menu__apply-clear .filters-menu__button--black').click(function () {
      $('.filters-menu__apartment .filters-menu__checkbox-position input').prop('checked', false)
    });
    $('.filters-menu__pet .filters-menu__apply-clear .filters-menu__button--black').click(function () {
      $('.filters-menu__pet .filters-menu__checkbox-position input').prop('checked', false)
    });
    $('.filters-menu__features .filters-menu__apply-clear .filters-menu__button--black').click(function () {
      $('.filters-menu__features .filters-menu__checkbox-position input').prop('checked', false)
    });
    $('.filters-menu__rooms .filters-menu__apply-clear .filters-menu__button--black').click(function () {
      $('.filters-menu__rooms-minus').addClass('rooms-minus-disabled');
      let inp = $('.filters-menu__rooms-input');
      for (let i = 0; i<inp.length; i++) {
        let min = inp[i].getAttribute('data-min');
        inp[i].setAttribute('value', min + '+');
        inp[i].setAttribute('data-value', min);
      }
    });
    $('.filters-menu__calendar .filters-menu__apply-clear .filters-menu__button--black').click(function () {
      $('#datepicker').val('');
      $('.filters-menu__calendar .field-wrap').removeClass('has-val');
      var d0_instance = $('.js-range-slider').data('ionRangeSlider');
      d0_instance.update({
        from: 1,
        to: 24,
      });
    });

    // closest filter
    $('.browsing__triangle').click(function () {
      $('.filters-menu__items ul li div').removeClass('filters-menu__dropdown-active')
      if($(this).children('.filters-menu__dropdown').hasClass('filters-menu__dropdown-active')) {
        // eslint-disable-next-line no-unused-vars
        let test;
      }
      else {
        $(this).parent().children('.filters-menu__dropdown').toggleClass('filters-menu__dropdown-active');
        $(this).parent().children('a').addClass('triangle-blue');
      }
    });
    $('.browsing__input').on('click', function(){
      $('.browsing__input').not(this).prop('checked', false)
      let  content = $(this).next().html();
      $('.browsing__triangle').text(content);
      $('.filters-menu__dropdown').removeClass('filters-menu__dropdown-active');
      $('.browsing__triangle').removeClass('triangle-blue');
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
