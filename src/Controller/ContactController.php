<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class ContactController extends AbstractController
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function sendContactAction(Request $request): JsonResponse
    {
        $data = $request->get('data');
        $result = [];
        return $this->json(['data' => $result]);
    }
}
