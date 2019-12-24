import 'slick-carousel';
import Forms from './forms';
import 'ion-rangeslider';
import Lightpick from 'lightpick/lightpick';
/*import 'jquery.nicescroll/jquery.nicescroll'*/

export default {
  init() {
    $('.browsing__google-map').on('click', function () {
      if ($('.apartment-tile-1__slider-1').hasClass('slick-initialized'))
        return;
      $('.apartment-tile-1__slider-1').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    })
    $('.apartment-tile__slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
    $('.open-map').click(function (e) {
      e.preventDefault();
      $('html, body').toggleClass('body-hidden');
      $('.browsing').toggleClass('click-open-map');
      $('.browsing__sity-info').removeClass('browsing__sity-info-active');
      $('.browsing__map-position').removeClass('browsing__map-position-off');
      if ($('.open-map img').attr('data-number') == 0) {
        $('.open-map img').attr('src', 'images/browsing/map-blue.svg').attr('data-number','1');
      } else {
        $('.open-map img').attr('src', 'images/browsing/map-black.svg').attr('data-number','0');
      }

      if ($('.browsing').hasClass('click-open-map')) {
        $('.browsing__sity-info-btn').addClass('browsing__sity-info-btn-active');
      } else {
        $('.browsing__sity-info-btn').removeClass('browsing__sity-info-btn-active');
        $('.apartment-tile__slider').slick('unslick');
        $('.apartment-tile__slider').slick({
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        });
      }
      if ($('.browsing').hasClass('click-open-map')) {
        $('.browsing__sity-info-btn').addClass('browsing__sity-info-btn-active');
      } else {
        $('.browsing__sity-info-btn').removeClass('browsing__sity-info-btn-active');
      }
      /*//tile scroll
      $('.browsing__tile-position').niceScroll({
        cursorcolor: '#9ba0b5',
        cursorwidth: '5px',
        cursorfixedheight: 50,
        cursoropacitymin: 1,
        horizrailenabled: false,
      });
      $('.nicescroll-box').niceScroll({
        cursorcolor: '#9ba0b5',
        cursorwidth: '5px',
        cursorfixedheight: 50,
        cursoropacitymin: 1,
        horizrailenabled: false,
      });
      $('.browsing__tile-position').getNiceScroll().resize();*/
    });

    $('.filters-menu__send-me').click(function (e) {
      e.preventDefault();
      $('.send-me').addClass('send-me-active');
      $('html, body').addClass('send-me-hidden');
    });
    $('.send-me .send-me__close-position a').click(function (e) {
      e.preventDefault();
      $('.send-me').removeClass('send-me-active');
      $('html, body').removeClass('body-hidden send-me-hidden');
    });
    jQuery(function($){
      $(document).mouseup(function (e){
        if(jQuery('.send-me').hasClass('send-me-active')) {
          var div = $('#send-me-show');
          if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.send-me').removeClass('send-me-active');
            $('html, body').removeClass('body-hidden send-me-hidden');
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
      $('html, body').removeClass('body-hidden keep-me-hidden');
    });
    jQuery(function($){
      $(document).mouseup(function (e){
        if(jQuery('.keep-me').hasClass('keep-me-active')) {
          var div = $('#keep-me-show');
          if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.keep-me').removeClass('keep-me-active');
            $('html, body').removeClass('body-hidden keep-me-hidden');
          }
        }
      });
    });
    // filters on browsing.html

     $('.filters-menu__items ul li >a').click(function () {
       $('.filters-menu__items ul li div').removeClass('filters-menu__dropdown-active')
      if($(this).parent().children('.filters-menu__dropdown').hasClass('filters-menu__dropdown-active')) {
        // eslint-disable-next-line no-unused-vars
        let test;
      }
      else {
        $(this).parent().children('.filters-menu__dropdown').addClass('filters-menu__dropdown-active');
        $(this).parent().children('a').addClass('filters-menu__filter-color-active');
      }
    });
    $(document).mousedown(function (e){
      if ($('.lightpick').hasClass('is-hidden')) {
        $('.filters-menu__calendar-data').removeClass('calendar-active');
        if($('.filters-menu__dropdown').hasClass('filters-menu__dropdown-active')) {
          var div = $('.filters-menu__dropdown');
          if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.filters-menu__dropdown-active input').prop('checked', false);
            /*$('.filters-menu__dropdown-active .field-wrap input').val('');
            $('.filters-menu__dropdown-active .field-wrap input').val('');*/
            $('.filters-menu__dropdown-active').prev().removeClass('filters-menu__filter-color-active');
            $('.filters-menu__dropdown').removeClass('filters-menu__dropdown-active');
            $('.browsing__search-result a').removeClass('triangle-blue');
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
      field: document.querySelector('.datepicker'),
      singleDate: true,
      autoclose: false,
      footer: true,
    });
    // eslint-disable-next-line no-unused-vars
    var picker2 = new Lightpick ({
      field: document.querySelector('#datepicker-mob'),
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
      $('.filters-menu__apartment .filters-menu__checkbox-position input').prop('checked', false);
      $(this).parent().parent().prev().text('Apartment');
    });
    $('.filters-menu__pet .filters-menu__apply-clear .filters-menu__button--black').click(function () {
      $('.filters-menu__pet .filters-menu__checkbox-position input').prop('checked', false)
      $(this).parent().parent().prev().text('Pet Policy');
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
      $(this).parent().parent().prev().text('Availability & duration');
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
        $(this).parent().children('a').toggleClass('triangle-blue');
      }
    });
    $('.browsing__input').on('click', function(){
      $('.browsing__input').not(this).prop('checked', false)
      let  content = $(this).next().html();
      $('.browsing__triangle').text(content);
      $('.filters-menu__dropdown').removeClass('filters-menu__dropdown-active');
      $('.browsing__triangle').removeClass('triangle-blue');
    });

    //Apply button apart
    $('.filters-menu__apartment .filters-menu__checkbox-position input').on('click', function(){
      $('.filters-menu__apartment .filters-menu__button').click(function () {
        let inpApart = $(this).parent().parent().children('.filters-menu__checkbox-position').children('input');
        let countApart = 0;
        let  contentApart = '';
        for(let i = 0; i<inpApart.length; i++) {
          if (inpApart[i].checked) {
            countApart = countApart + 1;
          }
        }
        if(countApart == 1) {
          for(let i = 0; i<inpApart.length; i++) {
            if (inpApart[i].checked) {
              contentApart = $(inpApart[i]).next().html();
            }
          }
          $(this).parent().parent().prev().text(contentApart);
          $(this).parent().parent().removeClass('filters-menu__dropdown-active');
        } else if (countApart > 1) {
          $(this).parent().parent().prev().text('Apartment');
          $(this).parent().parent().removeClass('filters-menu__dropdown-active');
        }
      });
    });
    //Apply button pets
    $('.filters-menu__pet .filters-menu__checkbox-position input').on('click', function(){
      $('.filters-menu__pet .filters-menu__button').click(function () {
        let inpPet = $(this).parent().parent().children('.filters-menu__checkbox-position').children('input');
        let countPet = 0;
        let  contentPet = '';
        for(let i = 0; i<inpPet.length; i++) {
          if (inpPet[i].checked) {
            countPet = countPet + 1;
          }
        }
        if(countPet == 1) {
          for(let i = 0; i<inpPet.length; i++) {
            if (inpPet[i].checked) {
              contentPet = $(inpPet[i]).next().html();
            }
          }
          $(this).parent().parent().prev().text(contentPet);
          $(this).parent().parent().removeClass('filters-menu__dropdown-active');
        } else if (countPet > 1) {
          $(this).parent().parent().prev().text('Pet Policy');
          $(this).parent().parent().removeClass('filters-menu__dropdown-active');
        }
      });
    });
    //Apply button features
    $('.filters-menu__features .filters-menu__checkbox-position input').on('click', function(){
      if($('.filters-menu__features .filters-menu__button').click(function () {
        $(this).parent().parent().removeClass('filters-menu__dropdown-active');
      }));
    });
    //Apply button rooms
    $('.filters-menu__rooms .filters-menu__button').click(function () {
      $(this).parent().parent().removeClass('filters-menu__dropdown-active');
    });

    //Apply button price
    $('.filters-menu__price .filters-menu__button').on('click', function(e){
      e.preventDefault();
      let  minPrice = $('#min-price').val();
      let  maxPrice = $('#max-price').val();
      if (minPrice == '') {
        $(this).parent().parent().parent().prev().text('Price range');
      }
      if (maxPrice == '') {
        $(this).parent().parent().parent().prev().text('Price range');
      }
      else {
        $(this).parent().parent().parent().prev().text('R' + minPrice + ' - ' + 'R' + maxPrice);
        $(this).parent().parent().parent().removeClass('filters-menu__dropdown-active');
      }
    });
    //Apply button calendar
    $('.filters-menu__calendar .filters-menu__button').on('click', function(e){
      e.preventDefault();
      let  date = $('#datepicker').val();
      let  fromRange = $('.irs-from').html();
      let  toRange = $('.irs-to').html();
      $(this).parent().parent().prev().text(date + ' | ' + fromRange + ' - ' + toRange + ' months');
      $(this).parent().parent().removeClass('filters-menu__dropdown-active');
    });


    if (window.innerWidth < 992) {
      //mobile-version
      $('.filters-menu__calendar .field-wrap').on('click', function(e){
        e.preventDefault();
        let  date = $('#datepicker-mob').val();
        let  fromRange = $('.irs-from').html();
        let  toRange = $('.irs-to').html();
        $(this).parent().parent().prev().text(date + ' | ' + fromRange + ' - ' + toRange + ' months');
        $(this).parent().parent().removeClass('filters-menu__dropdown-active');
      });
      $('.filters-menu__filter-link').on('click', function(e){
        e.preventDefault();
        $('.filters-menu-mobile').addClass('filters-menu-mobile-active');
        $('body').addClass('body-hidden')
      });
      $('.browsing__close-filter-icon').on('click', function(e){
        e.preventDefault();
        $('.filters-menu-mobile').removeClass('filters-menu-mobile-active');
        $('body').removeClass('body-hidden')
      });
    }
    else  {
      //all
    }


    // Map filters
    $('.browsing__map-filter-btn').click(function () {
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
    //City Info
    //open button
    $('.browsing__sity-info-btn').click(function () {
      $('.browsing__sity-info').addClass('browsing__sity-info-active');
      $('.browsing__sity-info-btn').removeClass('browsing__sity-info-btn-active');
      $('.browsing__map-position').addClass('browsing__map-position-off');
      $('#ascrail2001').addClass('city-info-scroll');
    });
    //close button
    $('.browsing__sity-info-close').click(function () {
      $('.browsing__sity-info').removeClass('browsing__sity-info-active');
      $('.browsing__sity-info-btn').addClass('browsing__sity-info-btn-active');
      $('.browsing__map-position').removeClass('browsing__map-position-off');
      $('#ascrail2001').removeClass('city-info-scroll');
    });

    //MOBILE VERSION
    //Closest filter mobile
    $('.browsing__closest-filter-mobile').click(function () {
      $('.browsing__closest-mobile').slideToggle();
      if ($('.browsing__closest-mobile').is('display', 'block')) {
        $('.browsing__triangle').removeClass('triangle-blue');
      }
    });
    $('.browsing__closest-mobile .browsing__form-closest').click(function () {
      $('.browsing__closest-mobile').slideUp();
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
