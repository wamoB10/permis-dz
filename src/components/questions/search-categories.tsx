"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import QuestionCard from "./question-card"
import { theoreticalQuestions } from "@/data/theoretical-questions"

const categories = ["Général", "Documents", "Conduite", "Signalisation", "Sécurité", "Éclairage", "Vitesse"]

export default function SearchCategories() {
  const [search, setSearch] = useState("")
  const [activeCat, setActiveCat] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return theoreticalQuestions.filter((q) => {
      const matchSearch = q.question.toLowerCase().includes(search.toLowerCase())
      const matchCat = activeCat ? q.category === activeCat : true
      return matchSearch && matchCat
    })
  }, [search, activeCat])

  return (
    <div>
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Rechercher une question..."
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
            Tous
          </Badge>
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant={activeCat === cat ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setActiveCat(activeCat === cat ? null : cat)}
            >
              {cat}
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