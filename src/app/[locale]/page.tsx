import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import Hero from "@/components/home/hero"
import Stats from "@/components/home/stats"
import Features from "@/components/home/features"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "home" })
  const site = await getTranslations({ locale, namespace: "site" })

  return {
    title: t("heroTitle"),
    description: site("description"),
  }
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params

  return (
    <>
      <Hero locale={locale} />
      <Stats locale={locale} />
      <Features locale={locale} />
    </>
  )
}
