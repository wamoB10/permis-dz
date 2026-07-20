import dynamic from "next/dynamic"
import type { Metadata } from "next"
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld"

const QuizPriorites = dynamic(() => import("@/components/quiz/quiz-priorites"), {
  loading: () => <div className="text-center py-20">Chargement du quiz...</div>,
})

export const metadata: Metadata = {
  title: "Quiz Priorités",
  description: "Testez vos connaissances sur les règles de priorité du code de la route algérien.",
}

export default function QuizPrioritesPage() {
  return (
    <div className="container py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Quiz", href: "/quiz" },
          { name: "Quiz Priorités", href: "/quiz/priorites" },
        ]}
      />
      <h1 className="text-4xl font-bold mb-8">Quiz Priorités</h1>
      <QuizPriorites />
    </div>
  )
}
