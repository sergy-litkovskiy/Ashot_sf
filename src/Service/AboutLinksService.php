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

    /**
     * @return array
     */
    public function getAboutLinks(): array
    {
        return $this->repository->getAboutLinks();
    }
}
