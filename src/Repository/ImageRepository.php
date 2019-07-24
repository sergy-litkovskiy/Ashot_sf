<?php

namespace App\Repository;

use Doctrine\DBAL\Driver\Statement;
use Doctrine\DBAL\FetchMode;

class ImageRepository extends AbstractRepository
{
    /**
     * @param int $categoryId
     * @return array
     */
    public function getImageListByCategoryId(int $categoryId): array
    {
        $qb = $this->connection->createQueryBuilder();
        $qb
            ->select('i.*')
            ->from('images', 'i')
            ->where($qb->expr()->eq('i.id_category', ':categoryId'))
            ->andWhere($qb->expr()->eq('i.status', ':on'))
            ->setParameters(['categoryId' => $categoryId, 'on' => 'on'])
            ->orderBy('i.number')
        ;

        /** @var Statement $statement */
        $statement = $qb->execute();

        return $statement->fetchAll(FetchMode::CUSTOM_OBJECT, 'App\Entity\Image');
    }
}
