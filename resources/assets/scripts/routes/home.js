
export default {
  init() {
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
