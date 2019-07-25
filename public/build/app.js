(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/style.css":
/*!******************************!*\
  !*** ./assets/css/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../css/style.css */ "./assets/css/style.css");

(function ($) {
  "use strict"; // Preloader

  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  }); // Back to top button

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  }); // Initiate the wowjs animation library

  new WOW().init(); // Initiate superfish on nav menu

  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  }); // Mobile Navigation

  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');
    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });
    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });
    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  } // Header scroll class
  // $(window).scroll(function() {
  //   if ($(this).scrollTop() > 90) {
  //     $('#header').addClass('header-scrolled');
  //   } else {
  //     $('#header').removeClass('header-scrolled');
  //   }
  // });
  // if ($(window).scrollTop() > 90) {
  //   $('#header').addClass('header-scrolled');
  // }
  // Smooth scroll for the menu and links with .scrollto classes


  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);

      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-scrolled')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }

        return false;
      }
    }
  }); // Navigation active state on scroll
  // var nav_sections = $('section');
  // var main_nav = $('.nav-menu, #mobile-nav');
  // var main_nav_height = $('#header').outerHeight();
  // $(window).on('scroll', function () {
  //   var cur_pos = $(this).scrollTop();
  //
  //   nav_sections.each(function() {
  //     var top = $(this).offset().top - main_nav_height,
  //         bottom = top + $(this).outerHeight();
  //
  //     if (cur_pos >= top && cur_pos <= bottom) {
  //       main_nav.find('li').removeClass('menu-active menu-item-active');
  //       main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('menu-active menu-item-active');
  //     }
  //   });
  // });
  // Intro carousel
  // var introCarousel = $(".carousel");
  // var introCarouselIndicators = $(".carousel-indicators");
  // introCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
  //   (index === 0) ?
  //   introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>") :
  //   introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");
  //
  //   $(this).css("background-image", "url('" + $(this).children('.carousel-background').children('img').attr('src') +"')");
  //   $(this).children('.carousel-background').remove();
  // });
  // $(".carousel").swipe({
  //   swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
  //     if (direction == 'left') $(this).carousel('next');
  //     if (direction == 'right') $(this).carousel('prev');
  //   },
  //   allowPageScroll:"vertical"
  // });
  // Skills section
  // $('#skills').waypoint(function() {
  //   $('.progress .progress-bar').each(function() {
  //     $(this).css("width", $(this).attr("aria-valuenow") + '%');
  //   });
  // }, { offset: '80%'} );
  // jQuery counterUp (used in Facts section)

  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  }); // Porfolio isotope and filter

  var portfolioIsotope = $('.gallery-container').isotope({
    itemSelector: '.gallery-item',
    layoutMode: 'fitRows'
  });
  $('#gallery-filters li').on('click', function () {
    $("#gallery-filters li").removeClass('filter-active');
    $(this).addClass('filter-active');
    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
  }); // Clients carousel (uses the Owl Carousel library)

  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });
  $(document).on('click', '.collapse-text-down', function (e) {
    $(this).parent().parent().find('#' + $(this).data('target-id')).show();
    $(this).hide();
  });
  $(document).on('click', '.collapse-text-up', function (e) {
    $('#' + $(this).data('target-id')).hide();
    $(this).parent().parent().parent().find('.collapse-text-down').show();
  });
})(jQuery);

