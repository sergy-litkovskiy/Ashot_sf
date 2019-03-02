<?php

namespace App\Controller;

use App\Service\AboutLinksService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class IndexController extends AbstractController
{
    /**
     * @param Request      $request
     * @param AboutLinksService $aboutLinksService
     * @return Response
     */
    public function indexAction(Request $request, AboutLinksService $aboutLinksService): Response
    {
        $links = $aboutLinksService->getAboutLinks();

        return $this->render('Index/index.twig', ['data' => $links]);
    }
}
