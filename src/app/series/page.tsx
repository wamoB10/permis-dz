import Link from "next/link"
import { Button } from "@/components/ui/button"
import { quizSeriesList } from "@/data/quiz-series"
import { prioritySeriesList } from "@/data/priority-series"
import type { Metadata } from "next"
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld"

export const metadata: Metadata = {
  title: "Séries de révision",
  description: "Choisissez une série de panneaux ou de priorités pour réviser.",
}

export default function SeriesPage() {
  return (
    <div className="container py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Séries de révision", href: "/series" },
        ]}
      />
      {/* SECTION PANNEAUX */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Panneaux de signalisation</h2>
        <p className="text-muted-foreground mb-8">
          Cliquez sur une série pour commencer.
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
      </section>

      {/* SECTION PRIORITÉS */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Règles de priorité</h2>
        <p className="text-muted-foreground mb-8">
          Révisez les situations de priorité en séries dédiées.
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
      </section>
    </div>
  )
}