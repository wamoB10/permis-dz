import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "confidentialite" })

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function ConfidentialitePage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "confidentialite" })
  const c = t.raw("content") as Record<string, string>

  return (
    <div className="container py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>

      <section className="space-y-6 text-muted-foreground">
        <h2 className="text-2xl font-bold text-foreground">{c.dataTitle}</h2>
        <p>{c.dataText}</p>

        <h2 className="text-2xl font-bold text-foreground">{c.cookiesTitle}</h2>
        <p>{c.cookiesText}</p>

        <h2 className="text-2xl font-bold text-foreground">{c.adsenseTitle}</h2>
        <p>{c.adsenseText}</p>

        <h2 className="text-2xl font-bold text-foreground">{c.contactTitle}</h2>
        <p>
          {c.contactText} {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "privacypermis-algerie@gmail.com"}
        </p>

        <p className="text-sm mt-8">{c.updated}</p>
      </section>
    </div>
  )
}
