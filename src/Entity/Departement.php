<?php

namespace App\Entity;

use App\Repository\DepartementRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DepartementRepository::class)]
class Departement
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $libelleDep = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $abrevDep = null;

    #[ORM\OneToMany(mappedBy: 'departementId', targetEntity: Personnel::class)]
    private Collection $personnels;

    #[ORM\Column(nullable: true)]
    private ?int $codes = null;

    public function __construct()
    {
        $this->personnels = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLibelleDep(): ?string
    {
        return $this->libelleDep;
    }

    public function setLibelleDep(?string $libelleDep): self
    {
        $this->libelleDep = $libelleDep;

        return $this;
    }

    public function getAbrevDep(): ?string
    {
        return $this->abrevDep;
    }

    public function setAbrevDep(?string $abrevDep): self
    {
        $this->abrevDep = $abrevDep;

        return $this;
    }

    /**
     * @return Collection<int, Personnel>
     */
    public function getPersonnels(): Collection
    {
        return $this->personnels;
    }

    public function addPersonnel(Personnel $personnel): self
    {
        if (!$this->personnels->contains($personnel)) {
            $this->personnels->add($personnel);
            $personnel->setDepartementId($this);
        }

        return $this;
    }

    public function removePersonnel(Personnel $personnel): self
    {
        if ($this->personnels->removeElement($personnel)) {
            // set the owning side to null (unless already changed)
            if ($personnel->getDepartementId() === $this) {
                $personnel->setDepartementId(null);
            }
        }

        return $this;
    }

    public function getCodes(): ?int
    {
        return $this->codes;
    }

    public function setCodes(?int $codes): self
    {
        $this->codes = $codes;

        return $this;
    }
}