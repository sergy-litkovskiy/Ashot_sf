<?php

namespace App\Repository;

use Doctrine\DBAL\Driver\Statement;

class AboutLinksRepository extends AbstractRepository
{
    public function getAboutLinks(): array
    {
        $qb = $this->connection->createQueryBuilder();
        $qb
            ->select('al.*')
            ->from('about_links', 'al')
        ;

        /** @var Statement $statement */
        $statement = $qb->execute();

        $result = $statement->fetchAll(\Doctrine\DBAL\FetchMode::CUSTOM_OBJECT, "App\Entity\AboutLinks");

        return $result;
    }
}
