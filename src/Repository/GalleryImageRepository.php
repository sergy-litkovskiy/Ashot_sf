<?php

namespace App\Repository;

use App\Entity\GalleryImage;
use App\Service\GalleryImageService;
use Doctrine\DBAL\Driver\Statement;
use Doctrine\DBAL\FetchMode;

class GalleryImageRepository extends AbstractRepository
{
    /**
     * @param int $categoryId
     * @return array
     */
    public function getImageListByCategoryId(int $categoryId): array
    {
        $qb = $this->connection->createQueryBuilder();
        $qb
            ->select(
                'id',
                'gallery_category_id as galleryCategoryId',
                'path',
                'name',
                'year',
                'material',
                'size',
                'comment',
                'sell_price as sellPrice',
                'seq_number as seqNumber'
            )
            ->from('gallery_img')
            ->where($qb->expr()->eq('gallery_category_id', ':categoryId'))
            ->andWhere($qb->expr()->eq('status', ':status'))
            ->setParameters(['categoryId' => $categoryId, 'status' => GalleryImageService::STATUS_ON])
            ->orderBy('seq_number')
        ;

        /** @var Statement $statement */
        $statement = $qb->execute();

        return $statement->fetchAll(FetchMode::CUSTOM_OBJECT, GalleryImage::class);
    }
}