/***/ })

},[["./assets/js/main.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3N0eWxlLmNzcz9kZjM2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwid2luZG93Iiwib24iLCJsZW5ndGgiLCJkZWxheSIsImZhZGVPdXQiLCJyZW1vdmUiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJmYWRlSW4iLCJjbGljayIsImFuaW1hdGUiLCJXT1ciLCJpbml0Iiwic3VwZXJmaXNoIiwiYW5pbWF0aW9uIiwib3BhY2l0eSIsInNwZWVkIiwiJG1vYmlsZV9uYXYiLCJjbG9uZSIsInByb3AiLCJpZCIsImZpbmQiLCJhdHRyIiwiYXBwZW5kIiwicHJlcGVuZCIsImRvY3VtZW50IiwiZSIsIm5leHQiLCJ0b2dnbGVDbGFzcyIsIm5leHRBbGwiLCJlcSIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlIiwiY29udGFpbmVyIiwiaXMiLCJ0YXJnZXQiLCJoYXMiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGlkZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiaG9zdG5hbWUiLCJoYXNoIiwidG9wX3NwYWNlIiwib3V0ZXJIZWlnaHQiLCJvZmZzZXQiLCJ0b3AiLCJwYXJlbnRzIiwiY2xvc2VzdCIsImFkZENsYXNzIiwiY291bnRlclVwIiwidGltZSIsInBvcnRmb2xpb0lzb3RvcGUiLCJpc290b3BlIiwiaXRlbVNlbGVjdG9yIiwibGF5b3V0TW9kZSIsImZpbHRlciIsImRhdGEiLCJvd2xDYXJvdXNlbCIsImF1dG9wbGF5IiwiZG90cyIsImxvb3AiLCJyZXNwb25zaXZlIiwiaXRlbXMiLCJwYXJlbnQiLCJzaG93IiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQUEsbUJBQU8sQ0FBQyxnREFBRCxDQUFQOztBQUVBLENBQUMsVUFBVUMsQ0FBVixFQUFhO0FBQ1osZUFEWSxDQUdaOztBQUNBQSxHQUFD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dGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwicmVxdWlyZSgnLi4vY3NzL3N0eWxlLmNzcycpO1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIC8vIFByZWxvYWRlclxyXG4gICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKCcjcHJlbG9hZGVyJykubGVuZ3RoKSB7XHJcbiAgICAgICQoJyNwcmVsb2FkZXInKS5kZWxheSgxMDApLmZhZGVPdXQoJ3Nsb3cnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIEJhY2sgdG8gdG9wIGJ1dHRvblxyXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDEwMCkge1xyXG4gICAgICAkKCcuYmFjay10by10b3AnKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5iYWNrLXRvLXRvcCcpLmZhZGVPdXQoJ3Nsb3cnKTtcclxuICAgIH1cclxuICB9KTtcclxuICAkKCcuYmFjay10by10b3AnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcCA6IDB9LDE1MDAsICdlYXNlSW5PdXRFeHBvJyk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcblxyXG4gIC8vIEluaXRpYXRlIHRoZSB3b3dqcyBhbmltYXRpb24gbGlicmFyeVxyXG4gIG5ldyBXT1coKS5pbml0KCk7XHJcblxyXG4gIC8vIEluaXRpYXRlIHN1cGVyZmlzaCBvbiBuYXYgbWVudVxyXG4gICQoJy5uYXYtbWVudScpLnN1cGVyZmlzaCh7XHJcbiAgICBhbmltYXRpb246IHtcclxuICAgICAgb3BhY2l0eTogJ3Nob3cnXHJcbiAgICB9LFxyXG4gICAgc3BlZWQ6IDQwMFxyXG4gIH0pO1xyXG5cclxuICAvLyBNb2JpbGUgTmF2aWdhdGlvblxyXG4gIGlmICgkKCcjbmF2LW1lbnUtY29udGFpbmVyJykubGVuZ3RoKSB7XHJcbiAgICB2YXIgJG1vYmlsZV9uYXYgPSAkKCcjbmF2LW1lbnUtY29udGFpbmVyJykuY2xvbmUoKS5wcm9wKHtcclxuICAgICAgaWQ6ICdtb2JpbGUtbmF2J1xyXG4gICAgfSk7XHJcbiAgICAkbW9iaWxlX25hdi5maW5kKCc+IHVsJykuYXR0cih7XHJcbiAgICAgICdjbGFzcyc6ICcnLFxyXG4gICAgICAnaWQnOiAnJ1xyXG4gICAgfSk7XHJcbiAgICAkKCdib2R5JykuYXBwZW5kKCRtb2JpbGVfbmF2KTtcclxuICAgICQoJ2JvZHknKS5wcmVwZW5kKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cIm1vYmlsZS1uYXYtdG9nZ2xlXCI+PGkgY2xhc3M9XCJmYSBmYS1iYXJzXCI+PC9pPjwvYnV0dG9uPicpO1xyXG4gICAgJCgnYm9keScpLmFwcGVuZCgnPGRpdiBpZD1cIm1vYmlsZS1ib2R5LW92ZXJseVwiPjwvZGl2PicpO1xyXG4gICAgJCgnI21vYmlsZS1uYXYnKS5maW5kKCcubWVudS1oYXMtY2hpbGRyZW4nKS5wcmVwZW5kKCc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tZG93blwiPjwvaT4nKTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1lbnUtaGFzLWNoaWxkcmVuIGknLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICQodGhpcykubmV4dCgpLnRvZ2dsZUNsYXNzKCdtZW51LWl0ZW0tYWN0aXZlJyk7XHJcbiAgICAgICQodGhpcykubmV4dEFsbCgndWwnKS5lcSgwKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiZmEtY2hldnJvbi11cCBmYS1jaGV2cm9uLWRvd25cIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI21vYmlsZS1uYXYtdG9nZ2xlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ21vYmlsZS1uYXYtYWN0aXZlJyk7XHJcbiAgICAgICQoJyNtb2JpbGUtbmF2LXRvZ2dsZSBpJykudG9nZ2xlQ2xhc3MoJ2ZhLXRpbWVzIGZhLWJhcnMnKTtcclxuICAgICAgJCgnI21vYmlsZS1ib2R5LW92ZXJseScpLnRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICB2YXIgY29udGFpbmVyID0gJChcIiNtb2JpbGUtbmF2LCAjbW9iaWxlLW5hdi10b2dnbGVcIik7XHJcbiAgICAgIGlmICghY29udGFpbmVyLmlzKGUudGFyZ2V0KSAmJiBjb250YWluZXIuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdtb2JpbGUtbmF2LWFjdGl2ZScpKSB7XHJcbiAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vYmlsZS1uYXYtYWN0aXZlJyk7XHJcbiAgICAgICAgICAkKCcjbW9iaWxlLW5hdi10b2dnbGUgaScpLnRvZ2dsZUNsYXNzKCdmYS10aW1lcyBmYS1iYXJzJyk7XHJcbiAgICAgICAgICAkKCcjbW9iaWxlLWJvZHktb3Zlcmx5JykuZmFkZU91dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmICgkKFwiI21vYmlsZS1uYXYsICNtb2JpbGUtbmF2LXRvZ2dsZVwiKS5sZW5ndGgpIHtcclxuICAgICQoXCIjbW9iaWxlLW5hdiwgI21vYmlsZS1uYXYtdG9nZ2xlXCIpLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIC8vIEhlYWRlciBzY3JvbGwgY2xhc3NcclxuICAvLyAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiA5MCkge1xyXG4gIC8vICAgICAkKCcjaGVhZGVyJykuYWRkQ2xhc3MoJ2hlYWRlci1zY3JvbGxlZCcpO1xyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgJCgnI2hlYWRlcicpLnJlbW92ZUNsYXNzKCdoZWFkZXItc2Nyb2xsZWQnKTtcclxuICAvLyAgIH1cclxuICAvLyB9KTtcclxuXHJcbiAgLy8gaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDkwKSB7XHJcbiAgLy8gICAkKCcjaGVhZGVyJykuYWRkQ2xhc3MoJ2hlYWRlci1zY3JvbGxlZCcpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gU21vb3RoIHNjcm9sbCBmb3IgdGhlIG1lbnUgYW5kIGxpbmtzIHdpdGggLnNjcm9sbHRvIGNsYXNzZXNcclxuICAkKCcubmF2LW1lbnUgYSwgI21vYmlsZS1uYXYgYSwgLnNjcm9sbHRvJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgJiYgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZSkge1xyXG4gICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xyXG4gICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciB0b3Bfc3BhY2UgPSAwO1xyXG5cclxuICAgICAgICBpZiAoJCgnI2hlYWRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgdG9wX3NwYWNlID0gJCgnI2hlYWRlcicpLm91dGVySGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgaWYgKCEgJCgnI2hlYWRlcicpLmhhc0NsYXNzKCdoZWFkZXItc2Nyb2xsZWQnKSkge1xyXG4gICAgICAgICAgICB0b3Bfc3BhY2UgPSB0b3Bfc3BhY2UgLSAyMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIHRvcF9zcGFjZVxyXG4gICAgICAgIH0sIDE1MDAsICdlYXNlSW5PdXRFeHBvJyk7XHJcblxyXG4gICAgICAgIGlmICgkKHRoaXMpLnBhcmVudHMoJy5uYXYtbWVudScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgJCgnLm5hdi1tZW51IC5tZW51LWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdtZW51LWFjdGl2ZScpO1xyXG4gICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCdtZW51LWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygnbW9iaWxlLW5hdi1hY3RpdmUnKSkge1xyXG4gICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2JpbGUtbmF2LWFjdGl2ZScpO1xyXG4gICAgICAgICAgJCgnI21vYmlsZS1uYXYtdG9nZ2xlIGknKS50b2dnbGVDbGFzcygnZmEtdGltZXMgZmEtYmFycycpO1xyXG4gICAgICAgICAgJCgnI21vYmlsZS1ib2R5LW92ZXJseScpLmZhZGVPdXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIE5hdmlnYXRpb24gYWN0aXZlIHN0YXRlIG9uIHNjcm9sbFxyXG4gIC8vIHZhciBuYXZfc2VjdGlvbnMgPSAkKCdzZWN0aW9uJyk7XHJcbiAgLy8gdmFyIG1haW5fbmF2ID0gJCgnLm5hdi1tZW51LCAjbW9iaWxlLW5hdicpO1xyXG4gIC8vIHZhciBtYWluX25hdl9oZWlnaHQgPSAkKCcjaGVhZGVyJykub3V0ZXJIZWlnaHQoKTtcclxuXHJcbiAgLy8gJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICB2YXIgY3VyX3BvcyA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcbiAgLy9cclxuICAvLyAgIG5hdl9zZWN0aW9ucy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgICB2YXIgdG9wID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgLSBtYWluX25hdl9oZWlnaHQsXHJcbiAgLy8gICAgICAgICBib3R0b20gPSB0b3AgKyAkKHRoaXMpLm91dGVySGVpZ2h0KCk7XHJcbiAgLy9cclxuICAvLyAgICAgaWYgKGN1cl9wb3MgPj0gdG9wICYmIGN1cl9wb3MgPD0gYm90dG9tKSB7XHJcbiAgLy8gICAgICAgbWFpbl9uYXYuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnbWVudS1hY3RpdmUgbWVudS1pdGVtLWFjdGl2ZScpO1xyXG4gIC8vICAgICAgIG1haW5fbmF2LmZpbmQoJ2FbaHJlZj1cIiMnKyQodGhpcykuYXR0cignaWQnKSsnXCJdJykucGFyZW50KCdsaScpLmFkZENsYXNzKCdtZW51LWFjdGl2ZSBtZW51LWl0ZW0tYWN0aXZlJyk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0pO1xyXG4gIC8vIH0pO1xyXG5cclxuICAvLyBJbnRybyBjYXJvdXNlbFxyXG4gIC8vIHZhciBpbnRyb0Nhcm91c2VsID0gJChcIi5jYXJvdXNlbFwiKTtcclxuICAvLyB2YXIgaW50cm9DYXJvdXNlbEluZGljYXRvcnMgPSAkKFwiLmNhcm91c2VsLWluZGljYXRvcnNcIik7XHJcbiAgLy8gaW50cm9DYXJvdXNlbC5maW5kKFwiLmNhcm91c2VsLWlubmVyXCIpLmNoaWxkcmVuKFwiLmNhcm91c2VsLWl0ZW1cIikuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG4gIC8vICAgKGluZGV4ID09PSAwKSA/XHJcbiAgLy8gICBpbnRyb0Nhcm91c2VsSW5kaWNhdG9ycy5hcHBlbmQoXCI8bGkgZGF0YS10YXJnZXQ9JyNpbnRyb0Nhcm91c2VsJyBkYXRhLXNsaWRlLXRvPSdcIiArIGluZGV4ICsgXCInIGNsYXNzPSdhY3RpdmUnPjwvbGk+XCIpIDpcclxuICAvLyAgIGludHJvQ2Fyb3VzZWxJbmRpY2F0b3JzLmFwcGVuZChcIjxsaSBkYXRhLXRhcmdldD0nI2ludHJvQ2Fyb3VzZWwnIGRhdGEtc2xpZGUtdG89J1wiICsgaW5kZXggKyBcIic+PC9saT5cIik7XHJcbiAgLy9cclxuICAvLyAgICQodGhpcykuY3NzKFwiYmFja2dyb3VuZC1pbWFnZVwiLCBcInVybCgnXCIgKyAkKHRoaXMpLmNoaWxkcmVuKCcuY2Fyb3VzZWwtYmFja2dyb3VuZCcpLmNoaWxkcmVuKCdpbWcnKS5hdHRyKCdzcmMnKSArXCInKVwiKTtcclxuICAvLyAgICQodGhpcykuY2hpbGRyZW4oJy5jYXJvdXNlbC1iYWNrZ3JvdW5kJykucmVtb3ZlKCk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vICQoXCIuY2Fyb3VzZWxcIikuc3dpcGUoe1xyXG4gIC8vICAgc3dpcGU6IGZ1bmN0aW9uKGV2ZW50LCBkaXJlY3Rpb24sIGRpc3RhbmNlLCBkdXJhdGlvbiwgZmluZ2VyQ291bnQsIGZpbmdlckRhdGEpIHtcclxuICAvLyAgICAgaWYgKGRpcmVjdGlvbiA9PSAnbGVmdCcpICQodGhpcykuY2Fyb3VzZWwoJ25leHQnKTtcclxuICAvLyAgICAgaWYgKGRpcmVjdGlvbiA9PSAncmlnaHQnKSAkKHRoaXMpLmNhcm91c2VsKCdwcmV2Jyk7XHJcbiAgLy8gICB9LFxyXG4gIC8vICAgYWxsb3dQYWdlU2Nyb2xsOlwidmVydGljYWxcIlxyXG4gIC8vIH0pO1xyXG5cclxuICAvLyBTa2lsbHMgc2VjdGlvblxyXG4gIC8vICQoJyNza2lsbHMnKS53YXlwb2ludChmdW5jdGlvbigpIHtcclxuICAvLyAgICQoJy5wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAvLyAgICAgJCh0aGlzKS5jc3MoXCJ3aWR0aFwiLCAkKHRoaXMpLmF0dHIoXCJhcmlhLXZhbHVlbm93XCIpICsgJyUnKTtcclxuICAvLyAgIH0pO1xyXG4gIC8vIH0sIHsgb2Zmc2V0OiAnODAlJ30gKTtcclxuXHJcbiAgLy8galF1ZXJ5IGNvdW50ZXJVcCAodXNlZCBpbiBGYWN0cyBzZWN0aW9uKVxyXG4gICQoJ1tkYXRhLXRvZ2dsZT1cImNvdW50ZXItdXBcIl0nKS5jb3VudGVyVXAoe1xyXG4gICAgZGVsYXk6IDEwLFxyXG4gICAgdGltZTogMTAwMFxyXG4gIH0pO1xyXG5cclxuICAvLyBQb3Jmb2xpbyBpc290b3BlIGFuZCBmaWx0ZXJcclxuICB2YXIgcG9ydGZvbGlvSXNvdG9wZSA9ICQoJy5nYWxsZXJ5LWNvbnRhaW5lcicpLmlzb3RvcGUoe1xyXG4gICAgaXRlbVNlbGVjdG9yOiAnLmdhbGxlcnktaXRlbScsXHJcbiAgICBsYXlvdXRNb2RlOiAnZml0Um93cydcclxuICB9KTtcclxuXHJcbiAgJCgnI2dhbGxlcnktZmlsdGVycyBsaScpLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICQoXCIjZ2FsbGVyeS1maWx0ZXJzIGxpXCIpLnJlbW92ZUNsYXNzKCdmaWx0ZXItYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdmaWx0ZXItYWN0aXZlJyk7XHJcblxyXG4gICAgcG9ydGZvbGlvSXNvdG9wZS5pc290b3BlKHsgZmlsdGVyOiAkKHRoaXMpLmRhdGEoJ2ZpbHRlcicpIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBDbGllbnRzIGNhcm91c2VsICh1c2VzIHRoZSBPd2wgQ2Fyb3VzZWwgbGlicmFyeSlcclxuICAkKFwiLmNsaWVudHMtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IHsgMDogeyBpdGVtczogMiB9LCA3Njg6IHsgaXRlbXM6IDQgfSwgOTAwOiB7IGl0ZW1zOiA2IH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jb2xsYXBzZS10ZXh0LWRvd24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJyMnICsgJCh0aGlzKS5kYXRhKCd0YXJnZXQtaWQnKSkuc2hvdygpO1xyXG4gICAgJCh0aGlzKS5oaWRlKCk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY29sbGFwc2UtdGV4dC11cCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICQoJyMnICsgJCh0aGlzKS5kYXRhKCd0YXJnZXQtaWQnKSkuaGlkZSgpO1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcuY29sbGFwc2UtdGV4dC1kb3duJykuc2hvdygpO1xyXG4gIH0pO1xyXG59KShqUXVlcnkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9