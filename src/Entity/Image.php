<?php

namespace App\Entity;

class Image
{
    /** @var int */
    private $id;
    /** @var int */
    private $id_category;
    /** @var int */
    private $number;
    /** @var int */
    private $sell_price;
    /** @var string */
    private $status;
    /** @var string */
    private $img_path;
    /** @var string */
    private $img_name;
    /** @var int */
    private $img_year;
    /** @var string */
    private $img_material;
    /** @var string */
    private $img_size;
    /** @var string */
    private $img_comment;

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
     * @return int
     */
    public function getIdCategory(): int
    {
        return $this->id_category;
    }

    /**
     * @param int $idCategory
     * @return $this
     */
    public function setIdCategory(int $idCategory): self
    {
        $this->id_category = $idCategory;

        return $this;
    }

    /**
     * @return int
     */
    public function getNumber(): int
    {
        return $this->number;
    }

    /**
     * @param int $number
     * @return $this
     */
    public function setNumber(int $number): self
    {
        $this->number = $number;

        return $this;
    }

    /**
     * @return int
     */
    public function getSellPrice(): int
    {
        return $this->sell_price;
    }

    /**
     * @param int $sellPrice
     * @return $this
     */
    public function setSellPrice(int $sellPrice): self
    {
        $this->sell_price = $sellPrice;

        return $this;
    }

    /**
     * @return string
     */
    public function getStatus(): string
    {
        return $this->status;
    }

    /**
     * @param string $status
     * @return $this
     */
    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    /**
     * @return string
     */
    public function getImgPath(): string
    {
        return $this->img_path;
    }

    /**
     * @param string $imgPath
     * @return $this
     */
    public function setImgPath(string $imgPath): self
    {
        $this->img_path = $imgPath;

        return $this;
    }

    /**
     * @return string
     */
    public function getImgName(): string
    {
        return $this->img_name;
    }

    /**
     * @param string $imgName
     * @return $this
     */
    public function setImgName(string $imgName): self
    {
        $this->img_name = $imgName;

        return $this;
    }

    /**
     * @return int
     */
    public function getImgYear(): int
    {
        return $this->img_year;
    }

    /**
     * @param int $imgYear
     * @return $this
     */
    public function setImgYear(int $imgYear): self
    {
        $this->img_year = $imgYear;

        return $this;
    }

    /**
     * @return string
     */
    public function getImgMaterial(): string
    {
        return $this->img_material;
    }

    /**
     * @param string $imgMaterial
     * @return $this
     */
    public function setImgMaterial(string $imgMaterial): self
    {
        $this->img_material = $imgMaterial;

        return $this;
    }

    /**
     * @return string
     */
    public function getImgSize(): string
    {
        return $this->img_size;
    }

    /**
     * @param string $imgSize
     * @return $this
     */
    public function setImgSize(string $imgSize): self
    {
        $this->img_size = $imgSize;

        return $this;
    }

    /**
     * @return string
     */
    public function getImgComment(): string
    {
        return $this->img_comment;
    }

    /**
     * @param string $imgComment
     * @return $this
     */
    public function setImgComment(string $imgComment): self
    {
        $this->img_comment = $imgComment;

        return $this;
    }
}
