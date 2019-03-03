<?php

namespace App\Entity;

class Category
{
    /** @var int */
    private $id;
    /** @var string */
    private $cat_name;
    /** @var string */
    private $part_name;
    /** @var string */
    private $text_short;
    /** @var string */
    private $text_long;

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
        return $this->cat_name;
    }

    /**
     * @param string $catName
     * @return $this
     */
    public function setCatName(string $catName): self
    {
        $this->cat_name = $catName;

        return $this;
    }

    /**
     * @return string
     */
    public function getPartName(): string
    {
        return $this->part_name;
    }

    /**
     * @param string $partName
     * @return $this
     */
    public function setPartName(string $partName): self
    {
        $this->part_name = $partName;

        return $this;
    }

    /**
     * @return string
     */
    public function getTextShort(): string
    {
        return $this->text_short;
    }

    /**
     * @param string $textShort
     * @return $this
     */
    public function setTextShort(string $textShort): self
    {
        $this->text_short = $textShort;

        return $this;
    }

    /**
     * @return string
     */
    public function getTextLong(): string
    {
        return $this->text_long;
    }

    /**
     * @param string $textLong
     * @return $this
     */
    public function setTextLong(string $textLong): self
    {
        $this->text_long = $textLong;

        return $this;
    }
}
