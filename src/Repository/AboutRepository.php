<?php

namespace App\Repository;

use Doctrine\DBAL\Driver\Statement;

class AboutRepository extends AbstractRepository
{
    public function getAboutData(): array
    {
        $qb = $this->connection->createQueryBuilder();
        $qb
            ->select('*')
            ->from('about_links', 'al');

        /** @var Statement $statement */
        $statement = $qb->execute();

        return $statement->fetchAll();
    }
}
