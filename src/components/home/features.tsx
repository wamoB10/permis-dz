import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TriangleAlert, Gauge, HelpCircle, ClipboardList } from "lucide-react"

const sections = [
  {
    title: "Panneaux de signalisation",
    description: "Tous les panneaux classés par catégorie avec explications détaillées.",
    icon: TriangleAlert,
    href: "/panneaux"
  },
  {
    title: "Règles de priorité",
    description: "Priorité à droite, stop, cédez le passage… Apprenez les règles essentielles.",
    icon: Gauge,
    href: "/priorites"
  },
  {
    title: "Questions fréquentes",
    description: "Retrouvez les questions théoriques posées à l'examen officiel.",
    icon: HelpCircle,
    href: "/questions-theoriques"
  },
  {
    title: "Quiz d'entraînement",
    description: "Testez-vous sur les panneaux et les priorités avec un score à la fin.",
    icon: ClipboardList,
    href: "/quiz"
  }
]

export default function Features() {
  return (
    <section className="container py-12 md:py-20">
      <h2 className="text-center text-3xl font-bold tracking-tight mb-10">
        Tout ce dont vous avez besoin pour réussir
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