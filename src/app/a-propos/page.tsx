import { BookOpen, Target, FileCheck, Heart, Mail } from "lucide-react"
import type { Metadata } from "next"
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld"

export const metadata: Metadata = {
  title: "À propos",
  description: "Découvrez la mission de Permis Algérie, plateforme gratuite de préparation au code de la route algérien.",
}

export default function AboutPage() {
  return (
    <div className="container py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "À propos", href: "/a-propos" },
        ]}
      />
      <div className="bg-primary/5 rounded-2xl p-8 mb-10 border border-primary/10">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold">À propos de Permis Algérie</h1>
        </div>
      </div>

      <section className="space-y-8 text-sm leading-relaxed">
        <div className="bg-card rounded-xl p-6 shadow-sm border flex gap-4">
          <Target className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-2">Notre mission</h2>
            <p>
              Permis Algérie est une plateforme <strong>100 % gratuite</strong> dédiée à la préparation de l’examen théorique du code de la route algérien.
              Notre objectif est de rendre l’apprentissage accessible à tous, sans contrainte d’inscription, sans publicité intrusive,
              et avec des contenus rigoureusement conformes à la réglementation en vigueur.
            </p>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm border flex gap-4">
          <FileCheck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-2">Pourquoi ce site ?</h2>
            <p>Nous avons constaté que beaucoup de candidats au permis de conduire ne disposent pas de ressources de qualité, actualisées et gratuites pour réviser le code. Permis Algérie comble ce manque en proposant :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>La liste complète des panneaux de signalisation avec explications détaillées</li>
              <li>Les règles de priorité illustrées et commentées</li>
              <li>Une banque de questions théoriques régulièrement enrichie</li>
              <li>Des tests interactifs pour vous tester en conditions réelles</li>
            </ul>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm border flex gap-4">
          <BookOpen className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-2">Nos sources</h2>
            <p>
              Tous les contenus sont élaborés à partir des textes officiels : le Code de la route algérien, les arrêtés ministériels
              relatifs à la signalisation et à la sécurité routière, ainsi que les supports pédagogiques des auto-écoles agréées.
              Notre équipe veille à la mise à jour constante des informations.
            </p>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm border flex gap-4">
          <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-2">Une initiative indépendante</h2>
            <p>
              Permis Algérie n’est affilié à aucune auto-école ni organisme gouvernemental. Nous fonctionnons de manière entièrement bénévole
              et indépendante. Notre seule récompense est de voir nos utilisateurs réussir leur examen du premier coup.
            </p>
          </div>
        </div>

        <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 flex items-center gap-3">
          <Mail className="h-5 w-5 text-primary" />
          <p>
            Vous souhaitez contribuer, signaler une erreur ou simplement nous encourager ? Écrivez-nous à :{" "}
            <a href="mailto:contactpermis-algerie@gmail.com" className="text-primary hover:underline font-medium">
              contactpermis-algerie@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}