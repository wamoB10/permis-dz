import { notFound } from "next/navigation"
import { testSeriesList } from "@/data/test-series"
import SeriesDetailClient from "@/components/series/series-detail"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const series = testSeriesList.find(s => s.id === Number(id))
  if (!series) return { title: "Série introuvable" }
  return {
    title: `${series.title} - Révision des panneaux`,
    description: `Révisez les 16 panneaux de la ${series.title}.`
  }
}

export function generateStaticParams() {
  return testSeriesList
    .filter((s) => s.items.length > 0)
    .map((s) => ({ id: String(s.id) }))
}

export default async function SeriesDetailPage({ params }: Props) {
  const { id } = await params
  const series = testSeriesList.find(s => s.id === Number(id))
  if (!series || series.items.length === 0) notFound()

  return <SeriesDetailClient series={series} />
}