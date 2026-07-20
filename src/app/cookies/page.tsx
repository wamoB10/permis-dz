import { Cookie, Info, Settings, Mail, Clock, Megaphone } from "lucide-react"
import type { Metadata } from "next"
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld"

export const metadata: Metadata = {
  title: "Politique des cookies",
  description: "Utilisation des cookies sur Permis Algérie, y compris les cookies publicitaires futurs.",
}

export default function CookiesPage() {
  return (
    <div className="container py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Politique des cookies", href: "/cookies" },
        ]}
      />

      <div className="bg-primary/5 rounded-2xl p-8 mb-10 border border-primary/10">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Cookie className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold">Politique des cookies</h1>
        </div>
        <p className="text-muted-foreground">
          Dernière mise à jour : 20 juillet 2026
        </p>
      </div>

      <section className="space-y-8 text-sm leading-relaxed">
        <div className="bg-card rounded-xl p-6 shadow-sm border">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" />
            Qu&apos;est-ce qu&apos;un cookie ?
          </h2>
          <p>
            Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone)
            lors de la consultation d&apos;un site internet. Il permet à son émetteur de reconnaître le terminal
            pendant la durée de validité du cookie.
          </p>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm border">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Cookie className="h-5 w-5 text-primary" />
            Cookies actuellement utilisés
          </h2>
          <p>
            <strong>Permis Algérie n&apos;utilise actuellement aucun cookie publicitaire, de suivi ou d&apos;analyse d&apos;audience.</strong>{" "}
            Notre site fonctionne intégralement sans inscription.
          </p>
          <p className="mt-2">
            Seuls des <strong>cookies techniques strictement nécessaires</strong> pourraient être utilisés, par exemple pour conserver
            vos préférences d&apos;affichage ou votre choix de consentement aux cookies.
            Ces cookies ne collectent aucune donnée personnelle et ne sont pas partagés avec des tiers.
          </p>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm border">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Megaphone className="h-5 w-5 text-primary" />
            Cookies publicitaires ( à venir )
          </h2>
          <p>
            Dans le cadre de la monétisation future du Site, des cookies publicitaires
            pourront être déposés par Google et ses partenaires afin de :
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>diffuser des annonces pertinentes ;</li>
            <li>limiter le nombre d&apos;affichages d&apos;une même publicité ;</li>
            <li>mesurer l&apos;efficacité des campagnes publicitaires.</li>
          </ul>
          <p className="mt-3">
            <strong>Consentement :</strong> avant tout dépôt de cookie publicitaire, un bandeau de consentement vous permettra
            d&apos;accepter ou de refuser ces cookies. Votre choix sera mémorisé localement dans votre navigateur.
            Vous pourrez modifier votre décision à tout moment en supprimant les cookies du Site.
          </p>
          <p className="mt-2">
            Pour plus d&apos;informations sur les cookies Google, consultez la{" "}
            <a
              href="https://policies.google.com/technologies/cookies"
              className="text-primary hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              politique de Google relative aux cookies
            </a>.
          </p>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm border">
                    <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Durée de conservation
          </h2>
          <p>
            Les cookies techniques ont une durée de vie limitée à la session de navigation
            ou, au maximum, à quelques mois pour mémoriser vos choix (consentement, préférences).
            Les cookies publicitaires Google AdSense, lorsqu&apos;ils seront activés, auront une durée définie par Google
            (généralement entre quelques jours et 13 mois selon le type de cookie).
          </p>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm border">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            Comment gérer les cookies ?
          </h2>
          <p>
            La plupart des navigateurs vous permettent de contrôler les cookies via leurs paramètres.
            Vous pouvez à tout moment bloquer ou supprimer les cookies déjà installés.
            Veuillez noter que le blocage de certains cookies techniques peut altérer l&apos;expérience utilisateur.
          </p>
          <p className="mt-2">Navigateurs courants :</p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Microsoft Edge</li>
            <li>Safari</li>
          </ul>
        </div>

        <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 flex items-center gap-3">
          <Mail className="h-5 w-5 text-primary" />
          <p>
            Pour toute question concernant cette politique, écrivez-nous à :{" "}
            <a href="mailto:privacy@permis-algerie.dz" className="text-primary hover:underline font-medium">
              privacy@permis-algerie.dz
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
