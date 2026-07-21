"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SignImage from "@/components/ui/sign-image"
import type { TestSeries } from "@/data/test-series"
import { testSeriesList } from "@/data/test-series"

export default function SeriesDetailClient({ series }: { series: TestSeries }) {
  const router = useRouter()
  const currentId = series.id
  const prevSeries = testSeriesList.find(s => s.id === currentId - 1 && s.items.length > 0)
  const nextSeries = testSeriesList.find(s => s.id === currentId + 1 && s.items.length > 0)

  // Navigation au clavier (flèches gauche/droite)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && prevSeries) {
        router.push(`/series/${prevSeries.id}`)
      } else if (e.key === "ArrowRight" && nextSeries) {
        router.push(`/series/${nextSeries.id}`)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [router, prevSeries, nextSeries])

  return (
    <div className="container py-10">
      {/* Navigation entre séries (haut) */}
      <div className="flex items-center justify-between mb-8">
        <div>
          {prevSeries ? (
            <Link href={`/series/${prevSeries.id}`}>
              <Button variant="outline" className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                {prevSeries.title}
              </Button>
            </Link>
          ) : (
            <Button variant="outline" disabled className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Aucune
            </Button>
          )}
        </div>
        <h1 className="text-4xl font-bold">{series.title}</h1>
        <div>
          {nextSeries ? (
            <Link href={`/series/${nextSeries.id}`}>
              <Button variant="outline" className="gap-2">
                {nextSeries.title}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Button variant="outline" disabled className="gap-2">
              Aucune
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      <p className="text-muted-foreground mb-8 text-center">16 panneaux à connaître</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {series.items.map((item) => (
          <PanelCard key={item.id} item={item} />
        ))}
      </div>

      {/* Navigation entre séries (bas) */}
      <div className="flex items-center justify-between mt-12">
        <div>
          {prevSeries ? (
            <Link href={`/series/${prevSeries.id}`}>
              <Button variant="outline" className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                {prevSeries.title}
              </Button>
            </Link>
          ) : (
            <Button variant="outline" disabled className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Aucune
            </Button>
          )}
        </div>
        <Link href="/series">
          <Button variant="secondary">Voir toutes les séries</Button>
        </Link>
        <div>
          {nextSeries ? (
            <Link href={`/series/${nextSeries.id}`}>
              <Button variant="outline" className="gap-2">
                {nextSeries.title}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Button variant="outline" disabled className="gap-2">
              Aucune
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

function PanelCard({ item }: { item: TestSeries["items"][number] }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div
      onClick={() => setRevealed(!revealed)}
      className="bg-card rounded-xl border shadow-sm p-4 flex flex-col items-center text-center cursor-pointer transition-all hover:shadow-md"
    >
      <div className="w-24 h-24 mb-3 flex items-center justify-center bg-muted/50 rounded-lg">
        <SignImage
          src={item.image}
          alt={item.name}
          width={96}
          height={96}
          className="max-w-full max-h-full"
        />
      </div>

      {revealed && (
        <div className="space-y-1 animate-in fade-in slide-in-from-top-2 duration-300">
          <h3 className="font-semibold text-sm">{item.name}</h3>
          <p className="text-xs text-muted-foreground">{item.description}</p>
        </div>
      )}

      {!revealed && (
        <span className="text-xs text-muted-foreground mt-1">Cliquez pour révéler</span>
      )}
    </div>
  )
}