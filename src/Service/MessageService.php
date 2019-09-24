<?php

declare(strict_types=1);

namespace App\Service;

use App\Entity\Message;
use App\Helper\ArrayHelper;
use App\Repository\GalleryImageRepository;
use App\Repository\MessageRepository;
use Exception;
use Symfony\Component\Validator\Constraints\DateTime;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class MessageService
{
    /**
     * @var GalleryImageRepository
     */
    private $repository;

    /**
     * @var ValidatorInterface
     */
    private $validator;

    /**
     * @param MessageRepository  $repository
     * @param ValidatorInterface $validator
     */
    public function __construct(MessageRepository $repository, ValidatorInterface $validator)
    {
        $this->repository = $repository;
        $this->validator = $validator;
    }

    /**
     * @param array $data
     * @throws Exception
     */
    public function saveMessage(array $data): void
    {
        $message = new Message();
        $message->setName(ArrayHelper::arrayGet($data, 'name'));
        $message->setEmail(ArrayHelper::arrayGet($data, 'email'));
        $message->setText(ArrayHelper::arrayGet($data, 'text'));
        $message->setCreatedAt(new DateTime());

        $errors = $this->validator->validate($message);

        if ($errors->count()) {
            $errorMessage = [];
            foreach ($errors as $error) {
                $errorMessage[$error->getPropertyPath()] = $error->getMessage();
            }

            throw new Exception(\implode(',', $errorMessage));
        }

        $this->repository->save($message);
    }
}
