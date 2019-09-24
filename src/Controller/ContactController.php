<?php

declare(strict_types=1);

namespace App\Controller;

use App\Service\MessageService;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ContactController extends AbstractController
{
    /**
     * @param Request        $request
     * @param MessageService $messageService
     * @return JsonResponse
     */
    public function sendContactAction(
        Request $request,
        MessageService $messageService
    ): JsonResponse {
        try {
            $data = [
                'name'    => $request->get('name'),
                'email'   => $request->get('email'),
                'text' => $request->get('message'),
            ];

            $messageService->saveMessage($data);
        } catch (Exception $e) {
            return $this->json(['errors' => \explode(',', $e->getMessage())], Response::HTTP_BAD_REQUEST);
        }

        return $this->json(['data' => []]);
    }
}
