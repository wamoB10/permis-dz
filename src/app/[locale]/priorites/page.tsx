import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { getLocalizedPriorityRules } from "@/lib/get-localized-data"
import PriorityCard from "@/components/priorites/priority-card"
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "priorites" })

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default async function PrioritesPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations("priorites")
  const priorityRules = getLocalizedPriorityRules(locale)
  const hierarchie = t.raw("hierarchieList") as string[]
  const reconnaitre = t.raw("reconnaitreList") as string[]
  const depassement = t.raw("depassementList") as string[]

  return (
    <div className="container py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: t("breadcrumb"), href: "/priorites" },
        ]}
      />
      <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>

      <div className="mb-12 bg-primary/5 border border-primary/10 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">{t("reglesEssentielles")}</h2>
        <div className="grid gap-4 md:grid-cols-2 text-sm">
          <div>
            <h3 className="font-semibold">{t("hierarchiePriorites")}</h3>
            <ol className="list-decimal pl-4 space-y-1 mt-2">
              {hierarchie.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
            <p className="text-red-600 dark:text-red-400 font-medium mt-2">
              {t("remarque")}
            </p>
          </div>
          <div>
            <h3 className="font-semibold">{t("reconnaitrePlaques")}</h3>
            <ul className="list-disc pl-4 space-y-1 mt-2">
              {reconnaitre.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 text-sm bg-white/50 rounded-xl p-3">
          <p><strong>{t("astuce")}</strong></p>
        </div>
      </div>

      <div className="mb-12 bg-orange-50 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-800/50 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-3 text-orange-800 dark:text-orange-300">{t("reglesDepassement")}</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm dark:text-orange-100/90">
          {depassement.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {priorityRules.map((rule) => (
          <PriorityCard key={rule.id} rule={rule} />
        ))}
      </div>
    </div>
  )
}
