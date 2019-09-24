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
    private $name;
    /** @var string */
    private $email;
    /** @var string */
    private $text;
    /** @var DateTime */
    private $createdAt;

    public static function loadValidatorMetadata(ClassMetadata $metadata)
    {
        $metadata->addPropertyConstraint('name', new NotBlank([
            'message' => 'Поле "Имя" является обязательным',
        ]));
        $metadata->addPropertyConstraint('email', new NotBlank([
            'message' => 'Поле "Email" является обязательным',
        ]));
        $metadata->addPropertyConstraint('email', new Email([
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
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * @param string|null $name
     * @return $this
     */
    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getEmail(): ?string
    {
        return $this->email;
    }

    /**
     * @param string|null $email
     * @return $this
     */
    public function setEmail(?string $email): self
    {
        $this->email = $email;

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
     * @param string|null $message
     * @return $this
     */
    public function setText(?string $message): self
    {
        $this->text = $message;

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
