import 'slick-carousel';

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
    $('.landlord-profile-rating').click(function (e) {
      e.preventDefault();
      $('.landlord-rating').addClass('landlord-rating-active');
      $('html, body').addClass('landlord-rating-hidden');
      $('.send-me').removeClass('send-me-active');
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
  },
  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
