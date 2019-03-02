<?php

namespace App\Repository;

use Doctrine\DBAL\Driver\Statement;

class CategoryRepository extends AbstractRepository
{
    public function getCategoryById(int $id): array
    {
        $qb = $this->connection->createQueryBuilder();
        $qb
            ->select('c')
            ->from('category', 'c')
            ->where($qb->expr()->eq('id', ':id'))
            ->setParameter('id', $id)
        ;

        /** @var Statement $statement */
        $statement = $qb->execute();

        return $statement->fetch();
    }
}
