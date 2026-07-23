"use client"

import { useState, useMemo } from "react"
import { useTranslations } from "next-intl"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import QuestionCard from "./question-card"
import type { TheoreticalQuestion } from "@/types"

interface Props {
  questions: TheoreticalQuestion[]
}

// Les valeurs correspondent aux noms français stockés dans q.category
// Les keys sont utilisées pour chercher la traduction dans les messages
const categoryKeys = [
  { value: "Général", key: "general" },
  { value: "Documents", key: "documents" },
  { value: "Conduite", key: "conduite" },
  { value: "Signalisation", key: "signalisation" },
  { value: "Sécurité", key: "securite" },
  { value: "Éclairage", key: "eclairage" },
  { value: "Vitesse", key: "vitesse" },
]

export default function SearchCategories({ questions }: Props) {
  const t = useTranslations("questionsTheoriques")
  const [search, setSearch] = useState("")
  const [activeCat, setActiveCat] = useState<string | null>(null)
  const cats = t.raw("categories") as Record<string, string>

  const filtered = useMemo(() => {
    return questions.filter((q) => {
      const matchSearch = q.question.toLowerCase().includes(search.toLowerCase())
      const matchCat = activeCat ? q.category === activeCat : true
      return matchSearch && matchCat
    })
  }, [search, activeCat, questions])

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
          <Badge
            variant={activeCat === null ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setActiveCat(null)}
          >
            {t("all")}
          </Badge>
          {categoryKeys.map((cat) => (
            <Badge
              key={cat.value}
              variant={activeCat === cat.value ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setActiveCat(activeCat === cat.value ? null : cat.value)}
            >
              {cats[cat.key] || cat.value}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {filtered.map((q) => (
          <QuestionCard key={q.id} question={q} />
        ))}
      </div>
    </div>
  )
}
