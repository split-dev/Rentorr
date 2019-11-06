

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
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
