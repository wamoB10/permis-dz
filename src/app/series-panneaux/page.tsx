import Link from "next/link"
import { Button } from "@/components/ui/button"
import { quizSeriesList } from "@/data/quiz-series"
import type { Metadata } from "next"
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld"

export const metadata: Metadata = {
  title: "Séries de panneaux",
  description: "Choisissez une série de 16 panneaux de signalisation à réviser.",
}

export default function SeriesPanneauxPage() {
  return (
    <div className="container py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Séries de révision", href: "/quiz" },
          { name: "Séries de panneaux", href: "/series-panneaux" },
        ]}
      />
      <h1 className="text-4xl font-bold mb-6">Séries de panneaux</h1>
      <p className="text-muted-foreground mb-8">
        Révisez les 20 séries de 16 panneaux. Cliquez sur une série pour commencer.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {quizSeriesList.map((series) => (
          <Link key={series.id} href={`/series/${series.id}`}>
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