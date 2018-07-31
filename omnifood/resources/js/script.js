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

  // Mobile navigation
  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    nav.slideToggle(200);
    if (icon.hasClass('ion-navicon-round')) {
      icon.removeClass('ion-navicon-round');
      icon.addClass('ion-close-round');
    } else {
      icon.removeClass('ion-close-round');
      icon.addClass('ion-navicon-round');
    }
  });

  // Animations on scroll
  var animateOnScroll = function(targetClassName, animateClassName) {
    $(targetClassName).waypoint(
      function() {
        $(targetClassName).addClass('animated ' + animateClassName);
      },
      {offset: '50%'},
    );
  };

  animateOnScroll('.js--wp-1', 'fadeIn');
  animateOnScroll('.js--wp-2', 'fadeInUp');
  animateOnScroll('.js--wp-3', 'fadeIn');
  animateOnScroll('.js--wp-4', 'pulse');
});
