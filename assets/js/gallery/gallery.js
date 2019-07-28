// (function ($) {
//     "use strict";
//
//     const $galleryContainer = $('#gallery-image-container');
//     const $galleryImageContainer = $galleryContainer.isotope({
//         itemSelector: '.gallery-item',
//         layoutMode  : 'fitRows'
//     });
//
//     let filterSet = [];
//
//     let _loadData = function (categoryId, filter) {
//         $.ajax({
//             'type': 'GET',
//             'url' : '/gallery/category/' + categoryId
//         })
//         .success(function (response) {
//             response.data.map(function (image) {
//                 const itemCategoryId = image.galleryCategoryId;
//                 let description = '';
//                 let item = '';
//
//                 description += image.material ? image.material : '';
//                 description += image.size ? ' | ' + image.size : '';
//                 description += image.year ? ' | ' + image.year : '';
//
//                 item += '<div class="col-lg-4 col-md-6 gallery-item filter-' + itemCategoryId + ' wow fadeInUp">';
//                 item += '<div class="gallery-wrap">';
//                 item += '<figure>';
//                 item += '<a href="/img/' + image.path + '" data-lightbox="' + itemCategoryId + '" data-title="' + image.name + ' - ' + image.year + '">';
//                 item += '<img src="/img/' + image.path + '" class="img-fluid" alt="">';
//                 item += '</a>';
//                 item += '</figure>';
//                 item += '<div class="gallery-info">';
//                 item += '<p>' + image.name + '</p>';
//                 item += '<p>' + description + '</p>';
//                 item += '<p>' + image.comment ? image.comment : '' + 'г.</p>';
//                 item += '</div>';
//                 item += '</div>';
//                 item += '</div>';
//
//                 const $item = $(item);
//                 $galleryImageContainer.append($item).isotope('appended', $item);
//             });
//
//             $galleryImageContainer.isotope({filter: filter});
//         })
//         .error(function (response) {
// console.log('ERROR', response);
//         });
//     };
//
//     $('#gallery-filters li').on('click', function () {
//         $('#gallery-filters li').removeClass('filter-active');
//         $(this).addClass('filter-active');
//
//         const categoryId = $(this).data('cat-id');
//         const filter = $(this).data('filter');
// console.log('!!!filter', filter);
//
//         // $galleryContainer.find('.gallery-item').hide();// todo: show loader
//
//         if (!filterSet.includes(filter)) {
// console.log('NO filter - '+filter);
//             filterSet.push(filter);
//             _loadData(categoryId, filter);
//         } else {
// console.log('Filter exists - '+filter);
//             const elements = $galleryImageContainer.isotope('getFilteredItemElements');
//
//             $galleryImageContainer.isotope('insert', elements);
//             $galleryImageContainer.isotope({filter: filter});
//         }
//     });
//
// })(jQuery);
