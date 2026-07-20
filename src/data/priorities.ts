import { PriorityRule } from "@/types"

export const priorityRules: PriorityRule[] = [
  {
    id: "priorite-droite",
    title: "Priorité à droite",
    description: "Règle de base : cédez le passage au véhicule venant de droite.",
    explanation:
      "Dans une intersection sans signalisation, vous devez laisser passer tout véhicule arrivant de votre droite. Cette règle s'applique même si vous êtes sur une voie principale non marquée.",
    cases: ["Intersection de deux rues résidentielles", "Lorsque la signalisation est absente"],
    memoryTip: "Mémorisez : 'Droite = Priorité'",
    scheme: "/images/priorities/priorite-droite.png",
  },
  {
    id: "stop",
    title: "Stop",
    description: "Arrêt obligatoire avant de céder le passage.",
    explanation:
      "Vous devez vous arrêter complètement à la ligne d'arrêt (ou avant le panneau). Ensuite, cédez le passage à tous les véhicules avant de vous engager.",
    cases: ["Intersection en T", "Carrefour avec visibilité réduite"],
    memoryTip: "STOP = Arrêt total, puis cédez le passage",
    scheme: "/images/priorities/stop.png",
  },
  {
    id: "cedez-le-passage",
    title: "Cédez le passage",
    description: "Ralentissez et cédez le passage aux véhicules prioritaires.",
    explanation:
      "Vous devez ralentir et ne vous engager que si la voie est libre. Vous n'êtes pas obligé de vous arrêter si aucune voiture n'arrive.",
    cases: ["Entrée sur une route principale", "Carrefour avec panneau 'Cédez le passage'"],
    memoryTip: "Triangle blanc avec bord rouge = cédez le passage",
    scheme: "/images/priorities/cedezpassage.png",
  },
  {
    id: "rond-point",
    title: "Rond-point",
    description: "Priorité aux véhicules déjà engagés dans le rond-point.",
    explanation:
      "Avant d'entrer dans le rond-point, vous devez céder le passage aux véhicules circulant à l'intérieur (venant de votre gauche).",
    cases: ["Rond-point classique", "Giratoire urbain"],
    memoryTip: "Regardez à gauche, cédez le passage aux véhicules dans le rond-point",
    scheme: "/images/priorities/rond-point.png",
  },
  {
    id: "route-prioritaire",
    title: "Route prioritaire",
    description: "Vous avez la priorité sur les routes secondaires.",
    explanation:
      "Sur une route prioritaire (panneau losange), vous avez la priorité à toutes les intersections jusqu'à la fin de la priorité (losange barré).",
    cases: ["Routes nationales", "Boulevards avec panneaux losanges"],
    memoryTip: "Losange jaune = vous êtes prioritaire",
    scheme: "/images/priorities/route-prioritaire.png",
  },
]

