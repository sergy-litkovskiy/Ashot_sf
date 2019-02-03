<?php

namespace App\Service;

use App\Repository\AboutRepository;

class AboutService
{
    /**
     * @var AboutRepository
     */
    private $repository;

    /**
     * Constructor
     *
     * @param AboutRepository $repository
     */
    public function __construct(AboutRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getAboutData()
    {
        return $this->repository->getAboutData();
    }
}
