import 'slick-carousel';
import 'jquery.nicescroll/jquery.nicescroll'

export default {
  init() {
    $('.apartment-tile__slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
    //company-details modal
    $('.landlord-profile-agency').click(function (e) {
      e.preventDefault();
      $('.company-details').addClass('company-details-active');
      $('html, body').addClass('company-details-hidden');
      $('.send-me').removeClass('send-me-active');
    });
    $('.company-details .company-details__close-position a, .close-company-details').click(function (e) {
      e.preventDefault();
      $('.company-details').removeClass('company-details-active');
      $('html, body').removeClass('body-hidden company-details-hidden');
    });
    jQuery(function($){
      $(document).mouseup(function (e){
        if(jQuery('.company-details').hasClass('company-details-active')) {
          var div = $('#company-details-show');
          if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.company-details').removeClass('company-details-active');
            $('html, body').removeClass('body-hidden company-details-hidden');
          }
        }
      });
    });
    //landlord-rating modal
      var clickScroll = ('ontouchstart' in window ? 'touchend' : 'click')
      $('.landlord-profile-rating').on(clickScroll, function (e) {
      e.preventDefault();
      $('.landlord-rating').addClass('landlord-rating-active');
      $('html, body').addClass('landlord-rating-hidden');
      $('.send-me').removeClass('send-me-active');
      //scroll reviews
      if ($('.landlord-rating').hasClass('landlord-rating-active')) {
        if (window.innerWidth > 575) {
          /*let scrollHeight = $('.landlord-rating__reviews').height();
          $('.landlord-rating__reviews').css('max-height', scrollHeight);*/
          $('.landlord-rating__reviews').niceScroll({
            cursorcolor: '#9ba0b5',
            cursorwidth: '8px',
            cursorfixedheight: 50,
            cursoropacitymin: 1,
            horizrailenabled: false,
          });
        }
      }
      else  {
        $('.landlord-rating__reviews').getNiceScroll().remove();
        //all
      }
    });
    $('.landlord-rating .landlord-rating__close-position a, .close-landlord-rating').click(function (e) {
      e.preventDefault();
      $('.landlord-rating').removeClass('landlord-rating-active');
      $('html, body').removeClass('body-hidden landlord-rating-hidden');
    });
    jQuery(function($){
      $(document).mouseup(function (e){
        if(jQuery('.landlord-rating').hasClass('landlord-rating-active')) {
          var div = $('#landlord-rating-show');
          if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.landlord-rating').removeClass('landlord-rating-active');
            $('html, body').removeClass('body-hidden landlord-rating-hidden');
          }
        }
      });
    });
    //rating percents
    function percent() {
      let element = $('.landlord-rating__line');
      for (let i = 0; i < element.length; i++) {
        let attr = $(element[i]).attr('data-result');
        let percent = 100 - Number(attr);
        $(element[i]).children('.landlord-rating__blue-line').css('right', percent + '%');
      }
    }
    percent();
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
