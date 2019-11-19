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
    $('.sign-in__box-shadow').click(function (e) {
      e.preventDefault();
      $('.sign-in').removeClass('sign-in-active');
      $('.sign-up').removeClass('sign-up-active');
      $('html, body').toggleClass('body-hidden');
    });
    $('.sign-in__close-position a').click(function (e) {
      e.preventDefault();
      $('.sign-in').removeClass('sign-in-active');
      $('.sign-up').removeClass('sign-up-active');
      $('html, body').toggleClass('body-hidden');
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

    const form = new Forms({
      wrap: '.field-wrap',
      forms: 'form.main-form__regist, form.sign-in__login',
    });
    form.init();

    wow.init();

    let windowOffset = window.pageYOffset;
    let viewPort =  window.innerHeight;
    let x = $('.question__title').offset().top;
    $(window).on('scroll', function () {
      windowOffset = window.pageYOffset;
      if (windowOffset >= (x + viewPort - 150)) {
        $('.question__title').css('display', 'block');
      }
    })


  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
