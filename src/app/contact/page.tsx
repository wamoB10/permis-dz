import { Mail, Send } from "lucide-react"
import type { Metadata } from "next"
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez l'équipe de Permis Algérie pour toute question ou suggestion.",
}

export default function ContactPage() {
  return (
    <div className="container py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <div className="bg-primary/5 rounded-2xl p-8 mb-10 border border-primary/10">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold">Contactez-nous</h1>
        </div>
        <p className="text-muted-foreground">
          Une question, une suggestion, ou une erreur à signaler ? Écrivez-nous.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-card rounded-xl p-6 shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Par email</h2>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <strong>Général :</strong>{" "}
              <a href="mailto:contact@permis-algerie.dz" className="text-primary hover:underline">
                contact@permis-algerie.dz
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <strong>Confidentialité :</strong>{" "}
              <a href="mailto:privacy@permis-algerie.dz" className="text-primary hover:underline">
                privacy@permis-algerie.dz
              </a>
            </p>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Via le formulaire</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Utilisez le lien ci-dessous pour nous envoyer un message directement depuis votre messagerie.
          </p>
          <a
            href="mailto:contact@permis-algerie.dz?subject=Message depuis le site Permis Algérie&body=Bonjour,%0D%0A%0D%0A"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            <Send className="h-4 w-4" /> Écrire un message
          </a>
        </div>
      </div>

      <p className="mt-8 text-sm text-muted-foreground bg-muted/50 rounded-xl p-4 text-center">
        Nous sommes présents uniquement en ligne et ne disposons pas de bureau physique. Merci de privilégier l’email.
      </p>
    </div>
  )
}