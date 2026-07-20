import type { Metadata } from "next"
import { priorityRules } from "@/data/priorities"
import PriorityCard from "@/components/priorites/priority-card"
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld"

export const metadata: Metadata = {
  title: "Règles de priorité",
  description: "Priorité à droite, stop, cédez le passage, rond-point, et règles essentielles.",
}

export default function PrioritesPage() {
  return (
    <div className="container py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Règles de priorité", href: "/priorites" },
        ]}
      />
      <h1 className="text-4xl font-bold mb-8">Règles de priorité</h1>

      {/* Bloc Règles essentielles */}
      <div className="mb-12 bg-primary/5 border border-primary/10 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Règles essentielles</h2>
        <div className="grid gap-4 md:grid-cols-2 text-sm">
          <div>
            <h3 className="font-semibold">Hiérarchie des priorités</h3>
            <ol className="list-decimal pl-4 space-y-1 mt-2">
              <li>Agent de circulation (policier)</li>
              <li>Feux tricolores</li>
              <li>Panneaux de signalisation</li>
              <li>Priorité à droite (en l'absence de signalisation)</li>
            </ol>
            <p className="text-red-600 dark:text-red-400 font-medium mt-2">
              Remarque : Quand il n'y a pas de panneaux, la priorité est à droite.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Reconnaître les plaques</h3>
            <ul className="list-disc pl-4 space-y-1 mt-2">
              <li><strong>Panneau STOP</strong> : angle à 90° déssiné sur la route d'un trait complet, arrêt obligatoire.</li>
              <li><strong>Cédez le passage</strong> :angle à 90° déssiné sur la route d'un trait découpé, ralentir et laisser passer.</li>
              <li><strong>Panneau à 150 m</strong> : annonce un STOP ou un Cédez le passage à 150 mètres.</li>
              <li><strong>Route prioritaire</strong> : losange jaune, vous êtes prioritaire.</li>
              <li><strong>Fin de priorité</strong> : losange barré, la priorité à droite reprend.</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 text-sm bg-white/50 rounded-xl p-3">
          <p><strong>Astuce :</strong> « الساير قبل الداير » (celui qui arrive avant celui qui tourne), Si deux véhicules ont leur droite libre en même temps celui qui continue tout droit passe en premier puis celui qui tourne. En l’absence de panneaux, la priorité est à droite. Lorsque deux véhicules ont le même type de plaque, la priorité à droite s’applique entre eux (ex : deux routes secondaires, ou deux véhicules sur une même route prioritaire).</p>
        </div>
      </div>

      {/* Règles de dépassement */}
      <div className="mb-12 bg-orange-50 border border-orange-200 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-3 text-orange-800">Règles de dépassement</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>On ne double <strong>jamais par la droite</strong>.</li>
          <li>On ne double pas si un <strong>panneau l'interdit</strong>.</li>
          <li>On ne double pas si une <strong>ligne continue</strong> est présente.</li>
        </ul>
      </div>

      {/* Cartes des règles de priorité */}
      <div className="grid gap-8 md:grid-cols-2">
        {priorityRules.map((rule) => (
          <PriorityCard key={rule.id} rule={rule} />
        ))}
      </div>
    </div>
  )
}