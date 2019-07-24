<?php

namespace App\Repository;

use App\Entity\Category;
use App\Helper\ArrayHelper;
use Doctrine\DBAL\Driver\Statement;
use Doctrine\DBAL\FetchMode;

class CategoryRepository extends AbstractRepository
{
    /**
     * @param int $id
     * @return Category|null
     */
    public function getCategoryById(int $id): ?Category
    {
        $qb = $this->connection->createQueryBuilder();
        $qb
            ->select('c.*')
            ->from('category', 'c')
            ->where($qb->expr()->eq('c.id', ':id'))
            ->setParameter('id', $id)
        ;

        /** @var Statement $statement */
        $statement = $qb->execute();

        $result = $statement->fetchAll(FetchMode::CUSTOM_OBJECT, 'App\Entity\Category');

        return ArrayHelper::arrayGet($result, 0);
    }

    /**
     * @return array
     */
    public function getCategoryList(): array
    {
        $qb = $this->connection->createQueryBuilder();
        $qb
            ->select('c.id', 'c.cat_name', 'c.part_name', 'c.text_short')
            ->from('category', 'c')
        ;

        /** @var Statement $statement */
        $statement = $qb->execute();

        return $statement->fetchAll(FetchMode::CUSTOM_OBJECT, 'App\Entity\Category');
    }
}
