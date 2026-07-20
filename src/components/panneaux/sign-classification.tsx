import { Card, CardContent } from "@/components/ui/card"
import SignImage from "@/components/ui/sign-image"

const categories = [
  {
    id: "triangle-blanc",
    image: "/images/classification/triangle-blanc.png",
    title: "Triangle fond blanc",
    description:
      "Annonce un danger. Ralentissez et soyez vigilant (virage, cassis, passage à niveau…).",
  },
  {
    id: "triangle-jaune",
    image: "/images/classification/triangle-jaune.png",
    title: "Triangle fond jaune",
    description:
      "Danger temporaire (chantier, route dégradée). Adaptez votre allure.",
  },
  {
    id: "rond-blanc-interdiction",
    image: "/images/classification/rond-blanc-interdiction.png",
    title: "Rond fond blanc, bord rouge",
    description:
      "Interdiction (sens interdit, limitation de vitesse, interdiction de dépasser…).",
  },
  {
    id: "rond-bleu",
    image: "/images/classification/rond-bleu.png",
    title: "Rond fond bleu",
    description:
      "Obligation (tourner à droite, piste cyclable, chaînes à neige…).",
  },
  {
    id: "carre-bleu",
    image: "/images/classification/carre-bleu.png",
    title: "Carré fond bleu",
    description:
      "Indication (parking, arrêt bus, téléphone…).",
  },
  {
    id: "carre-blanc",
    image: "/images/classification/carre-blanc.png",
    title: "Carré fond blanc",
    description:
      "Indication ou fin de prescription (limitation de vitesse, direction…).",
  },
  {
    id: "losange-jaune",
    image: "/images/classification/losange-jaune.png",
    title: "Losange jaune",
    description:
      "Route prioritaire. Vous avez la priorité aux intersections jusqu'à la fin de priorité.",
  },
  {
    id: "stop",
    image: "/images/classification/stop.png",
    title: "Hexagone rouge (STOP)",
    description:
      "Arrêt obligatoire avant la ligne d'arrêt. Cédez le passage à tous les usagers.",
  },
  {
    id: "fin-interdiction",
    image: "/images/classification/fin-interdiction.png",
    title: "Noir et blanc (rond barré)",
    description:
      "Fin d'interdiction. Toutes les restrictions précédentes sont levées.",
  },
  {
    id: "arret-stationnement",
    image: "/images/classification/arret.png", 
    title: "Arrêt et Stationnement",
    description:
      "À gauche : interdiction d'arrêt et de stationnement. À droite : interdiction de stationnement (arrêt autorisé).",
  },
]

export default function SignClassification() {
  return (
    <section className="mb-12 bg-muted/30 rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-8 w-1 bg-primary rounded-full" />
        <h2 className="text-2xl font-semibold">Comment reconnaître un panneau ?</h2>
      </div>
      <p className="text-muted-foreground mb-6 text-sm">
        La forme et la couleur indiquent le type de message avant même de lire le symbole.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Card key={cat.id} className="bg-background">
            <CardContent className="p-4 flex flex-col items-center text-center space-y-2">
              <div className="w-16 h-16 bg-muted/50 rounded-xl flex items-center justify-center">
                <SignImage src={cat.image} alt={cat.title} width={48} height={48} />
              </div>
              <h3 className="font-semibold text-sm">{cat.title}</h3>
              <p className="text-xs text-muted-foreground">{cat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}