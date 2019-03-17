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
  // $(".testimonials-carousel").owlCarousel({
  //   autoplay: true,
  //   dots: true,
  //   loop: true,
  //   items: 1
  // });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3N0eWxlLmNzcz9kZjM2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwid2luZG93Iiwib24iLCJsZW5ndGgiLCJkZWxheSIsImZhZGVPdXQiLCJyZW1vdmUiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJmYWRlSW4iLCJjbGljayIsImFuaW1hdGUiLCJXT1ciLCJpbml0Iiwic3VwZXJmaXNoIiwiYW5pbWF0aW9uIiwib3BhY2l0eSIsInNwZWVkIiwiJG1vYmlsZV9uYXYiLCJjbG9uZSIsInByb3AiLCJpZCIsImZpbmQiLCJhdHRyIiwiYXBwZW5kIiwicHJlcGVuZCIsImRvY3VtZW50IiwiZSIsIm5leHQiLCJ0b2dnbGVDbGFzcyIsIm5leHRBbGwiLCJlcSIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlIiwiY29udGFpbmVyIiwiaXMiLCJ0YXJnZXQiLCJoYXMiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGlkZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiaG9zdG5hbWUiLCJoYXNoIiwidG9wX3NwYWNlIiwib3V0ZXJIZWlnaHQiLCJvZmZzZXQiLCJ0b3AiLCJwYXJlbnRzIiwiY2xvc2VzdCIsImFkZENsYXNzIiwibmF2X3NlY3Rpb25zIiwibWFpbl9uYXYiLCJtYWluX25hdl9oZWlnaHQiLCJjb3VudGVyVXAiLCJ0aW1lIiwicG9ydGZvbGlvSXNvdG9wZSIsImlzb3RvcGUiLCJpdGVtU2VsZWN0b3IiLCJsYXlvdXRNb2RlIiwiZmlsdGVyIiwiZGF0YSIsIm93bENhcm91c2VsIiwiYXV0b3BsYXkiLCJkb3RzIiwibG9vcCIsInJlc3BvbnNpdmUiLCJpdGVtcyIsInBhcmVudCIsInNob3ciLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7OztBQ0FBQSxtQkFBTyxDQUFDLGdEQUFELENBQVA7O0FBRUEsQ0FB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RCxDQUFRK0QsSUFBUixDQUFhLFdBQWIsQ0FBUCxDQUFELENBQW1DdkIsSUFBbkM7QUFDQXhDLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNFLE1BQVIsR0FBaUJBLE1BQWpCLEdBQTBCQSxNQUExQixHQUFtQ2hELElBQW5DLENBQXdDLHFCQUF4QyxFQUErRGlELElBQS9EO0FBQ0QsR0FIRDtBQUlELENBdE5ELEVBc05HQyxNQXROSCxFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInJlcXVpcmUoJy4uL2Nzcy9zdHlsZS5jc3MnKTtcclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAvLyBQcmVsb2FkZXJcclxuICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCgnI3ByZWxvYWRlcicpLmxlbmd0aCkge1xyXG4gICAgICAkKCcjcHJlbG9hZGVyJykuZGVsYXkoMTAwKS5mYWRlT3V0KCdzbG93JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBCYWNrIHRvIHRvcCBidXR0b25cclxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAxMDApIHtcclxuICAgICAgJCgnLmJhY2stdG8tdG9wJykuZmFkZUluKCdzbG93Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcuYmFjay10by10b3AnKS5mYWRlT3V0KCdzbG93Jyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJCgnLmJhY2stdG8tdG9wJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3AgOiAwfSwxNTAwLCAnZWFzZUluT3V0RXhwbycpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG5cclxuICAvLyBJbml0aWF0ZSB0aGUgd293anMgYW5pbWF0aW9uIGxpYnJhcnlcclxuICBuZXcgV09XKCkuaW5pdCgpO1xyXG5cclxuICAvLyBJbml0aWF0ZSBzdXBlcmZpc2ggb24gbmF2IG1lbnVcclxuICAkKCcubmF2LW1lbnUnKS5zdXBlcmZpc2goe1xyXG4gICAgYW5pbWF0aW9uOiB7XHJcbiAgICAgIG9wYWNpdHk6ICdzaG93J1xyXG4gICAgfSxcclxuICAgIHNwZWVkOiA0MDBcclxuICB9KTtcclxuXHJcbiAgLy8gTW9iaWxlIE5hdmlnYXRpb25cclxuICBpZiAoJCgnI25hdi1tZW51LWNvbnRhaW5lcicpLmxlbmd0aCkge1xyXG4gICAgdmFyICRtb2JpbGVfbmF2ID0gJCgnI25hdi1tZW51LWNvbnRhaW5lcicpLmNsb25lKCkucHJvcCh7XHJcbiAgICAgIGlkOiAnbW9iaWxlLW5hdidcclxuICAgIH0pO1xyXG4gICAgJG1vYmlsZV9uYXYuZmluZCgnPiB1bCcpLmF0dHIoe1xyXG4gICAgICAnY2xhc3MnOiAnJyxcclxuICAgICAgJ2lkJzogJydcclxuICAgIH0pO1xyXG4gICAgJCgnYm9keScpLmFwcGVuZCgkbW9iaWxlX25hdik7XHJcbiAgICAkKCdib2R5JykucHJlcGVuZCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJtb2JpbGUtbmF2LXRvZ2dsZVwiPjxpIGNsYXNzPVwiZmEgZmEtYmFyc1wiPjwvaT48L2J1dHRvbj4nKTtcclxuICAgICQoJ2JvZHknKS5hcHBlbmQoJzxkaXYgaWQ9XCJtb2JpbGUtYm9keS1vdmVybHlcIj48L2Rpdj4nKTtcclxuICAgICQoJyNtb2JpbGUtbmF2JykuZmluZCgnLm1lbnUtaGFzLWNoaWxkcmVuJykucHJlcGVuZCgnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWRvd25cIj48L2k+Jyk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tZW51LWhhcy1jaGlsZHJlbiBpJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAkKHRoaXMpLm5leHQoKS50b2dnbGVDbGFzcygnbWVudS1pdGVtLWFjdGl2ZScpO1xyXG4gICAgICAkKHRoaXMpLm5leHRBbGwoJ3VsJykuZXEoMCkuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImZhLWNoZXZyb24tdXAgZmEtY2hldnJvbi1kb3duXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNtb2JpbGUtbmF2LXRvZ2dsZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdtb2JpbGUtbmF2LWFjdGl2ZScpO1xyXG4gICAgICAkKCcjbW9iaWxlLW5hdi10b2dnbGUgaScpLnRvZ2dsZUNsYXNzKCdmYS10aW1lcyBmYS1iYXJzJyk7XHJcbiAgICAgICQoJyNtb2JpbGUtYm9keS1vdmVybHknKS50b2dnbGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdmFyIGNvbnRhaW5lciA9ICQoXCIjbW9iaWxlLW5hdiwgI21vYmlsZS1uYXYtdG9nZ2xlXCIpO1xyXG4gICAgICBpZiAoIWNvbnRhaW5lci5pcyhlLnRhcmdldCkgJiYgY29udGFpbmVyLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygnbW9iaWxlLW5hdi1hY3RpdmUnKSkge1xyXG4gICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2JpbGUtbmF2LWFjdGl2ZScpO1xyXG4gICAgICAgICAgJCgnI21vYmlsZS1uYXYtdG9nZ2xlIGknKS50b2dnbGVDbGFzcygnZmEtdGltZXMgZmEtYmFycycpO1xyXG4gICAgICAgICAgJCgnI21vYmlsZS1ib2R5LW92ZXJseScpLmZhZGVPdXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAoJChcIiNtb2JpbGUtbmF2LCAjbW9iaWxlLW5hdi10b2dnbGVcIikubGVuZ3RoKSB7XHJcbiAgICAkKFwiI21vYmlsZS1uYXYsICNtb2JpbGUtbmF2LXRvZ2dsZVwiKS5oaWRlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBIZWFkZXIgc2Nyb2xsIGNsYXNzXHJcbiAgLy8gJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAvLyAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gOTApIHtcclxuICAvLyAgICAgJCgnI2hlYWRlcicpLmFkZENsYXNzKCdoZWFkZXItc2Nyb2xsZWQnKTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICQoJyNoZWFkZXInKS5yZW1vdmVDbGFzcygnaGVhZGVyLXNjcm9sbGVkJyk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiA5MCkge1xyXG4gIC8vICAgJCgnI2hlYWRlcicpLmFkZENsYXNzKCdoZWFkZXItc2Nyb2xsZWQnKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIFNtb290aCBzY3JvbGwgZm9yIHRoZSBtZW51IGFuZCBsaW5rcyB3aXRoIC5zY3JvbGx0byBjbGFzc2VzXHJcbiAgJCgnLm5hdi1tZW51IGEsICNtb2JpbGUtbmF2IGEsIC5zY3JvbGx0bycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcclxuICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcclxuICAgICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgdG9wX3NwYWNlID0gMDtcclxuXHJcbiAgICAgICAgaWYgKCQoJyNoZWFkZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgIHRvcF9zcGFjZSA9ICQoJyNoZWFkZXInKS5vdXRlckhlaWdodCgpO1xyXG5cclxuICAgICAgICAgIGlmICghICQoJyNoZWFkZXInKS5oYXNDbGFzcygnaGVhZGVyLXNjcm9sbGVkJykpIHtcclxuICAgICAgICAgICAgdG9wX3NwYWNlID0gdG9wX3NwYWNlIC0gMjA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3AgLSB0b3Bfc3BhY2VcclxuICAgICAgICB9LCAxNTAwLCAnZWFzZUluT3V0RXhwbycpO1xyXG5cclxuICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnRzKCcubmF2LW1lbnUnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICQoJy5uYXYtbWVudSAubWVudS1hY3RpdmUnKS5yZW1vdmVDbGFzcygnbWVudS1hY3RpdmUnKTtcclxuICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnbGknKS5hZGRDbGFzcygnbWVudS1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ21vYmlsZS1uYXYtYWN0aXZlJykpIHtcclxuICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9iaWxlLW5hdi1hY3RpdmUnKTtcclxuICAgICAgICAgICQoJyNtb2JpbGUtbmF2LXRvZ2dsZSBpJykudG9nZ2xlQ2xhc3MoJ2ZhLXRpbWVzIGZhLWJhcnMnKTtcclxuICAgICAgICAgICQoJyNtb2JpbGUtYm9keS1vdmVybHknKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBOYXZpZ2F0aW9uIGFjdGl2ZSBzdGF0ZSBvbiBzY3JvbGxcclxuICB2YXIgbmF2X3NlY3Rpb25zID0gJCgnc2VjdGlvbicpO1xyXG4gIHZhciBtYWluX25hdiA9ICQoJy5uYXYtbWVudSwgI21vYmlsZS1uYXYnKTtcclxuICB2YXIgbWFpbl9uYXZfaGVpZ2h0ID0gJCgnI2hlYWRlcicpLm91dGVySGVpZ2h0KCk7XHJcblxyXG4gIC8vICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gIC8vICAgdmFyIGN1cl9wb3MgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG4gIC8vXHJcbiAgLy8gICBuYXZfc2VjdGlvbnMuZWFjaChmdW5jdGlvbigpIHtcclxuICAvLyAgICAgdmFyIHRvcCA9ICQodGhpcykub2Zmc2V0KCkudG9wIC0gbWFpbl9uYXZfaGVpZ2h0LFxyXG4gIC8vICAgICAgICAgYm90dG9tID0gdG9wICsgJCh0aGlzKS5vdXRlckhlaWdodCgpO1xyXG4gIC8vXHJcbiAgLy8gICAgIGlmIChjdXJfcG9zID49IHRvcCAmJiBjdXJfcG9zIDw9IGJvdHRvbSkge1xyXG4gIC8vICAgICAgIG1haW5fbmF2LmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ21lbnUtYWN0aXZlIG1lbnUtaXRlbS1hY3RpdmUnKTtcclxuICAvLyAgICAgICBtYWluX25hdi5maW5kKCdhW2hyZWY9XCIjJyskKHRoaXMpLmF0dHIoJ2lkJykrJ1wiXScpLnBhcmVudCgnbGknKS5hZGRDbGFzcygnbWVudS1hY3RpdmUgbWVudS1pdGVtLWFjdGl2ZScpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KTtcclxuICAvLyB9KTtcclxuXHJcbiAgLy8gSW50cm8gY2Fyb3VzZWxcclxuICAvLyB2YXIgaW50cm9DYXJvdXNlbCA9ICQoXCIuY2Fyb3VzZWxcIik7XHJcbiAgLy8gdmFyIGludHJvQ2Fyb3VzZWxJbmRpY2F0b3JzID0gJChcIi5jYXJvdXNlbC1pbmRpY2F0b3JzXCIpO1xyXG4gIC8vIGludHJvQ2Fyb3VzZWwuZmluZChcIi5jYXJvdXNlbC1pbm5lclwiKS5jaGlsZHJlbihcIi5jYXJvdXNlbC1pdGVtXCIpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcclxuICAvLyAgIChpbmRleCA9PT0gMCkgP1xyXG4gIC8vICAgaW50cm9DYXJvdXNlbEluZGljYXRvcnMuYXBwZW5kKFwiPGxpIGRhdGEtdGFyZ2V0PScjaW50cm9DYXJvdXNlbCcgZGF0YS1zbGlkZS10bz0nXCIgKyBpbmRleCArIFwiJyBjbGFzcz0nYWN0aXZlJz48L2xpPlwiKSA6XHJcbiAgLy8gICBpbnRyb0Nhcm91c2VsSW5kaWNhdG9ycy5hcHBlbmQoXCI8bGkgZGF0YS10YXJnZXQ9JyNpbnRyb0Nhcm91c2VsJyBkYXRhLXNsaWRlLXRvPSdcIiArIGluZGV4ICsgXCInPjwvbGk+XCIpO1xyXG4gIC8vXHJcbiAgLy8gICAkKHRoaXMpLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIiwgXCJ1cmwoJ1wiICsgJCh0aGlzKS5jaGlsZHJlbignLmNhcm91c2VsLWJhY2tncm91bmQnKS5jaGlsZHJlbignaW1nJykuYXR0cignc3JjJykgK1wiJylcIik7XHJcbiAgLy8gICAkKHRoaXMpLmNoaWxkcmVuKCcuY2Fyb3VzZWwtYmFja2dyb3VuZCcpLnJlbW92ZSgpO1xyXG4gIC8vIH0pO1xyXG5cclxuICAvLyAkKFwiLmNhcm91c2VsXCIpLnN3aXBlKHtcclxuICAvLyAgIHN3aXBlOiBmdW5jdGlvbihldmVudCwgZGlyZWN0aW9uLCBkaXN0YW5jZSwgZHVyYXRpb24sIGZpbmdlckNvdW50LCBmaW5nZXJEYXRhKSB7XHJcbiAgLy8gICAgIGlmIChkaXJlY3Rpb24gPT0gJ2xlZnQnKSAkKHRoaXMpLmNhcm91c2VsKCduZXh0Jyk7XHJcbiAgLy8gICAgIGlmIChkaXJlY3Rpb24gPT0gJ3JpZ2h0JykgJCh0aGlzKS5jYXJvdXNlbCgncHJldicpO1xyXG4gIC8vICAgfSxcclxuICAvLyAgIGFsbG93UGFnZVNjcm9sbDpcInZlcnRpY2FsXCJcclxuICAvLyB9KTtcclxuXHJcbiAgLy8gU2tpbGxzIHNlY3Rpb25cclxuICAvLyAkKCcjc2tpbGxzJykud2F5cG9pbnQoZnVuY3Rpb24oKSB7XHJcbiAgLy8gICAkKCcucHJvZ3Jlc3MgLnByb2dyZXNzLWJhcicpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgLy8gICAgICQodGhpcykuY3NzKFwid2lkdGhcIiwgJCh0aGlzKS5hdHRyKFwiYXJpYS12YWx1ZW5vd1wiKSArICclJyk7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9LCB7IG9mZnNldDogJzgwJSd9ICk7XHJcblxyXG4gIC8vIGpRdWVyeSBjb3VudGVyVXAgKHVzZWQgaW4gRmFjdHMgc2VjdGlvbilcclxuICAkKCdbZGF0YS10b2dnbGU9XCJjb3VudGVyLXVwXCJdJykuY291bnRlclVwKHtcclxuICAgIGRlbGF5OiAxMCxcclxuICAgIHRpbWU6IDEwMDBcclxuICB9KTtcclxuXHJcbiAgLy8gUG9yZm9saW8gaXNvdG9wZSBhbmQgZmlsdGVyXHJcbiAgdmFyIHBvcnRmb2xpb0lzb3RvcGUgPSAkKCcucG9ydGZvbGlvLWNvbnRhaW5lcicpLmlzb3RvcGUoe1xyXG4gICAgaXRlbVNlbGVjdG9yOiAnLnBvcnRmb2xpby1pdGVtJyxcclxuICAgIGxheW91dE1vZGU6ICdmaXRSb3dzJ1xyXG4gIH0pO1xyXG5cclxuICAkKCcjcG9ydGZvbGlvLWZsdGVycyBsaScpLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICQoXCIjcG9ydGZvbGlvLWZsdGVycyBsaVwiKS5yZW1vdmVDbGFzcygnZmlsdGVyLWFjdGl2ZScpO1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnZmlsdGVyLWFjdGl2ZScpO1xyXG5cclxuICAgIHBvcnRmb2xpb0lzb3RvcGUuaXNvdG9wZSh7IGZpbHRlcjogJCh0aGlzKS5kYXRhKCdmaWx0ZXInKSB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gQ2xpZW50cyBjYXJvdXNlbCAodXNlcyB0aGUgT3dsIENhcm91c2VsIGxpYnJhcnkpXHJcbiAgJChcIi5jbGllbnRzLWNhcm91c2VsXCIpLm93bENhcm91c2VsKHtcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiB7IDA6IHsgaXRlbXM6IDIgfSwgNzY4OiB7IGl0ZW1zOiA0IH0sIDkwMDogeyBpdGVtczogNiB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIFRlc3RpbW9uaWFscyBjYXJvdXNlbCAodXNlcyB0aGUgT3dsIENhcm91c2VsIGxpYnJhcnkpXHJcbiAgLy8gJChcIi50ZXN0aW1vbmlhbHMtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4gIC8vICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgLy8gICBkb3RzOiB0cnVlLFxyXG4gIC8vICAgbG9vcDogdHJ1ZSxcclxuICAvLyAgIGl0ZW1zOiAxXHJcbiAgLy8gfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY29sbGFwc2UtdGV4dC1kb3duJywgZnVuY3Rpb24oZSkge1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcjJyArICQodGhpcykuZGF0YSgndGFyZ2V0LWlkJykpLnNob3coKTtcclxuICAgICQodGhpcykuaGlkZSgpO1xyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNvbGxhcHNlLXRleHQtdXAnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAkKCcjJyArICQodGhpcykuZGF0YSgndGFyZ2V0LWlkJykpLmhpZGUoKTtcclxuICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuZmluZCgnLmNvbGxhcHNlLXRleHQtZG93bicpLnNob3coKTtcclxuICB9KTtcclxufSkoalF1ZXJ5KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==