import { ShieldCheck, Lock, FileText, Mail, Cookie, Activity, Settings, Shield, UserCheck } from "lucide-react"
import type { Metadata } from "next"
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld"

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Comment nous protégeons vos données sur Permis Algérie.",
}

export default function PrivacyPage() {
  return (
    <div className="container py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Politique de confidentialité", href: "/confidentialite" },
        ]}
      />

      <div className="bg-primary/5 rounded-2xl p-8 mb-10 border border-primary/10">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold">Politique de confidentialité</h1>
        </div>
        <p className="text-muted-foreground">
          Dernière mise à jour : 20 juillet 2026
        </p>
      </div>

      <section className="space-y-8 text-sm leading-relaxed">
        <div className="bg-card rounded-xl p-6 shadow-sm border">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            1. Introduction
          </h2>
          <p>
            Bienvenue sur <strong>Permis Algérie</strong> (ci-après « le Site »). La protection de votre vie privée est une priorité absolue.
            Cette politique de confidentialité vous explique comment nous traitons vos données lorsque vous utilisez notre plateforme
            de préparation à l&apos;examen du code de la route algérien.
          </p>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm border">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Lock className="h-5 w-5 text-primary" />
            2. Absence actuelle de collecte de données personnelles
          </h2>
          <p>
            À ce jour, <strong>Permis Algérie ne collecte aucune donnée personnelle</strong>.
            Le site ne nécessite pas d&apos;inscription, de connexion, ni de création de profil utilisateur.
            Aucune information nominative, adresse e-mail, numéro de téléphone ou donnée de navigation n&apos;est enregistrée ou stockée par nos soins.
          </p>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm border">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            3. Données de navigation
          </h2>
          <p>
            Notre hébergeur (Vercel) peut enregistrer automatiquement des données techniques anonymes (adresse IP, type de navigateur, pages visitées)
            à des fins strictement statistiques et de sécurité. Ces informations ne permettent pas de vous identifier personnellement
            et ne sont jamais recoupées avec d&apos;autres sources.
          </p>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm border">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Cookie className="h-5 w-5 text-primary" />
            4. Cookies et publicité future
          </h2>
          <p>
            Actuellement, le Site n&apos;utilise <strong>aucun cookie de tracking publicitaire ou analytique</strong>.
            Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être déposés.
          </p>
          <p className="mt-3">
            <strong>Évolution prévue :</strong> afin de maintenir ce service gratuit, nous prévoyons d&apos;intégrer ultérieurement
            Google AdSense. Dans ce cas, des cookies publicitaires pourront être déposés par Google pour la diffusion et la mesure
            des annonces. Votre consentement préalable vous sera demandé via un bandeau dédié avant tout dépôt de cookie non essentiel.
            Pour en savoir plus, consultez notre{" "}
            <a href="/cookies" className="text-primary hover:underline font-medium">
              Politique des cookies
            </a>.
          </p>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm border">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            5. Services tiers
          </h2>
          <p>
            Nous n&apos;intégrons actuellement aucun service tiers susceptible de collecter vos données (réseaux sociaux, outils d&apos;analyse,
            régies publicitaires). Lors de l&apos;activation future de Google AdSense, Google pourra traiter certaines données conformément
            à sa propre politique de confidentialité. Vous pourrez refuser les cookies publicitaires via le bandeau de consentement.
          </p>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm border">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            6. Sécurité
          </h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger les données
            contre tout accès non autorisé, modification, divulgation ou destruction.
          </p>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm border">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <UserCheck className="h-5 w-5 text-primary" />
            7. Vos droits
          </h2>
          <p>
            Conformément à la législation algérienne et aux principes généraux de protection des données,
            vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression des informations vous concernant.
            Toutefois, puisque nous ne collectons actuellement aucune donnée personnelle, l&apos;exercice de ces droits est sans objet.
            Pour toute question, contactez-nous à l&apos;adresse ci-dessous.
          </p>
        </div>

        <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 flex items-center gap-3">
          <Mail className="h-5 w-5 text-primary" />
          <p>
            Pour toute question relative à cette politique, vous pouvez nous écrire à :{" "}
            <a href="mailto:privacy@permis-algerie.dz" className="text-primary hover:underline font-medium">
              privacy@permis-algerie.dz
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}