<?php

namespace App\Service;

use App\Entity\Category;
use App\Repository\CategoryRepository;

class CategoryService
{
    /**
     * @var CategoryRepository
     */
    private $repository;

    /**
     * Constructor
     *
     * @param CategoryRepository $repository
     */
    public function __construct(CategoryRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param int $categoryId
     * @return Category|null
     */
    public function getCategoryById(int $categoryId): ?Category
    {
        return $this->repository->getCategoryById($categoryId);
    }
}
