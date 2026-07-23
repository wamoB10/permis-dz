"use client"

import { useState, useMemo } from "react"
import { useTranslations } from "next-intl"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import SignCard from "./sign-card"
import type { Sign } from "@/types"

interface Props {
  signs: Sign[]
}

const categoryKeys = [
  { value: "danger", key: "danger" },
  { value: "interdiction", key: "interdiction" },
  { value: "obligation", key: "obligation" },
  { value: "indication", key: "indication" },
  { value: "intersection", key: "intersection" },
  { value: "chemin_de_fer", key: "chemin_de_fer" },
  { value: "fin_interdiction", key: "fin_interdiction" },
]

export default function SignGrid({ signs }: Props) {
  const t = useTranslations("panneaux")
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const cats = t.raw("categories") as Record<string, string>

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
  }, [search, activeCategory, signs])

  return (
    <div>
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={t("searchPlaceholder")}
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categoryKeys.map((cat) => (
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
              {cats[cat.key] || cat.key}
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
