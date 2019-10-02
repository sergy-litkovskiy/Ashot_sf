<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Message;

class MessageRepository extends AbstractRepository
{
    /**
     * @param Message $message
     */
    public function save(Message $message): void
    {
        $qb = $this->connection->createQueryBuilder();
        $qb
            ->insert('message')
            ->values([
                'name'       => ':name',
                'email'      => ':email',
                'text'       => ':text',
                'created_at' => ':createdAt',
            ])
            ->setParameter(':name', $message->getName())
            ->setParameter(':email', $message->getEmail())
            ->setParameter(':text', $message->getText())
            ->setParameter(':createdAt', $message->getCreatedAt()->format('Y-m-d H:i:s'))
        ;

        $qb->execute();
    }
}
