<?php

declare(strict_types=1);

namespace App\Service;

use App\Repository\GalleryImageRepository;

class GalleryImageService
{
    public const STATUS_ON = 1;
    public const STATUS_OFF = 0;

    /**
     * @var GalleryImageRepository
     */
    private $repository;

    /**
     * Constructor
     *
     * @param GalleryImageRepository $repository
     */
    public function __construct(GalleryImageRepository $repository)
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
