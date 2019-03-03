<?php

namespace App\Controller;

use App\Service\AboutLinksService;
use App\Service\CategoryService;
use App\Service\ImageService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class IndexController extends AbstractController
{
    const CATEGORY_ABOUT_AUTHOR_ID = 15;

    /**
     * @param Request           $request
     * @param AboutLinksService $aboutLinksService
     * @param CategoryService   $categoryService
     * @param ImageService      $imageService
     * @return Response
     */
    public function indexAction(
        Request $request,
        AboutLinksService $aboutLinksService,
        CategoryService $categoryService,
        ImageService $imageService
    ): Response {
        $links = $aboutLinksService->getAboutLinks();
        $aboutAuthorCategory = $categoryService->getCategoryById(self::CATEGORY_ABOUT_AUTHOR_ID);
        $aboutAuthorImageList = $imageService->getImageListByCategoryId(self::CATEGORY_ABOUT_AUTHOR_ID);

        return $this->render(
            'Index/index.twig',
            [
                'links'                => $links,
                'aboutAuthorCategory'  => $aboutAuthorCategory,
                'aboutAuthorImageList' => $aboutAuthorImageList,
            ]
        );
    }
}
