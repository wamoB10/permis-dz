import { TheoreticalQuestion } from "@/types"

export const theoreticalQuestions: TheoreticalQuestion[] = [
  // ========== GÉNÉRAL ==========
  {
    id: "gen-1",
    question: "Comment se déroule l'examen du code de la route en Algérie ?",
    answer:
      "L'examen théorique se déroule sur un ordinateur dans un centre agréé. Il comporte 40 questions à choix multiples. Pour réussir, vous devez obtenir au moins 36 bonnes réponses (90 %). Durée : environ 30 minutes.",
    category: "Général",
  },
  {
    id: "gen-2",
    question: "Quels sont les trois examens du permis de conduire ?",
    answer:
      "Le code (théorique), le créneau (manœuvre) et la conduite (pratique). Après réussite, vous récupérez un récépissé faisant office de permis temporaire.",
    category: "Général",
  },
  {
    id: "gen-3",
    question: "Quels sont les véhicules prioritaires ?",
    answer: "Police, gendarmerie, douanes.",
    category: "Général",
  },

  // ========== DOCUMENTS ==========
  {
    id: "doc-1",
    question: "Quel est le dossier à fournir pour s'inscrire en auto-école ?",
    answer:
      "Extrait de naissance, certificat de résidence, certificat médical, carte de groupage sanguin et 7 photos d'identité.",
    category: "Documents",
  },
  {
    id: "doc-2",
    question: "Quels sont les documents obligatoires à présenter lors d'un contrôle routier ?",
    answer:
      "Permis de conduire valide, carte grise, attestation d'assurance et certificat de contrôle technique (si le véhicule y est soumis).",
    category: "Documents",
  },
  {
    id: "doc-3",
    question: "Qu'est-ce que le sticker '80' ?",
    answer:
      "Pastille indiquant un conducteur probatoire limité à 80 km/h pendant 2 ans. Elle doit être visible sur le pare-brise avant et arrière.",
    category: "Documents",
  },
  {
    id: "doc-4",
    question: "Qu’est-ce qu’une attestation provisoire de conduite ?",
    answer:
      "L’attestation provisoire est un document délivré aux nouveaux conducteurs, valable 2 ans. Elle peut être annulée si son titulaire commet certains délits.",
    category: "Documents",
  },

  // ========== CONDUITE ==========
  {
    id: "cond-1",
    question: "Quelles sont les manœuvres interdites sur autoroute ?",
    answer:
      "Faire demi-tour, s'arrêter (sauf urgence), faire marche arrière, doubler par la droite, circuler sur la bande d'urgence, tourner à gauche, circuler sur la bande centrale.",
    category: "Conduite",
  },
  {
    id: "cond-2",
    question: "Dans quelles situations le dépassement est-il interdit ?",
    answer:
      "Il est interdit de dépasser par la droite, si un panneau l'interdit ou si une ligne continue est présente.",
    category: "Conduite",
  },
  {
    id: "cond-3",
    question: "Quelle est la vitesse maximale pour un conducteur probatoire ?",
    answer: "80 km/h pendant les 2 ans de la période probatoire.",
    category: "Conduite",
  },
  {
    id: "cond-4",
    question: "Que doit-on faire lorsqu’on est sur le point d’être dépassé ?",
    answer: "Serrer à droite sans accélérer l’allure.",
    category: "Conduite",
  },

  // ========== SIGNALISATION ==========
  {
    id: "sig-1",
    question: "Que signifient les feux de signalisation ?",
    answer:
      "Feu vert : passage autorisé. Feu jaune fixe : annonce le feu rouge. Feu jaune clignotant : priorité à droite. Feu rouge : arrêt absolu.",
    category: "Signalisation",
  },
  {
    id: "sig-2",
    question: "Comment reconnaître les différents types de panneaux ?",
    answer:
      "Triangle blanc = danger, triangle jaune = danger temporaire, rond rouge = interdiction, rond bleu = obligation, carré bleu = indication, plaque dans un carré = entrée de zone, plaque barrée = fin de prescription.",
    category: "Signalisation",
  },
  {
    id: "sig-3",
    question: "Que signifie un panneau STOP ?",
    answer:
      "Arrêt obligatoire. L'angle du panneau est à 90°. Vous devez marquer un arrêt complet, puis céder le passage.",
    category: "Signalisation",
  },

  // ========== SÉCURITÉ ==========
  {
    id: "sec-1",
    question: "Que faire en cas d'accident de la circulation ?",
    answer:
      "Appliquez la règle des 3 P : Protéger (feux de détresse, triangle), Alerter (14 ou 17), Secourir (ne pas déplacer les blessés sauf danger immédiat).",
    category: "Sécurité",
  },
  {
    id: "sec-2",
    question: "Peut-on téléphoner au volant ?",
    answer:
      "L'usage du téléphone tenu en main est interdit. Le kit mains libres est toléré mais déconseillé.",
    category: "Sécurité",
  },
  {
    id: "sec-3",
    question: "Par quoi est sanctionné le non-port de la ceinture de sécurité ?",
    answer:
      "Amende + retrait immédiat du permis de conduire avec effet suspensif dont la durée sera prononcée par la commission de la Wilaya.",
    category: "Sécurité",
  },

  // ========== ÉCLAIRAGE ==========
  {
    id: "light-1",
    question: "Combien de feux possède un véhicule et comment sont-ils répartis ?",
    answer:
      "17 feux au total : 8 à l'avant (2 phares, 2 codes, 2 veilleuses, 2 clignotants) et 9 à l'arrière (2 feux rouges, 2 stops, 2 catadioptres, 2 clignotants, 1 éclairage de plaque).",
    category: "Éclairage",
  },
  {
    id: "light-2",
    question: "À quelle distance doit être visible l'éclairage de la plaque d'immatriculation ?",
    answer: "La plaque doit être visible à 30 m et lisible à 20 m.",
    category: "Éclairage",
  },

  // ========== VITESSE ==========
  {
    id: "speed-1",
    question: "Quelles sont les limites de vitesse par temps sec ?",
    answer: "Ville : 50 km/h, hors ville : 100 km/h, autoroute : 120 km/h.",
    category: "Vitesse",
  },
  {
    id: "speed-2",
    question: "Quelles sont les limites de vitesse par temps de pluie ?",
    answer: "Ville : 40 km/h, hors ville : 80 km/h, autoroute : 100 km/h.",
    category: "Vitesse",
  },
]