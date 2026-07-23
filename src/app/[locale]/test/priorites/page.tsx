import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { getLocalizedPriorityRules } from "@/lib/get-localized-data"
import TestPriorites from "@/components/test/test-priorites"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "test" })

  return {
    title: t("testPriorites"),
    description: t("testPrioritesDesc"),
  }
}

export default async function TestPrioritesPage({ params }: Props) {
  const { locale } = await params
  const priorityRules = getLocalizedPriorityRules(locale)

  return (
    <div className="container py-10">
      <TestPriorites priorityRules={priorityRules} />
    </div>
  )
}
