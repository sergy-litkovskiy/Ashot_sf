<?php

namespace App\Repository;

use Doctrine\DBAL\Connection;

abstract class AbstractRepository
{
    /**
     * @var Connection
     */
    protected $connection;

    /**
     * Constructor
     *
     * @param $connection
     */
    public function __construct(Connection $connection)
    {
        $this->connection = $connection;
    }
}
