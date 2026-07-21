import { HelpCircle } from "lucide-react"
import type { Metadata } from "next"
import JsonLd from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Foire Aux Questions (FAQ)",
  description: "Questions fréquentes sur l'examen du code de la route en Algérie.",
}

const faqData = [
  {
    question: "Est-ce que Permis Algérie remplace une auto-école ?",
    answer:
      "Non. Permis Algérie est un outil complémentaire de révision et d'entraînement. Il ne délivre pas de certificat officiel et ne remplace pas la formation pratique obligatoire dispensée par une auto-école agréée. Notre objectif est de vous aider à réussir l'examen théorique en vous offrant un accès gratuit à des contenus pédagogiques.",
  },
  {
    question: "Les contenus sont-ils conformes au code algérien ?",
    answer:
      "Oui. Tous les contenus sont élaborés à partir des textes officiels : le Code de la route algérien, les arrêtés relatifs à la signalisation et les supports pédagogiques des auto-écoles agréées. Nous mettons régulièrement à jour les informations.",
  },
  {
    question: "Faut-il créer un compte ou payer pour utiliser le site ?",
    answer:
      "Non. Le site est entièrement gratuit et ne demande aucune inscription. Vous pouvez réviser les panneaux, les priorités, les questions théoriques et faire des tests sans créer de compte.",
  },
  {
    question: "Quel est le dossier à fournir pour s'inscrire en auto-école ?",
    answer:
      "Le dossier comprend : un extrait de naissance, un certificat de résidence, un certificat médical délivré par un médecin agréé, une carte de groupage sanguin (obtenue après une prise de sang dans un laboratoire ou une clinique) et 7 photos d'identité récentes.",
  },
  {
    question: "Comment se déroule l'examen du permis de conduire ?",
    answer:
      "L'examen se compose de trois épreuves : le code (théorique), le créneau (manœuvre) et la conduite (pratique). Une fois les trois épreuves réussies, vous devez retourner à l'auto-école le lendemain pour récupérer un récépissé qui fait office de permis temporaire. Munissez-vous de ce récépissé, de 2 photos d'identité et d'une quittance de 1000 DA (à acheter au niveau des impôts) pour vous rendre à la mairie et obtenir votre permis définitif.",
  },
  {
    question: "Qu'est-ce que le sticker '80' et où doit-il être apposé ?",
    answer:
      "Le sticker '80' est une pastille indiquant que le conducteur est en période probatoire de 2 ans et limité à 80 km/h. Il doit être visible en bas à droite du pare-brise avant et arrière, de préférence sur les deux. Cette obligation dure 2 ans à compter de l'obtention du permis.",
  },
  {
    question: "Quelle est la vitesse maximale pour un conducteur probatoire ?",
    answer:
      "Pendant les 2 ans qui suivent l'obtention du permis, la vitesse est limitée à 80 km/h. Le sticker '80' doit être apposé sur le véhicule.",
  },
  {
    question: "Quels sont les documents obligatoires pour conduire en Algérie ?",
    answer:
      "Vous devez avoir sur vous : le permis de conduire valide correspondant à la catégorie du véhicule, la carte grise (certificat d'immatriculation), l'attestation d'assurance automobile en cours de validité, et le certificat de contrôle technique si le véhicule y est soumis. Un défaut de présentation de l'un de ces documents peut entraîner une amende.",
  },
  {
    question: "Peut-on utiliser un téléphone portable au volant ?",
    answer:
      "L'usage d'un téléphone tenu en main est strictement interdit pendant la conduite. L'utilisation d'un kit mains libres (oreillette, Bluetooth) est tolérée mais fortement déconseillée car elle réduit la concentration. Toute infraction est sanctionnée par une amende et un retrait de points sur le permis.",
  },
  {
    question: "Combien de types de feux possède un véhicule ?",
    answer:
      "Un véhicule est équipé de plusieurs types de feux : les feux de route (phares), les feux de croisement (codes), les feux de position (veilleuses), les feux de brouillard avant et arrière, les clignotants, les feux stop et le feu de marche arrière. Chaque type de feu a une fonction précise et doit être utilisé selon les conditions de visibilité et de circulation.",
  },
  {
    question: "Que faire en cas d'accident de la circulation ?",
    answer:
      "Appliquez la règle des 3 P : Protéger (allumer les feux de détresse, placer un triangle de présignalisation), Alerter (appeler les secours : 14 pour la protection civile, 17 pour la police), Secourir (porter assistance aux blessés sans les déplacer sauf danger immédiat).",
  }
]

export default function FAQPage() {
  return (
    <div className="container py-10">
      <div className="bg-primary/5 rounded-2xl p-8 mb-10 border border-primary/10">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold">Foire Aux Questions (FAQ)</h1>
        </div>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <details
            key={index}
            className="bg-card rounded-xl border shadow-sm group"
          >
            <summary className="cursor-pointer list-none p-6 flex items-center justify-between font-semibold text-lg">
              <span className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                {item.question}
              </span>
              <svg
                className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed border-t pt-4">
              {item.answer}
            </div>
          </details>
        ))}
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqData.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
    </div>
  )
}