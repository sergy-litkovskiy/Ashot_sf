<?php

namespace App\Repository;

use Doctrine\DBAL\Driver\Statement;
use Doctrine\DBAL\FetchMode;

class AboutLinksRepository extends AbstractRepository
{
    /**
     * @return array
     */
    public function getAboutLinks(): array
    {
        $qb = $this->connection->createQueryBuilder();
        $qb
            ->select('al.*')
            ->from('about_links', 'al')
        ;

        /** @var Statement $statement */
        $statement = $qb->execute();

        return $statement->fetchAll(FetchMode::CUSTOM_OBJECT, 'App\Entity\AboutLinks');
    }
}
