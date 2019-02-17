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
  var main_nav_height = $('#header').outerHeight();
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    nav_sections.each(function () {
      var top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('menu-active menu-item-active');
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('menu-active menu-item-active');
      }
    });
  }); // Intro carousel
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
})(jQuery);

/***/ })

},[["./assets/js/main.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3N0eWxlLmNzcz9kZjM2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwid2luZG93Iiwib24iLCJsZW5ndGgiLCJkZWxheSIsImZhZGVPdXQiLCJyZW1vdmUiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJmYWRlSW4iLCJjbGljayIsImFuaW1hdGUiLCJXT1ciLCJpbml0Iiwic3VwZXJmaXNoIiwiYW5pbWF0aW9uIiwib3BhY2l0eSIsInNwZWVkIiwiJG1vYmlsZV9uYXYiLCJjbG9uZSIsInByb3AiLCJpZCIsImZpbmQiLCJhdHRyIiwiYXBwZW5kIiwicHJlcGVuZCIsImRvY3VtZW50IiwiZSIsIm5leHQiLCJ0b2dnbGVDbGFzcyIsIm5leHRBbGwiLCJlcSIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlIiwiY29udGFpbmVyIiwiaXMiLCJ0YXJnZXQiLCJoYXMiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGlkZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiaG9zdG5hbWUiLCJoYXNoIiwidG9wX3NwYWNlIiwib3V0ZXJIZWlnaHQiLCJvZmZzZXQiLCJ0b3AiLCJwYXJlbnRzIiwiY2xvc2VzdCIsImFkZENsYXNzIiwibmF2X3NlY3Rpb25zIiwibWFpbl9uYXYiLCJtYWluX25hdl9oZWlnaHQiLCJjdXJfcG9zIiwiZWFjaCIsImJvdHRvbSIsInBhcmVudCIsImNvdW50ZXJVcCIsInRpbWUiLCJwb3J0Zm9saW9Jc290b3BlIiwiaXNvdG9wZSIsIml0ZW1TZWxlY3RvciIsImxheW91dE1vZGUiLCJmaWx0ZXIiLCJkYXRhIiwib3dsQ2Fyb3VzZWwiLCJhdXRvcGxheSIsImRvdHMiLCJsb29wIiwicmVzcG9uc2l2ZSIsIml0ZW1zIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQUEsbUJBQU8sQ0FBQyxn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QUFLLEVBQUU7QUFBVCxPQUFMO0FBQW1CLFdBQUs7QUFBRUEsYUFBSyxFQUFFO0FBQVQsT0FBeEI7QUFBc0MsV0FBSztBQUFFQSxhQUFLLEVBQUU7QUFBVDtBQUEzQztBQUpxQixHQUFuQyxFQTdMWSxDQXFNWjs7QUFDQXpFLEdBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCb0UsV0FBNUIsQ0FBd0M7QUFDdENDLFlBQVEsRUFBRSxJQUQ0QjtBQUV0Q0MsUUFBSSxFQUFFLElBRmdDO0FBR3RDQyxRQUFJLEVBQUUsSUFIZ0M7QUFJdENFLFNBQUssRUFBRTtBQUorQixHQUF4QztBQU9ELENBN01ELEVBNk1HQyxNQTdNSCxFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInJlcXVpcmUoJy4uL2Nzcy9zdHlsZS5jc3MnKTtcclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAvLyBQcmVsb2FkZXJcclxuICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCgnI3ByZWxvYWRlcicpLmxlbmd0aCkge1xyXG4gICAgICAkKCcjcHJlbG9hZGVyJykuZGVsYXkoMTAwKS5mYWRlT3V0KCdzbG93JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBCYWNrIHRvIHRvcCBidXR0b25cclxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAxMDApIHtcclxuICAgICAgJCgnLmJhY2stdG8tdG9wJykuZmFkZUluKCdzbG93Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcuYmFjay10by10b3AnKS5mYWRlT3V0KCdzbG93Jyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJCgnLmJhY2stdG8tdG9wJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3AgOiAwfSwxNTAwLCAnZWFzZUluT3V0RXhwbycpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG5cclxuICAvLyBJbml0aWF0ZSB0aGUgd293anMgYW5pbWF0aW9uIGxpYnJhcnlcclxuICBuZXcgV09XKCkuaW5pdCgpO1xyXG5cclxuICAvLyBJbml0aWF0ZSBzdXBlcmZpc2ggb24gbmF2IG1lbnVcclxuICAkKCcubmF2LW1lbnUnKS5zdXBlcmZpc2goe1xyXG4gICAgYW5pbWF0aW9uOiB7XHJcbiAgICAgIG9wYWNpdHk6ICdzaG93J1xyXG4gICAgfSxcclxuICAgIHNwZWVkOiA0MDBcclxuICB9KTtcclxuXHJcbiAgLy8gTW9iaWxlIE5hdmlnYXRpb25cclxuICBpZiAoJCgnI25hdi1tZW51LWNvbnRhaW5lcicpLmxlbmd0aCkge1xyXG4gICAgdmFyICRtb2JpbGVfbmF2ID0gJCgnI25hdi1tZW51LWNvbnRhaW5lcicpLmNsb25lKCkucHJvcCh7XHJcbiAgICAgIGlkOiAnbW9iaWxlLW5hdidcclxuICAgIH0pO1xyXG4gICAgJG1vYmlsZV9uYXYuZmluZCgnPiB1bCcpLmF0dHIoe1xyXG4gICAgICAnY2xhc3MnOiAnJyxcclxuICAgICAgJ2lkJzogJydcclxuICAgIH0pO1xyXG4gICAgJCgnYm9keScpLmFwcGVuZCgkbW9iaWxlX25hdik7XHJcbiAgICAkKCdib2R5JykucHJlcGVuZCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJtb2JpbGUtbmF2LXRvZ2dsZVwiPjxpIGNsYXNzPVwiZmEgZmEtYmFyc1wiPjwvaT48L2J1dHRvbj4nKTtcclxuICAgICQoJ2JvZHknKS5hcHBlbmQoJzxkaXYgaWQ9XCJtb2JpbGUtYm9keS1vdmVybHlcIj48L2Rpdj4nKTtcclxuICAgICQoJyNtb2JpbGUtbmF2JykuZmluZCgnLm1lbnUtaGFzLWNoaWxkcmVuJykucHJlcGVuZCgnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWRvd25cIj48L2k+Jyk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tZW51LWhhcy1jaGlsZHJlbiBpJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAkKHRoaXMpLm5leHQoKS50b2dnbGVDbGFzcygnbWVudS1pdGVtLWFjdGl2ZScpO1xyXG4gICAgICAkKHRoaXMpLm5leHRBbGwoJ3VsJykuZXEoMCkuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImZhLWNoZXZyb24tdXAgZmEtY2hldnJvbi1kb3duXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNtb2JpbGUtbmF2LXRvZ2dsZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdtb2JpbGUtbmF2LWFjdGl2ZScpO1xyXG4gICAgICAkKCcjbW9iaWxlLW5hdi10b2dnbGUgaScpLnRvZ2dsZUNsYXNzKCdmYS10aW1lcyBmYS1iYXJzJyk7XHJcbiAgICAgICQoJyNtb2JpbGUtYm9keS1vdmVybHknKS50b2dnbGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdmFyIGNvbnRhaW5lciA9ICQoXCIjbW9iaWxlLW5hdiwgI21vYmlsZS1uYXYtdG9nZ2xlXCIpO1xyXG4gICAgICBpZiAoIWNvbnRhaW5lci5pcyhlLnRhcmdldCkgJiYgY29udGFpbmVyLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygnbW9iaWxlLW5hdi1hY3RpdmUnKSkge1xyXG4gICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtb2JpbGUtbmF2LWFjdGl2ZScpO1xyXG4gICAgICAgICAgJCgnI21vYmlsZS1uYXYtdG9nZ2xlIGknKS50b2dnbGVDbGFzcygnZmEtdGltZXMgZmEtYmFycycpO1xyXG4gICAgICAgICAgJCgnI21vYmlsZS1ib2R5LW92ZXJseScpLmZhZGVPdXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAoJChcIiNtb2JpbGUtbmF2LCAjbW9iaWxlLW5hdi10b2dnbGVcIikubGVuZ3RoKSB7XHJcbiAgICAkKFwiI21vYmlsZS1uYXYsICNtb2JpbGUtbmF2LXRvZ2dsZVwiKS5oaWRlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBIZWFkZXIgc2Nyb2xsIGNsYXNzXHJcbiAgLy8gJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAvLyAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gOTApIHtcclxuICAvLyAgICAgJCgnI2hlYWRlcicpLmFkZENsYXNzKCdoZWFkZXItc2Nyb2xsZWQnKTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICQoJyNoZWFkZXInKS5yZW1vdmVDbGFzcygnaGVhZGVyLXNjcm9sbGVkJyk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiA5MCkge1xyXG4gIC8vICAgJCgnI2hlYWRlcicpLmFkZENsYXNzKCdoZWFkZXItc2Nyb2xsZWQnKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIFNtb290aCBzY3JvbGwgZm9yIHRoZSBtZW51IGFuZCBsaW5rcyB3aXRoIC5zY3JvbGx0byBjbGFzc2VzXHJcbiAgJCgnLm5hdi1tZW51IGEsICNtb2JpbGUtbmF2IGEsIC5zY3JvbGx0bycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcclxuICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcclxuICAgICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgdG9wX3NwYWNlID0gMDtcclxuXHJcbiAgICAgICAgaWYgKCQoJyNoZWFkZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgIHRvcF9zcGFjZSA9ICQoJyNoZWFkZXInKS5vdXRlckhlaWdodCgpO1xyXG5cclxuICAgICAgICAgIGlmICghICQoJyNoZWFkZXInKS5oYXNDbGFzcygnaGVhZGVyLXNjcm9sbGVkJykpIHtcclxuICAgICAgICAgICAgdG9wX3NwYWNlID0gdG9wX3NwYWNlIC0gMjA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3AgLSB0b3Bfc3BhY2VcclxuICAgICAgICB9LCAxNTAwLCAnZWFzZUluT3V0RXhwbycpO1xyXG5cclxuICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnRzKCcubmF2LW1lbnUnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICQoJy5uYXYtbWVudSAubWVudS1hY3RpdmUnKS5yZW1vdmVDbGFzcygnbWVudS1hY3RpdmUnKTtcclxuICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnbGknKS5hZGRDbGFzcygnbWVudS1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ21vYmlsZS1uYXYtYWN0aXZlJykpIHtcclxuICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9iaWxlLW5hdi1hY3RpdmUnKTtcclxuICAgICAgICAgICQoJyNtb2JpbGUtbmF2LXRvZ2dsZSBpJykudG9nZ2xlQ2xhc3MoJ2ZhLXRpbWVzIGZhLWJhcnMnKTtcclxuICAgICAgICAgICQoJyNtb2JpbGUtYm9keS1vdmVybHknKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBOYXZpZ2F0aW9uIGFjdGl2ZSBzdGF0ZSBvbiBzY3JvbGxcclxuICB2YXIgbmF2X3NlY3Rpb25zID0gJCgnc2VjdGlvbicpO1xyXG4gIHZhciBtYWluX25hdiA9ICQoJy5uYXYtbWVudSwgI21vYmlsZS1uYXYnKTtcclxuICB2YXIgbWFpbl9uYXZfaGVpZ2h0ID0gJCgnI2hlYWRlcicpLm91dGVySGVpZ2h0KCk7XHJcblxyXG4gICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGN1cl9wb3MgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG4gIFxyXG4gICAgbmF2X3NlY3Rpb25zLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciB0b3AgPSAkKHRoaXMpLm9mZnNldCgpLnRvcCAtIG1haW5fbmF2X2hlaWdodCxcclxuICAgICAgICAgIGJvdHRvbSA9IHRvcCArICQodGhpcykub3V0ZXJIZWlnaHQoKTtcclxuICBcclxuICAgICAgaWYgKGN1cl9wb3MgPj0gdG9wICYmIGN1cl9wb3MgPD0gYm90dG9tKSB7XHJcbiAgICAgICAgbWFpbl9uYXYuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnbWVudS1hY3RpdmUgbWVudS1pdGVtLWFjdGl2ZScpO1xyXG4gICAgICAgIG1haW5fbmF2LmZpbmQoJ2FbaHJlZj1cIiMnKyQodGhpcykuYXR0cignaWQnKSsnXCJdJykucGFyZW50KCdsaScpLmFkZENsYXNzKCdtZW51LWFjdGl2ZSBtZW51LWl0ZW0tYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBJbnRybyBjYXJvdXNlbFxyXG4gIC8vIHZhciBpbnRyb0Nhcm91c2VsID0gJChcIi5jYXJvdXNlbFwiKTtcclxuICAvLyB2YXIgaW50cm9DYXJvdXNlbEluZGljYXRvcnMgPSAkKFwiLmNhcm91c2VsLWluZGljYXRvcnNcIik7XHJcbiAgLy8gaW50cm9DYXJvdXNlbC5maW5kKFwiLmNhcm91c2VsLWlubmVyXCIpLmNoaWxkcmVuKFwiLmNhcm91c2VsLWl0ZW1cIikuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG4gIC8vICAgKGluZGV4ID09PSAwKSA/XHJcbiAgLy8gICBpbnRyb0Nhcm91c2VsSW5kaWNhdG9ycy5hcHBlbmQoXCI8bGkgZGF0YS10YXJnZXQ9JyNpbnRyb0Nhcm91c2VsJyBkYXRhLXNsaWRlLXRvPSdcIiArIGluZGV4ICsgXCInIGNsYXNzPSdhY3RpdmUnPjwvbGk+XCIpIDpcclxuICAvLyAgIGludHJvQ2Fyb3VzZWxJbmRpY2F0b3JzLmFwcGVuZChcIjxsaSBkYXRhLXRhcmdldD0nI2ludHJvQ2Fyb3VzZWwnIGRhdGEtc2xpZGUtdG89J1wiICsgaW5kZXggKyBcIic+PC9saT5cIik7XHJcbiAgLy9cclxuICAvLyAgICQodGhpcykuY3NzKFwiYmFja2dyb3VuZC1pbWFnZVwiLCBcInVybCgnXCIgKyAkKHRoaXMpLmNoaWxkcmVuKCcuY2Fyb3VzZWwtYmFja2dyb3VuZCcpLmNoaWxkcmVuKCdpbWcnKS5hdHRyKCdzcmMnKSArXCInKVwiKTtcclxuICAvLyAgICQodGhpcykuY2hpbGRyZW4oJy5jYXJvdXNlbC1iYWNrZ3JvdW5kJykucmVtb3ZlKCk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vICQoXCIuY2Fyb3VzZWxcIikuc3dpcGUoe1xyXG4gIC8vICAgc3dpcGU6IGZ1bmN0aW9uKGV2ZW50LCBkaXJlY3Rpb24sIGRpc3RhbmNlLCBkdXJhdGlvbiwgZmluZ2VyQ291bnQsIGZpbmdlckRhdGEpIHtcclxuICAvLyAgICAgaWYgKGRpcmVjdGlvbiA9PSAnbGVmdCcpICQodGhpcykuY2Fyb3VzZWwoJ25leHQnKTtcclxuICAvLyAgICAgaWYgKGRpcmVjdGlvbiA9PSAncmlnaHQnKSAkKHRoaXMpLmNhcm91c2VsKCdwcmV2Jyk7XHJcbiAgLy8gICB9LFxyXG4gIC8vICAgYWxsb3dQYWdlU2Nyb2xsOlwidmVydGljYWxcIlxyXG4gIC8vIH0pO1xyXG5cclxuICAvLyBTa2lsbHMgc2VjdGlvblxyXG4gIC8vICQoJyNza2lsbHMnKS53YXlwb2ludChmdW5jdGlvbigpIHtcclxuICAvLyAgICQoJy5wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAvLyAgICAgJCh0aGlzKS5jc3MoXCJ3aWR0aFwiLCAkKHRoaXMpLmF0dHIoXCJhcmlhLXZhbHVlbm93XCIpICsgJyUnKTtcclxuICAvLyAgIH0pO1xyXG4gIC8vIH0sIHsgb2Zmc2V0OiAnODAlJ30gKTtcclxuXHJcbiAgLy8galF1ZXJ5IGNvdW50ZXJVcCAodXNlZCBpbiBGYWN0cyBzZWN0aW9uKVxyXG4gICQoJ1tkYXRhLXRvZ2dsZT1cImNvdW50ZXItdXBcIl0nKS5jb3VudGVyVXAoe1xyXG4gICAgZGVsYXk6IDEwLFxyXG4gICAgdGltZTogMTAwMFxyXG4gIH0pO1xyXG5cclxuICAvLyBQb3Jmb2xpbyBpc290b3BlIGFuZCBmaWx0ZXJcclxuICB2YXIgcG9ydGZvbGlvSXNvdG9wZSA9ICQoJy5wb3J0Zm9saW8tY29udGFpbmVyJykuaXNvdG9wZSh7XHJcbiAgICBpdGVtU2VsZWN0b3I6ICcucG9ydGZvbGlvLWl0ZW0nLFxyXG4gICAgbGF5b3V0TW9kZTogJ2ZpdFJvd3MnXHJcbiAgfSk7XHJcblxyXG4gICQoJyNwb3J0Zm9saW8tZmx0ZXJzIGxpJykub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIiNwb3J0Zm9saW8tZmx0ZXJzIGxpXCIpLnJlbW92ZUNsYXNzKCdmaWx0ZXItYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdmaWx0ZXItYWN0aXZlJyk7XHJcblxyXG4gICAgcG9ydGZvbGlvSXNvdG9wZS5pc290b3BlKHsgZmlsdGVyOiAkKHRoaXMpLmRhdGEoJ2ZpbHRlcicpIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBDbGllbnRzIGNhcm91c2VsICh1c2VzIHRoZSBPd2wgQ2Fyb3VzZWwgbGlicmFyeSlcclxuICAkKFwiLmNsaWVudHMtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IHsgMDogeyBpdGVtczogMiB9LCA3Njg6IHsgaXRlbXM6IDQgfSwgOTAwOiB7IGl0ZW1zOiA2IH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gVGVzdGltb25pYWxzIGNhcm91c2VsICh1c2VzIHRoZSBPd2wgQ2Fyb3VzZWwgbGlicmFyeSlcclxuICAkKFwiLnRlc3RpbW9uaWFscy1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgaXRlbXM6IDFcclxuICB9KTtcclxuXHJcbn0pKGpRdWVyeSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=