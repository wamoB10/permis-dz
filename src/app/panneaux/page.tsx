import type { Metadata } from "next"
import SignGrid from "@/components/panneaux/sign-grid"
import SignClassification from "@/components/panneaux/sign-classification"
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld"

export const metadata: Metadata = {
  title: "Panneaux de signalisation",
  description:
    "Tous les panneaux du code de la route algérien : danger, interdiction, obligation, indication, priorité, direction.",
}

export default function PanneauxPage() {
  return (
    <div className="container py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Panneaux de signalisation", href: "/panneaux" },
        ]}
      />
      <h1 className="text-4xl font-bold mb-8">Panneaux de signalisation</h1>
      <SignClassification />
      <SignGrid />
    </div>
  )
}