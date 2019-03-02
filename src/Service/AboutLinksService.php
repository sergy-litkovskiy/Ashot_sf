<?php

namespace App\Service;

use App\Repository\AboutLinksRepository;

class AboutLinksService
{
    /**
     * @var AboutLinksRepository
     */
    private $repository;

    /**
     * Constructor
     *
     * @param AboutLinksRepository $repository
     */
    public function __construct(AboutLinksRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getAboutLinks()
    {
        return $this->repository->getAboutLinks();
    }
}
