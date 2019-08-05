<?php

namespace App\Entity;

use Symfony\Component\Validator\Constraints\DateTime;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Mapping\ClassMetadata;

class Message
{
    /** @var int */
    private $id;
    /** @var string */
    private $senderName;
    /** @var string */
    private $senderEmail;
    /** @var string */
    private $text;
    /** @var DateTime */
    private $createdAt;

    public static function loadValidatorMetadata(ClassMetadata $metadata)
    {
        $metadata->addPropertyConstraint('senderName', new NotBlank([
            'message' => 'Поле "Имя" является обязательным',
        ]));
        $metadata->addPropertyConstraint('senderEmail', new NotBlank([
            'message' => 'Поле "Email" является обязательным',
        ]));
        $metadata->addPropertyConstraint('senderEmail', new Email([
            'message' => 'Email {{ value }} имеет неверный формат',
            'checkMX' => true,
        ]));
        $metadata->addPropertyConstraint('text', new NotBlank([
            'message' => 'Поле "Сообщение" является обязательным',
        ]));
    }

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return $this
     */
    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getSenderName(): ?string
    {
        return $this->senderName;
    }

    /**
     * @param string $senderName
     * @return $this
     */
    public function setSenderName(string $senderName): self
    {
        $this->senderName = $senderName;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getSenderEmail(): ?string
    {
        return $this->senderEmail;
    }

    /**
     * @param string $senderEmail
     * @return $this
     */
    public function setSenderEmail(string $senderEmail): self
    {
        $this->senderEmail = $senderEmail;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getText(): ?string
    {
        return $this->text;
    }

    /**
     * @param string $text
     * @return $this
     */
    public function setText(string $text): self
    {
        $this->text = $text;

        return $this;
    }

    /**
     * @return DateTime|null
     */
    public function getCreatedAt(): ?DateTime
    {
        return $this->createdAt;
    }

    /**
     * @param DateTime $createdAt
     * @return $this
     */
    public function setCreatedAt(DateTime $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }
}
