<?php

namespace App\Controller;

use App\Service\AboutLinksService;
use App\Service\GalleryCategoryService;
use App\Service\GalleryImageService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class IndexController extends AbstractController
{
    /**
     * @param Request                $request
     * @param AboutLinksService      $aboutLinksService
     * @param GalleryCategoryService $categoryService
     * @param GalleryImageService    $imageService
     * @return Response
     */
    public function showAction(
        Request $request,
        AboutLinksService $aboutLinksService,
        GalleryCategoryService $categoryService,
        GalleryImageService $imageService
    ): Response {
//        $links = $aboutLinksService->getAboutLinks();
//        $aboutAuthorCategory = $categoryService->getCategoryById(self::CATEGORY_ABOUT_AUTHOR_ID);
//        $aboutAuthorImageList = $imageService->getImageListByCategoryId(self::CATEGORY_ABOUT_AUTHOR_ID);

        return $this->render(
            'Index/show.twig',
            [
//                'links'                => $links,
//                'aboutAuthorCategory'  => $aboutAuthorCategory,
//                'aboutAuthorImageList' => $aboutAuthorImageList,
            ]
        );
    }
}
