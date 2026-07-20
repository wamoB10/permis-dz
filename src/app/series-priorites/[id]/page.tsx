import { notFound } from "next/navigation"
import { prioritySeriesList } from "@/data/priority-series"
import PrioritySeriesDetailClient from "@/components/priorites/priority-series-detail"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const series = prioritySeriesList.find(s => s.id === Number(id))
  if (!series) return { title: "Série introuvable" }
  return {
    title: `${series.title} - Révision des priorités`,
    description: `Révisez les 8 situations de priorité de la ${series.title}.`
  }
}

export function generateStaticParams() {
  return prioritySeriesList
    .filter((s) => s.items.length > 0)
    .map((s) => ({ id: String(s.id) }))
}

export default async function PrioritySeriesDetailPage({ params }: Props) {
  const { id } = await params
  const series = prioritySeriesList.find(s => s.id === Number(id))
  if (!series || series.items.length === 0) notFound()

  return <PrioritySeriesDetailClient series={series} />
}