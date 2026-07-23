import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { getLocalizedSigns } from "@/lib/get-localized-data"
import SignGrid from "@/components/panneaux/sign-grid"
import SignClassification from "@/components/panneaux/sign-classification"
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "panneaux" })

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function PanneauxPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations("panneaux")
  const signs = getLocalizedSigns(locale)

  return (
    <div className="container py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: t("breadcrumb"), href: "/panneaux" },
        ]}
      />
      <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>
      <SignClassification locale={locale} />
      <SignGrid signs={signs} />
    </div>
  )
}
