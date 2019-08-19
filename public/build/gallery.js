(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery"],{

/***/ "./assets/js/gallery/gallery.js":
/*!**************************************!*\
  !*** ./assets/js/gallery/gallery.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function ($) {
  "use strict";

  var $galleryMainLoaderContainer = $('#gallery-main-loader');
  var $galleryFilterContainer = $('#gallery-filters ');
  var $galleryContainer = $('#gallery-image-container');
  var $galleryImageContainer = $galleryContainer.isotope({
    itemSelector: '.gallery-item',
    layoutMode: 'fitRows'
  });
  var filterSet = [];

  var _hideLoaders = function _hideLoaders(element) {
    $galleryMainLoaderContainer.addClass('hidden');
    element.find('.gallery-filter-loader').addClass('hidden');
  };

  var _showLoaders = function _showLoaders(element) {
    $galleryMainLoaderContainer.removeClass('hidden');
    element.find('.gallery-filter-loader').removeClass('hidden');
  };

  var _loadData = function _loadData(categoryId, filter, $navContext) {
    $.ajax({
      'type': 'GET',
      'url': '/gallery/category/' + categoryId,
      success: function success(response) {
        var $map = [];
        response.data.map(function (image) {
          var itemCategoryId = image.galleryCategoryId;
          var description = '';
          var item = '';
          description += image.material ? image.material : '';
          description += image.size ? ' | ' + image.size : '';
          description += image.year ? ' | ' + image.year : '';
          item += '<div class="col-lg-4 col-md-6 gallery-item filter-' + itemCategoryId + ' wow fadeInUp">';
          item += '<div class="gallery-wrap">';
          item += '<figure>';
          item += '<a href="/img/' + image.path + '" data-lightbox="' + itemCategoryId + '" data-title="' + image.name + ' - ' + image.year + '">';
          item += '<img src="/img/' + image.path + '" class="img-fluid" alt="">';
          item += '</a>';
          item += '</figure>';
          item += '<div class="gallery-info">';
          item += '<p>' + image.name + '</p>';
          item += '<p>' + description + '</p>';
          item +=  true ? image.comment : undefined;
          item += '</div>';
          item += '</div>';
          item += '</div>';
          $map.push($(item));
        });
        $galleryImageContainer.append($map).isotope('insert', $map).isotope('reloadItems');
        $galleryImageContainer.isotope({
          filter: filter
        });
      },
      error: function error(response) {
        console.log('ERROR', response);
      },
      complete: function complete() {
        _hideLoaders($navContext);
      }
    });
  };

  $galleryFilterContainer.find('li').on('click', function () {
    var $item = $(this);
    $galleryFilterContainer.find('li').removeClass('filter-active');
    $item.addClass('filter-active');

    _showLoaders($item);

    var categoryId = $item.data('cat-id');
    var filter = $item.data('filter');

    if (!filterSet.includes(filter)) {
      filterSet.push(filter);

      _loadData(categoryId, filter, $item);
    } else {
      _hideLoaders($item);

      var elements = $galleryImageContainer.isotope('getFilteredItemElements');
      $galleryImageContainer.isotope('insert', elements).isotope('reloadItems');
      $galleryImageContainer.isotope({
        filter: filter
      });
    }
  });
})(jQuery);

/***/ })

},[["./assets/js/gallery/gallery.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ2FsbGVyeS9nYWxsZXJ5LmpzIl0sIm5hbWVzIjpbIiQiLCIkZ2FsbGVyeU1haW5Mb2FkZXJDb250YWluZXIiLCIkZ2FsbGVyeUZpbHRlckNvbnRhaW5lciIsIiRnYWxsZXJ5Q29udGFpbmVyIiwiJGdhbGxlcnlJbWFnZUNvbnRhaW5lciIsImlzb3RvcGUiLCJpdGVtU2VsZWN0b3IiLCJsYXlvdXRNb2RlIiwiZmlsdGVyU2V0IiwiX2hpZGVMb2FkZXJzIiwiZWxlbWVudCIsImFkZENsYXNzIiwiZmluZCIsIl9zaG93TG9hZGVycyIsInJlbW92ZUNsYXNzIiwiX2xvYWREYXRhIiwiY2F0ZWdvcnlJZCIsImZpbHRlciIsIiRuYXZDb250ZXh0IiwiYWpheCIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsIiRtYXAiLCJkYXRhIiwibWFwIiwiaW1hZ2UiLCJpdGVtQ2F0ZWdvcnlJZCIsImdhbGxlcnlDYXRlZ29yeUlkIiwiZGVzY3JpcHRpb24iLCJpdGVtIiwibWF0ZXJpYWwiLCJzaXplIiwieWVhciIsInBhdGgiLCJuYW1lIiwiY29tbWVudCIsInB1c2giLCJhcHBlbmQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjb21wbGV0ZSIsIm9uIiwiJGl0ZW0iLCJpbmNsdWRlcyIsImVsZW1lbnRzIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxDQUFDLFVBQVVBLENBQVYsRUFBYTtBQUNWOztBQUVBLE1BQU1DLDJCQUEyQixHQUFHRCxDQUFDLENBQUMsc0JBQUQsQ0FBckM7QUFDQSxNQUFNRSx1QkFBdUIsR0FBR0YsQ0FBQyxDQUFDLG1CQUFELENBQWpDO0FBQ0EsTUFBTUcsaUJBQWlCLEdBQUdILENBQUMsQ0FBQywwQkFBRCxDQUEzQjtBQUVBLE1BQU1JLHNCQUFzQixHQUFHRCxpQkFBaUIsQ0FBQ0UsT0FBbEIsQ0FBMEI7QUFDckRDLGdCQUFZLEVBQUUsZUFEdUM7QUFFckRDLGNBQVUsRUFBSTtBQUZ1QyxH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Iiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBjb25zdCAkZ2FsbGVyeU1haW5Mb2FkZXJDb250YWluZXIgPSAkKCcjZ2FsbGVyeS1tYWluLWxvYWRlcicpO1xyXG4gICAgY29uc3QgJGdhbGxlcnlGaWx0ZXJDb250YWluZXIgPSAkKCcjZ2FsbGVyeS1maWx0ZXJzICcpO1xyXG4gICAgY29uc3QgJGdhbGxlcnlDb250YWluZXIgPSAkKCcjZ2FsbGVyeS1pbWFnZS1jb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCAkZ2FsbGVyeUltYWdlQ29udGFpbmVyID0gJGdhbGxlcnlDb250YWluZXIuaXNvdG9wZSh7XHJcbiAgICAgICAgaXRlbVNlbGVjdG9yOiAnLmdhbGxlcnktaXRlbScsXHJcbiAgICAgICAgbGF5b3V0TW9kZSAgOiAnZml0Um93cydcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBmaWx0ZXJTZXQgPSBbXTtcclxuXHJcbiAgICBsZXQgX2hpZGVMb2FkZXJzID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAkZ2FsbGVyeU1haW5Mb2FkZXJDb250YWluZXIuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgIGVsZW1lbnQuZmluZCgnLmdhbGxlcnktZmlsdGVyLWxvYWRlcicpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgIH07XHJcblxyXG4gICAgbGV0IF9zaG93TG9hZGVycyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgJGdhbGxlcnlNYWluTG9hZGVyQ29udGFpbmVyLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICBlbGVtZW50LmZpbmQoJy5nYWxsZXJ5LWZpbHRlci1sb2FkZXInKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBfbG9hZERhdGEgPSBmdW5jdGlvbiAoY2F0ZWdvcnlJZCwgZmlsdGVyLCAkbmF2Q29udGV4dCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICd0eXBlJyAgOiAnR0VUJyxcclxuICAgICAgICAgICAgJ3VybCcgICA6ICcvZ2FsbGVyeS9jYXRlZ29yeS8nICsgY2F0ZWdvcnlJZCxcclxuICAgICAgICAgICAgc3VjY2VzcyA6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0ICRtYXAgPSBbXTtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEubWFwKGZ1bmN0aW9uIChpbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1DYXRlZ29yeUlkID0gaW1hZ2UuZ2FsbGVyeUNhdGVnb3J5SWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gKz0gaW1hZ2UubWF0ZXJpYWwgPyBpbWFnZS5tYXRlcmlhbCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uICs9IGltYWdlLnNpemUgPyAnIHwgJyArIGltYWdlLnNpemUgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiArPSBpbWFnZS55ZWFyID8gJyB8ICcgKyBpbWFnZS55ZWFyIDogJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gKz0gJzxkaXYgY2xhc3M9XCJjb2wtbGctNCBjb2wtbWQtNiBnYWxsZXJ5LWl0ZW0gZmlsdGVyLScgKyBpdGVtQ2F0ZWdvcnlJZCArICcgd293IGZhZGVJblVwXCI+JztcclxuICAgICAgICAgICAgICAgICAgICBpdGVtICs9ICc8ZGl2IGNsYXNzPVwiZ2FsbGVyeS13cmFwXCI+JztcclxuICAgICAgICAgICAgICAgICAgICBpdGVtICs9ICc8ZmlndXJlPic7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSArPSAnPGEgaHJlZj1cIi9pbWcvJyArIGltYWdlLnBhdGggKyAnXCIgZGF0YS1saWdodGJveD1cIicgKyBpdGVtQ2F0ZWdvcnlJZCArICdcIiBkYXRhLXRpdGxlPVwiJyArIGltYWdlLm5hbWUgKyAnIC0gJyArIGltYWdlLnllYXIgKyAnXCI+JztcclxuICAgICAgICAgICAgICAgICAgICBpdGVtICs9ICc8aW1nIHNyYz1cIi9pbWcvJyArIGltYWdlLnBhdGggKyAnXCIgY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJcIj4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gKz0gJzwvYT4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gKz0gJzwvZmlndXJlPic7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSArPSAnPGRpdiBjbGFzcz1cImdhbGxlcnktaW5mb1wiPic7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSArPSAnPHA+JyArIGltYWdlLm5hbWUgKyAnPC9wPic7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSArPSAnPHA+JyArIGRlc2NyaXB0aW9uICsgJzwvcD4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gKz0gJzxwPicgKyBpbWFnZS5jb21tZW50ID8gaW1hZ2UuY29tbWVudCA6ICcnICsgJ9CzLjwvcD4nO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gKz0gJzwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSArPSAnPC9kaXY+JztcclxuICAgICAgICAgICAgICAgICAgICBpdGVtICs9ICc8L2Rpdj4nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkbWFwLnB1c2goJChpdGVtKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkZ2FsbGVyeUltYWdlQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgkbWFwKVxyXG4gICAgICAgICAgICAgICAgICAgIC5pc290b3BlKCdpbnNlcnQnLCAkbWFwKVxyXG4gICAgICAgICAgICAgICAgICAgIC5pc290b3BlKCdyZWxvYWRJdGVtcycpO1xyXG4gICAgICAgICAgICAgICAgJGdhbGxlcnlJbWFnZUNvbnRhaW5lci5pc290b3BlKHtmaWx0ZXI6IGZpbHRlcn0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciAgIDogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbmNvbnNvbGUubG9nKCdFUlJPUicsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF9oaWRlTG9hZGVycygkbmF2Q29udGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICAkZ2FsbGVyeUZpbHRlckNvbnRhaW5lci5maW5kKCdsaScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCAkaXRlbSA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICRnYWxsZXJ5RmlsdGVyQ29udGFpbmVyLmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ2ZpbHRlci1hY3RpdmUnKTtcclxuICAgICAgICAkaXRlbS5hZGRDbGFzcygnZmlsdGVyLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICBfc2hvd0xvYWRlcnMoJGl0ZW0pO1xyXG5cclxuICAgICAgICBjb25zdCBjYXRlZ29yeUlkID0gJGl0ZW0uZGF0YSgnY2F0LWlkJyk7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyID0gJGl0ZW0uZGF0YSgnZmlsdGVyJyk7XHJcblxyXG4gICAgICAgIGlmICghZmlsdGVyU2V0LmluY2x1ZGVzKGZpbHRlcikpIHtcclxuICAgICAgICAgICAgZmlsdGVyU2V0LnB1c2goZmlsdGVyKTtcclxuICAgICAgICAgICAgX2xvYWREYXRhKGNhdGVnb3J5SWQsIGZpbHRlciwgJGl0ZW0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF9oaWRlTG9hZGVycygkaXRlbSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gJGdhbGxlcnlJbWFnZUNvbnRhaW5lci5pc290b3BlKCdnZXRGaWx0ZXJlZEl0ZW1FbGVtZW50cycpO1xyXG5cclxuICAgICAgICAgICAgJGdhbGxlcnlJbWFnZUNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgLmlzb3RvcGUoJ2luc2VydCcsIGVsZW1lbnRzKVxyXG4gICAgICAgICAgICAgICAgLmlzb3RvcGUoJ3JlbG9hZEl0ZW1zJyk7XHJcbiAgICAgICAgICAgICRnYWxsZXJ5SW1hZ2VDb250YWluZXIuaXNvdG9wZSh7ZmlsdGVyOiBmaWx0ZXJ9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pKGpRdWVyeSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=