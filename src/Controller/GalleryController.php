<?php

namespace App\Controller;

use App\Service\GalleryCategoryService;
use App\Service\GalleryImageService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class GalleryController extends AbstractController
{
    /**
     * @param GalleryCategoryService $categoryService
     * @param GalleryImageService    $galleryImageService
     * @return Response
     */
    public function showAction(
        GalleryCategoryService $categoryService,
        GalleryImageService $galleryImageService
    ): Response {
        $categoryList = $categoryService->getCategoryList();
        $imageList = $galleryImageService->getImageList();

        return $this->render(
            'Gallery/show.twig',
            [
                'categoryList' => $categoryList,
                'imageList'    => $imageList,
            ]
        );
    }
}
