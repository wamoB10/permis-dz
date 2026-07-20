import type { Metadata } from "next"
import SearchCategories from "@/components/questions/search-categories"
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld"

export const metadata: Metadata = {
  title: "Questions théoriques fréquentes",
  description:
    "Préparez l'examen théorique avec les questions les plus posées : documents, feux, conduite, sécurité.",
}

export default function QuestionsTheoriquesPage() {
  return (
    <div className="container py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Questions théoriques", href: "/questions-theoriques" },
        ]}
      />
      <h1 className="text-4xl font-bold mb-8">Questions théoriques</h1>
      <SearchCategories />
    </div>
  )
}