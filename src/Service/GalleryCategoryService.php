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
     * @return GalleryCategory[]
     */
    public function getCategoryList(): array
    {
        return $this->repository->getCategoryList();
    }
}
