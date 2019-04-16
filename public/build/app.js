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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3N0eWxlLmNzcz9kZjM2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwid2luZG93Iiwib24iLCJsZW5ndGgiLCJkZWxheSIsImZhZGVPdXQiLCJyZW1vdmUiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJmYWRlSW4iLCJjbGljayIsImFuaW1hdGUiLCJXT1ciLCJpbml0Iiwic3VwZXJmaXNoIiwiYW5pbWF0aW9uIiwib3BhY2l0eSIsInNwZWVkIiwiJG1vYmlsZV9uYXYiLCJjbG9uZSIsInByb3AiLCJpZCIsImZpbmQiLCJhdHRyIiwiYXBwZW5kIiwicHJlcGVuZCIsImRvY3VtZW50IiwiZSIsIm5leHQiLCJ0b2dnbGVDbGFzcyIsIm5leHRBbGwiLCJlcSIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlIiwiY29udGFpbmVyIiwiaXMiLCJ0YXJnZXQiLCJoYXMiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGlkZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiaG9zdG5hbWUiLCJoYXNoIiwidG9wX3NwYWNlIiwib3V0ZXJIZWlnaHQiLCJvZmZzZXQiLCJ0b3AiLCJwYXJlbnRzIiwiY2xvc2VzdCIsImFkZENsYXNzIiwiY291bnRlclVwIiwidGltZSIsInBvcnRmb2xpb0lzb3RvcGUiLCJpc290b3BlIiwiaXRlbVNlbGVjdG9yIiwibGF5b3V0TW9kZSIsImZpbHRlciIsImRhdGEiLCJvd2xDYXJvdXNlbCIsImF1dG9wbGF5IiwiZG90cyIsImxvb3AiLCJyZXNwb25zaXZlIiwiaXRlbXMiLCJwYXJlbnQiLCJzaG93IiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQUEsbUJBQU8sQ0FBQyxnREFBRCxDQUFQOztBQUVBLENBQUMsVUFBVUMsQ0FBVixFQUFhO0FBQ1osZUFEWSxDQUdaOztBQUNBQSxHQUFD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ImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJyZXF1aXJlKCcuLi9jc3Mvc3R5bGUuY3NzJyk7XHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgLy8gUHJlbG9hZGVyXHJcbiAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQoJyNwcmVsb2FkZXInKS5sZW5ndGgpIHtcclxuICAgICAgJCgnI3ByZWxvYWRlcicpLmRlbGF5KDEwMCkuZmFkZU91dCgnc2xvdycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gQmFjayB0byB0b3AgYnV0dG9uXHJcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMTAwKSB7XHJcbiAgICAgICQoJy5iYWNrLXRvLXRvcCcpLmZhZGVJbignc2xvdycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLmJhY2stdG8tdG9wJykuZmFkZU91dCgnc2xvdycpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoJy5iYWNrLXRvLXRvcCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wIDogMH0sMTUwMCwgJ2Vhc2VJbk91dEV4cG8nKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxuXHJcbiAgLy8gSW5pdGlhdGUgdGhlIHdvd2pzIGFuaW1hdGlvbiBsaWJyYXJ5XHJcbiAgbmV3IFdPVygpLmluaXQoKTtcclxuXHJcbiAgLy8gSW5pdGlhdGUgc3VwZXJmaXNoIG9uIG5hdiBtZW51XHJcbiAgJCgnLm5hdi1tZW51Jykuc3VwZXJmaXNoKHtcclxuICAgIGFuaW1hdGlvbjoge1xyXG4gICAgICBvcGFjaXR5OiAnc2hvdydcclxuICAgIH0sXHJcbiAgICBzcGVlZDogNDAwXHJcbiAgfSk7XHJcblxyXG4gIC8vIE1vYmlsZSBOYXZpZ2F0aW9uXHJcbiAgaWYgKCQoJyNuYXYtbWVudS1jb250YWluZXInKS5sZW5ndGgpIHtcclxuICAgIHZhciAkbW9iaWxlX25hdiA9ICQoJyNuYXYtbWVudS1jb250YWluZXInKS5jbG9uZSgpLnByb3Aoe1xyXG4gICAgICBpZDogJ21vYmlsZS1uYXYnXHJcbiAgICB9KTtcclxuICAgICRtb2JpbGVfbmF2LmZpbmQoJz4gdWwnKS5hdHRyKHtcclxuICAgICAgJ2NsYXNzJzogJycsXHJcbiAgICAgICdpZCc6ICcnXHJcbiAgICB9KTtcclxuICAgICQoJ2JvZHknKS5hcHBlbmQoJG1vYmlsZV9uYXYpO1xyXG4gICAgJCgnYm9keScpLnByZXBlbmQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwibW9iaWxlLW5hdi10b2dnbGVcIj48aSBjbGFzcz1cImZhIGZhLWJhcnNcIj48L2k+PC9idXR0b24+Jyk7XHJcbiAgICAkKCdib2R5JykuYXBwZW5kKCc8ZGl2IGlkPVwibW9iaWxlLWJvZHktb3Zlcmx5XCI+PC9kaXY+Jyk7XHJcbiAgICAkKCcjbW9iaWxlLW5hdicpLmZpbmQoJy5tZW51LWhhcy1jaGlsZHJlbicpLnByZXBlbmQoJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1kb3duXCI+PC9pPicpO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWVudS1oYXMtY2hpbGRyZW4gaScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgJCh0aGlzKS5uZXh0KCkudG9nZ2xlQ2xhc3MoJ21lbnUtaXRlbS1hY3RpdmUnKTtcclxuICAgICAgJCh0aGlzKS5uZXh0QWxsKCd1bCcpLmVxKDApLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJmYS1jaGV2cm9uLXVwIGZhLWNoZXZyb24tZG93blwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbW9iaWxlLW5hdi10b2dnbGUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbW9iaWxlLW5hdi1hY3RpdmUnKTtcclxuICAgICAgJCgnI21vYmlsZS1uYXYtdG9nZ2xlIGknKS50b2dnbGVDbGFzcygnZmEtdGltZXMgZmEtYmFycycpO1xyXG4gICAgICAkKCcjbW9iaWxlLWJvZHktb3Zlcmx5JykudG9nZ2xlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgIHZhciBjb250YWluZXIgPSAkKFwiI21vYmlsZS1uYXYsICNtb2JpbGUtbmF2LXRvZ2dsZVwiKTtcclxuICAgICAgaWYgKCFjb250YWluZXIuaXMoZS50YXJnZXQpICYmIGNvbnRhaW5lci5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ21vYmlsZS1uYXYtYWN0aXZlJykpIHtcclxuICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9iaWxlLW5hdi1hY3RpdmUnKTtcclxuICAgICAgICAgICQoJyNtb2JpbGUtbmF2LXRvZ2dsZSBpJykudG9nZ2xlQ2xhc3MoJ2ZhLXRpbWVzIGZhLWJhcnMnKTtcclxuICAgICAgICAgICQoJyNtb2JpbGUtYm9keS1vdmVybHknKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKCQoXCIjbW9iaWxlLW5hdiwgI21vYmlsZS1uYXYtdG9nZ2xlXCIpLmxlbmd0aCkge1xyXG4gICAgJChcIiNtb2JpbGUtbmF2LCAjbW9iaWxlLW5hdi10b2dnbGVcIikuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gSGVhZGVyIHNjcm9sbCBjbGFzc1xyXG4gIC8vICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgLy8gICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDkwKSB7XHJcbiAgLy8gICAgICQoJyNoZWFkZXInKS5hZGRDbGFzcygnaGVhZGVyLXNjcm9sbGVkJyk7XHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICAkKCcjaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2hlYWRlci1zY3JvbGxlZCcpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH0pO1xyXG5cclxuICAvLyBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gOTApIHtcclxuICAvLyAgICQoJyNoZWFkZXInKS5hZGRDbGFzcygnaGVhZGVyLXNjcm9sbGVkJyk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBTbW9vdGggc2Nyb2xsIGZvciB0aGUgbWVudSBhbmQgbGlua3Mgd2l0aCAuc2Nyb2xsdG8gY2xhc3Nlc1xyXG4gICQoJy5uYXYtbWVudSBhLCAjbW9iaWxlLW5hdiBhLCAuc2Nyb2xsdG8nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XHJcbiAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XHJcbiAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIHRvcF9zcGFjZSA9IDA7XHJcblxyXG4gICAgICAgIGlmICgkKCcjaGVhZGVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0b3Bfc3BhY2UgPSAkKCcjaGVhZGVyJykub3V0ZXJIZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICBpZiAoISAkKCcjaGVhZGVyJykuaGFzQ2xhc3MoJ2hlYWRlci1zY3JvbGxlZCcpKSB7XHJcbiAgICAgICAgICAgIHRvcF9zcGFjZSA9IHRvcF9zcGFjZSAtIDIwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wIC0gdG9wX3NwYWNlXHJcbiAgICAgICAgfSwgMTUwMCwgJ2Vhc2VJbk91dEV4cG8nKTtcclxuXHJcbiAgICAgICAgaWYgKCQodGhpcykucGFyZW50cygnLm5hdi1tZW51JykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAkKCcubmF2LW1lbnUgLm1lbnUtYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ21lbnUtYWN0aXZlJyk7XHJcbiAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2xpJykuYWRkQ2xhc3MoJ21lbnUtYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdtb2JpbGUtbmF2LWFjdGl2ZScpKSB7XHJcbiAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vYmlsZS1uYXYtYWN0aXZlJyk7XHJcbiAgICAgICAgICAkKCcjbW9iaWxlLW5hdi10b2dnbGUgaScpLnRvZ2dsZUNsYXNzKCdmYS10aW1lcyBmYS1iYXJzJyk7XHJcbiAgICAgICAgICAkKCcjbW9iaWxlLWJvZHktb3Zlcmx5JykuZmFkZU91dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gTmF2aWdhdGlvbiBhY3RpdmUgc3RhdGUgb24gc2Nyb2xsXHJcbiAgLy8gdmFyIG5hdl9zZWN0aW9ucyA9ICQoJ3NlY3Rpb24nKTtcclxuICAvLyB2YXIgbWFpbl9uYXYgPSAkKCcubmF2LW1lbnUsICNtb2JpbGUtbmF2Jyk7XHJcbiAgLy8gdmFyIG1haW5fbmF2X2hlaWdodCA9ICQoJyNoZWFkZXInKS5vdXRlckhlaWdodCgpO1xyXG5cclxuICAvLyAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAvLyAgIHZhciBjdXJfcG9zID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuICAvL1xyXG4gIC8vICAgbmF2X3NlY3Rpb25zLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgLy8gICAgIHZhciB0b3AgPSAkKHRoaXMpLm9mZnNldCgpLnRvcCAtIG1haW5fbmF2X2hlaWdodCxcclxuICAvLyAgICAgICAgIGJvdHRvbSA9IHRvcCArICQodGhpcykub3V0ZXJIZWlnaHQoKTtcclxuICAvL1xyXG4gIC8vICAgICBpZiAoY3VyX3BvcyA+PSB0b3AgJiYgY3VyX3BvcyA8PSBib3R0b20pIHtcclxuICAvLyAgICAgICBtYWluX25hdi5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdtZW51LWFjdGl2ZSBtZW51LWl0ZW0tYWN0aXZlJyk7XHJcbiAgLy8gICAgICAgbWFpbl9uYXYuZmluZCgnYVtocmVmPVwiIycrJCh0aGlzKS5hdHRyKCdpZCcpKydcIl0nKS5wYXJlbnQoJ2xpJykuYWRkQ2xhc3MoJ21lbnUtYWN0aXZlIG1lbnUtaXRlbS1hY3RpdmUnKTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vIEludHJvIGNhcm91c2VsXHJcbiAgLy8gdmFyIGludHJvQ2Fyb3VzZWwgPSAkKFwiLmNhcm91c2VsXCIpO1xyXG4gIC8vIHZhciBpbnRyb0Nhcm91c2VsSW5kaWNhdG9ycyA9ICQoXCIuY2Fyb3VzZWwtaW5kaWNhdG9yc1wiKTtcclxuICAvLyBpbnRyb0Nhcm91c2VsLmZpbmQoXCIuY2Fyb3VzZWwtaW5uZXJcIikuY2hpbGRyZW4oXCIuY2Fyb3VzZWwtaXRlbVwiKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgLy8gICAoaW5kZXggPT09IDApID9cclxuICAvLyAgIGludHJvQ2Fyb3VzZWxJbmRpY2F0b3JzLmFwcGVuZChcIjxsaSBkYXRhLXRhcmdldD0nI2ludHJvQ2Fyb3VzZWwnIGRhdGEtc2xpZGUtdG89J1wiICsgaW5kZXggKyBcIicgY2xhc3M9J2FjdGl2ZSc+PC9saT5cIikgOlxyXG4gIC8vICAgaW50cm9DYXJvdXNlbEluZGljYXRvcnMuYXBwZW5kKFwiPGxpIGRhdGEtdGFyZ2V0PScjaW50cm9DYXJvdXNlbCcgZGF0YS1zbGlkZS10bz0nXCIgKyBpbmRleCArIFwiJz48L2xpPlwiKTtcclxuICAvL1xyXG4gIC8vICAgJCh0aGlzKS5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsIFwidXJsKCdcIiArICQodGhpcykuY2hpbGRyZW4oJy5jYXJvdXNlbC1iYWNrZ3JvdW5kJykuY2hpbGRyZW4oJ2ltZycpLmF0dHIoJ3NyYycpICtcIicpXCIpO1xyXG4gIC8vICAgJCh0aGlzKS5jaGlsZHJlbignLmNhcm91c2VsLWJhY2tncm91bmQnKS5yZW1vdmUoKTtcclxuICAvLyB9KTtcclxuXHJcbiAgLy8gJChcIi5jYXJvdXNlbFwiKS5zd2lwZSh7XHJcbiAgLy8gICBzd2lwZTogZnVuY3Rpb24oZXZlbnQsIGRpcmVjdGlvbiwgZGlzdGFuY2UsIGR1cmF0aW9uLCBmaW5nZXJDb3VudCwgZmluZ2VyRGF0YSkge1xyXG4gIC8vICAgICBpZiAoZGlyZWN0aW9uID09ICdsZWZ0JykgJCh0aGlzKS5jYXJvdXNlbCgnbmV4dCcpO1xyXG4gIC8vICAgICBpZiAoZGlyZWN0aW9uID09ICdyaWdodCcpICQodGhpcykuY2Fyb3VzZWwoJ3ByZXYnKTtcclxuICAvLyAgIH0sXHJcbiAgLy8gICBhbGxvd1BhZ2VTY3JvbGw6XCJ2ZXJ0aWNhbFwiXHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vIFNraWxscyBzZWN0aW9uXHJcbiAgLy8gJCgnI3NraWxscycpLndheXBvaW50KGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgJCgnLnByb2dyZXNzIC5wcm9ncmVzcy1iYXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgICAkKHRoaXMpLmNzcyhcIndpZHRoXCIsICQodGhpcykuYXR0cihcImFyaWEtdmFsdWVub3dcIikgKyAnJScpO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfSwgeyBvZmZzZXQ6ICc4MCUnfSApO1xyXG5cclxuICAvLyBqUXVlcnkgY291bnRlclVwICh1c2VkIGluIEZhY3RzIHNlY3Rpb24pXHJcbiAgJCgnW2RhdGEtdG9nZ2xlPVwiY291bnRlci11cFwiXScpLmNvdW50ZXJVcCh7XHJcbiAgICBkZWxheTogMTAsXHJcbiAgICB0aW1lOiAxMDAwXHJcbiAgfSk7XHJcblxyXG4gIC8vIFBvcmZvbGlvIGlzb3RvcGUgYW5kIGZpbHRlclxyXG4gIHZhciBwb3J0Zm9saW9Jc290b3BlID0gJCgnLnBvcnRmb2xpby1jb250YWluZXInKS5pc290b3BlKHtcclxuICAgIGl0ZW1TZWxlY3RvcjogJy5wb3J0Zm9saW8taXRlbScsXHJcbiAgICBsYXlvdXRNb2RlOiAnZml0Um93cydcclxuICB9KTtcclxuXHJcbiAgJCgnI3BvcnRmb2xpby1mbHRlcnMgbGknKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiI3BvcnRmb2xpby1mbHRlcnMgbGlcIikucmVtb3ZlQ2xhc3MoJ2ZpbHRlci1hY3RpdmUnKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2ZpbHRlci1hY3RpdmUnKTtcclxuXHJcbiAgICBwb3J0Zm9saW9Jc290b3BlLmlzb3RvcGUoeyBmaWx0ZXI6ICQodGhpcykuZGF0YSgnZmlsdGVyJykgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIENsaWVudHMgY2Fyb3VzZWwgKHVzZXMgdGhlIE93bCBDYXJvdXNlbCBsaWJyYXJ5KVxyXG4gICQoXCIuY2xpZW50cy1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZTogeyAwOiB7IGl0ZW1zOiAyIH0sIDc2ODogeyBpdGVtczogNCB9LCA5MDA6IHsgaXRlbXM6IDYgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBUZXN0aW1vbmlhbHMgY2Fyb3VzZWwgKHVzZXMgdGhlIE93bCBDYXJvdXNlbCBsaWJyYXJ5KVxyXG4gIC8vICQoXCIudGVzdGltb25pYWxzLWNhcm91c2VsXCIpLm93bENhcm91c2VsKHtcclxuICAvLyAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gIC8vICAgZG90czogdHJ1ZSxcclxuICAvLyAgIGxvb3A6IHRydWUsXHJcbiAgLy8gICBpdGVtczogMVxyXG4gIC8vIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNvbGxhcHNlLXRleHQtZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkuZmluZCgnIycgKyAkKHRoaXMpLmRhdGEoJ3RhcmdldC1pZCcpKS5zaG93KCk7XHJcbiAgICAkKHRoaXMpLmhpZGUoKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jb2xsYXBzZS10ZXh0LXVwJywgZnVuY3Rpb24oZSkge1xyXG4gICAgJCgnIycgKyAkKHRoaXMpLmRhdGEoJ3RhcmdldC1pZCcpKS5oaWRlKCk7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5jb2xsYXBzZS10ZXh0LWRvd24nKS5zaG93KCk7XHJcbiAgfSk7XHJcbn0pKGpRdWVyeSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=