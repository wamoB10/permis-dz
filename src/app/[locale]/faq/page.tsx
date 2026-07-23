import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "faq" })

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "faq" })
  const items = t.raw("items") as { q: string; a: string }[]

  return (
    <div className="container py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>
      <div className="space-y-4">
        {items.map((item, i) => (
          <details key={i} className="group rounded-xl border bg-card p-4 cursor-pointer">
            <summary className="font-semibold text-lg list-none flex items-center justify-between">
              {item.q}
              <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-muted-foreground">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
