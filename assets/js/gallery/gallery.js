(function ($) {
    "use strict";

    const $galleryMainLoaderContainer = $('#gallery-main-loader');
    const $galleryFilterContainer = $('#gallery-filters ');
    const $galleryContainer = $('#gallery-image-container');

    let $galleryImageContainer = $galleryContainer.isotope({
        itemSelector: '.gallery-item',
        layoutMode  : 'fitRows'
    });

    let loadedFilterSet = [];

    let _hideLoaders = function (element) {
        $galleryMainLoaderContainer.addClass('hidden');
        element.find('.gallery-filter-loader').addClass('hidden');
    };

    let _showLoaders = function (element) {
        $galleryMainLoaderContainer.removeClass('hidden');
        element.find('.gallery-filter-loader').removeClass('hidden');
    };

    let _collectElements = function (response, filter) {
        let filteredElements = [];

        response.data.map(function (image) {
            const itemCategoryId = image.galleryCategoryId;
            let description = '';
            let item = '';

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
            item += '<p>' + image.comment ? image.comment : '' + 'г.</p>';
            item += '</div>';
            item += '</div>';
            item += '</div>';

            filteredElements.push($(item));
        });

        loadedFilterSet.push(filter);

        $galleryImageContainer
            .append(filteredElements)
            .isotope('insert', filteredElements)
            .isotope('reloadItems')
            .isotope({filter: filter});
    };

    let _loadData = function (categoryId, filter, $navContext) {
        $.ajax({
            'type'  : 'GET',
            'url'   : '/gallery/category/' + categoryId,
            success : function (response) {
                _collectElements(response, filter);
            },
            error   : function (response) {
console.log('ERROR', response);
            },
            complete: function () {
                _hideLoaders($navContext);
            }
        })
    };

    let _onFilterClick = function () {
        const $item = $(this);

        if ($item.hasClass('filter-active')) {
            return false;
        }

        $galleryFilterContainer.find('li').removeClass('filter-active');
        $item.addClass('filter-active');

        _showLoaders($item);

        const categoryId = $item.data('cat-id');
        const filter = $item.data('filter');

        if (!loadedFilterSet.includes(filter)) {
            _loadData(categoryId, filter, $item);
        } else {
            _hideLoaders($item);
            $galleryImageContainer.isotope({filter: filter});
        }
    };

    $galleryFilterContainer.find('li').on('click', _onFilterClick);

})(jQuery);
