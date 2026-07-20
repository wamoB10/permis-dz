import dynamic from "next/dynamic"
import type { Metadata } from "next"
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld"

const QuizPanneaux = dynamic(() => import("@/components/quiz/quiz-panneaux"), {
  loading: () => <div className="text-center py-20">Chargement du quiz...</div>,
})

export const metadata: Metadata = {
  title: "Quiz Panneaux",
  description: "Testez votre connaissance des panneaux de signalisation algériens. Quiz gratuit et immédiat.",
}

export default function QuizPanneauxPage() {
  return (
    <div className="container py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Quiz", href: "/quiz" },
          { name: "Quiz Panneaux", href: "/quiz/panneaux" },
        ]}
      />
      <h1 className="text-4xl font-bold mb-8">Quiz Panneaux</h1>
      <QuizPanneaux />
    </div>
  )
}
