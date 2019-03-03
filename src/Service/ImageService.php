<?php

namespace App\Service;

use App\Repository\ImageRepository;

class ImageService
{
    /**
     * @var ImageRepository
     */
    private $repository;

    /**
     * Constructor
     *
     * @param ImageRepository $repository
     */
    public function __construct(ImageRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param int $categoryId
     * @return array
     */
    public function getImageListByCategoryId(int $categoryId): array
    {
        return $this->repository->getImageListByCategoryId($categoryId);
    }
}
