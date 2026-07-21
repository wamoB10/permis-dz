import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { TriangleAlert, Gauge, Play } from "lucide-react"
import type { Metadata } from "next"
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld"

export const metadata: Metadata = {
  title: "Séries de révision",
  description: "Choisissez votre série de révision : Panneaux de signalisation ou Règles de priorité.",
}

export default function TestChoicePage() {
  return (
    <div className="container py-20">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Séries de révision", href: "/test" },
        ]}
      />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Choisissez votre série de révision</h1>
        <p className="text-muted-foreground text-lg">
          Révisez les panneaux et les priorités avec des séries complètes, sans inscription.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mb-16">
        {/* Série Panneaux */}
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-primary/10 hover:border-primary/30">
          <Link href="/series-panneaux" className="block h-full">
            <CardHeader className="pb-4">
              <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                <TriangleAlert className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">Panneaux</CardTitle>
              <CardDescription className="text-base">
                Révisez les 20 séries de 16 panneaux de signalisation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>20 séries</span>
                <span className="font-medium text-primary group-hover:underline">Commencer →</span>
              </div>
            </CardContent>
          </Link>
        </Card>

        {/* Série Priorités */}
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-primary/10 hover:border-primary/30">
          <Link href="/series-priorites" className="block h-full">
            <CardHeader className="pb-4">
              <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                <Gauge className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">Priorités</CardTitle>
              <CardDescription className="text-base">
                Révisez les règles de priorité avec des séries de situations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>8 séries</span>
                <span className="font-medium text-primary group-hover:underline">Commencer →</span>
              </div>
            </CardContent>
          </Link>
        </Card>
      </div>

      {/* Section Tests interactifs */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Testez-vous en conditions réelles</h2>
        <p className="text-muted-foreground text-lg">
          Une fois vos révisions terminées, passez un test chronométré pour évaluer votre niveau.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
        <Link href="/test/panneaux">
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-primary/15 rounded-full group-hover:bg-primary/25 transition-colors">
                  <Play className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Test Panneaux</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                10 questions aléatoires pour tester votre connaissance des panneaux de signalisation.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/test/priorites">
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-primary/15 rounded-full group-hover:bg-primary/25 transition-colors">
                  <Play className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Test Priorités</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                6 questions sur les règles de priorité pour évaluer votre compréhension.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}