import { getTranslations } from "next-intl/server"
import { getLocalizedSigns, getLocalizedPriorityRules, getLocalizedQuestions } from "@/lib/get-localized-data"

export default async function Stats({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "home" })
  const signs = getLocalizedSigns(locale)
  const priorityRules = getLocalizedPriorityRules(locale)
  const questions = getLocalizedQuestions(locale)
  const testCount = 2

  return (
    <section className="container py-12 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
          <span className="text-3xl font-bold text-primary">{signs.length}</span>
          <span className="text-sm text-muted-foreground">{t("statsPanneaux")}</span>
        </div>
        <div className="flex flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
          <span className="text-3xl font-bold text-primary">{priorityRules.length}</span>
          <span className="text-sm text-muted-foreground">{t("statsPriorites")}</span>
        </div>
        <div className="flex flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
          <span className="text-3xl font-bold text-primary">{questions.length}</span>
          <span className="text-sm text-muted-foreground">{t("statsQuestions")}</span>
        </div>
        <div className="flex flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
          <span className="text-3xl font-bold text-primary">{testCount}</span>
          <span className="text-sm text-muted-foreground">{t("statsTests")}</span>
        </div>
      </div>
    </section>
  )
}
