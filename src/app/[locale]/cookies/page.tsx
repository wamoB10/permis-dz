import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "cookies" })

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function CookiesPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "cookies" })
  const c = t.raw("content") as Record<string, string>

  return (
    <div className="container py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>

      <section className="space-y-6 text-muted-foreground">
        <h2 className="text-2xl font-bold text-foreground">{c.whatTitle}</h2>
        <p>{c.whatText}</p>

        <h2 className="text-2xl font-bold text-foreground">{c.technicalTitle}</h2>
        <p>{c.technicalText}</p>

        <h2 className="text-2xl font-bold text-foreground">{c.adTitle}</h2>
        <p>{c.adText}</p>

        <h2 className="text-2xl font-bold text-foreground">{c.manageTitle}</h2>
        <p>{c.manageText}</p>

        <p className="text-sm mt-8">{c.updated}</p>
      </section>
    </div>
  )
}
