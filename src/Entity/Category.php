<?php

namespace App\Entity;

class Category
{
    /** @var int */
    private $id;
    /** @var string */
    private $catName;
    /** @var string */
    private $partName;
    /** @var string */
    private $textShort;
    /** @var string */
    private $textLong;

    /**
     * @return int
     */
    public function getId(): int
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
     * @return string
     */
    public function getCatName(): string
    {
        return $this->catName;
    }

    /**
     * @param string $catName
     * @return $this
     */
    public function setCatName(string $catName): self
    {
        $this->catName = $catName;

        return $this;
    }

    /**
     * @return string
     */
    public function getPartName(): string
    {
        return $this->partName;
    }

    /**
     * @param string $partName
     * @return $this
     */
    public function setPartName(string $partName): self
    {
        $this->partName = $partName;

        return $this;
    }

    /**
     * @return string
     */
    public function getTextShort(): string
    {
        return $this->textShort;
    }

    /**
     * @param string $textShort
     * @return $this
     */
    public function setTextShort(string $textShort): self
    {
        $this->textShort = $textShort;

        return $this;
    }

    /**
     * @return string
     */
    public function getTextLong(): string
    {
        return $this->textLong;
    }

    /**
     * @param string $textLong
     * @return $this
     */
    public function setTextLong(string $textLong): self
    {
        $this->textLong = $textLong;

        return $this;
    }
}
