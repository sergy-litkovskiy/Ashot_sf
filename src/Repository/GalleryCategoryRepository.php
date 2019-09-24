<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\GalleryCategory;
use App\Service\GalleryCategoryService;
use Doctrine\DBAL\Driver\Statement;
use Doctrine\DBAL\FetchMode;

class GalleryCategoryRepository extends AbstractRepository
{
    /**
     * @return GalleryCategory[]
     */
    public function getCategoryList(): array
    {
        $qb = $this->connection->createQueryBuilder();
        $qb
            ->select('id', 'name', 'slug', 'seq_number as seqNumber')
            ->from('gallery_category')
            ->andWhere($qb->expr()->eq('status', ':status'))
            ->setParameters(['status' => GalleryCategoryService::STATUS_ON])
            ->orderBy('seq_number')
        ;

        /** @var Statement $statement */
        $statement = $qb->execute();

        return $statement->fetchAll(FetchMode::CUSTOM_OBJECT, GalleryCategory::class);
    }
}
