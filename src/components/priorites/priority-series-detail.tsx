"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SignImage from "@/components/ui/sign-image"
import type { PrioritySeries } from "@/data/priority-series"

interface Props {
  series: PrioritySeries
  seriesList: PrioritySeries[]
}

export default function PrioritySeriesDetailClient({ series, seriesList }: Props) {
  const t = useTranslations("seriesDetail")
  const router = useRouter()
  const currentId = series.id
  const prevSeries = seriesList.find(s => s.id === currentId - 1 && s.items.length > 0)
  const nextSeries = seriesList.find(s => s.id === currentId + 1 && s.items.length > 0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && prevSeries) {
        router.push(`/series-priorites/${prevSeries.id}`)
      } else if (e.key === "ArrowRight" && nextSeries) {
        router.push(`/series-priorites/${nextSeries.id}`)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [router, prevSeries, nextSeries])

  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          {prevSeries ? (
            <Link href={`/series-priorites/${prevSeries.id}`}>
              <Button variant="outline" className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                {prevSeries.title}
              </Button>
            </Link>
          ) : (
            <Button variant="outline" disabled className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              {t("none")}
            </Button>
          )}
        </div>
        <h1 className="text-4xl font-bold">{series.title}</h1>
        <div>
          {nextSeries ? (
            <Link href={`/series-priorites/${nextSeries.id}`}>
              <Button variant="outline" className="gap-2">
                {nextSeries.title}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Button variant="outline" disabled className="gap-2">
              {t("none")}
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      <p className="text-muted-foreground mb-8 text-center">{t("situationsToKnow", { count: 8 })}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {series.items.map((item) => (
          <PriorityCard key={item.id} item={item} />
        ))}
      </div>

      <div className="flex items-center justify-between mt-12">
        <div>
          {prevSeries ? (
            <Link href={`/series-priorites/${prevSeries.id}`}>
              <Button variant="outline" className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                {prevSeries.title}
              </Button>
            </Link>
          ) : (
            <Button variant="outline" disabled className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              {t("none")}
            </Button>
          )}
        </div>
        <Link href="/series-priorites">
          <Button variant="secondary">{t("viewAll")}</Button>
        </Link>
        <div>
          {nextSeries ? (
            <Link href={`/series-priorites/${nextSeries.id}`}>
              <Button variant="outline" className="gap-2">
                {nextSeries.title}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Button variant="outline" disabled className="gap-2">
              {t("none")}
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

function PriorityCard({ item }: { item: PrioritySeries["items"][number] }) {
  const [revealed, setRevealed] = useState(false)
  const t = useTranslations("seriesDetail")

  return (
    <div
      onClick={() => setRevealed(!revealed)}
      className="bg-card rounded-xl border shadow-sm p-4 flex flex-col items-center text-center cursor-pointer transition-all hover:shadow-md"
    >
      <div className="w-full h-40 mb-3 flex items-center justify-center bg-muted/50 rounded-lg">
        <SignImage
          src={item.scheme}
          alt={item.title}
          width={320}
          height={160}
          className="max-w-full max-h-full"
        />
      </div>

      {revealed && (
        <div className="space-y-1 animate-in fade-in slide-in-from-top-2 duration-300">
          <h3 className="font-semibold text-sm">{item.title}</h3>
          <p className="text-xs text-muted-foreground">{item.description}</p>
        </div>
      )}

      {!revealed && (
        <span className="text-xs text-muted-foreground mt-1">{t("clickToReveal")}</span>
      )}
    </div>
  )
}
