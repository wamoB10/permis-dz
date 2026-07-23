import { getTranslations } from "next-intl/server"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TriangleAlert, Gauge, HelpCircle, ClipboardList } from "lucide-react"

export default async function Features({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "home" })

  const sections = [
    {
      title: t("featurePanneauxTitle"),
      description: t("featurePanneauxDesc"),
      icon: TriangleAlert,
      href: "/panneaux"
    },
    {
      title: t("featurePrioritesTitle"),
      description: t("featurePrioritesDesc"),
      icon: Gauge,
      href: "/priorites"
    },
    {
      title: t("featureQuestionsTitle"),
      description: t("featureQuestionsDesc"),
      icon: HelpCircle,
      href: "/questions-theoriques"
    },
    {
      title: t("featureTestsTitle"),
      description: t("featureTestsDesc"),
      icon: ClipboardList,
      href: "/test"
    }
  ]

  return (
    <section className="container py-12 md:py-20">
      <h2 className="text-center text-3xl font-bold tracking-tight mb-10">
        {t("featuresTitle")}
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {sections.map((section) => (
          <Link key={section.href} href={section.href}>
            <Card className="h-full transition-shadow hover:shadow-md cursor-pointer">
              <CardHeader>
                <section.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
