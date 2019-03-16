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

  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');
  var main_nav_height = $('#header').outerHeight(); // $(window).on('scroll', function () {
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

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });
  $('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('filter-active');
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
  }); // Testimonials carousel (uses the Owl Carousel library)

  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3N0eWxlLmNzcz9kZjM2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwid2luZG93Iiwib24iLCJsZW5ndGgiLCJkZWxheSIsImZhZGVPdXQiLCJyZW1vdmUiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJmYWRlSW4iLCJjbGljayIsImFuaW1hdGUiLCJXT1ciLCJpbml0Iiwic3VwZXJmaXNoIiwiYW5pbWF0aW9uIiwib3BhY2l0eSIsInNwZWVkIiwiJG1vYmlsZV9uYXYiLCJjbG9uZSIsInByb3AiLCJpZCIsImZpbmQiLCJhdHRyIiwiYXBwZW5kIiwicHJlcGVuZCIsImRvY3VtZW50IiwiZSIsIm5leHQiLCJ0b2dnbGVDbGFzcyIsIm5leHRBbGwiLCJlcSIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlIiwiY29udGFpbmVyIiwiaXMiLCJ0YXJnZXQiLCJoYXMiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGlkZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiaG9zdG5hbWUiLCJoYXNoIiwidG9wX3NwYWNlIiwib3V0ZXJIZWlnaHQiLCJvZmZzZXQiLCJ0b3AiLCJwYXJlbnRzIiwiY2xvc2VzdCIsImFkZENsYXNzIiwibmF2X3NlY3Rpb25zIiwibWFpbl9uYXYiLCJtYWluX25hdl9oZWlnaHQiLCJjb3VudGVyVXAiLCJ0aW1lIiwicG9ydGZvbGlvSXNvdG9wZSIsImlzb3RvcGUiLCJpdGVtU2VsZWN0b3IiLCJsYXlvdXRNb2RlIiwiZmlsdGVyIiwiZGF0YSIsIm93bENhcm91c2VsIiwiYXV0b3BsYXkiLCJkb3RzIiwibG9vcCIsInJlc3BvbnNpdmUiLCJpdGVtcyIsInBhcmVudCIsInNob3ciLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7OztBQ0FBQSxtQkFBTyxDQUFDLGdEQUFELENBQVA7O0FBRUEsQ0FB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QUFDMEIsUUFBRCxDQUFELENBQVl4QixFQUFaLENBQWUsT0FBZixFQUF3QixtQkFBeEIsRUFBNkMsVUFBU3lCLENBQVQsRUFBWTtBQUN2RDNCLEtBQUMsQ0FBQyxNQUFNQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVErRCxJQUFSLENBQWEsV0FBYixDQUFQLENBQUQsQ0FBbUN2QixJQUFuQztBQUNBeEMsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0UsTUFBUixHQUFpQkEsTUFBakIsR0FBMEJBLE1BQTFCLEdBQW1DaEQsSUFBbkMsQ0FBd0MscUJBQXhDLEVBQStEaUQsSUFBL0Q7QUFDRCxHQUhEO0FBSUQsQ0F0TkQsRUFzTkdDLE1BdE5ILEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwicmVxdWlyZSgnLi4vY3NzL3N0eWxlLmNzcycpO1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIC8vIFByZWxvYWRlclxyXG4gICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKCcjcHJlbG9hZGVyJykubGVuZ3RoKSB7XHJcbiAgICAgICQoJyNwcmVsb2FkZXInKS5kZWxheSgxMDApLmZhZGVPdXQoJ3Nsb3cnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIEJhY2sgdG8gdG9wIGJ1dHRvblxyXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDEwMCkge1xyXG4gICAgICAkKCcuYmFjay10by10b3AnKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5iYWNrLXRvLXRvcCcpLmZhZGVPdXQoJ3Nsb3cnKTtcclxuICAgIH1cclxuICB9KTtcclxuICAkKCcuYmFjay10by10b3AnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcCA6IDB9LDE1MDAsICdlYXNlSW5PdXRFeHBvJyk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcblxyXG4gIC8vIEluaXRpYXRlIHRoZSB3b3dqcyBhbmltYXRpb24gbGlicmFyeVxyXG4gIG5ldyBXT1coKS5pbml0KCk7XHJcblxyXG4gIC8vIEluaXRpYXRlIHN1cGVyZmlzaCBvbiBuYXYgbWVudVxyXG4gICQoJy5uYXYtbWVudScpLnN1cGVyZmlzaCh7XHJcbiAgICBhbmltYXRpb246IHtcclxuICAgICAgb3BhY2l0eTogJ3Nob3cnXHJcbiAgICB9LFxyXG4gICAgc3BlZWQ6IDQwMFxyXG4gIH0pO1xyXG5cclxuICAvLyBNb2JpbGUgTmF2aWdhdGlvblxyXG4gIGlmICgkKCcjbmF2LW1lbnUtY29udGFpbmVyJykubGVuZ3RoKSB7XHJcbiAgICB2YXIgJG1vYmlsZV9uYXYgPSAkKCcjbmF2LW1lbnUtY29udGFpbmVyJykuY2xvbmUoKS5wcm9wKHtcclxuICAgICAgaWQ6ICdtb2JpbGUtbmF2J1xyXG4gICAgfSk7XHJcbiAgICAkbW9iaWxlX25hdi5maW5kKCc+IHVsJykuYXR0cih7XHJcbiAgICAgICdjbGFzcyc6ICcnLFxyXG4gICAgICAnaWQnOiAnJ1xyXG4gICAgfSk7XHJcbiAgICAkKCdib2R5JykuYXBwZW5kKCRtb2JpbGVfbmF2KTtcclxuICAgICQoJ2JvZHknKS5wcmVwZW5kKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cIm1vYmlsZS1uYXYtdG9nZ2xlXCI+PGkgY2xhc3M9XCJmYSBmYS1iYXJzXCI+PC9pPjwvYnV0dG9uPicpO1xyXG4gICAgJCgnYm9keScpLmFwcGVuZCgnPGRpdiBpZD1cIm1vYmlsZS1ib2R5LW92ZXJseVwiPjwvZGl2PicpO1xyXG4gICAgJCgnI21vYmlsZS1uYXYnKS5maW5kKCcubWVudS1oYXMtY2hpbGRyZW4nKS5wcmVwZW5kKCc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tZG93blwiPjwvaT4nKTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLm1lbnUtaGFzLWNoaWxkcmVuIGknLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICQodGhpcykubmV4dCgpLnRvZ2dsZUNsYXNzKCdtZW51LWl0ZW0tYWN0aXZlJyk7XHJcbiAgICAgICQodGhpcykubmV4dEFsbCgndWwnKS5lcSgwKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiZmEtY2hldnJvbi11cCBmYS1jaGV2cm9uLWRvd25cIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI21vYmlsZS1uYXYtdG9nZ2xlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ21vYmlsZS1uYXYtYWN0aXZlJyk7XHJcbiAgICAgICQoJyNtb2JpbGUtbmF2LXRvZ2dsZSBpJykudG9nZ2xlQ2xhc3MoJ2ZhLXRpbWVzIGZhLWJhcnMnKTtcclxuICAgICAgJCgnI21vYmlsZS1ib2R5LW92ZXJseScpLnRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICB2YXIgY29udGFpbmVyID0gJChcIiNtb2JpbGUtbmF2LCAjbW9iaWxlLW5hdi10b2dnbGVcIik7XHJcbiAgICAgIGlmICghY29udGFpbmVyLmlzKGUudGFyZ2V0KSAmJiBjb250YWluZXIuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdtb2JpbGUtbmF2LWFjdGl2ZScpKSB7XHJcbiAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vYmlsZS1uYXYtYWN0aXZlJyk7XHJcbiAgICAgICAgICAkKCcjbW9iaWxlLW5hdi10b2dnbGUgaScpLnRvZ2dsZUNsYXNzKCdmYS10aW1lcyBmYS1iYXJzJyk7XHJcbiAgICAgICAgICAkKCcjbW9iaWxlLWJvZHktb3Zlcmx5JykuZmFkZU91dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmICgkKFwiI21vYmlsZS1uYXYsICNtb2JpbGUtbmF2LXRvZ2dsZVwiKS5sZW5ndGgpIHtcclxuICAgICQoXCIjbW9iaWxlLW5hdiwgI21vYmlsZS1uYXYtdG9nZ2xlXCIpLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIC8vIEhlYWRlciBzY3JvbGwgY2xhc3NcclxuICAvLyAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiA5MCkge1xyXG4gIC8vICAgICAkKCcjaGVhZGVyJykuYWRkQ2xhc3MoJ2hlYWRlci1zY3JvbGxlZCcpO1xyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgJCgnI2hlYWRlcicpLnJlbW92ZUNsYXNzKCdoZWFkZXItc2Nyb2xsZWQnKTtcclxuICAvLyAgIH1cclxuICAvLyB9KTtcclxuXHJcbiAgLy8gaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDkwKSB7XHJcbiAgLy8gICAkKCcjaGVhZGVyJykuYWRkQ2xhc3MoJ2hlYWRlci1zY3JvbGxlZCcpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gU21vb3RoIHNjcm9sbCBmb3IgdGhlIG1lbnUgYW5kIGxpbmtzIHdpdGggLnNjcm9sbHRvIGNsYXNzZXNcclxuICAkKCcubmF2LW1lbnUgYSwgI21vYmlsZS1uYXYgYSwgLnNjcm9sbHRvJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgJiYgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZSkge1xyXG4gICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xyXG4gICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xyXG4gICAgICAgIHZhciB0b3Bfc3BhY2UgPSAwO1xyXG5cclxuICAgICAgICBpZiAoJCgnI2hlYWRlcicpLmxlbmd0aCkge1xyXG4gICAgICAgICAgdG9wX3NwYWNlID0gJCgnI2hlYWRlcicpLm91dGVySGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgaWYgKCEgJCgnI2hlYWRlcicpLmhhc0NsYXNzKCdoZWFkZXItc2Nyb2xsZWQnKSkge1xyXG4gICAgICAgICAgICB0b3Bfc3BhY2UgPSB0b3Bfc3BhY2UgLSAyMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIHRvcF9zcGFjZVxyXG4gICAgICAgIH0sIDE1MDAsICdlYXNlSW5PdXRFeHBvJyk7XHJcblxyXG4gICAgICAgIGlmICgkKHRoaXMpLnBhcmVudHMoJy5uYXYtbWVudScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgJCgnLm5hdi1tZW51IC5tZW51LWFjdGl2ZScpLnJlbW92ZUNsYXNzKCdtZW51LWFjdGl2ZScpO1xyXG4gICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCdtZW51LWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygnbW9iaWxlLW5hdi1hY3RpdmUnKSkge1xyXG4gICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2JpbGUtbmF2LWFjdGl2ZScpO1xyXG4gICAgICAgICAgJCgnI21vYmlsZS1uYXYtdG9nZ2xlIGknKS50b2dnbGVDbGFzcygnZmEtdGltZXMgZmEtYmFycycpO1xyXG4gICAgICAgICAgJCgnI21vYmlsZS1ib2R5LW92ZXJseScpLmZhZGVPdXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIE5hdmlnYXRpb24gYWN0aXZlIHN0YXRlIG9uIHNjcm9sbFxyXG4gIHZhciBuYXZfc2VjdGlvbnMgPSAkKCdzZWN0aW9uJyk7XHJcbiAgdmFyIG1haW5fbmF2ID0gJCgnLm5hdi1tZW51LCAjbW9iaWxlLW5hdicpO1xyXG4gIHZhciBtYWluX25hdl9oZWlnaHQgPSAkKCcjaGVhZGVyJykub3V0ZXJIZWlnaHQoKTtcclxuXHJcbiAgLy8gJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICB2YXIgY3VyX3BvcyA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcbiAgLy9cclxuICAvLyAgIG5hdl9zZWN0aW9ucy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgICB2YXIgdG9wID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgLSBtYWluX25hdl9oZWlnaHQsXHJcbiAgLy8gICAgICAgICBib3R0b20gPSB0b3AgKyAkKHRoaXMpLm91dGVySGVpZ2h0KCk7XHJcbiAgLy9cclxuICAvLyAgICAgaWYgKGN1cl9wb3MgPj0gdG9wICYmIGN1cl9wb3MgPD0gYm90dG9tKSB7XHJcbiAgLy8gICAgICAgbWFpbl9uYXYuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnbWVudS1hY3RpdmUgbWVudS1pdGVtLWFjdGl2ZScpO1xyXG4gIC8vICAgICAgIG1haW5fbmF2LmZpbmQoJ2FbaHJlZj1cIiMnKyQodGhpcykuYXR0cignaWQnKSsnXCJdJykucGFyZW50KCdsaScpLmFkZENsYXNzKCdtZW51LWFjdGl2ZSBtZW51LWl0ZW0tYWN0aXZlJyk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0pO1xyXG4gIC8vIH0pO1xyXG5cclxuICAvLyBJbnRybyBjYXJvdXNlbFxyXG4gIC8vIHZhciBpbnRyb0Nhcm91c2VsID0gJChcIi5jYXJvdXNlbFwiKTtcclxuICAvLyB2YXIgaW50cm9DYXJvdXNlbEluZGljYXRvcnMgPSAkKFwiLmNhcm91c2VsLWluZGljYXRvcnNcIik7XHJcbiAgLy8gaW50cm9DYXJvdXNlbC5maW5kKFwiLmNhcm91c2VsLWlubmVyXCIpLmNoaWxkcmVuKFwiLmNhcm91c2VsLWl0ZW1cIikuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG4gIC8vICAgKGluZGV4ID09PSAwKSA/XHJcbiAgLy8gICBpbnRyb0Nhcm91c2VsSW5kaWNhdG9ycy5hcHBlbmQoXCI8bGkgZGF0YS10YXJnZXQ9JyNpbnRyb0Nhcm91c2VsJyBkYXRhLXNsaWRlLXRvPSdcIiArIGluZGV4ICsgXCInIGNsYXNzPSdhY3RpdmUnPjwvbGk+XCIpIDpcclxuICAvLyAgIGludHJvQ2Fyb3VzZWxJbmRpY2F0b3JzLmFwcGVuZChcIjxsaSBkYXRhLXRhcmdldD0nI2ludHJvQ2Fyb3VzZWwnIGRhdGEtc2xpZGUtdG89J1wiICsgaW5kZXggKyBcIic+PC9saT5cIik7XHJcbiAgLy9cclxuICAvLyAgICQodGhpcykuY3NzKFwiYmFja2dyb3VuZC1pbWFnZVwiLCBcInVybCgnXCIgKyAkKHRoaXMpLmNoaWxkcmVuKCcuY2Fyb3VzZWwtYmFja2dyb3VuZCcpLmNoaWxkcmVuKCdpbWcnKS5hdHRyKCdzcmMnKSArXCInKVwiKTtcclxuICAvLyAgICQodGhpcykuY2hpbGRyZW4oJy5jYXJvdXNlbC1iYWNrZ3JvdW5kJykucmVtb3ZlKCk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vICQoXCIuY2Fyb3VzZWxcIikuc3dpcGUoe1xyXG4gIC8vICAgc3dpcGU6IGZ1bmN0aW9uKGV2ZW50LCBkaXJlY3Rpb24sIGRpc3RhbmNlLCBkdXJhdGlvbiwgZmluZ2VyQ291bnQsIGZpbmdlckRhdGEpIHtcclxuICAvLyAgICAgaWYgKGRpcmVjdGlvbiA9PSAnbGVmdCcpICQodGhpcykuY2Fyb3VzZWwoJ25leHQnKTtcclxuICAvLyAgICAgaWYgKGRpcmVjdGlvbiA9PSAncmlnaHQnKSAkKHRoaXMpLmNhcm91c2VsKCdwcmV2Jyk7XHJcbiAgLy8gICB9LFxyXG4gIC8vICAgYWxsb3dQYWdlU2Nyb2xsOlwidmVydGljYWxcIlxyXG4gIC8vIH0pO1xyXG5cclxuICAvLyBTa2lsbHMgc2VjdGlvblxyXG4gIC8vICQoJyNza2lsbHMnKS53YXlwb2ludChmdW5jdGlvbigpIHtcclxuICAvLyAgICQoJy5wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAvLyAgICAgJCh0aGlzKS5jc3MoXCJ3aWR0aFwiLCAkKHRoaXMpLmF0dHIoXCJhcmlhLXZhbHVlbm93XCIpICsgJyUnKTtcclxuICAvLyAgIH0pO1xyXG4gIC8vIH0sIHsgb2Zmc2V0OiAnODAlJ30gKTtcclxuXHJcbiAgLy8galF1ZXJ5IGNvdW50ZXJVcCAodXNlZCBpbiBGYWN0cyBzZWN0aW9uKVxyXG4gICQoJ1tkYXRhLXRvZ2dsZT1cImNvdW50ZXItdXBcIl0nKS5jb3VudGVyVXAoe1xyXG4gICAgZGVsYXk6IDEwLFxyXG4gICAgdGltZTogMTAwMFxyXG4gIH0pO1xyXG5cclxuICAvLyBQb3Jmb2xpbyBpc290b3BlIGFuZCBmaWx0ZXJcclxuICB2YXIgcG9ydGZvbGlvSXNvdG9wZSA9ICQoJy5wb3J0Zm9saW8tY29udGFpbmVyJykuaXNvdG9wZSh7XHJcbiAgICBpdGVtU2VsZWN0b3I6ICcucG9ydGZvbGlvLWl0ZW0nLFxyXG4gICAgbGF5b3V0TW9kZTogJ2ZpdFJvd3MnXHJcbiAgfSk7XHJcblxyXG4gICQoJyNwb3J0Zm9saW8tZmx0ZXJzIGxpJykub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIiNwb3J0Zm9saW8tZmx0ZXJzIGxpXCIpLnJlbW92ZUNsYXNzKCdmaWx0ZXItYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdmaWx0ZXItYWN0aXZlJyk7XHJcblxyXG4gICAgcG9ydGZvbGlvSXNvdG9wZS5pc290b3BlKHsgZmlsdGVyOiAkKHRoaXMpLmRhdGEoJ2ZpbHRlcicpIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBDbGllbnRzIGNhcm91c2VsICh1c2VzIHRoZSBPd2wgQ2Fyb3VzZWwgbGlicmFyeSlcclxuICAkKFwiLmNsaWVudHMtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IHsgMDogeyBpdGVtczogMiB9LCA3Njg6IHsgaXRlbXM6IDQgfSwgOTAwOiB7IGl0ZW1zOiA2IH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gVGVzdGltb25pYWxzIGNhcm91c2VsICh1c2VzIHRoZSBPd2wgQ2Fyb3VzZWwgbGlicmFyeSlcclxuICAkKFwiLnRlc3RpbW9uaWFscy1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgaXRlbXM6IDFcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jb2xsYXBzZS10ZXh0LWRvd24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJyMnICsgJCh0aGlzKS5kYXRhKCd0YXJnZXQtaWQnKSkuc2hvdygpO1xyXG4gICAgJCh0aGlzKS5oaWRlKCk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY29sbGFwc2UtdGV4dC11cCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICQoJyMnICsgJCh0aGlzKS5kYXRhKCd0YXJnZXQtaWQnKSkuaGlkZSgpO1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcuY29sbGFwc2UtdGV4dC1kb3duJykuc2hvdygpO1xyXG4gIH0pO1xyXG59KShqUXVlcnkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9