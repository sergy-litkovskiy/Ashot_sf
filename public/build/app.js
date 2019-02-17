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


  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  } // Smooth scroll for the menu and links with .scrollto classes


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

  var introCarousel = $(".carousel");
  var introCarouselIndicators = $(".carousel-indicators");
  introCarousel.find(".carousel-inner").children(".carousel-item").each(function (index) {
    index === 0 ? introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>") : introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");
    $(this).css("background-image", "url('" + $(this).children('.carousel-background').children('img').attr('src') + "')");
    $(this).children('.carousel-background').remove();
  });
  $(".carousel").swipe({
    swipe: function swipe(event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll: "vertical"
  }); // Skills section

  $('#skills').waypoint(function () {
    $('.progress .progress-bar').each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  }); // jQuery counterUp (used in Facts section)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3N0eWxlLmNzcz9kZjM2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwid2luZG93Iiwib24iLCJsZW5ndGgiLCJkZWxheSIsImZhZGVPdXQiLCJyZW1vdmUiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJmYWRlSW4iLCJjbGljayIsImFuaW1hdGUiLCJXT1ciLCJpbml0Iiwic3VwZXJmaXNoIiwiYW5pbWF0aW9uIiwib3BhY2l0eSIsInNwZWVkIiwiJG1vYmlsZV9uYXYiLCJjbG9uZSIsInByb3AiLCJpZCIsImZpbmQiLCJhdHRyIiwiYXBwZW5kIiwicHJlcGVuZCIsImRvY3VtZW50IiwiZSIsIm5leHQiLCJ0b2dnbGVDbGFzcyIsIm5leHRBbGwiLCJlcSIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlIiwiY29udGFpbmVyIiwiaXMiLCJ0YXJnZXQiLCJoYXMiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGlkZSIsImFkZENsYXNzIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInJlcGxhY2UiLCJob3N0bmFtZSIsImhhc2giLCJ0b3Bfc3BhY2UiLCJvdXRlckhlaWdodCIsIm9mZnNldCIsInRvcCIsInBhcmVudHMiLCJjbG9zZXN0IiwibmF2X3NlY3Rpb25zIiwibWFpbl9uYXYiLCJtYWluX25hdl9oZWlnaHQiLCJjdXJfcG9zIiwiZWFjaCIsImJvdHRvbSIsInBhcmVudCIsImludHJvQ2Fyb3VzZWwiLCJpbnRyb0Nhcm91c2VsSW5kaWNhdG9ycyIsImNoaWxkcmVuIiwiaW5kZXgiLCJjc3MiLCJzd2lwZSIsImV2ZW50IiwiZGlyZWN0aW9uIiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsImZpbmdlckNvdW50IiwiZmluZ2VyRGF0YSIsImNhcm91c2VsIiwiYWxsb3dQYWdlU2Nyb2xsIiwid2F5cG9pbnQiLCJjb3VudGVyVXAiLCJ0aW1lIiwicG9ydGZvbGlvSXNvdG9wZSIsImlzb3RvcGUiLCJpdGVtU2VsZWN0b3IiLCJsYXlvdXRNb2RlIiwiZmlsdGVyIiwiZGF0YSIsIm93bENhcm91c2VsIiwiYXV0b3BsYXkiLCJkb3RzIiwibG9vcCIsInJlc3BvbnNpdmUiLCJpdGVtcyIsImpRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7O0FDQUFBLG1CQUFPLENBQUMsZ0RBQUQsQ0FBUDs7QUFFQSxDQUFDLFVBQVVDLENBQVYsRUFBYTtBQUNaLGVBRFksQ0FHWjs7QUFDQUEsR0FBQyxDQUFDQyxNQUFELENBQUQsQ0FBVUMsRUFBVixDQUFhLE1BQWIsRUFBcUIsWUFBWTtBQUMvQixRQUFJRixDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCRyxNQUFwQixFQUE0QjtBQUMxQkgsT0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkksS0FBaEIsQ0FBc0IsR0FBdEIsRUFBMkJDLE9BQTNCLENBQW1DLE1BQW5DLEVBQTJDLFlBQVk7QUFDckRMLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU0sTUFBUjtBQUNELE9BRkQ7QUFHRDtBQUNGLEdBTkQsRUFKWSxDQVlaOztBQUNBTixHQUFDLENBQUNDLE1BQUQsQ0FBRCxDQUFVTSxNQUFWLENBQWlCLFlBQVc7QUFDMUIsUUFBSVAsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxTQUFSLEtBQXNCLEdBQTFCLEVBQStCO0FBQzdCUixPQUFDLENBQUMsY0FBRCxDQUFELENBQWtCUyxNQUFsQixDQUF5QixNQUF6QjtBQUNELEtBRkQsTUFFTztBQUNMVCxPQUFDLENBQUMsY0FBRCxDQUFELENBQWtCSyxPQUFsQixDQUEwQixNQUExQjtBQUNEO0FBQ0YsR0FORDtBQU9BTCxHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCVSxLQUFsQixDQUF3QixZQUFVO0FBQ2hDVixLQUFDLENBQUMsWUFBRCxDQUFELENBQWdCVyxPQUFoQixDQUF3QjtBQUFDSCxlQUFTLEVBQUc7QUFBYixLQUF4QixFQUF3QyxJQUF4QyxFQUE4QyxlQUE5QztB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QUFRLEVBQUUsSUFENEI7QUFFdENDLFFBQUksRUFBRSxJQUZnQztBQUd0Q0MsUUFBSSxFQUFFLElBSGdDO0FBSXRDRSxTQUFLLEVBQUU7QUFKK0IsR0FBeEM7QUFPRCxDQTdNRCxFQTZNR0MsTUE3TUgsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJyZXF1aXJlKCcuLi9jc3Mvc3R5bGUuY3NzJyk7XHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgLy8gUHJlbG9hZGVyXHJcbiAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQoJyNwcmVsb2FkZXInKS5sZW5ndGgpIHtcclxuICAgICAgJCgnI3ByZWxvYWRlcicpLmRlbGF5KDEwMCkuZmFkZU91dCgnc2xvdycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gQmFjayB0byB0b3AgYnV0dG9uXHJcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMTAwKSB7XHJcbiAgICAgICQoJy5iYWNrLXRvLXRvcCcpLmZhZGVJbignc2xvdycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLmJhY2stdG8tdG9wJykuZmFkZU91dCgnc2xvdycpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoJy5iYWNrLXRvLXRvcCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wIDogMH0sMTUwMCwgJ2Vhc2VJbk91dEV4cG8nKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxuXHJcbiAgLy8gSW5pdGlhdGUgdGhlIHdvd2pzIGFuaW1hdGlvbiBsaWJyYXJ5XHJcbiAgbmV3IFdPVygpLmluaXQoKTtcclxuXHJcbiAgLy8gSW5pdGlhdGUgc3VwZXJmaXNoIG9uIG5hdiBtZW51XHJcbiAgJCgnLm5hdi1tZW51Jykuc3VwZXJmaXNoKHtcclxuICAgIGFuaW1hdGlvbjoge1xyXG4gICAgICBvcGFjaXR5OiAnc2hvdydcclxuICAgIH0sXHJcbiAgICBzcGVlZDogNDAwXHJcbiAgfSk7XHJcblxyXG4gIC8vIE1vYmlsZSBOYXZpZ2F0aW9uXHJcbiAgaWYgKCQoJyNuYXYtbWVudS1jb250YWluZXInKS5sZW5ndGgpIHtcclxuICAgIHZhciAkbW9iaWxlX25hdiA9ICQoJyNuYXYtbWVudS1jb250YWluZXInKS5jbG9uZSgpLnByb3Aoe1xyXG4gICAgICBpZDogJ21vYmlsZS1uYXYnXHJcbiAgICB9KTtcclxuICAgICRtb2JpbGVfbmF2LmZpbmQoJz4gdWwnKS5hdHRyKHtcclxuICAgICAgJ2NsYXNzJzogJycsXHJcbiAgICAgICdpZCc6ICcnXHJcbiAgICB9KTtcclxuICAgICQoJ2JvZHknKS5hcHBlbmQoJG1vYmlsZV9uYXYpO1xyXG4gICAgJCgnYm9keScpLnByZXBlbmQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwibW9iaWxlLW5hdi10b2dnbGVcIj48aSBjbGFzcz1cImZhIGZhLWJhcnNcIj48L2k+PC9idXR0b24+Jyk7XHJcbiAgICAkKCdib2R5JykuYXBwZW5kKCc8ZGl2IGlkPVwibW9iaWxlLWJvZHktb3Zlcmx5XCI+PC9kaXY+Jyk7XHJcbiAgICAkKCcjbW9iaWxlLW5hdicpLmZpbmQoJy5tZW51LWhhcy1jaGlsZHJlbicpLnByZXBlbmQoJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1kb3duXCI+PC9pPicpO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWVudS1oYXMtY2hpbGRyZW4gaScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgJCh0aGlzKS5uZXh0KCkudG9nZ2xlQ2xhc3MoJ21lbnUtaXRlbS1hY3RpdmUnKTtcclxuICAgICAgJCh0aGlzKS5uZXh0QWxsKCd1bCcpLmVxKDApLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJmYS1jaGV2cm9uLXVwIGZhLWNoZXZyb24tZG93blwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbW9iaWxlLW5hdi10b2dnbGUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbW9iaWxlLW5hdi1hY3RpdmUnKTtcclxuICAgICAgJCgnI21vYmlsZS1uYXYtdG9nZ2xlIGknKS50b2dnbGVDbGFzcygnZmEtdGltZXMgZmEtYmFycycpO1xyXG4gICAgICAkKCcjbW9iaWxlLWJvZHktb3Zlcmx5JykudG9nZ2xlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgIHZhciBjb250YWluZXIgPSAkKFwiI21vYmlsZS1uYXYsICNtb2JpbGUtbmF2LXRvZ2dsZVwiKTtcclxuICAgICAgaWYgKCFjb250YWluZXIuaXMoZS50YXJnZXQpICYmIGNvbnRhaW5lci5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ21vYmlsZS1uYXYtYWN0aXZlJykpIHtcclxuICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9iaWxlLW5hdi1hY3RpdmUnKTtcclxuICAgICAgICAgICQoJyNtb2JpbGUtbmF2LXRvZ2dsZSBpJykudG9nZ2xlQ2xhc3MoJ2ZhLXRpbWVzIGZhLWJhcnMnKTtcclxuICAgICAgICAgICQoJyNtb2JpbGUtYm9keS1vdmVybHknKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKCQoXCIjbW9iaWxlLW5hdiwgI21vYmlsZS1uYXYtdG9nZ2xlXCIpLmxlbmd0aCkge1xyXG4gICAgJChcIiNtb2JpbGUtbmF2LCAjbW9iaWxlLW5hdi10b2dnbGVcIikuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gSGVhZGVyIHNjcm9sbCBjbGFzc1xyXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDEwMCkge1xyXG4gICAgICAkKCcjaGVhZGVyJykuYWRkQ2xhc3MoJ2hlYWRlci1zY3JvbGxlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2hlYWRlcicpLnJlbW92ZUNsYXNzKCdoZWFkZXItc2Nyb2xsZWQnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDEwMCkge1xyXG4gICAgJCgnI2hlYWRlcicpLmFkZENsYXNzKCdoZWFkZXItc2Nyb2xsZWQnKTtcclxuICB9XHJcblxyXG4gIC8vIFNtb290aCBzY3JvbGwgZm9yIHRoZSBtZW51IGFuZCBsaW5rcyB3aXRoIC5zY3JvbGx0byBjbGFzc2VzXHJcbiAgJCgnLm5hdi1tZW51IGEsICNtb2JpbGUtbmF2IGEsIC5zY3JvbGx0bycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcclxuICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcclxuICAgICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgdG9wX3NwYWNlID0gMDtcclxuXHJcbiAgICAgICAgaWYgKCQoJyNoZWFkZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgIHRvcF9zcGFjZSA9ICQoJyNoZWFkZXInKS5vdXRlckhlaWdodCgpO1xyXG5cclxuICAgICAgICAgIGlmICghICQoJyNoZWFkZXInKS5oYXNDbGFzcygnaGVhZGVyLXNjcm9sbGVkJykpIHtcclxuICAgICAgICAgICAgdG9wX3NwYWNlID0gdG9wX3NwYWNlIC0gMjA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3AgLSB0b3Bfc3BhY2VcclxuICAgICAgICB9LCAxNTAwLCAnZWFzZUluT3V0RXhwbycpO1xyXG5cclxuICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnRzKCcubmF2LW1lbnUnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICQoJy5uYXYtbWVudSAubWVudS1hY3RpdmUnKS5yZW1vdmVDbGFzcygnbWVudS1hY3RpdmUnKTtcclxuICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnbGknKS5hZGRDbGFzcygnbWVudS1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ21vYmlsZS1uYXYtYWN0aXZlJykpIHtcclxuICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9iaWxlLW5hdi1hY3RpdmUnKTtcclxuICAgICAgICAgICQoJyNtb2JpbGUtbmF2LXRvZ2dsZSBpJykudG9nZ2xlQ2xhc3MoJ2ZhLXRpbWVzIGZhLWJhcnMnKTtcclxuICAgICAgICAgICQoJyNtb2JpbGUtYm9keS1vdmVybHknKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBOYXZpZ2F0aW9uIGFjdGl2ZSBzdGF0ZSBvbiBzY3JvbGxcclxuICB2YXIgbmF2X3NlY3Rpb25zID0gJCgnc2VjdGlvbicpO1xyXG4gIHZhciBtYWluX25hdiA9ICQoJy5uYXYtbWVudSwgI21vYmlsZS1uYXYnKTtcclxuICB2YXIgbWFpbl9uYXZfaGVpZ2h0ID0gJCgnI2hlYWRlcicpLm91dGVySGVpZ2h0KCk7XHJcblxyXG4gICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGN1cl9wb3MgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG4gIFxyXG4gICAgbmF2X3NlY3Rpb25zLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciB0b3AgPSAkKHRoaXMpLm9mZnNldCgpLnRvcCAtIG1haW5fbmF2X2hlaWdodCxcclxuICAgICAgICAgIGJvdHRvbSA9IHRvcCArICQodGhpcykub3V0ZXJIZWlnaHQoKTtcclxuICBcclxuICAgICAgaWYgKGN1cl9wb3MgPj0gdG9wICYmIGN1cl9wb3MgPD0gYm90dG9tKSB7XHJcbiAgICAgICAgbWFpbl9uYXYuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnbWVudS1hY3RpdmUgbWVudS1pdGVtLWFjdGl2ZScpO1xyXG4gICAgICAgIG1haW5fbmF2LmZpbmQoJ2FbaHJlZj1cIiMnKyQodGhpcykuYXR0cignaWQnKSsnXCJdJykucGFyZW50KCdsaScpLmFkZENsYXNzKCdtZW51LWFjdGl2ZSBtZW51LWl0ZW0tYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyBJbnRybyBjYXJvdXNlbFxyXG4gIHZhciBpbnRyb0Nhcm91c2VsID0gJChcIi5jYXJvdXNlbFwiKTtcclxuICB2YXIgaW50cm9DYXJvdXNlbEluZGljYXRvcnMgPSAkKFwiLmNhcm91c2VsLWluZGljYXRvcnNcIik7XHJcbiAgaW50cm9DYXJvdXNlbC5maW5kKFwiLmNhcm91c2VsLWlubmVyXCIpLmNoaWxkcmVuKFwiLmNhcm91c2VsLWl0ZW1cIikuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG4gICAgKGluZGV4ID09PSAwKSA/XHJcbiAgICBpbnRyb0Nhcm91c2VsSW5kaWNhdG9ycy5hcHBlbmQoXCI8bGkgZGF0YS10YXJnZXQ9JyNpbnRyb0Nhcm91c2VsJyBkYXRhLXNsaWRlLXRvPSdcIiArIGluZGV4ICsgXCInIGNsYXNzPSdhY3RpdmUnPjwvbGk+XCIpIDpcclxuICAgIGludHJvQ2Fyb3VzZWxJbmRpY2F0b3JzLmFwcGVuZChcIjxsaSBkYXRhLXRhcmdldD0nI2ludHJvQ2Fyb3VzZWwnIGRhdGEtc2xpZGUtdG89J1wiICsgaW5kZXggKyBcIic+PC9saT5cIik7XHJcblxyXG4gICAgJCh0aGlzKS5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsIFwidXJsKCdcIiArICQodGhpcykuY2hpbGRyZW4oJy5jYXJvdXNlbC1iYWNrZ3JvdW5kJykuY2hpbGRyZW4oJ2ltZycpLmF0dHIoJ3NyYycpICtcIicpXCIpO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLmNhcm91c2VsLWJhY2tncm91bmQnKS5yZW1vdmUoKTtcclxuICB9KTtcclxuXHJcbiAgJChcIi5jYXJvdXNlbFwiKS5zd2lwZSh7XHJcbiAgICBzd2lwZTogZnVuY3Rpb24oZXZlbnQsIGRpcmVjdGlvbiwgZGlzdGFuY2UsIGR1cmF0aW9uLCBmaW5nZXJDb3VudCwgZmluZ2VyRGF0YSkge1xyXG4gICAgICBpZiAoZGlyZWN0aW9uID09ICdsZWZ0JykgJCh0aGlzKS5jYXJvdXNlbCgnbmV4dCcpO1xyXG4gICAgICBpZiAoZGlyZWN0aW9uID09ICdyaWdodCcpICQodGhpcykuY2Fyb3VzZWwoJ3ByZXYnKTtcclxuICAgIH0sXHJcbiAgICBhbGxvd1BhZ2VTY3JvbGw6XCJ2ZXJ0aWNhbFwiXHJcbiAgfSk7XHJcblxyXG4gIC8vIFNraWxscyBzZWN0aW9uXHJcbiAgJCgnI3NraWxscycpLndheXBvaW50KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLnByb2dyZXNzIC5wcm9ncmVzcy1iYXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKHRoaXMpLmNzcyhcIndpZHRoXCIsICQodGhpcykuYXR0cihcImFyaWEtdmFsdWVub3dcIikgKyAnJScpO1xyXG4gICAgfSk7XHJcbiAgfSwgeyBvZmZzZXQ6ICc4MCUnfSApO1xyXG5cclxuICAvLyBqUXVlcnkgY291bnRlclVwICh1c2VkIGluIEZhY3RzIHNlY3Rpb24pXHJcbiAgJCgnW2RhdGEtdG9nZ2xlPVwiY291bnRlci11cFwiXScpLmNvdW50ZXJVcCh7XHJcbiAgICBkZWxheTogMTAsXHJcbiAgICB0aW1lOiAxMDAwXHJcbiAgfSk7XHJcblxyXG4gIC8vIFBvcmZvbGlvIGlzb3RvcGUgYW5kIGZpbHRlclxyXG4gIHZhciBwb3J0Zm9saW9Jc290b3BlID0gJCgnLnBvcnRmb2xpby1jb250YWluZXInKS5pc290b3BlKHtcclxuICAgIGl0ZW1TZWxlY3RvcjogJy5wb3J0Zm9saW8taXRlbScsXHJcbiAgICBsYXlvdXRNb2RlOiAnZml0Um93cydcclxuICB9KTtcclxuXHJcbiAgJCgnI3BvcnRmb2xpby1mbHRlcnMgbGknKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiI3BvcnRmb2xpby1mbHRlcnMgbGlcIikucmVtb3ZlQ2xhc3MoJ2ZpbHRlci1hY3RpdmUnKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2ZpbHRlci1hY3RpdmUnKTtcclxuXHJcbiAgICBwb3J0Zm9saW9Jc290b3BlLmlzb3RvcGUoeyBmaWx0ZXI6ICQodGhpcykuZGF0YSgnZmlsdGVyJykgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIENsaWVudHMgY2Fyb3VzZWwgKHVzZXMgdGhlIE93bCBDYXJvdXNlbCBsaWJyYXJ5KVxyXG4gICQoXCIuY2xpZW50cy1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZTogeyAwOiB7IGl0ZW1zOiAyIH0sIDc2ODogeyBpdGVtczogNCB9LCA5MDA6IHsgaXRlbXM6IDYgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBUZXN0aW1vbmlhbHMgY2Fyb3VzZWwgKHVzZXMgdGhlIE93bCBDYXJvdXNlbCBsaWJyYXJ5KVxyXG4gICQoXCIudGVzdGltb25pYWxzLWNhcm91c2VsXCIpLm93bENhcm91c2VsKHtcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBpdGVtczogMVxyXG4gIH0pO1xyXG5cclxufSkoalF1ZXJ5KTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=