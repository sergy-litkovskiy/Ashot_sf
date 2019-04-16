<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class GalleryController extends AbstractController
{
    /**
     * @return Response
     */
    public function showAction(): Response
    {
        return $this->render('Gallery/show.twig', []);
    }
}
