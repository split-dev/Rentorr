import Forms from './forms'

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
      if (myVideo.paused)
        myVideo.play();
      else
        myVideo.pause();
    }
    $('.nav__mobile-button').click(function (e) {
      e.preventDefault();
      $('body').toggleClass('body-hidden');
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

    const form = new Forms({
      wrap: '.field-wrap',
      forms: 'form.main-form__regist',
    });
    form.init();
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
