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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3N0eWxlLmNzcz9kZjM2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwid2luZG93Iiwib24iLCJsZW5ndGgiLCJkZWxheSIsImZhZGVPdXQiLCJyZW1vdmUiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJmYWRlSW4iLCJjbGljayIsImFuaW1hdGUiLCJXT1ciLCJpbml0Iiwic3VwZXJmaXNoIiwiYW5pbWF0aW9uIiwib3BhY2l0eSIsInNwZWVkIiwiJG1vYmlsZV9uYXYiLCJjbG9uZSIsInByb3AiLCJpZCIsImZpbmQiLCJhdHRyIiwiYXBwZW5kIiwicHJlcGVuZCIsImRvY3VtZW50IiwiZSIsIm5leHQiLCJ0b2dnbGVDbGFzcyIsIm5leHRBbGwiLCJlcSIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlIiwiY29udGFpbmVyIiwiaXMiLCJ0YXJnZXQiLCJoYXMiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGlkZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiaG9zdG5hbWUiLCJoYXNoIiwidG9wX3NwYWNlIiwib3V0ZXJIZWlnaHQiLCJvZmZzZXQiLCJ0b3AiLCJwYXJlbnRzIiwiY2xvc2VzdCIsImFkZENsYXNzIiwibmF2X3NlY3Rpb25zIiwibWFpbl9uYXYiLCJtYWluX25hdl9oZWlnaHQiLCJjdXJfcG9zIiwiZWFjaCIsImJvdHRvbSIsInBhcmVudCIsImNvdW50ZXJVcCIsInRpbWUiLCJwb3J0Zm9saW9Jc290b3BlIiwiaXNvdG9wZSIsIml0ZW1TZWxlY3RvciIsImxheW91dE1vZGUiLCJmaWx0ZXIiLCJkYXRhIiwib3dsQ2Fyb3VzZWwiLCJhdXRvcGxheSIsImRvdHMiLCJsb29wIiwicmVzcG9uc2l2ZSIsIml0ZW1zIiwic2hvdyIsImpRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7O0FDQUFBLG1CQUFPLENBQUMsZ0RBQUQsQ0FBUDs7QUFFQSxDQUFDLFVBQVVDLENBQVYsRUFBYTtBQUNaLGVBRFksQ0FHWjs7QUFDQUEsR0FBQyxDQUFDQyxNQUFELENBQUQsQ0FBVUMsRUFBVixDQUFhLE1BQWIsRUFBcUIsWUFBWTtBQUMvQixRQUFJRixDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCRyxNQUFwQixFQUE0QjtBQUMxQkgsT0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkksS0FBaEIsQ0FBc0IsR0FBdEIsRUFBMkJDLE9BQTNCLENBQW1DLE1BQW5DLEVBQTJDLFlBQVk7QUFDckRMLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU0sTUFBUjtBQUNELE9BRkQ7QUFHRDtBQUNGLEdBTkQsRUFKWSxDQVlaOztBQUNBTixHQUFDLENBQUNDLE1BQUQsQ0FBRCxDQUFVTSxNQUFWLENBQWlCLFlBQVc7QUFDMUIsUUFBSVAsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxTQUFSLEtBQXNCLEdBQTFCLEVBQStCO0FBQzdCUixPQUFDLENBQUMsY0FBRCxDQUFELENBQWtCUyxNQUFsQixDQUF5QixNQUF6QjtBQUNELEtBRkQsTUFFTztBQUNMVCxPQUFDLENBQUMsY0FBRCxDQUFELENBQWtCSyxPQUFsQixDQUEwQixNQUExQjtBQUNEO0FBQ0YsR0FORDtBQU9BTCxHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCVSxLQUFsQixDQUF3QixZQUFVO0FBQ2hDVixLQUFDLENBQUMsWUFBRCxDQUFELENBQWdCVyxPQUFoQixDQUF3QjtBQUFDSCxlQUFTLEVBQUc7QUFBYixLQUF4QixFQUF3QyxJQUF4QyxFQUE4QyxlQUE5QztBQUNBLFdBQU8sS0FBUDtBQUNELEdBSEQsRUFwQlksQ0F5Qlo7O0FBQ0EsTUFBSUksR0FBSixHQUFVQyxJQUFWLEdBMUJZLENBNEJaOztBQUNBYixHQUFDLENBQUMsV0FBRCxDQUFELENBQWVjLFNBQWYsQ0FBeUI7QUFDdkJDLGFBQVMsRUFBRTtBQUNUQyxhQUFPLEVBQUU7QUFEQSxLQURZO0FBSXZCQyxTQUFLLEVBQUU7QUFKZ0IsR0FBekIsRUE3QlksQ0FvQ1o7O0FBQ0EsTUFBSWpCLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCRyxNQUE3QixFQUFxQztBQUNuQyxRQUFJZSxXQUFXLEdBQUdsQixDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5Qm1CLEtBQXpCLEdBQWlDQyxJQUFqQyxDQUFzQztBQUN0REMsUUFBRSxFQUFFO0FBRGtELEtBQXRDLENBQWxCO0FBR0FILGVBQVcsQ0FBQ0ksSUFBWixDQUFpQixNQUFqQixFQUF5QkMsSUFBekIsQ0FBOEI7QUFDNUIsZUFBUyxFQURtQjtBQUU1QixZQUFNO0FBRnNCLEtBQTlCO0FBSUF2QixLQUFDLENBQUMsTUFBRCxDQUFELENBQVV3QixNQUFWLENBQWlCTixXQUFqQjtBQUNBbEIsS0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVeUIsT0FBVixDQUFrQixrRkFBbEI7QUFDQXpCLEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXdCLE1BQVYsQ0FBaUIscUNBQWpCO0FBQ0F4QixLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCc0IsSUFBakIsQ0FBc0Isb0JBQXRCLEVBQTRDRyxPQUE1QyxDQUFvRCxvQ0FBcEQ7QUFFQXpCLEtBQUMsQ0FBQzBCLFFBQUQsQ0FBRCxDQUFZeEIsRUFBWixDQUFlLE9BQWYsRUFBd0Isc0JBQXhCLEVBQWdELFVBQVN5QixDQUFULEVBQVk7QUFDMUQzQixPQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QixJQUFSLEdBQWVDLFdBQWYsQ0FBMkIsa0JBQTNCO0FBQ0E3QixPQUFDLENBQUMsSUFBRCxDQUFELENBQVE4QixPQUFSLENBQWdCLElBQWhCLEVBQXNCQyxFQUF0QixDQUF5QixDQUF6QixFQUE0QkMsV0FBNUI7QUFDQWhDLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTZCLFdBQVIsQ0FBb0IsK0JBQXBCO0FBQ0QsS0FKRDtBQU1BN0IsS0FBQyxDQUFDMEIsUUFBRCxDQUFELENBQVl4QixFQUFaLENBQWUsT0FBZixFQUF3QixvQkFBeEIsRUFBOEMsVUFBU3lCLENBQVQsRUFBWTtBQUN4RDNCLE9BQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTZCLFdBQVYsQ0FBc0IsbUJBQXRCO0FBQ0E3QixPQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQjZCLFdBQTFCLENBQXNDLGtCQUF0QztBQUNBN0IsT0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJpQyxNQUF6QjtBQUNELEtBSkQ7QUFNQWpDLEtBQUMsQ0FBQzBCLFFBQUQsQ0FBRCxDQUFZaEIsS0FBWixDQUFrQixVQUFTaUIsQ0FBVCxFQUFZO0FBQzVCLFVBQUlPLFNBQVMsR0FBR2xDLENBQUMsQ0FBQyxpQ0FBRCxDQUFqQjs7QUFDQSxVQUFJLENBQUNrQyxTQUFTLENBQUNDLEVBQVYsQ0FBYVIsQ0FBQyxDQUFDUyxNQUFmLENBQUQsSUFBMkJGLFNBQVMsQ0FBQ0csR0FBVixDQUFjVixDQUFDLENBQUNTLE1BQWhCLEVBQXdCakMsTUFBeEIsS0FBbUMsQ0FBbEUsRUFBcUU7QUFDbkUsWUFBSUgsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVc0MsUUFBVixDQUFtQixtQkFBbkIsQ0FBSixFQUE2QztBQUMzQ3RDLFdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXVDLFdBQVYsQ0FBc0IsbUJBQXRCO0FBQ0F2QyxXQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQjZCLFdBQTFCLENBQXNDLGtCQUF0QztBQUNBN0IsV0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJLLE9BQXpCO0FBQ0Q7QUFDRjtBQUNGLEtBVEQ7QUFVRCxHQW5DRCxNQW1DTyxJQUFJTCxDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ0csTUFBekMsRUFBaUQ7QUFDdERILEtBQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDd0MsSUFBckM7QUFDRCxHQTFFVyxDQTRFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUNBeEMsR0FBQyxDQUFDLHVDQUFELENBQUQsQ0FBMkNFLEVBQTNDLENBQThDLE9BQTlDLEVBQXVELFlBQVc7QUFDaEUsUUFBSXVDLFFBQVEsQ0FBQ0MsUUFBVCxDQUFrQkMsT0FBbEIsQ0FBMEIsS0FBMUIsRUFBaUMsRUFBakMsS0FBd0MsS0FBS0QsUUFBTCxDQUFjQyxPQUFkLENBQXNCLEtBQXRCLEVBQTZCLEVBQTdCLENBQXhDLElBQTRFRixRQUFRLENBQUNHLFFBQVQsSUFBcUIsS0FBS0EsUUFBMUcsRUFBb0g7QUFDbEgsVUFBSVIsTUFBTSxHQUFHcEMsQ0FBQyxDQUFDLEtBQUs2QyxJQUFOLENBQWQ7O0FBQ0EsVUFBSVQsTUFBTSxDQUFDakMsTUFBWCxFQUFtQjtBQUNqQixZQUFJMkMsU0FBUyxHQUFHLENBQWhCOztBQUVBLFlBQUk5QyxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFHLE1BQWpCLEVBQXlCO0FBQ3ZCMkMsbUJBQVMsR0FBRzlDLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYStDLFdBQWIsRUFBWjs7QUFFQSxjQUFJLENBQUUvQyxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFzQyxRQUFiLENBQXNCLGlCQUF0QixDQUFOLEVBQWdEO0FBQzlDUSxxQkFBUyxHQUFHQSxTQUFTLEdBQUcsRUFBeEI7QUFDRDtBQUNGOztBQUVEOUMsU0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQlcsT0FBaEIsQ0FBd0I7QUFDdEJILG1CQUFTLEVBQUU0QixNQUFNLENBQUNZLE1BQVAsR0FBZ0JDLEdBQWhCLEdBQXNCSDtBQURYLFNBQXhCLEVBRUcsSUFGSCxFQUVTLGVBRlQ7O0FBSUEsWUFBSTlDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWtELE9BQVIsQ0FBZ0IsV0FBaEIsRUFBNkIvQyxNQUFqQyxFQUF5QztBQUN2Q0gsV0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJ1QyxXQUE1QixDQUF3QyxhQUF4QztBQUNBdkMsV0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUQsT0FBUixDQUFnQixJQUFoQixFQUFzQkMsUUFBdEIsQ0FBK0IsYUFBL0I7QUFDRDs7QUFFRCxZQUFJcEQsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVc0MsUUFBVixDQUFtQixtQkFBbkIsQ0FBSixFQUE2QztBQUMzQ3RDLFdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVXVDLFdBQVYsQ0FBc0IsbUJBQXRCO0FBQ0F2QyxXQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQjZCLFdBQTFCLENBQXNDLGtCQUF0QztBQUNBN0IsV0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJLLE9BQXpCO0FBQ0Q7O0FBQ0QsZUFBTyxLQUFQO0FBQ0Q7QUFDRjtBQUNGLEdBL0JELEVBMUZZLENBMkhaOztBQUNBLE1BQUlnRCxZQUFZLEdBQUdyRCxDQUFDLENBQUMsU0FBRCxDQUFwQjtBQUNBLE1BQUlzRCxRQUFRLEdBQUd0RCxDQUFDLENBQUMsd0JBQUQsQ0FBaEI7QUFDQSxNQUFJdUQsZUFBZSxHQUFHdkQsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhK0MsV0FBYixFQUF0QjtBQUVBL0MsR0FBQyxDQUFDQyxNQUFELENBQUQsQ0FBVUMsRUFBVixDQUFhLFFBQWIsRUFBdUIsWUFBWTtBQUNqQyxRQUFJc0QsT0FBTyxHQUFHeEQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUSxTQUFSLEVBQWQ7QUFFQTZDLGdCQUFZLENBQUNJLElBQWIsQ0FBa0IsWUFBVztBQUMzQixVQUFJUixHQUFHLEdBQUdqRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnRCxNQUFSLEdBQWlCQyxHQUFqQixHQUF1Qk0sZUFBakM7QUFBQSxVQUNJRyxNQUFNLEdBQUdULEdBQUcsR0FBR2pELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUStDLFdBQVIsRUFEbkI7O0FBR0EsVUFBSVMsT0FBTyxJQUFJUCxHQUFYLElBQWtCTyxPQUFPLElBQUlFLE1BQWpDLEVBQXlDO0FBQ3ZDSixnQkFBUSxDQUFDaEMsSUFBVCxDQUFjLElBQWQsRUFBb0JpQixXQUFwQixDQUFnQyw4QkFBaEM7QUFDQWUsZ0JBQVEsQ0FBQ2hDLElBQVQsQ0FBYyxjQUFZdEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRdUIsSUFBUixDQUFhLElBQWIsQ0FBWixHQUErQixJQUE3QyxFQUFtRG9DLE1BQW5ELENBQTBELElBQTFELEVBQWdFUCxRQUFoRSxDQUF5RSw4QkFBekU7QUFDRDtBQUNGLEtBUkQ7QUFTRCxHQVpELEVBaElZLENBOElaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBcEQsR0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0M0RCxTQUFoQyxDQUEwQztBQUN4Q3hELFNBQUssRUFBRSxFQURpQztBQUV4Q3lELFFBQUksRUFBRTtBQUZrQyxHQUExQyxFQTFLWSxDQStLWjs7QUFDQSxNQUFJQyxnQkFBZ0IsR0FBRzlELENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCK0QsT0FBMUIsQ0FBa0M7QUFDdkRDLGdCQUFZLEVBQUUsaUJBRHlDO0FBRXZEQyxjQUFVLEVBQUU7QUFGMkMsR0FBbEMsQ0FBdkI7QUFLQWpFLEdBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCRSxFQUExQixDQUE4QixPQUE5QixFQUF1QyxZQUFXO0FBQ2hERixLQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQnVDLFdBQTFCLENBQXNDLGVBQXRDO0FBQ0F2QyxLQUFDLENBQUMsSUFBRCxDQUFELENBQVFvRCxRQUFSLENBQWlCLGVBQWpCO0FBRUFVLG9CQUFnQixDQUFDQyxPQUFqQixDQUF5QjtBQUFFRyxZQUFNLEVBQUVsRSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRSxJQUFSLENBQWEsUUFBYjtBQUFWLEtBQXpCO0FBQ0QsR0FMRCxFQXJMWSxDQTRMWjs7QUFDQW5FLEdBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCb0UsV0FBdkIsQ0FBbUM7QUFDakNDLFlBQVEsRUFBRSxJQUR1QjtBQUVqQ0MsUUFBSSxFQUFFLElBRjJCO0FBR2pDQyxRQUFJLEVBQUUsSUFIMkI7QUFJakNDLGNBQVUsRUFBRTtBQUFFLFNBQUc7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FBTDtBQUFtQixXQUFLO0FBQUVBLGFBQUssRUFBRTtBQUFULE9BQXhCO0FBQXNDLFdBQUs7QUFBRUEsYUFBSyxFQUFFO0FBQVQ7QUFBM0M7QUFKcUIsR0FBbkMsRUE3TFksQ0FxTVo7O0FBQ0F6RSxHQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0Qm9FLFdBQTVCLENBQXdDO0FBQ3RDQyxZQUFRLEVBQUUsSUFENEI7QUFFdENDLFFBQUksRUFBRSxJQUZnQztBQUd0Q0MsUUFBSSxFQUFFLElBSGdDO0FBSXRDRSxTQUFLLEVBQUU7QUFKK0IsR0FBeEM7QUFPQXpFLEdBQUMsQ0FBQzBCLFFBQUQsQ0FBRCxDQUFZeEIsRUFBWixDQUFlLE9BQWYsRUFBd0IscUJBQXhCLEVBQStDLFVBQVN5QixDQUFULEVBQVk7QUFDekQzQixLQUFDLENBQUMsSUFBRCxDQUFELENBQVEyRCxNQUFSLEdBQWlCQSxNQUFqQixHQUEwQnJDLElBQTFCLENBQStCLE1BQU10QixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtRSxJQUFSLENBQWEsV0FBYixDQUFyQyxFQUFnRU8sSUFBaEU7QUFDQTFFLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXdDLElBQVI7QUFDRCxHQUhEO0FBS0F4QyxHQUFDLENBQUMwQixRQUFELENBQUQsQ0FBWXhCLEVBQVosQ0FBZSxPQUFmLEVBQXdCLG1CQUF4QixFQUE2QyxVQUFTeUIsQ0FBVCxFQUFZO0FBQ3ZEM0IsS0FBQyxDQUFDLE1BQU1BLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1FLElBQVIsQ0FBYSxXQUFiLENBQVAsQ0FBRCxDQUFtQzNCLElBQW5DO0FBQ0F4QyxLQUFDLENBQUMsSUFBRCxDQUFELENBQVEyRCxNQUFSLEdBQWlCQSxNQUFqQixHQUEwQkEsTUFBMUIsR0FBbUNyQyxJQUFuQyxDQUF3QyxxQkFBeEMsRUFBK0RvRCxJQUEvRDtBQUNELEdBSEQ7QUFJRCxDQXRORCxFQXNOR0MsTUF0TkgsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJyZXF1aXJlKCcuLi9jc3Mvc3R5bGUuY3NzJyk7XHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgLy8gUHJlbG9hZGVyXHJcbiAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQoJyNwcmVsb2FkZXInKS5sZW5ndGgpIHtcclxuICAgICAgJCgnI3ByZWxvYWRlcicpLmRlbGF5KDEwMCkuZmFkZU91dCgnc2xvdycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gQmFjayB0byB0b3AgYnV0dG9uXHJcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMTAwKSB7XHJcbiAgICAgICQoJy5iYWNrLXRvLXRvcCcpLmZhZGVJbignc2xvdycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLmJhY2stdG8tdG9wJykuZmFkZU91dCgnc2xvdycpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoJy5iYWNrLXRvLXRvcCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wIDogMH0sMTUwMCwgJ2Vhc2VJbk91dEV4cG8nKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxuXHJcbiAgLy8gSW5pdGlhdGUgdGhlIHdvd2pzIGFuaW1hdGlvbiBsaWJyYXJ5XHJcbiAgbmV3IFdPVygpLmluaXQoKTtcclxuXHJcbiAgLy8gSW5pdGlhdGUgc3VwZXJmaXNoIG9uIG5hdiBtZW51XHJcbiAgJCgnLm5hdi1tZW51Jykuc3VwZXJmaXNoKHtcclxuICAgIGFuaW1hdGlvbjoge1xyXG4gICAgICBvcGFjaXR5OiAnc2hvdydcclxuICAgIH0sXHJcbiAgICBzcGVlZDogNDAwXHJcbiAgfSk7XHJcblxyXG4gIC8vIE1vYmlsZSBOYXZpZ2F0aW9uXHJcbiAgaWYgKCQoJyNuYXYtbWVudS1jb250YWluZXInKS5sZW5ndGgpIHtcclxuICAgIHZhciAkbW9iaWxlX25hdiA9ICQoJyNuYXYtbWVudS1jb250YWluZXInKS5jbG9uZSgpLnByb3Aoe1xyXG4gICAgICBpZDogJ21vYmlsZS1uYXYnXHJcbiAgICB9KTtcclxuICAgICRtb2JpbGVfbmF2LmZpbmQoJz4gdWwnKS5hdHRyKHtcclxuICAgICAgJ2NsYXNzJzogJycsXHJcbiAgICAgICdpZCc6ICcnXHJcbiAgICB9KTtcclxuICAgICQoJ2JvZHknKS5hcHBlbmQoJG1vYmlsZV9uYXYpO1xyXG4gICAgJCgnYm9keScpLnByZXBlbmQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwibW9iaWxlLW5hdi10b2dnbGVcIj48aSBjbGFzcz1cImZhIGZhLWJhcnNcIj48L2k+PC9idXR0b24+Jyk7XHJcbiAgICAkKCdib2R5JykuYXBwZW5kKCc8ZGl2IGlkPVwibW9iaWxlLWJvZHktb3Zlcmx5XCI+PC9kaXY+Jyk7XHJcbiAgICAkKCcjbW9iaWxlLW5hdicpLmZpbmQoJy5tZW51LWhhcy1jaGlsZHJlbicpLnByZXBlbmQoJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1kb3duXCI+PC9pPicpO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWVudS1oYXMtY2hpbGRyZW4gaScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgJCh0aGlzKS5uZXh0KCkudG9nZ2xlQ2xhc3MoJ21lbnUtaXRlbS1hY3RpdmUnKTtcclxuICAgICAgJCh0aGlzKS5uZXh0QWxsKCd1bCcpLmVxKDApLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJmYS1jaGV2cm9uLXVwIGZhLWNoZXZyb24tZG93blwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbW9iaWxlLW5hdi10b2dnbGUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbW9iaWxlLW5hdi1hY3RpdmUnKTtcclxuICAgICAgJCgnI21vYmlsZS1uYXYtdG9nZ2xlIGknKS50b2dnbGVDbGFzcygnZmEtdGltZXMgZmEtYmFycycpO1xyXG4gICAgICAkKCcjbW9iaWxlLWJvZHktb3Zlcmx5JykudG9nZ2xlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgIHZhciBjb250YWluZXIgPSAkKFwiI21vYmlsZS1uYXYsICNtb2JpbGUtbmF2LXRvZ2dsZVwiKTtcclxuICAgICAgaWYgKCFjb250YWluZXIuaXMoZS50YXJnZXQpICYmIGNvbnRhaW5lci5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ21vYmlsZS1uYXYtYWN0aXZlJykpIHtcclxuICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9iaWxlLW5hdi1hY3RpdmUnKTtcclxuICAgICAgICAgICQoJyNtb2JpbGUtbmF2LXRvZ2dsZSBpJykudG9nZ2xlQ2xhc3MoJ2ZhLXRpbWVzIGZhLWJhcnMnKTtcclxuICAgICAgICAgICQoJyNtb2JpbGUtYm9keS1vdmVybHknKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKCQoXCIjbW9iaWxlLW5hdiwgI21vYmlsZS1uYXYtdG9nZ2xlXCIpLmxlbmd0aCkge1xyXG4gICAgJChcIiNtb2JpbGUtbmF2LCAjbW9iaWxlLW5hdi10b2dnbGVcIikuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gSGVhZGVyIHNjcm9sbCBjbGFzc1xyXG4gIC8vICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgLy8gICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDkwKSB7XHJcbiAgLy8gICAgICQoJyNoZWFkZXInKS5hZGRDbGFzcygnaGVhZGVyLXNjcm9sbGVkJyk7XHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICAkKCcjaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2hlYWRlci1zY3JvbGxlZCcpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH0pO1xyXG5cclxuICAvLyBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gOTApIHtcclxuICAvLyAgICQoJyNoZWFkZXInKS5hZGRDbGFzcygnaGVhZGVyLXNjcm9sbGVkJyk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBTbW9vdGggc2Nyb2xsIGZvciB0aGUgbWVudSBhbmQgbGlua3Mgd2l0aCAuc2Nyb2xsdG8gY2xhc3Nlc1xyXG4gICQoJy5uYXYtbWVudSBhLCAjbW9iaWxlLW5hdiBhLCAuc2Nyb2xsdG8nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XHJcbiAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XHJcbiAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIHRvcF9zcGFjZSA9IDA7XHJcblxyXG4gICAgICAgIGlmICgkKCcjaGVhZGVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0b3Bfc3BhY2UgPSAkKCcjaGVhZGVyJykub3V0ZXJIZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICBpZiAoISAkKCcjaGVhZGVyJykuaGFzQ2xhc3MoJ2hlYWRlci1zY3JvbGxlZCcpKSB7XHJcbiAgICAgICAgICAgIHRvcF9zcGFjZSA9IHRvcF9zcGFjZSAtIDIwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wIC0gdG9wX3NwYWNlXHJcbiAgICAgICAgfSwgMTUwMCwgJ2Vhc2VJbk91dEV4cG8nKTtcclxuXHJcbiAgICAgICAgaWYgKCQodGhpcykucGFyZW50cygnLm5hdi1tZW51JykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAkKCcubmF2LW1lbnUgLm1lbnUtYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ21lbnUtYWN0aXZlJyk7XHJcbiAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2xpJykuYWRkQ2xhc3MoJ21lbnUtYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdtb2JpbGUtbmF2LWFjdGl2ZScpKSB7XHJcbiAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21vYmlsZS1uYXYtYWN0aXZlJyk7XHJcbiAgICAgICAgICAkKCcjbW9iaWxlLW5hdi10b2dnbGUgaScpLnRvZ2dsZUNsYXNzKCdmYS10aW1lcyBmYS1iYXJzJyk7XHJcbiAgICAgICAgICAkKCcjbW9iaWxlLWJvZHktb3Zlcmx5JykuZmFkZU91dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gTmF2aWdhdGlvbiBhY3RpdmUgc3RhdGUgb24gc2Nyb2xsXHJcbiAgdmFyIG5hdl9zZWN0aW9ucyA9ICQoJ3NlY3Rpb24nKTtcclxuICB2YXIgbWFpbl9uYXYgPSAkKCcubmF2LW1lbnUsICNtb2JpbGUtbmF2Jyk7XHJcbiAgdmFyIG1haW5fbmF2X2hlaWdodCA9ICQoJyNoZWFkZXInKS5vdXRlckhlaWdodCgpO1xyXG5cclxuICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjdXJfcG9zID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuICBcclxuICAgIG5hdl9zZWN0aW9ucy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgdG9wID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgLSBtYWluX25hdl9oZWlnaHQsXHJcbiAgICAgICAgICBib3R0b20gPSB0b3AgKyAkKHRoaXMpLm91dGVySGVpZ2h0KCk7XHJcbiAgXHJcbiAgICAgIGlmIChjdXJfcG9zID49IHRvcCAmJiBjdXJfcG9zIDw9IGJvdHRvbSkge1xyXG4gICAgICAgIG1haW5fbmF2LmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ21lbnUtYWN0aXZlIG1lbnUtaXRlbS1hY3RpdmUnKTtcclxuICAgICAgICBtYWluX25hdi5maW5kKCdhW2hyZWY9XCIjJyskKHRoaXMpLmF0dHIoJ2lkJykrJ1wiXScpLnBhcmVudCgnbGknKS5hZGRDbGFzcygnbWVudS1hY3RpdmUgbWVudS1pdGVtLWFjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gSW50cm8gY2Fyb3VzZWxcclxuICAvLyB2YXIgaW50cm9DYXJvdXNlbCA9ICQoXCIuY2Fyb3VzZWxcIik7XHJcbiAgLy8gdmFyIGludHJvQ2Fyb3VzZWxJbmRpY2F0b3JzID0gJChcIi5jYXJvdXNlbC1pbmRpY2F0b3JzXCIpO1xyXG4gIC8vIGludHJvQ2Fyb3VzZWwuZmluZChcIi5jYXJvdXNlbC1pbm5lclwiKS5jaGlsZHJlbihcIi5jYXJvdXNlbC1pdGVtXCIpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcclxuICAvLyAgIChpbmRleCA9PT0gMCkgP1xyXG4gIC8vICAgaW50cm9DYXJvdXNlbEluZGljYXRvcnMuYXBwZW5kKFwiPGxpIGRhdGEtdGFyZ2V0PScjaW50cm9DYXJvdXNlbCcgZGF0YS1zbGlkZS10bz0nXCIgKyBpbmRleCArIFwiJyBjbGFzcz0nYWN0aXZlJz48L2xpPlwiKSA6XHJcbiAgLy8gICBpbnRyb0Nhcm91c2VsSW5kaWNhdG9ycy5hcHBlbmQoXCI8bGkgZGF0YS10YXJnZXQ9JyNpbnRyb0Nhcm91c2VsJyBkYXRhLXNsaWRlLXRvPSdcIiArIGluZGV4ICsgXCInPjwvbGk+XCIpO1xyXG4gIC8vXHJcbiAgLy8gICAkKHRoaXMpLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIiwgXCJ1cmwoJ1wiICsgJCh0aGlzKS5jaGlsZHJlbignLmNhcm91c2VsLWJhY2tncm91bmQnKS5jaGlsZHJlbignaW1nJykuYXR0cignc3JjJykgK1wiJylcIik7XHJcbiAgLy8gICAkKHRoaXMpLmNoaWxkcmVuKCcuY2Fyb3VzZWwtYmFja2dyb3VuZCcpLnJlbW92ZSgpO1xyXG4gIC8vIH0pO1xyXG5cclxuICAvLyAkKFwiLmNhcm91c2VsXCIpLnN3aXBlKHtcclxuICAvLyAgIHN3aXBlOiBmdW5jdGlvbihldmVudCwgZGlyZWN0aW9uLCBkaXN0YW5jZSwgZHVyYXRpb24sIGZpbmdlckNvdW50LCBmaW5nZXJEYXRhKSB7XHJcbiAgLy8gICAgIGlmIChkaXJlY3Rpb24gPT0gJ2xlZnQnKSAkKHRoaXMpLmNhcm91c2VsKCduZXh0Jyk7XHJcbiAgLy8gICAgIGlmIChkaXJlY3Rpb24gPT0gJ3JpZ2h0JykgJCh0aGlzKS5jYXJvdXNlbCgncHJldicpO1xyXG4gIC8vICAgfSxcclxuICAvLyAgIGFsbG93UGFnZVNjcm9sbDpcInZlcnRpY2FsXCJcclxuICAvLyB9KTtcclxuXHJcbiAgLy8gU2tpbGxzIHNlY3Rpb25cclxuICAvLyAkKCcjc2tpbGxzJykud2F5cG9pbnQoZnVuY3Rpb24oKSB7XHJcbiAgLy8gICAkKCcucHJvZ3Jlc3MgLnByb2dyZXNzLWJhcicpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgLy8gICAgICQodGhpcykuY3NzKFwid2lkdGhcIiwgJCh0aGlzKS5hdHRyKFwiYXJpYS12YWx1ZW5vd1wiKSArICclJyk7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9LCB7IG9mZnNldDogJzgwJSd9ICk7XHJcblxyXG4gIC8vIGpRdWVyeSBjb3VudGVyVXAgKHVzZWQgaW4gRmFjdHMgc2VjdGlvbilcclxuICAkKCdbZGF0YS10b2dnbGU9XCJjb3VudGVyLXVwXCJdJykuY291bnRlclVwKHtcclxuICAgIGRlbGF5OiAxMCxcclxuICAgIHRpbWU6IDEwMDBcclxuICB9KTtcclxuXHJcbiAgLy8gUG9yZm9saW8gaXNvdG9wZSBhbmQgZmlsdGVyXHJcbiAgdmFyIHBvcnRmb2xpb0lzb3RvcGUgPSAkKCcucG9ydGZvbGlvLWNvbnRhaW5lcicpLmlzb3RvcGUoe1xyXG4gICAgaXRlbVNlbGVjdG9yOiAnLnBvcnRmb2xpby1pdGVtJyxcclxuICAgIGxheW91dE1vZGU6ICdmaXRSb3dzJ1xyXG4gIH0pO1xyXG5cclxuICAkKCcjcG9ydGZvbGlvLWZsdGVycyBsaScpLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICQoXCIjcG9ydGZvbGlvLWZsdGVycyBsaVwiKS5yZW1vdmVDbGFzcygnZmlsdGVyLWFjdGl2ZScpO1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnZmlsdGVyLWFjdGl2ZScpO1xyXG5cclxuICAgIHBvcnRmb2xpb0lzb3RvcGUuaXNvdG9wZSh7IGZpbHRlcjogJCh0aGlzKS5kYXRhKCdmaWx0ZXInKSB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gQ2xpZW50cyBjYXJvdXNlbCAodXNlcyB0aGUgT3dsIENhcm91c2VsIGxpYnJhcnkpXHJcbiAgJChcIi5jbGllbnRzLWNhcm91c2VsXCIpLm93bENhcm91c2VsKHtcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiB7IDA6IHsgaXRlbXM6IDIgfSwgNzY4OiB7IGl0ZW1zOiA0IH0sIDkwMDogeyBpdGVtczogNiB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIFRlc3RpbW9uaWFscyBjYXJvdXNlbCAodXNlcyB0aGUgT3dsIENhcm91c2VsIGxpYnJhcnkpXHJcbiAgJChcIi50ZXN0aW1vbmlhbHMtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIGl0ZW1zOiAxXHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY29sbGFwc2UtdGV4dC1kb3duJywgZnVuY3Rpb24oZSkge1xyXG4gICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcjJyArICQodGhpcykuZGF0YSgndGFyZ2V0LWlkJykpLnNob3coKTtcclxuICAgICQodGhpcykuaGlkZSgpO1xyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNvbGxhcHNlLXRleHQtdXAnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAkKCcjJyArICQodGhpcykuZGF0YSgndGFyZ2V0LWlkJykpLmhpZGUoKTtcclxuICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuZmluZCgnLmNvbGxhcHNlLXRleHQtZG93bicpLnNob3coKTtcclxuICB9KTtcclxufSkoalF1ZXJ5KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==