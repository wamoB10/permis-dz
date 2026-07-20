import Link from "next/link"
import { Button } from "@/components/ui/button"
import { prioritySeriesList } from "@/data/priority-series"
import type { Metadata } from "next"
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld"

export const metadata: Metadata = {
  title: "Séries de priorités",
  description: "Choisissez une série de révision sur les règles de priorité."
}

export default function PrioritySeriesPage() {
  return (
    <div className="container py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Séries de révision", href: "/quiz" },
          { name: "Séries de priorités", href: "/series-priorites" },
        ]}
      />
      <h1 className="text-4xl font-bold mb-6">Séries de priorités</h1>
      <p className="text-muted-foreground mb-8">
        Sélectionnez une série de révision pour les règles de priorité.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {prioritySeriesList.map((series) => (
          <Link key={series.id} href={`/series-priorites/${series.id}`}>
            <Button
              variant={series.items.length > 0 ? "default" : "outline"}
              className="w-full h-20 text-lg font-semibold"
              disabled={series.items.length === 0}
            >
              {series.title}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
}