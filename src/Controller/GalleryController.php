<?php

namespace App\Controller;

use App\Entity\GalleryCategory;
use App\Helper\ArrayHelper;
use App\Service\GalleryCategoryService;
use App\Service\GalleryImageService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
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
        /** @var GalleryCategory $firstCategory */
        $firstCategory= ArrayHelper::arrayGet($categoryList, 0);

        if ($firstCategory) {
            $firstCategoryId = $firstCategory->getId();
            $imageList = $galleryImageService->getImageListByCategoryId($firstCategoryId);
        }

        return $this->render(
            'Gallery/show.twig',
            [
                'categoryList' => $categoryList,
                'imageList'    => $imageList ?? [],
            ]
        );
    }

    /**
     * @param string                 $categoryId
     * @param GalleryImageService $galleryImageService
     * @return JsonResponse
     */
    public function galleryByCategoryAction(string $categoryId, GalleryImageService $galleryImageService): JsonResponse
    {
        if (!$categoryId) {
            return $this->json(['errors' => ['Category ID is required']], Response::HTTP_BAD_REQUEST);
        }

        $imageList = $galleryImageService->getImageListByCategoryId((int) $categoryId);

        return $this->json(['data' => $imageList]);
    }
}
