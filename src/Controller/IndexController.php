<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class IndexController extends AbstractController
{
    /**
     * @return Response
     */
    public function showAction(): Response
    {
        return $this->render('Index/show.twig');
    }
}
