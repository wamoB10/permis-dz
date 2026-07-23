import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "aPropos" })

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function AProposPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "aPropos" })
  const content = t.raw("content") as {
    siteName: string
    intro: string
    missionTitle: string
    missionText: string
    offerTitle: string
    offerList: string[]
    contactTitle: string
    contactText: string
  }

  return (
    <div className="container py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>

      <section className="space-y-6 text-muted-foreground">
        <p>
          <strong>{content.siteName}</strong> {content.intro}
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">{content.missionTitle}</h2>
        <p>{content.missionText}</p>

        <h2 className="text-2xl font-bold text-foreground mt-8">{content.offerTitle}</h2>
        <ul className="list-disc pl-6 space-y-2">
          {content.offerList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8">{content.contactTitle}</h2>
        <p>{content.contactText}</p>
      </section>
    </div>
  )
}
