<?php

namespace App\Entity;

class GalleryImage
{
    /** @var int */
    private $id;
    /** @var int */
    private $galleryCategoryId;
    /** @var int */
    private $seqNumber;
    /** @var int */
    private $sellPrice;
    /** @var string */
    private $status;
    /** @var string */
    private $path;
    /** @var string */
    private $name;
    /** @var int */
    private $year;
    /** @var string */
    private $material;
    /** @var string */
    private $size;
    /** @var string */
    private $comment;

    /**
     * @return int
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
     * @return int
     */
    public function getGalleryCategoryId(): int
    {
        return $this->galleryCategoryId;
    }

    /**
     * @param int $galleryCategoryId
     * @return $this
     */
    public function setGalleryCategoryId(int $galleryCategoryId): self
    {
        $this->galleryCategoryId = $galleryCategoryId;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getSeqNumber(): ?int
    {
        return $this->seqNumber;
    }

    /**
     * @param int $seqNumber
     * @return $this
     */
    public function setSeqNumber(int $seqNumber): self
    {
        $this->seqNumber = $seqNumber;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getSellPrice(): ?int
    {
        return $this->sellPrice;
    }

    /**
     * @param int $sellPrice
     * @return $this
     */
    public function setSellPrice(int $sellPrice): self
    {
        $this->sellPrice = $sellPrice;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getStatus(): ?int
    {
        return $this->status;
    }

    /**
     * @param int $status
     * @return $this
     */
    public function setStatus(int $status): self
    {
        $this->status = $status;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getPath(): ?string
    {
        return $this->path;
    }

    /**
     * @param string $path
     * @return $this
     */
    public function setPath(string $path): self
    {
        $this->path = $path;

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
     * @param string $name
     * @return $this
     */
    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getYear(): ?int
    {
        return $this->year;
    }

    /**
     * @param int $year
     * @return $this
     */
    public function setYear(int $year): self
    {
        $this->year = $year;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getMaterial(): ?string
    {
        return $this->material;
    }

    /**
     * @param string $material
     * @return $this
     */
    public function setMaterial(string $material): self
    {
        $this->material = $material;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getSize(): ?string
    {
        return $this->size;
    }

    /**
     * @param string $size
     * @return $this
     */
    public function setSize(string $size): self
    {
        $this->size = $size;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getComment(): ?string
    {
        return $this->comment;
    }

    /**
     * @param string $comment
     * @return $this
     */
    public function setComment(string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }
}
