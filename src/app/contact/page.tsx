"use client"

import { useState } from "react"
import { Mail, Send } from "lucide-react"
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld"

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    await fetch("https://formspree.io/f/https://formspree.io/f/xlgqlnra", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
    setSent(true)
  }

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

      {/* Blocs empilés verticalement */}
      <div className="max-w-xl mx-auto space-y-6">
        {/* Bloc Par email */}
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

        {/* Bloc Formulaire */}
        <div className="bg-card rounded-xl p-6 shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Écrivez-nous</h2>
          {sent ? (
            <div className="text-center py-8">
              <p className="text-primary font-medium">Message envoyé avec succès !</p>
              <p className="text-sm text-muted-foreground mt-2">Nous vous répondrons dans les plus brefs délais.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium" htmlFor="name">Nom</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                <Send className="h-4 w-4" /> Envoyer
              </button>
            </form>
          )}
        </div>
      </div>

      <p className="mt-8 text-sm text-muted-foreground bg-muted/50 rounded-xl p-4 text-center">
        Nous sommes présents uniquement en ligne et ne disposons pas de bureau physique. Merci de privilégier l’email.
      </p>
    </div>
  )
}