import Link from "next/link"
import { getTranslations } from "next-intl/server"

interface Props {
  locale: string
}

export default async function Footer({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: "footer" })

  return (
    <footer className="border-t bg-muted/80">
      <div className="container py-8 md:py-12 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">{t("navigation")}</h3>
            <ul className="space-y-1">
              <li><Link href="/panneaux" className="text-sm text-muted-foreground hover:text-primary">{t("panneaux")}</Link></li>
              <li><Link href="/priorites" className="text-sm text-muted-foreground hover:text-primary">{t("priorites")}</Link></li>
              <li><Link href="/questions-theoriques" className="text-sm text-muted-foreground hover:text-primary">{t("questions")}</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">{t("series")}</h3>
            <ul className="space-y-1">
              <li><Link href="/series-panneaux" className="text-sm text-muted-foreground hover:text-primary">{t("seriesPanneaux")}</Link></li>
              <li><Link href="/series-priorites" className="text-sm text-muted-foreground hover:text-primary">{t("seriesPriorites")}</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">{t("informations")}</h3>
            <ul className="space-y-1">
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">{t("faq")}</Link></li>
              <li><Link href="/a-propos" className="text-sm text-muted-foreground hover:text-primary">{t("aPropos")}</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">{t("contact")}</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">{t("legal")}</h3>
            <ul className="space-y-1">
              <li><Link href="/confidentialite" className="text-sm text-muted-foreground hover:text-primary">{t("confidentialite")}</Link></li>
              <li><Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary">{t("cookies")}</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          {t("copyright", { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  )
}