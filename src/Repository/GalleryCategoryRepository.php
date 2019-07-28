<?php

namespace App\Repository;

use App\Entity\GalleryCategory;
use App\Helper\ArrayHelper;
use App\Service\GalleryCategoryService;
use App\Service\GalleryImageService;
use Doctrine\DBAL\Driver\Statement;
use Doctrine\DBAL\FetchMode;

class GalleryCategoryRepository extends AbstractRepository
{
    /**
     * @param int $id
     * @return GalleryCategory|null
     */
    public function getCategoryById(int $id): ?GalleryCategory
    {
        $qb = $this->connection->createQueryBuilder();
        $qb
            ->select('id', 'name', 'slug', 'seq_number as seqNumber', 'status')
            ->from('gallery_category')
            ->where($qb->expr()->eq('id', ':id'))
            ->setParameter('id', $id)
        ;

        /** @var Statement $statement */
        $statement = $qb->execute();

        $result = $statement->fetchAll(FetchMode::CUSTOM_OBJECT, 'App\Entity\GalleryCategory');

        return ArrayHelper::arrayGet($result, 0);
    }

    public function getCategoryBySlug(string $categorySlug): ?GalleryCategory
    {
        $qb = $this->connection->createQueryBuilder();
        $qb
            ->select('id', 'name', 'slug', 'seq_number as seqNumber', 'status')
            ->from('gallery_category')
            ->where($qb->expr()->eq('slug', ':categorySlug'))
            ->setParameter('categorySlug', $categorySlug)
        ;

        /** @var Statement $statement */
        $statement = $qb->execute();

        $result = $statement->fetchAll(FetchMode::CUSTOM_OBJECT, 'App\Entity\GalleryCategory');

        return ArrayHelper::arrayGet($result, 0);
    }

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

        return $statement->fetchAll(FetchMode::CUSTOM_OBJECT, 'App\Entity\GalleryCategory');
    }
}
