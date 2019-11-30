<?php

namespace App\Controller;

use App\Service\AboutService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class IndexController extends AbstractController
{
    /**
     * @param Request      $request
     * @param AboutService $aboutService
     * @return Response
     */
    public function indexAction(Request $request, AboutService $aboutService): Response
    {
        $links = $aboutService->getAboutData();

        return $this->render('Index/index.twig', ['data' => ['about' => 'about person text']]);
    }
}
