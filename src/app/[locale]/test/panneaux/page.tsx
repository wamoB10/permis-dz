import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { getLocalizedSigns } from "@/lib/get-localized-data"
import TestPanneaux from "@/components/test/test-panneaux"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "test" })

  return {
    title: t("testPanneaux"),
    description: t("testPanneauxDesc"),
  }
}

export default async function TestPanneauxPage({ params }: Props) {
  const { locale } = await params
  const signs = getLocalizedSigns(locale)

  return (
    <div className="container py-10">
      <TestPanneaux signs={signs} />
    </div>
  )
}
