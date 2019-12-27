import 'slick-carousel';
import 'lightgallery/dist/js/lightgallery-all.min';
import Forms from './forms';

export default {
  init() {
      $('.apartment-tile__slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    if (window.innerWidth < 992) {
      $('.apartment-details__slider-prop').slick({
        dots: true,
        infinite: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        swipe: true,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              unslick: true,
            },
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 2,
              unslick: true,
            },
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 1.5,
              unslick: true,
            },
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 1,
              unslick: true,
            },
          },
        ],
      });
    }
    else  {
      //all
    }
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
    $('.browsing__map-filter-btn, .apartment-details__filter-plus-btn').click(function (e) {
      e.preventDefault();
      $('.browsing__map-filter-btn').toggleClass('browsing__map-filter-btn-active');
      $('.browsing__map-filter').toggleClass('browsing__map-filter-active');
    });
    $(document).mouseup(function (e){
      if(jQuery('.browsing__map-filter').hasClass('browsing__map-filter-active')) {
        var div = $('#browsing__map-filter-show');
        var div1 = $('.apartment-details__filter-label-position, .apartment-details__filter-label span, .apartment-details__filter-label-close');
        /*if ($('.apartment-details__filter-plus-btn').is(e.target) || $('.apartment-details__filter-plus-btn').has(e.target))
          return;
        if ($('.apartment-details__filter-label').is(e.target) || $('.apartment-details__filter-label').has(e.target))
          return;*/
        if ((!div.is(e.target) && div.has(e.target).length === 0) && (!div1.is(e.target) && div.has(e.target).length === 0)) {
          $('.browsing__map-filter').removeClass('browsing__map-filter-active');
          $('.browsing__map-filter-btn').removeClass('browsing__map-filter-btn-active');
        }
      }
    });
    //reporting modal
    $('.link-vulgatus').click(function (e) {
      e.preventDefault();
      $('.reporting').addClass('reporting-active');
      $('html, body').addClass('reporting-hidden');
      $('.send-me').removeClass('send-me-active');
    });
    $('.reporting .reporting__close-position a, .close-reporting').click(function (e) {
      e.preventDefault();
      $('.reporting').removeClass('reporting-active');
      $('html, body').removeClass('body-hidden reporting-hidden');
    });
    jQuery(function($){
      $(document).mouseup(function (e){
        if(jQuery('.reporting').hasClass('reporting-active')) {
          var div = $('#reporting-show');
          if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.reporting').removeClass('reporting-active');
            $('html, body').removeClass('body-hidden reporting-hidden');
          }
        }
      });
    });
    //reasons modal
    $('.reporting__next-btn').click(function (e) {
      e.preventDefault();
      $('.reporting').removeClass('reporting-active');
      $('html, body').removeClass('body-hidden reporting-hidden');
      $('.reasons').addClass('reasons-active');
      $('html, body').addClass('reasons-hidden');
      $('.send-me').removeClass('send-me-active');
    });
    $('.reasons .reasons__close-position a, .close-reasons, .reasons__submit-btn').click(function (e) {
      e.preventDefault();
      $('.reasons').removeClass('reasons-active');
      $('html, body').removeClass('body-hidden reasons-hidden');
    });
    jQuery(function($){
      $(document).mouseup(function (e){
        if(jQuery('.reasons').hasClass('reasons-active')) {
          var div = $('#reasons-show');
          if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.reasons').removeClass('reasons-active');
            $('html, body').removeClass('body-hidden reasons-hidden');
          }
        }
      });
    });
    // eslint-disable-next-line no-unused-vars
    const form = new Forms({
      wrap: '.field-wrap',
      forms: 'form.main-form__regist, form.sign-in__login',
    });
    //filter label
    $('.global-checkbox-label').click(function () {
      let attrFilter = $(this).attr('data-filter');
      let checkedInp = $(this).prev();
      $('.allFilters').prev().prop('checked', false);
      if($(checkedInp).is(':checked')) {
        $('#' + attrFilter).removeClass('filter-label-active')
      }
      else {
        $('#' + attrFilter).addClass('filter-label-active')
      }

    })
    $('.allFilters').click(function (e) {
      e.preventDefault();
      // eslint-disable-next-line no-unused-vars
      let labelMas = $('.global-checkbox-label');
      if($(this).prev().is(':checked')) {
        $(this).prev().prop('checked', false);
        $(labelMas).prev().prop('checked', false);
        $('.apartment-details__filter-label').removeClass('filter-label-active')
      }
      else {
        $('.apartment-details__filter-label').addClass('filter-label-active')
        $(labelMas).prev().prop('checked', true);
        $(this).prev().prop('checked', true);
        $(labelMas).prev().prop('checked', true);
      }
    })
    $('.apartment-details__filter-label a').click (function (e) {
      e.preventDefault();
      $(this).parent().removeClass('filter-label-active');
      let attr = $(this).parent().attr('id');
      $('[data-filter~=' + attr + ']').prev().prop('checked', false);
    })

    //unslcik
    //resize
    reportWindowSize();
    window.onresize = reportWindowSize;
    function reportWindowSize() {
      if (window.innerWidth < 992) {
        $('.apartment-tile__slider').slick('unslick');
      }
      else  {
        //all
      }
    }
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
