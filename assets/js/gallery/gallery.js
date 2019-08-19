(function ($) {
    "use strict";

    const $galleryMainLoaderContainer = $('#gallery-main-loader');
    const $galleryFilterContainer = $('#gallery-filters ');
    const $galleryContainer = $('#gallery-image-container');

    const $galleryImageContainer = $galleryContainer.isotope({
        itemSelector: '.gallery-item',
        layoutMode  : 'fitRows'
    });

    let filterSet = [];

    let _hideLoaders = function (element) {
        $galleryMainLoaderContainer.addClass('hidden');
        element.find('.gallery-filter-loader').addClass('hidden');
    };

    let _showLoaders = function (element) {
        $galleryMainLoaderContainer.removeClass('hidden');
        element.find('.gallery-filter-loader').removeClass('hidden');
    };

    let _loadData = function (categoryId, filter, $navContext) {
        $.ajax({
            'type'  : 'GET',
            'url'   : '/gallery/category/' + categoryId,
            success : function (response) {
                let $map = [];
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

                    $map.push($(item));
                });

                $galleryImageContainer
                    .append($map)
                    .isotope('insert', $map)
                    .isotope('reloadItems');
                $galleryImageContainer.isotope({filter: filter});
            },
            error   : function (response) {
console.log('ERROR', response);
            },
            complete: function () {
                _hideLoaders($navContext);
            }
        })
    };

    $galleryFilterContainer.find('li').on('click', function () {
        const $item = $(this);

        $galleryFilterContainer.find('li').removeClass('filter-active');
        $item.addClass('filter-active');

        _showLoaders($item);

        const categoryId = $item.data('cat-id');
        const filter = $item.data('filter');

        if (!filterSet.includes(filter)) {
            filterSet.push(filter);
            _loadData(categoryId, filter, $item);
        } else {
            _hideLoaders($item);
            const elements = $galleryImageContainer.isotope('getFilteredItemElements');

            $galleryImageContainer
                .isotope('insert', elements)
                .isotope('reloadItems');
            $galleryImageContainer.isotope({filter: filter});
        }
    });

})(jQuery);
