<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class BooksController extends AbstractController
{
    /**
     * @return Response
     */
    public function showAction(): Response
    {
        return $this->render('Books/show.twig', []);
    }
}
