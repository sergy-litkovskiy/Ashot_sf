<?php

namespace App\Repository;

use App\Entity\Category;
use App\Helper\ArrayHelper;
use Doctrine\DBAL\Driver\Statement;

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

        $result = $statement->fetchAll(\Doctrine\DBAL\FetchMode::CUSTOM_OBJECT, 'App\Entity\Category');

        return ArrayHelper::arrayGet($result, 0);
    }
}
