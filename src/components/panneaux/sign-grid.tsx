"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import SignCard from "./sign-card"
import { signs } from "@/data/signs"

const categories = [
  { value: "danger", label: "Danger" },
  { value: "interdiction", label: "Interdiction" },
  { value: "obligation", label: "Obligation" },
  { value: "indication", label: "Indication" },
  { value: "intersection", label: "Intersection" },
  { value: "chemin_de_fer", label: "Chemin de fer" },
  { value: "fin_interdiction", label: "Fin d'interdiction" },
]

export default function SignGrid() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return signs.filter((sign) => {
      const matchSearch =
        sign.name.toLowerCase().includes(search.toLowerCase()) ||
        sign.description.toLowerCase().includes(search.toLowerCase())
      const matchCategory = activeCategory
        ? sign.category === activeCategory
        : true
      return matchSearch && matchCategory
    })
  }, [search, activeCategory])

  return (
    <div>
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Rechercher un panneau..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Badge
              key={cat.value}
              variant={activeCategory === cat.value ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() =>
                setActiveCategory(
                  activeCategory === cat.value ? null : cat.value
                )
              }
            >
              {cat.label}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((sign) => (
          <SignCard key={sign.id} sign={sign} />
        ))}
      </div>
    </div>
  )
}