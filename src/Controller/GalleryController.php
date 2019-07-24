<?php

namespace App\Controller;

use App\Service\CategoryService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class GalleryController extends AbstractController
{
    /**
     * @param CategoryService $categoryService
     * @return Response
     */
    public function showAction(CategoryService $categoryService): Response
    {
        $categoryList = $categoryService->getCategoryList();
var_dump($categoryList);exit();
        return $this->render('Gallery/show.twig', []);
    }
}
