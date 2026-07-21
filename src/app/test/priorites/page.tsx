import dynamic from "next/dynamic"
import type { Metadata } from "next"
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld"

const TestPriorites = dynamic(() => import("@/components/test/test-priorites"), {
  loading: () => <div className="text-center py-20">Chargement du test...</div>,
})

export const metadata: Metadata = {
  title: "Test Priorités",
  description: "Testez vos connaissances sur les règles de priorité du code de la route algérien.",
}

export default function TestPrioritesPage() {
  return (
    <div className="container py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Test", href: "/test" },
          { name: "Test Priorités", href: "/test/priorites" },
        ]}
      />
      <h1 className="text-4xl font-bold mb-8">Test Priorités</h1>
      <TestPriorites />
    </div>
  )
}
