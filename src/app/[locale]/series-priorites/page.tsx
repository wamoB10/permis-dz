import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { getLocalizedPrioritySeries } from "@/lib/get-localized-data"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "series" })

  return {
    title: t("prioritesTitle"),
    description: `${t("prioritesTitle")} - ${t("prioritesSubtitle")}`,
  }
}

export default async function SeriesPrioritesPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations("series")
  const prioritySeriesList = getLocalizedPrioritySeries(locale)

  return (
    <div className="container py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: t("prioritesTitle"), href: "/series-priorites" },
        ]}
      />
      <h1 className="text-3xl font-bold mb-6">{t("prioritesTitle")}</h1>
      <p className="text-muted-foreground mb-8">{t("prioritesSubtitle")}</p>
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
