import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { TriangleAlert, Gauge, Play } from "lucide-react"
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "test" })

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function TestChoicePage() {
  const t = await getTranslations("test")

  return (
    <div className="container py-20">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: t("breadcrumb"), href: "/test" },
        ]}
      />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t("chooseTitle")}</h1>
        <p className="text-muted-foreground text-lg">
          {t("chooseDescription")}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mb-16">
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-primary/10 hover:border-primary/30">
          <Link href="/series-panneaux" className="block h-full">
            <CardHeader className="pb-4">
              <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                <TriangleAlert className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">{t("panneauxCard")}</CardTitle>
              <CardDescription className="text-base">
                {t("panneauxCardDesc")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{t("panneauxCount")}</span>
                <span className="font-medium text-primary group-hover:underline">{t("panneauxCta")}</span>
              </div>
            </CardContent>
          </Link>
        </Card>

        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-primary/10 hover:border-primary/30">
          <Link href="/series-priorites" className="block h-full">
            <CardHeader className="pb-4">
              <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                <Gauge className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">{t("prioritesCard")}</CardTitle>
              <CardDescription className="text-base">
                {t("prioritesCardDesc")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{t("prioritesCount")}</span>
                <span className="font-medium text-primary group-hover:underline">{t("prioritesCta")}</span>
              </div>
            </CardContent>
          </Link>
        </Card>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">{t("testTitle")}</h2>
        <p className="text-muted-foreground text-lg">
          {t("testDescription")}
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
                <CardTitle className="text-xl">{t("testPanneaux")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {t("testPanneauxDesc")}
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
                <CardTitle className="text-xl">{t("testPriorites")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {t("testPrioritesDesc")}
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
