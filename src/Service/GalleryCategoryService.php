<?php

namespace App\Service;

use App\Entity\GalleryCategory;
use App\Repository\GalleryCategoryRepository;

class GalleryCategoryService
{
    public const STATUS_ON = 1;
    public const STATUS_OFF = 0;

    /**
     * @var GalleryCategoryRepository
     */
    private $repository;

    /**
     * Constructor
     *
     * @param GalleryCategoryRepository $repository
     */
    public function __construct(GalleryCategoryRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param int $categoryId
     * @return GalleryCategory|null
     */
    public function getCategoryById(int $categoryId): ?GalleryCategory
    {
        return $this->repository->getCategoryById($categoryId);
    }

    /**
     * @return array
     */
    public function getCategoryList(): array
    {
        return $this->repository->getCategoryList();
    }
}
