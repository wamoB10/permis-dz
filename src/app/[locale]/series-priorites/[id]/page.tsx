import { getTranslations } from "next-intl/server"
import { getLocalizedPrioritySeries } from "@/lib/get-localized-data"
import { notFound } from "next/navigation"
import PrioritySeriesDetail from "@/components/priorites/priority-series-detail"
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ locale: string; id: string }>
}

export async function generateStaticParams() {
  const params: { locale: string; id: string }[] = []
  for (const locale of ["fr", "ar"]) {
    const seriesList = getLocalizedPrioritySeries(locale)
    for (const series of seriesList) {
      params.push({ locale, id: String(series.id) })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params
  const t = await getTranslations({ locale, namespace: "seriesDetail" })

  return {
    title: t("title", { id }),
  }
}

export default async function PrioritySeriesDetailPage({ params }: Props) {
  const { locale, id } = await params
  const seriesId = Number(id)
  const seriesList = getLocalizedPrioritySeries(locale)
  const series = seriesList.find((s) => s.id === seriesId)

  if (!series) {
    notFound()
  }

  return (
    <div className="container py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Séries Priorités", href: "/series-priorites" },
          { name: `Série ${id}`, href: `/series-priorites/${id}` },
        ]}
      />
      <PrioritySeriesDetail series={series} seriesList={seriesList} />
    </div>
  )
}
