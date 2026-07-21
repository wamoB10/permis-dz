import dynamic from "next/dynamic"
import type { Metadata } from "next"
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld"

const TestPanneaux = dynamic(() => import("@/components/test/test-panneaux"), {
  loading: () => <div className="text-center py-20">Chargement du test...</div>,
})

export const metadata: Metadata = {
  title: "Test Panneaux",
  description: "Testez votre connaissance des panneaux de signalisation algériens. Test gratuit et immédiat.",
}

export default function TestPanneauxPage() {
  return (
    <div className="container py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Test", href: "/test" },
          { name: "Test Panneaux", href: "/test/panneaux" },
        ]}
      />
      <h1 className="text-4xl font-bold mb-8">Test Panneaux</h1>
      <TestPanneaux />
    </div>
  )
}
