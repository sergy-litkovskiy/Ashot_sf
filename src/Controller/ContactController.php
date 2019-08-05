<?php

namespace App\Controller;

use App\Entity\Message;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ContactController extends AbstractController
{
    /**
     * @param Request            $request
     * @param ValidatorInterface $validator
     * @return JsonResponse
     */
    public function sendContactAction(Request $request, ValidatorInterface $validator): JsonResponse
    {
        $name = $request->get('name');
        $email = $request->get('email');
        $text = $request->get('message');

        $message = new Message();
        $message->setSenderName($name);
        $message->setSenderEmail($email);
        $message->setText($text);

        $errors = $validator->validate($message);

        if ($errors->count()) {
            $errorMessage = [];
            foreach ($errors as $error) {
                $errorMessage[$error->getPropertyPath()] = $error->getMessage();
            }

            return $this->json(['errors' => $errorMessage], Response::HTTP_BAD_REQUEST);
        }

        return $this->json(['data' => []]);
    }
}
