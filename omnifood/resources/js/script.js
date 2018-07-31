$(document).ready(function() {
  var scrollTo = function(target) {
    $('html,body').animate({scrollTop: target.offset().top}, 1000);
  };

  // scroll on buttons
  $('.js--scroll-to-plans').click(function() {
    scrollTo($('.js--section-plans'));
  });

  $('.js--scroll-to-start').click(function() {
    scrollTo($('.js--section-features'));
  });

  // Navigation scroll
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      scrollTo(target);
      return false;
    }
  });

  // sticky navigation
  $('.js--section-features').waypoint(
    function(direction) {
      if (direction == 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    },
    {
      offset: '60px;',
    },
  );
});
