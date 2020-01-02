import Forms from './forms';
import {WOW} from 'wowjs';

// eslint-disable-next-line no-unused-vars
const wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  live: true,
});

export default {
  init() {
    var myVideo = document.getElementById('video');

    $('#video').click(function (e) {
      if($(this).parent().hasClass('pause')) {
        $(this).parent().removeClass('pause');
      } else {
        $(this).parent().addClass('pause');
      }
      e.preventDefault();
      playPause();
    });
    function playPause() {
      if (myVideo.paused) {
        myVideo.play();
        myVideo.muted = false
      }
      else
        myVideo.pause();
    }
    $('.nav__mobile-button').click(function (e) {
      e.preventDefault();
      $('html, body').toggleClass('body-hidden');
      $('.nav__mobile-button').toggleClass('open-mobile');
      $('.mobile-menu').toggleClass('active-menu');
    });

    $('.main-form__glass').click(function (e) {
      e.preventDefault();
      let parent = $(this).parent();
      let attrib = parent.children('.main-form__repass').attr('type');
      if ('password' == attrib) {
        parent.children('.main-form__repass').attr('type','text');
      } else {
        parent.children('.main-form__repass').attr('type','password');
      }
    });

    $('.form-open').click(function (e) {
      e.preventDefault();
      $('.main-form').addClass('main-form-open');
    });
    $('.main-form__close-position a').click(function (e) {
      e.preventDefault();
      $('.main-form').removeClass('main-form-open');
    });

    $('.search-open').click(function (e) {
      e.preventDefault();
      $('.main-search').addClass('main-search-open');
    });
    $('.main-search__close-position a').click(function (e) {
      e.preventDefault();
      $('.main-search').removeClass('main-search-open');
    });

    $('.nav__sign-up').click(function (e) {
      e.preventDefault();
      $('.sign-up').addClass('sign-up-active');
      $('html, body').toggleClass('body-hidden');
    });
    $('.mobile-menu__sign-up').click(function (e) {
      e.preventDefault();
      $('.sign-up').addClass('sign-up-active');
      $('.nav__mobile-button').toggleClass('open-mobile');
      $('.mobile-menu').toggleClass('active-menu');
    });

    $('.nav__sign-in').click(function (e) {
      e.preventDefault();
      $('.sign-in').addClass('sign-in-active');
      $('html, body').toggleClass('body-hidden');
    });
    $('.mobile-menu__sign-in').click(function (e) {
      e.preventDefault();
      $('.sign-in').addClass('sign-in-active');
      $('.nav__mobile-button').toggleClass('open-mobile');
      $('.mobile-menu').toggleClass('active-menu');
    });
    $('.sign-in__button').click(function (e) {
      e.preventDefault();
      $('.sign-in').removeClass('sign-in-active');
      $('html, body').toggleClass('body-hidden');
    });
    $('.select-role__button').click(function (e) {
      e.preventDefault();
      $('.select-role').removeClass('select-role-active');
      $('.check-email').addClass('check-email-active');
    });
    $('.sign-up__button').click(function (e) {
      e.preventDefault();
      $('.sign-up').removeClass('sign-up-active');
      $('.select-role').addClass('select-role-active');
    });
    $('.sign-in__forgot').click(function (e) {
      e.preventDefault();
      $('.sign-in').removeClass('sign-in-active');
      $('.forgot-pass').addClass('forgot-pass-active');
    });
    $('.sign-in__box-shadow').click(function (e) {
      e.preventDefault();
      $('.sign-in').removeClass('sign-in-active');
      $('.sign-up').removeClass('sign-up-active')
      $('.check-email').removeClass('check-email-active');
      $('.forgot-pass').removeClass('forgot-pass-active');
      $('.select-role').removeClass('select-role-active');
      $('html, body').toggleClass('body-hidden');
    });
    $('.sign-in__close-position a').click(function (e) {
      e.preventDefault();
      $('.sign-in').removeClass('sign-in-active');
      $('.sign-up').removeClass('sign-up-active');
      $('.check-email').removeClass('check-email-active');
      $('.forgot-pass').removeClass('forgot-pass-active');
      $('.select-role').removeClass('select-role-active');
      $('html, body').toggleClass('body-hidden');
    });

    $('.landlord .top-pages a').click(function (e) {
      e.preventDefault();
      $('.application').addClass('application-active');
      $('html, body').addClass('application-hidden');
    });
    $('.application .application__close-position a').click(function (e) {
      e.preventDefault();
      $('.application').removeClass('application-active');
      $('html, body').removeClass('body-hidden');
      $('html, body').removeClass('application-hidden');
    });
    jQuery(function($){
      $(document).mouseup(function (e){
        if(jQuery('.application').hasClass('application-active')) {
          var div = $('#application-show');
          if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.application').removeClass('application-active');
            $('html, body').removeClass('body-hidden');
            $('html, body').removeClass('application-hidden');
          }
        }
      });
    });

    $('.sign-in__glass').click(function (e) {
      e.preventDefault();
      let parent = $(this).parent();
      let attrib = parent.children('.sign-in__repass').attr('type');
      if ('password' == attrib) {
        parent.children('.sign-in__repass').attr('type','text');
      } else {
        parent.children('.sign-in__repass').attr('type','password');
      }
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
    });

    $('.browsing__map-filter input[type=checkbox]').change(function(){
      var checkbox = $('.browsing__map-filter input[type=checkbox]');
      var nChecked = $('.browsing__map-filter input:checked');
      if (checkbox.length === nChecked.length+1) {
        $('.allFilters').prev().prop('checked', true);
      }
    });

    const form = new Forms({
      wrap: '.field-wrap',
      forms: 'form.main-form__regist, form.sign-in__login',
    });
    form.init();
    wow.init();
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
