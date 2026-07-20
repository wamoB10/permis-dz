export interface QuizSeriesItem {
  id: string
  name: string
  description: string
  image: string // chemin dans /public
}

export interface QuizSeries {
  id: number
  title: string
  items: QuizSeriesItem[]
}

export const quizSeriesList: QuizSeries[] = [
  {
    id: 1,
    title: "Série 1",
    items: [
      {
        id: "danger-general",
        name: "Danger général",
        description: "Triangle rouge avec point d'exclamation : annonce un danger non précisé à l'approche.",
        image: "/images/classification/danger-general.png"
      },
      {
        id: "interdiction-tourner-droite",
        name: "Interdiction de tourner à droite",
        description: "Cercle rouge avec flèche à droite barrée : interdiction de tourner à droite.",
        image: "/images/classification/interdiction-tourner-droite.png"
      },
      {
        id: "stationnement-interdit",
        name: "Stationnement interdit",
        description: "Cercle bleu à bordure rouge avec barre oblique : stationnement interdit.",
        image: "/images/classification/stationnement-interdit.png"
      },
      {
        id: "direction-obligatoire",
        name: "Direction obligatoire",
        description: "Cercle bleu avec flèche blanche : obligation de suivre la direction indiquée.",
        image: "/images/classification/rond-bleu.png"
      },
      {
        id: "fin-interdictions",
        name: "Fin de toutes les interdictions",
        description: "Cercle blanc avec barre oblique noire : lève toutes les interdictions précédentes.",
        image: "/images/classification/fin-interdiction.png"
      },
      {
        id: "intersection-priorite-droite",
        name: "Intersection, priorité à droite",
        description: "Triangle rouge avec croix de Saint-André : annonce une intersection où la priorité est à droite.",
        image: "/images/classification/inter-prio-droite.png"
      },
      {
        id: "fin-interdiction-depasser-pl",
        name: "Fin d'interdiction de dépasser pour les poids lourds",
        description: "Cercle blanc à bordure noire : fin de l'interdiction de dépasser pour les poids lourds.",
        image: "/images/classification/fin-interdiction-depasser-pl.png"
      },
      {
        id: "station-taxis",
        name: "Station de taxis",
        description: "Rectangle bleu avec inscription TAXIS : emplacement réservé aux taxis.",
        image: "/images/classification/station-taxis.png"
      },
      {
        id: "piste-cyclable-obligatoire",
        name: "Piste cyclable obligatoire",
        description: "Cercle bleu avec vélo blanc : voie obligatoire réservée aux cyclistes.",
        image: "/images/classification/piste-cyclable-obligatoire.png"
      },
      {
        id: "zone-arret-stationnement-interdit",
        name: "Zone d'arrêt et de stationnement interdits",
        description: "Panneau carré blanc à bordure rouge : entrée dans une zone où l'arrêt et le stationnement sont interdits.",
        image: "/images/classification/zone-arret-stationnement-interdit.png"
      },
      {
        id: "fin-voie-reservee",
        name: "Fin de voie réservée",
        description: "Panneau blanc avec barres noires diagonales : fin de voie réservée ou fin de prescription.",
        image: "/images/classification/fin-voie-reservee.png"
      },
      {
        id: "sortie-interdiction",
        name: "Sortie d'interdiction",
        description: "Panneau rond blanc à barre noire oblique : sortie d'interdiction ou fin de toutes les prescriptions.",
        image: "/images/classification/sortie-interdiction.png"
      },
      {
        id: "risque-incendie-foret",
        name: "Risque d'incendie de forêt",
        description: "Panneau carré représentant un arbre en flammes : attention au risque d'incendie de forêt.",
        image: "/images/classification/feu-foret.WEBP"
      },
      {
        id: "acces-interdit-cyclistes",
        name: "Accès interdit aux cyclistes",
        description: "Cercle rouge avec vélo : circulation des cyclistes interdite.",
        image: "/images/classification/acces-interdit-cyclistes.png"
      },
      {
        id: "double-sens-circulation",
        name: "Double sens de circulation",
        description: "Panneau carré blanc avec deux flèches opposées : circulation dans les deux sens.",
        image: "/images/classification/double-sens-circulation.png"
      },
      {
        id: "zone-30",
        name: "Zone 30",
        description: "Panneau carré blanc avec mention ZONE 30 : entrée dans une zone limitée à 30 km/h.",
        image: "/images/classification/zone-30.png"
      }
    ]
  },

  {
    id: 2,
    title: "Série 2",
    items: [
      {
        id: "vitesse-minimale-obligatoire",
        name: "Vitesse minimale obligatoire",
        description: "Cercle bleu avec chiffre blanc : vitesse minimale obligatoire à respecter.",
        image: "/images/classification/vitesse-minimal.png"
      },
      {
        id: "fin-limitation-50",
        name: "Fin de limitation de vitesse à 50 km/h",
        description: "Cercle blanc à bordure noire avec barre oblique : fin de la limitation de vitesse à 50 km/h.",
        image: "/images/classification/fin-limit-50.png"
      },
      {
        id: "route-prioritaire",
        name: "Route prioritaire",
        description: "Losange jaune et blanc : indique une route prioritaire aux intersections.",
        image: "/images/classification/losange-jaune.png"
      },
      {
        id: "sens-giratoire",
        name: "Sens giratoire",
        description: "Panneau carré blanc avec flèches circulaires : annonce un carrefour à sens giratoire (cédez le passage).",
        image: "/images/classification/sens-giratoire.png"
      },
      {
        id: "fin-route-prioritaire",
        name: "Fin de route prioritaire",
        description: "Losange blanc à bordure noire : fin de la route prioritaire.",
        image: "/images/classification/fin-prio.png"
      },
      {
        id: "direction-obligatoire-gauche",
        name: "Direction obligatoire à gauche",
        description: "Cercle bleu avec flèche blanche pointant à gauche : obligation de tourner à gauche.",
        image: "/images/classification/obligatoire-gauche.png"
      },
      {
        id: "cedez-le-passage-150m",
        name: "Cédez le passage à 150 mètres",
        description: "Triangle blanc à bordure rouge avec mention : annonce un cédez le passage à 150 mètres.",
        image: "/images/classification/cedez150.png"
      },
      {
        id: "interdiction-tourner-droite",
        name: "Interdiction de tourner à droite",
        description: "Cercle rouge avec flèche à droite barrée : interdiction de tourner à droite.",
        image: "/images/classification/interdiction-tourner-droite.png"
      },
      {
        id: "premier-virage-droite",
        name: "Premier virage à droite",
        description: "Triangle rouge avec virage : annonce un premier virage à droite.",
        image: "/images/classification/premier-virage-droite.png"
      },
      {
        id: "panneau-indication-dodane",
        name: "Panneau d'indication (Dodane)",
        description: "Panneau rectangulaire d'indication de direction de type Dodane.",
        image: "/images/classification/indication-dodane.png"
      },
      {
        id: "interdit-transport-marchandises",
        name: "Interdiction aux transports de marchandises",
        description: "Cercle rouge avec camion : interdiction aux véhicules de transport de marchandises.",
        image: "/images/classification/interdit-transport-marchandise.png"
      },
      {
        id: "sens-interdit",
        name: "Sens interdit",
        description: "Cercle rouge avec barre horizontale blanche : interdiction d'accès, sens interdit.",
        image: "/images/classification/sens-interdit.png"
      },
      {
        id: "vitesse-maximale-30",
        name: "Vitesse maximale 30 km/h",
        description: "Cercle blanc à bordure rouge avec 30 : limitation de vitesse à 30 km/h.",
        image: "/images/classification/vitesse-max-30.png"
      },
      {
        id: "interdiction-depasser",
        name: "Interdiction de dépasser",
        description: "Cercle rouge avec voiture rouge : interdiction de dépasser pour tous véhicules.",
        image: "/images/classification/interdit-depasser-voiture.png"
      },
      {
        id: "fin-interdiction-depasser",
        name: "Fin d'interdiction de dépasser",
        description: "Cercle blanc à bordure noire avec barre : fin de l'interdiction de dépasser.",
        image: "/images/classification/fin-interdiction-passer.png"
      },
      {
        id: "interdiction-depasser-pl",
        name: "Interdiction de dépasser pour les poids lourds",
        description: "Cercle rouge avec camion : interdiction de dépasser pour les poids lourds.",
        image: "/images/classification/interdit-depasser-pl.png"
      }
    ]
  },
    {
    id: 3,
    title: "Série 3",
    items: [
      {
        id: "vitesse-conseillee-70",
        name: "Vitesse conseillée 70 km/h",
        description: "Panneau carré bleu avec 70 : vitesse conseillée à 70 km/h.",
        image: "/images/classification/conseille-70.WEBP"
      },
      {
        id: "danger-temporaire",
        name: "Danger temporaire",
        description: "Triangle jaune/orange : annonce un danger temporaire (chantier, travaux).",
        image: "/images/classification/triangle-jaune.png"
      },
      {
        id: "passage-pietons",
        name: "Passage pour piétons",
        description: "Triangle rouge avec piéton : annonce un passage pour piétons à proximité.",
        image: "/images/classification/passage-pieton.png"
      },
      {
        id: "travaux",
        name: "Travaux",
        description: "Triangle rouge avec homme creusant : annonce des travaux sur la chaussée.",
        image: "/images/classification/travaux.png"
      },
      {
        id: "intersection-priorite-droite",
        name: "Intersection, priorité à droite",
        description: "Triangle rouge avec croix de Saint-André : annonce une intersection où la priorité est à droite.",
        image: "/images/classification/inter-prio-droite.png"
      },
      {
        id: "fin-limitation-30",
        name: "Fin de limitation de vitesse à 30 km/h",
        description: "Cercle blanc à bordure noire avec barre oblique : fin de la limitation de vitesse à 30 km/h.",
        image: "/images/classification/fin-max-30.png"
      },
      {
        id: "borne-detresse",
        name: "Borne d'appel d'urgence",
        description: "Panneau indiquant une borne d'appel d'urgence sur le côté droit.",
        image: "/images/classification/detresse-droite.png"
      },
      {
        id: "vitesse-maximale-70",
        name: "Vitesse maximale 70 km/h",
        description: "Cercle blanc à bordure rouge avec 70 : limitation de vitesse à 70 km/h.",
        image: "/images/classification/vitesse-max-70.png"
      },
      {
        id: "demi-tour-interdit",
        name: "Demi-tour interdit",
        description: "Cercle rouge avec flèche en U barrée : interdiction de faire demi-tour.",
        image: "/images/classification/interdit-demi-tour.png"
      },
      {
        id: "balise-musoir",
        name: "Balise de musoir",
        description: "Balise rouge et blanche disposée sur un îlot directionnel (musoir).",
        image: "/images/classification/balise-musoir.WEBP"
      },
      {
        id: "contournement-droite",
        name: "Contournement par la droite",
        description: "Panneau blanc avec flèche courbe : indique un contournement par la droite.",
        image: "/images/classification/contournement-droite.png"
      },
      {
        id: "fin-interdiction-avertisseur-sonore",
        name: "Fin d'interdiction d'usage de l'avertisseur sonore",
        description: "Cercle blanc à bordure noire : fin de l'interdiction d'utiliser l'avertisseur sonore.",
        image: "/images/classification/fin-interdit-usage-sonore.png"
      },
      {
        id: "sens-interdit",
        name: "Sens interdit",
        description: "Cercle rouge avec barre horizontale blanche : interdiction d'accès, sens interdit.",
        image: "/images/classification/sens-interdit.png"
      },
      {
        id: "fin-limitation-110",
        name: "Fin de limitation de vitesse à 110 km/h",
        description: "Cercle blanc à bordure noire avec barre oblique : fin de la limitation à 110 km/h.",
        image: "/images/classification/fin-de-limititation-vitesse-110.WEBP"
      },
      {
        id: "fin-route-prioritaire",
        name: "Fin de route prioritaire",
        description: "Losange blanc à bordure noire : fin de la route prioritaire.",
        image: "/images/classification/fin-prio.png"
      },
      {
        id: "interdiction-depasser-camions-10m",
        name: "Interdiction de dépasser pour véhicules de plus de 10 mètres",
        description: "Panneau indiquant l'interdiction de dépasser pour les véhicules de plus de 10 mètres.",
        image: "/images/classification/camions-10m.png"
      }
    ]
  },
    {
    id: 4,
    title: "Série 4",
    items: [
      {
        id: "retrecissement-chaussee-400m",
        name: "Rétrécissement de chaussée à 400 m",
        description: "Triangle rouge avec rétrécissement : annonce un rétrécissement de la chaussée à 400 m.",
        image: "/images/classification/retreci-400.png"
      },
      {
        id: "vitesse-recommandee-90",
        name: "Vitesse recommandée 90 km/h",
        description: "Panneau carré à fond vert : vitesse recommandée à 90 km/h.",
        image: "/images/classification/90-voie.jpg"
      },
      {
        id: "chaussee-glissante",
        name: "Chaussée glissante",
        description: "Triangle rouge avec dérapage : annonce une chaussée glissante.",
        image: "/images/classification/chausse-glissante.png"
      },
      {
        id: "interdit-vehicules-plus-10m",
        name: "Interdiction aux véhicules de plus de 10 mètres",
        description: "Cercle rouge : interdiction de circuler aux véhicules de plus de 10 mètres de long.",
        image: "/images/classification/interdit-camion-10m.WEBP"
      },
      {
        id: "interdiction-depasser-camions-10m",
        name: "Interdiction de dépasser pour véhicules de plus de 10 mètres",
        description: "Panneau indiquant l'interdiction de dépasser pour les véhicules de plus de 10 mètres.",
        image: "/images/classification/camions-10m.png"
      },
      {
        id: "doubles-virages-500m",
        name: "Doubles virages à 500 m",
        description: "Triangle rouge avec virages : annonce une succession de virages à 500 m.",
        image: "/images/classification/double-500.png"
      },
      {
        id: "fin-limitation-90",
        name: "Fin de limitation à 90 km/h",
        description: "Cercle blanc à bordure noire avec barre oblique : fin de la limitation à 90 km/h.",
        image: "/images/classification/fin-limit-90.WEBP"
      },
      {
        id: "site-touristique",
        name: "Site touristique",
        description: "Panneau marron avec symbole : indication d'un site touristique.",
        image: "/images/classification/touristique.png"
      },
      {
        id: "transition-vitesse-90-70",
        name: "Transition de 90 à 70 km/h",
        description: "Panneau indiquant le passage de 90 km/h à 70 km/h.",
        image: "/images/classification/90-70.WEBP"
      },
      {
        id: "passage-pieton-dodane",
        name: "Passage pour piétons (Dodane)",
        description: "Panneau d'indication d'un passage pour piétons de type Dodane.",
        image: "/images/classification/pieton-dodane.JPG"
      },
      {
        id: "fin-interdiction-avertisseur-sonore",
        name: "Fin d'interdiction d'usage de l'avertisseur sonore",
        description: "Cercle blanc à bordure noire : fin de l'interdiction d'utiliser l'avertisseur sonore.",
        image: "/images/classification/fin-interdit-usage-sonore.png"
      },
      {
        id: "plot-chantier",
        name: "Plot de chantier",
        description: "Plot de balisage temporaire de chantier.",
        image: "/images/classification/plot-chantier.png"
      },
      {
        id: "passage-a-niveau-barrieres",
        name: "Passage à niveau avec barrières",
        description: "Triangle rouge avec grille : annonce un passage à niveau avec barrières.",
        image: "/images/classification/passage-cheminfer.png"
      },
      {
        id: "stationnement-autorise",
        name: "Stationnement autorisé",
        description: "Carré bleu avec lettre P : emplacement de stationnement autorisé.",
        image: "/images/classification/stationnement.png"
      },
      {
        id: "danger-temporaire",
        name: "Danger temporaire",
        description: "Triangle jaune/orange : annonce un danger temporaire (chantier, travaux).",
        image: "/images/classification/triangle-jaune.png"
      },
      {
        id: "verglas-frequent",
        name: "Verglas fréquent",
        description: "Triangle rouge avec flocon : annonce un risque de verglas fréquent.",
        image: "/images/classification/verglas_frequent.WEBP"
      }
    ]
  },
    {
    id: 5,
    title: "Série 5",
    items: [
      {
        id: "sens-interdit",
        name: "Sens interdit",
        description: "Cercle rouge avec barre horizontale blanche : interdiction d'accès, sens interdit.",
        image: "/images/classification/sens-interdit.png"
      },
      {
        id: "sortie-interdiction",
        name: "Sortie d'interdiction",
        description: "Panneau rond blanc à barre noire oblique : sortie d'interdiction ou fin de toutes les prescriptions.",
        image: "/images/classification/sortie-interdiction.png"
      },
      {
        id: "sens-inverse",
        name: "Sens inverse",
        description: "Panneau annonçant une circulation en sens inverse.",
        image: "/images/classification/sensinverse.png"
      },
      {
        id: "danger-temporaire",
        name: "Danger temporaire",
        description: "Triangle jaune/orange : annonce un danger temporaire lié à des travaux.",
        image: "/images/classification/danger-tempo.png"
      },
      {
        id: "danger-general",
        name: "Danger général",
        description: "Triangle rouge avec point d'exclamation : annonce un danger non précisé à l'approche.",
        image: "/images/classification/danger-general.png"
      },
      {
        id: "personnes-mobilite-reduite",
        name: "Personnes à mobilité réduite",
        description: "Triangle rouge avec symbole : annonce un danger lié aux personnes à mobilité réduite.",
        image: "/images/classification/mobilite-reduite.png"
      },
      {
        id: "sens-giratoire",
        name: "Sens giratoire",
        description: "Panneau carré blanc avec flèches circulaires : annonce un carrefour à sens giratoire.",
        image: "/images/classification/sens-giratoire.png"
      },
      {
        id: "cabine-telephonique",
        name: "Cabine téléphonique",
        description: "Panneau d'indication : cabine téléphonique.",
        image: "/images/classification/cabine-tel.png"
      },
      {
        id: "chemin-obligatoire-pietons",
        name: "Chemin obligatoire pour piétons",
        description: "Cercle bleu avec piéton : chemin réservé aux piétons.",
        image: "/images/classification/obligatoire-pieton.png"
      },
      {
        id: "aire-pietonne",
        name: "Aire piétonne",
        description: "Panneau carré bleu : entrée dans une aire piétonne.",
        image: "/images/classification/aire-pieton.png"
      },
      {
        id: "stop-150m",
        name: "Stop à 150 mètres",
        description: "Panneau d'annonce : panneau STOP à 150 mètres.",
        image: "/images/classification/stop-150.png"
      },
      {
        id: "fin-limitation-110",
        name: "Fin de limitation de vitesse à 110 km/h",
        description: "Cercle blanc à bordure noire avec barre oblique : fin de la limitation à 110 km/h.",
        image: "/images/classification/fin-de-limititation-vitesse-110.WEBP"
      },
      {
        id: "chaussee-glissante-temporaire",
        name: "Chaussée glissante temporaire",
        description: "Triangle jaune/orange : chaussée glissante temporaire (chantier).",
        image: "/images/classification/gliss-tempo.png"
      },
      {
        id: "station-taxis",
        name: "Station de taxis",
        description: "Rectangle bleu avec inscription TAXIS : emplacement réservé aux taxis.",
        image: "/images/classification/station-taxis.png"
      },
      {
        id: "passage-a-niveau-lumineux",
        name: "Passage à niveau lumineux",
        description: "Panneau indiquant un passage à niveau avec signal lumineux.",
        image: "/images/classification/cheminferlumineux.png"
      },
      {
        id: "fin-limitation-30",
        name: "Fin de limitation de vitesse à 30 km/h",
        description: "Cercle blanc à bordure noire avec barre oblique : fin de la limitation à 30 km/h.",
        image: "/images/classification/fin-max-30.png"
      }
    ]
  },
    {
    id: 6,
    title: "Série 6",
    items: [
      {
        id: "interdit-transport-marchandises",
        name: "Interdiction aux transports de marchandises",
        description: "Cercle rouge avec camion : interdiction aux véhicules de transport de marchandises.",
        image: "/images/classification/interdit-transport-marchandise.png"
      },
      {
        id: "poids-5-tonnes-interdit",
        name: "Poids supérieur à 5 tonnes interdit",
        description: "Cercle rouge avec inscription 5t : interdiction aux véhicules de plus de 5 tonnes.",
        image: "/images/classification/5t.png"
      },
      {
        id: "voie-reservee-bus",
        name: "Voie réservée aux bus",
        description: "Cercle bleu avec bus : voie réservée aux autobus.",
        image: "/images/classification/bus.png"
      },
      {
        id: "passage-pietons",
        name: "Passage pour piétons",
        description: "Triangle rouge avec piéton : annonce un passage pour piétons à proximité.",
        image: "/images/classification/passage-pieton.png"
      },
      {
        id: "accident",
        name: "Accident",
        description: "Triangle jaune/orange : annonce un accident sur la route.",
        image: "/images/classification/accident.png"
      },
      {
        id: "parking-caravanes",
        name: "Parking pour caravanes",
        description: "Panneau d'indication : emplacement de stationnement pour caravanes.",
        image: "/images/classification/parking-caravane.png"
      },
      {
        id: "danger-tension-electrique",
        name: "Danger tension électrique",
        description: "Triangle rouge avec éclair : danger lié à la tension électrique.",
        image: "/images/classification/tension.png"
      },
      {
        id: "interdiction-avertisseur-sonore",
        name: "Interdiction d'utiliser l'avertisseur sonore",
        description: "Cercle rouge avec klaxon barré : interdiction d'utiliser l'avertisseur sonore.",
        image: "/images/classification/interdit-klaxon.WEBP"
      },
      {
        id: "priorite-oran",
        name: "Panneau de priorité (Oran)",
        description: "Panneau de priorité de la wilaya d'Oran.",
        image: "/images/classification/prio-oran.png"
      },
      {
        id: "fin-priorite-chlef",
        name: "Fin de priorité (Chlef)",
        description: "Panneau de fin de priorité de la wilaya de Chlef.",
        image: "/images/classification/fin-prio-chlef.png"
      },
      {
        id: "balise-virage",
        name: "Balise de virage",
        description: "Balise blanche et rouge indiquant un virage.",
        image: "/images/classification/balise-virage.WEBP"
      },
      {
        id: "vitesse-maximale-90",
        name: "Vitesse maximale 90 km/h",
        description: "Cercle blanc à bordure rouge avec 90 : limitation de vitesse à 90 km/h.",
        image: "/images/classification/max-90.png"
      },
      {
        id: "vitesse-minimale-obligatoire",
        name: "Vitesse minimale obligatoire",
        description: "Cercle bleu avec chiffre blanc : vitesse minimale obligatoire à respecter.",
        image: "/images/classification/vitesse-minimal.png"
      },
      {
        id: "fin-limitation-30-v2",
        name: "Fin de limitation de vitesse à 30 km/h",
        description: "Cercle blanc à bordure noire avec barre oblique : fin de la limitation à 30 km/h.",
        image: "/images/classification/Panneau-fin-de-limitation-30.WEBP"
      },
      {
        id: "interdiction-depasser",
        name: "Interdiction de dépasser",
        description: "Cercle rouge avec voiture rouge : interdiction de dépasser pour tous véhicules.",
        image: "/images/classification/interdit-depasser-voiture.png"
      },
      {
        id: "fin-interdiction-depasser-pl",
        name: "Fin d'interdiction de dépasser pour les poids lourds",
        description: "Cercle blanc à bordure noire : fin de l'interdiction de dépasser pour les poids lourds.",
        image: "/images/classification/fin-interdiction-depasser-pl.png"
      }
    ]
  },
    {
    id: 7,
    title: "Série 7",
    items: [
      {
        id: "sens-giratoire",
        name: "Sens giratoire",
        description: "Panneau carré blanc avec flèches circulaires : annonce un carrefour à sens giratoire.",
        image: "/images/classification/sens-giratoire.png"
      },
      {
        id: "aire-pietonne",
        name: "Aire piétonne",
        description: "Panneau carré bleu : entrée dans une aire piétonne.",
        image: "/images/classification/aire-pieton.png"
      },
      {
        id: "fin-chemin-obligatoire-pietons",
        name: "Fin de chemin obligatoire pour piétons",
        description: "Cercle blanc à bordure noire : fin de l'obligation de chemin pour piétons.",
        image: "/images/classification/fin-obligatoire-pieton.png"
      },
      {
        id: "cedez-le-passage",
        name: "Cédez le passage",
        description: "Triangle blanc à bordure rouge : obligation de céder le passage.",
        image: "/images/classification/cedezpassage.png"
      },
      {
        id: "autoroute",
        name: "Entrée d'autoroute",
        description: "Panneau vert avec pont : entrée sur une voie d'autoroute.",
        image: "/images/classification/autoroute.png"
      },
      {
        id: "restaurant",
        name: "Restaurant",
        description: "Panneau d'indication : restaurant à proximité.",
        image: "/images/classification/restaurent.png"
      },
      {
        id: "passage-pietons",
        name: "Passage pour piétons",
        description: "Triangle rouge avec piéton : annonce un passage pour piétons à proximité.",
        image: "/images/classification/passage-pieton.png"
      },
      {
        id: "intervalle-securite",
        name: "Intervalle de sécurité",
        description: "Panneau indiquant la distance de sécurité à respecter entre véhicules.",
        image: "/images/classification/intervalle.png"
      },
      {
        id: "premier-virage-gauche",
        name: "Premier virage à gauche",
        description: "Triangle rouge avec virage : annonce un premier virage à gauche.",
        image: "/images/classification/virage-gauche.png"
      },
      {
        id: "arret-bus",
        name: "Arrêt d'autobus",
        description: "Panneau d'indication : arrêt d'autobus.",
        image: "/images/classification/arret.png"
      },
      {
        id: "chemin-obligatoire-pietons",
        name: "Chemin obligatoire pour piétons",
        description: "Cercle bleu avec piéton : chemin réservé aux piétons.",
        image: "/images/classification/obligatoire-pieton.png"
      },
      {
        id: "fin-interdiction-depasser",
        name: "Fin d'interdiction de dépasser",
        description: "Cercle blanc à bordure noire avec barre : fin de l'interdiction de dépasser.",
        image: "/images/classification/fin-interdiction-passer.png"
      },
      {
        id: "acces-interdit-cyclistes",
        name: "Accès interdit aux cyclistes",
        description: "Cercle rouge avec vélo : circulation des cyclistes interdite.",
        image: "/images/classification/acces-interdit-cyclistes.png"
      },
      {
        id: "direction-tout-droit-2km",
        name: "Direction tout droit sur 2 km",
        description: "Panneau d'indication : obligation de continuer tout droit pendant 2 km.",
        image: "/images/classification/droit-2km.png"
      },
      {
        id: "danger-tension-electrique",
        name: "Danger tension électrique",
        description: "Triangle rouge avec éclair : danger lié à la tension électrique.",
        image: "/images/classification/tension.png"
      },
      {
        id: "parking-velos",
        name: "Parking à vélos",
        description: "Panneau d'indication : emplacement de stationnement pour vélos.",
        image: "/images/classification/parking-velo.png"
      }
    ]
  },
    {
    id: 8,
    title: "Série 8",
    items: [
      {
        id: "poids-5-tonnes-interdit",
        name: "Poids supérieur à 5 tonnes interdit",
        description: "Cercle rouge avec inscription 5t : interdiction aux véhicules de plus de 5 tonnes.",
        image: "/images/classification/5t.png"
      },
      {
        id: "impasse",
        name: "Impasse",
        description: "Panneau d'indication : rue sans issue (impasse).",
        image: "/images/classification/impasse.png"
      },
      {
        id: "panneau-evenementiel",
        name: "Panneau événementiel temporaire",
        description: "Panneau temporaire d'indication d'événement.",
        image: "/images/classification/qtevent.png"
      },
      {
        id: "interdiction-tourner-gauche-sauf-bus",
        name: "Interdiction de tourner à gauche sauf bus",
        description: "Cercle rouge avec flèche gauche barrée : interdiction de tourner à gauche sauf autobus.",
        image: "/images/classification/interdit-gauche-bus.png"
      },
      {
        id: "fin-limitation-110",
        name: "Fin de limitation de vitesse à 110 km/h",
        description: "Cercle blanc à bordure noire avec barre oblique : fin de la limitation à 110 km/h.",
        image: "/images/classification/fin-de-limititation-vitesse-110.WEBP"
      },
      {
        id: "passage-pietons",
        name: "Passage pour piétons",
        description: "Triangle rouge avec piéton : annonce un passage pour piétons à proximité.",
        image: "/images/classification/passage-pieton.png"
      },
      {
        id: "parking-velos",
        name: "Parking à vélos",
        description: "Panneau d'indication : emplacement de stationnement pour vélos.",
        image: "/images/classification/parking-velo.png"
      },
      {
        id: "danger-tension-electrique",
        name: "Danger tension électrique",
        description: "Triangle rouge avec éclair : danger lié à la tension électrique.",
        image: "/images/classification/tension.png"
      },
      {
        id: "vitesse-maximale-90",
        name: "Vitesse maximale 90 km/h",
        description: "Cercle blanc à bordure rouge avec 90 : limitation de vitesse à 90 km/h.",
        image: "/images/classification/max-90.png"
      },
      {
        id: "vehicules-polluants-interdits",
        name: "Véhicules polluants interdits",
        description: "Panneau d'interdiction pour les véhicules polluants.",
        image: "/images/classification/polluer.png"
      },
      {
        id: "chaussee-glissante-temporaire",
        name: "Chaussée glissante temporaire",
        description: "Triangle jaune/orange : chaussée glissante temporaire (chantier).",
        image: "/images/classification/gliss-tempo.png"
      },
      {
        id: "piste-cyclable-obligatoire",
        name: "Piste cyclable obligatoire",
        description: "Cercle bleu avec vélo blanc : voie obligatoire réservée aux cyclistes.",
        image: "/images/classification/piste-cyclable-obligatoire.png"
      },
      {
        id: "fin-voie-reservee",
        name: "Fin de voie réservée",
        description: "Panneau blanc avec barres noires diagonales : fin de voie réservée ou fin de prescription.",
        image: "/images/classification/fin-voie-reservee.png"
      },
      {
        id: "fin-route-prioritaire-400m",
        name: "Fin de route prioritaire à 400 mètres",
        description: "Annonce de la fin de la route prioritaire à 400 mètres.",
        image: "/images/classification/fin-prio-400.png"
      },
      {
        id: "passage-a-niveau-lumineux",
        name: "Passage à niveau lumineux",
        description: "Panneau indiquant un passage à niveau avec signal lumineux.",
        image: "/images/classification/cheminferlumineux.png"
      },
      {
        id: "retrecissement-gauche",
        name: "Rétrécissement par la gauche",
        description: "Triangle rouge avec rétrécissement : annonce un rétrécissement de la chaussée par la gauche.",
        image: "/images/classification/retreci-gauche.png"
      }
    ]
  },
    {
    id: 9,
    title: "Série 9",
    items: [
      {
        id: "acces-interdit-pietons",
        name: "Accès interdit aux piétons",
        description: "Cercle rouge avec piéton barré : interdiction de circuler pour les piétons.",
        image: "/images/classification/interdit-pieton.png"
      },
      {
        id: "fin-interdictions",
        name: "Fin de toutes les interdictions",
        description: "Cercle blanc avec barre oblique noire : lève toutes les interdictions précédentes.",
        image: "/images/classification/fin-interdiction.png"
      },
      {
        id: "balise-virage",
        name: "Balise de virage",
        description: "Balise blanche et rouge indiquant un virage.",
        image: "/images/classification/balise-virage.WEBP"
      },
      {
        id: "triangle-blanc-priorite",
        name: "Triangle blanc (cédez le passage)",
        description: "Triangle blanc à bordure rouge : panonceau de cédez le passage.",
        image: "/images/classification/triangle-blanc.png"
      },
      {
        id: "stationnement-autorise",
        name: "Stationnement autorisé",
        description: "Carré bleu avec lettre P : emplacement de stationnement autorisé.",
        image: "/images/classification/stationnement.png"
      },
      {
        id: "quai-embarcadere",
        name: "Quai / Embarcadère",
        description: "Panneau d'indication : quai ou embarcadère.",
        image: "/images/classification/quai.png"
      },
      {
        id: "danger-ponctuel",
        name: "Danger ponctuel temporaire",
        description: "Triangle jaune/orange : annonce un danger ponctuel temporaire.",
        image: "/images/classification/ponctuelle.png"
      },
      {
        id: "aire-pietonne",
        name: "Aire piétonne",
        description: "Panneau carré bleu : entrée dans une aire piétonne.",
        image: "/images/classification/aire-pieton.png"
      },
      {
        id: "passage-pietons",
        name: "Passage pour piétons",
        description: "Triangle rouge avec piéton : annonce un passage pour piétons à proximité.",
        image: "/images/classification/passage-pieton.png"
      },
      {
        id: "fin-limitation-30",
        name: "Fin de limitation de vitesse à 30 km/h",
        description: "Cercle blanc à bordure noire avec barre oblique : fin de la limitation à 30 km/h.",
        image: "/images/classification/fin-max-30.png"
      },
      {
        id: "fin-limitation-30-v2",
        name: "Fin de limitation de vitesse à 30 km/h",
        description: "Cercle blanc à bordure noire avec barre oblique : fin de la limitation à 30 km/h.",
        image: "/images/classification/Panneau-fin-de-limitation-30.WEBP"
      },
      {
        id: "fin-route-prioritaire",
        name: "Fin de route prioritaire",
        description: "Losange blanc à bordure noire : fin de la route prioritaire.",
        image: "/images/classification/fin-prio.png"
      },
      {
        id: "arret-bus",
        name: "Arrêt d'autobus",
        description: "Panneau d'indication : arrêt d'autobus.",
        image: "/images/classification/arret.png"
      },
      {
        id: "chaussee-glissante",
        name: "Chaussée glissante",
        description: "Triangle rouge avec dérapage : annonce une chaussée glissante.",
        image: "/images/classification/chausse-glissante.png"
      },
      {
        id: "autoroute",
        name: "Entrée d'autoroute",
        description: "Panneau vert avec pont : entrée sur une voie d'autoroute.",
        image: "/images/classification/autoroute.png"
      },
      {
        id: "fin-interdictions-rond-blanc",
        name: "Fin de toutes les interdictions",
        description: "Cercle blanc avec barre oblique noire : lève toutes les interdictions précédentes.",
        image: "/images/classification/rond-blanc-interdiction.png"
      }
    ]
  },
    {
    id: 10,
    title: "Série 10",
    items: [
      {
        id: "vitesse-conseillee-70",
        name: "Vitesse conseillée 70 km/h",
        description: "Panneau carré bleu avec 70 : vitesse conseillée à 70 km/h.",
        image: "/images/classification/conseille-70.WEBP"
      },
      {
        id: "danger-temporaire",
        name: "Danger temporaire",
        description: "Triangle jaune/orange : annonce un danger temporaire (chantier, travaux).",
        image: "/images/classification/triangle-jaune.png"
      },
      {
        id: "risque-incendie-foret",
        name: "Risque d'incendie de forêt",
        description: "Panneau d'avertissement : attention au risque d'incendie de forêt.",
        image: "/images/classification/foret7.png"
      },
      {
        id: "travaux",
        name: "Travaux",
        description: "Triangle rouge avec homme creusant : annonce des travaux sur la chaussée.",
        image: "/images/classification/travaux.png"
      },
      {
        id: "intersection-priorite-droite",
        name: "Intersection, priorité à droite",
        description: "Triangle rouge avec croix de Saint-André : annonce une intersection où la priorité est à droite.",
        image: "/images/classification/inter-prio-droite.png"
      },
      {
        id: "triangle-blanc-priorite",
        name: "Triangle blanc (cédez le passage)",
        description: "Triangle blanc à bordure rouge : panonceau de cédez le passage.",
        image: "/images/classification/triangle-blanc.png"
      },
      {
        id: "borne-detresse",
        name: "Borne d'appel d'urgence",
        description: "Panneau indiquant une borne d'appel d'urgence sur le côté droit.",
        image: "/images/classification/detresse-droite.png"
      },
      {
        id: "vitesse-maximale-70",
        name: "Vitesse maximale 70 km/h",
        description: "Cercle blanc à bordure rouge avec 70 : limitation de vitesse à 70 km/h.",
        image: "/images/classification/vitesse-max-70.png"
      },
      {
        id: "demi-tour-interdit",
        name: "Demi-tour interdit",
        description: "Cercle rouge avec flèche en U barrée : interdiction de faire demi-tour.",
        image: "/images/classification/interdit-demi-tour.png"
      },
      {
        id: "balise-musoir",
        name: "Balise de musoir",
        description: "Balise rouge et blanche disposée sur un îlot directionnel (musoir).",
        image: "/images/classification/balise-musoir.WEBP"
      },
      {
        id: "contournement-droite",
        name: "Contournement par la droite",
        description: "Panneau blanc avec flèche courbe : indique un contournement par la droite.",
        image: "/images/classification/contournement-droite.png"
      },
      {
        id: "fin-interdiction-avertisseur-sonore",
        name: "Fin d'interdiction d'usage de l'avertisseur sonore",
        description: "Cercle blanc à bordure noire : fin de l'interdiction d'utiliser l'avertisseur sonore.",
        image: "/images/classification/fin-interdit-usage-sonore.png"
      },
      {
        id: "sens-interdit",
        name: "Sens interdit",
        description: "Cercle rouge avec barre horizontale blanche : interdiction d'accès, sens interdit.",
        image: "/images/classification/sens-interdit.png"
      },
      {
        id: "sens-inverse",
        name: "Sens inverse",
        description: "Panneau annonçant une circulation en sens inverse.",
        image: "/images/classification/sensinverse.png"
      },
      {
        id: "fin-route-prioritaire",
        name: "Fin de route prioritaire",
        description: "Losange blanc à bordure noire : fin de la route prioritaire.",
        image: "/images/classification/fin-prio.png"
      },
      {
        id: "interdiction-depasser-camions-10m",
        name: "Interdiction de dépasser pour véhicules de plus de 10 mètres",
        description: "Panneau indiquant l'interdiction de dépasser pour les véhicules de plus de 10 mètres.",
        image: "/images/classification/camions-10m.png"
      }
    ]
  },
    {
    id: 11,
    title: "Série 11",
    items: [
      {
        id: "personnes-mobilite-reduite",
        name: "Personnes à mobilité réduite",
        description: "Triangle rouge avec symbole : annonce un danger lié aux personnes à mobilité réduite.",
        image: "/images/classification/mobilite-reduite.png"
      },
      {
        id: "acces-interdit-cyclistes",
        name: "Accès interdit aux cyclistes",
        description: "Cercle rouge avec vélo : circulation des cyclistes interdite.",
        image: "/images/classification/acces-interdit-cyclistes.png"
      },
      {
        id: "piste-cyclable-obligatoire",
        name: "Piste cyclable obligatoire",
        description: "Cercle bleu avec vélo blanc : voie obligatoire réservée aux cyclistes.",
        image: "/images/classification/piste-cyclable-obligatoire.png"
      },
      {
        id: "triangle-blanc-priorite",
        name: "Triangle blanc (cédez le passage)",
        description: "Triangle blanc à bordure rouge : panonceau de cédez le passage.",
        image: "/images/classification/triangle-blanc.png"
      },
      {
        id: "arret-bus",
        name: "Arrêt d'autobus",
        description: "Panneau d'indication : arrêt d'autobus.",
        image: "/images/classification/arret-1-15.png"
      },
      {
        id: "chaussee-glissante",
        name: "Chaussée glissante",
        description: "Triangle rouge avec dérapage : annonce une chaussée glissante.",
        image: "/images/classification/chausse-glissante.png"
      },
      {
        id: "fin-route-prioritaire",
        name: "Fin de route prioritaire",
        description: "Losange blanc à bordure noire : fin de la route prioritaire.",
        image: "/images/classification/fin-prio.png"
      },
      {
        id: "chaussee-glissante-temporaire",
        name: "Chaussée glissante temporaire",
        description: "Triangle jaune/orange : chaussée glissante temporaire (chantier).",
        image: "/images/classification/gliss-tempo.png"
      },
      {
        id: "zone-stationnement",
        name: "Zone de stationnement",
        description: "Panneau carré : entrée dans une zone de stationnement réglementée.",
        image: "/images/classification/zone-stationnement.png"
      },
      {
        id: "retrecissement-chaussee",
        name: "Rétrécissement de chaussée",
        description: "Triangle rouge : annonce un rétrécissement de la chaussée.",
        image: "/images/classification/chausse-retrecissement.png"
      },
      {
        id: "acces-interdit-pietons",
        name: "Accès interdit aux piétons",
        description: "Cercle rouge avec piéton barré : interdiction de circuler pour les piétons.",
        image: "/images/classification/interdit-pieton.png"
      },
      {
        id: "premier-virage-gauche",
        name: "Premier virage à gauche",
        description: "Triangle rouge avec virage : annonce un premier virage à gauche.",
        image: "/images/classification/virage-gauche.png"
      },
      {
        id: "animaux-domestiques",
        name: "Animaux domestiques",
        description: "Triangle rouge avec animal : annonce un danger lié aux animaux domestiques.",
        image: "/images/classification/anim-domes.png"
      },
      {
        id: "interdiction-bus",
        name: "Interdiction aux bus",
        description: "Cercle rouge avec bus : interdiction de circuler pour les autobus.",
        image: "/images/classification/interdit-bus.png"
      },
      {
        id: "voie-obligatoire-bus",
        name: "Voie obligatoire pour bus",
        description: "Cercle bleu avec bus : voie réservée aux autobus.",
        image: "/images/classification/oblig-bus.png"
      },
      {
        id: "voie-reservee-bus",
        name: "Voie réservée aux bus",
        description: "Panneau carré bleu : voie réservée aux autobus.",
        image: "/images/classification/bus.png"
      }
    ]
  },
    {
    id: 12,
    title: "Série 12",
    items: [
      {
        id: "passage-pietons",
        name: "Passage pour piétons",
        description: "Triangle rouge avec piéton : annonce un passage pour piétons à proximité.",
        image: "/images/classification/passage-pieton.png"
      },
      {
        id: "sens-interdit",
        name: "Sens interdit",
        description: "Cercle rouge avec barre horizontale blanche : interdiction d'accès, sens interdit.",
        image: "/images/classification/sens-interdit.png"
      },
      {
        id: "direction-obligatoire-gauche",
        name: "Direction obligatoire à gauche",
        description: "Cercle bleu avec flèche blanche pointant à gauche : obligation de tourner à gauche.",
        image: "/images/classification/oblig-gauche.png"
      },
      {
        id: "station-taxis",
        name: "Station de taxis",
        description: "Rectangle bleu avec inscription TAXIS : emplacement réservé aux taxis.",
        image: "/images/classification/station-taxis.png"
      },
      {
        id: "route-a57",
        name: "Route A57",
        description: "Panneau d'indication : route numéro A57.",
        image: "/images/classification/a57.png"
      },
      {
        id: "vehicules-polluants-interdits",
        name: "Véhicules polluants interdits",
        description: "Panneau d'interdiction pour les véhicules polluants.",
        image: "/images/classification/polluer.png"
      },
      {
        id: "chaussee-glissante-temporaire",
        name: "Chaussée glissante temporaire",
        description: "Triangle jaune/orange : chaussée glissante temporaire (chantier).",
        image: "/images/classification/gliss-tempo.png"
      },
      {
        id: "urgences-hospitalieres",
        name: "Urgences hospitalières",
        description: "Panneau d'indication : service des urgences.",
        image: "/images/classification/urgences.png"
      },
      {
        id: "matieres-explosives",
        name: "Matières explosives",
        description: "Panneau de danger : matières explosives.",
        image: "/images/classification/explosives.png"
      },
      {
        id: "fin-limitation-30",
        name: "Fin de limitation de vitesse à 30 km/h",
        description: "Cercle blanc à bordure noire avec barre oblique : fin de la limitation à 30 km/h.",
        image: "/images/classification/fin-max-30.png"
      },
      {
        id: "fin-limitation-110",
        name: "Fin de limitation de vitesse à 110 km/h",
        description: "Cercle blanc à bordure noire avec barre oblique : fin de la limitation à 110 km/h.",
        image: "/images/classification/fin-de-limititation-vitesse-110.WEBP"
      },
      {
        id: "borne-detresse",
        name: "Borne d'appel d'urgence",
        description: "Panneau indiquant une borne d'appel d'urgence sur le côté droit.",
        image: "/images/classification/detresse-droite.png"
      },
      {
        id: "route-22",
        name: "Route numéro 22",
        description: "Panneau d'indication : route numéro 22.",
        image: "/images/classification/route22.png"
      },
      {
        id: "separation-voies",
        name: "Séparation de voies",
        description: "Panneau indiquant une séparation des voies de circulation.",
        image: "/images/classification/separation.png"
      },
      {
        id: "passage-a-niveau-non-lumineux",
        name: "Passage à niveau non lumineux",
        description: "Panneau indiquant un passage à niveau sans signal lumineux.",
        image: "/images/classification/cheminfernonlum.png"
      },
      {
        id: "panneau-indication-dodane",
        name: "Panneau d'indication (Dodane)",
        description: "Panneau rectangulaire d'indication de direction de type Dodane.",
        image: "/images/classification/indication-dodane.png"
      }
    ]
  },
    {
    id: 13,
    title: "Série 13",
    items: [
      {
        id: "triangle-blanc-priorite",
        name: "Triangle blanc (cédez le passage)",
        description: "Triangle blanc à bordure rouge : panonceau de cédez le passage.",
        image: "/images/classification/triangle-blanc.png"
      },
      {
        id: "premier-virage-gauche",
        name: "Premier virage à gauche",
        description: "Triangle rouge avec virage : annonce un premier virage à gauche.",
        image: "/images/classification/virage-gauche.png"
      },
      {
        id: "fin-interdictions-rond-blanc",
        name: "Fin de toutes les interdictions",
        description: "Cercle blanc avec barre oblique noire : lève toutes les interdictions précédentes.",
        image: "/images/classification/rond-blanc-interdiction.png"
      },
      {
        id: "fin-interdiction-depasser",
        name: "Fin d'interdiction de dépasser",
        description: "Cercle blanc à bordure noire avec barre : fin de l'interdiction de dépasser.",
        image: "/images/classification/fin-interdiction-passer.png"
      },
      {
        id: "fin-chemin-obligatoire-pietons",
        name: "Fin de chemin obligatoire pour piétons",
        description: "Cercle blanc à bordure noire : fin de l'obligation de chemin pour piétons.",
        image: "/images/classification/fin-obligatoire-pieton.png"
      },
      {
        id: "sens-giratoire",
        name: "Sens giratoire",
        description: "Panneau carré blanc avec flèches circulaires : annonce un carrefour à sens giratoire.",
        image: "/images/classification/sens-giratoire.png"
      },
      {
        id: "restaurant",
        name: "Restaurant",
        description: "Panneau d'indication : restaurant à proximité.",
        image: "/images/classification/restaurent.png"
      },
      {
        id: "panneau-evenementiel",
        name: "Panneau événementiel temporaire",
        description: "Panneau temporaire d'indication d'événement.",
        image: "/images/classification/qtevent.png"
      },
      {
        id: "sens-interdit",
        name: "Sens interdit",
        description: "Cercle rouge avec barre horizontale blanche : interdiction d'accès, sens interdit.",
        image: "/images/classification/sens-interdit.png"
      },
      {
        id: "arret-bus",
        name: "Arrêt d'autobus",
        description: "Panneau d'indication : arrêt d'autobus.",
        image: "/images/classification/arret.png"
      },
      {
        id: "chemin-obligatoire-pietons",
        name: "Chemin obligatoire pour piétons",
        description: "Cercle bleu avec piéton : chemin réservé aux piétons.",
        image: "/images/classification/obligatoire-pieton.png"
      },
      {
        id: "aire-pietonne",
        name: "Aire piétonne",
        description: "Panneau carré bleu : entrée dans une aire piétonne.",
        image: "/images/classification/aire-pieton.png"
      },
      {
        id: "quai-embarcadere",
        name: "Quai / Embarcadère",
        description: "Panneau d'indication : quai ou embarcadère.",
        image: "/images/classification/quai.png"
      },
      {
        id: "cedez-le-passage",
        name: "Cédez le passage",
        description: "Triangle blanc à bordure rouge : obligation de céder le passage.",
        image: "/images/classification/cedezpassage.png"
      },
      {
        id: "autoroute",
        name: "Entrée d'autoroute",
        description: "Panneau vert avec pont : entrée sur une voie d'autoroute.",
        image: "/images/classification/autoroute.png"
      },
      {
        id: "stop",
        name: "Stop",
        description: "Panneau octogonal rouge avec inscription STOP : obligation de marquer l'arrêt.",
        image: "/images/classification/stop.png"
      }
    ]
  },
    {
    id: 14,
    title: "Série 14",
    items: [
      {
        id: "premier-virage-gauche",
        name: "Premier virage à gauche",
        description: "Triangle rouge avec virage : annonce un premier virage à gauche.",
        image: "/images/classification/premier-virage-gauche.png"
      },
      {
        id: "urgences-hospitalieres",
        name: "Urgences hospitalières",
        description: "Panneau d'indication : service des urgences.",
        image: "/images/classification/urgences.png"
      },
      {
        id: "fin-interdiction-depasser",
        name: "Fin d'interdiction de dépasser",
        description: "Cercle blanc à bordure noire avec barre : fin de l'interdiction de dépasser.",
        image: "/images/classification/fin-interdiction-passer.png"
      },
      {
        id: "sens-giratoire",
        name: "Sens giratoire",
        description: "Panneau carré blanc avec flèches circulaires : annonce un carrefour à sens giratoire.",
        image: "/images/classification/sens-giratoire.png"
      },
      {
        id: "stationnement-autorise",
        name: "Stationnement autorisé",
        description: "Carré bleu avec lettre P : emplacement de stationnement autorisé.",
        image: "/images/classification/stationnement.png"
      },
      {
        id: "fin-limitation-30-v2",
        name: "Fin de limitation de vitesse à 30 km/h",
        description: "Cercle blanc à bordure noire avec barre oblique : fin de la limitation à 30 km/h.",
        image: "/images/classification/Panneau-fin-de-limitation-30.WEBP"
      },
      {
        id: "cedez-le-passage-150m",
        name: "Cédez le passage à 150 mètres",
        description: "Triangle blanc à bordure rouge avec mention : annonce un cédez le passage à 150 mètres.",
        image: "/images/classification/cedez150.png"
      },
      {
        id: "hopital",
        name: "Hôpital",
        description: "Panneau d'indication : hôpital.",
        image: "/images/classification/hopital.png"
      },
      {
        id: "premier-virage-droite",
        name: "Premier virage à droite",
        description: "Triangle rouge avec virage : annonce un premier virage à droite.",
        image: "/images/classification/premier-virage-droite.png"
      },
      {
        id: "panneau-indication-dodane",
        name: "Panneau d'indication (Dodane)",
        description: "Panneau rectangulaire d'indication de direction de type Dodane.",
        image: "/images/classification/indication-dodane.png"
      },
      {
        id: "route-prioritaire",
        name: "Route prioritaire",
        description: "Losange jaune et blanc : indique une route prioritaire aux intersections.",
        image: "/images/classification/losange-jaune.png"
      },
      {
        id: "sens-interdit",
        name: "Sens interdit",
        description: "Cercle rouge avec barre horizontale blanche : interdiction d'accès, sens interdit.",
        image: "/images/classification/sens-interdit.png"
      },
      {
        id: "vitesse-maximale-30",
        name: "Vitesse maximale 30 km/h",
        description: "Cercle blanc à bordure rouge avec 30 : limitation de vitesse à 30 km/h.",
        image: "/images/classification/vitesse-max-30.png"
      },
      {
        id: "vitesse-minimale-obligatoire",
        name: "Vitesse minimale obligatoire",
        description: "Cercle bleu avec chiffre blanc : vitesse minimale obligatoire à respecter.",
        image: "/images/classification/vitesse-minimal.png"
      },
      {
        id: "passage-pietons",
        name: "Passage pour piétons",
        description: "Triangle rouge avec piéton : annonce un passage pour piétons à proximité.",
        image: "/images/classification/passage-pieton.png"
      },
      {
        id: "stop-150m",
        name: "Stop à 150 mètres",
        description: "Panneau d'annonce : panneau STOP à 150 mètres.",
        image: "/images/classification/stop-150.png"
      }
    ]
  },
    {
    id: 15,
    title: "Série 15",
    items: [
      {
        id: "personnes-mobilite-reduite",
        name: "Personnes à mobilité réduite",
        description: "Triangle rouge avec symbole : annonce un danger lié aux personnes à mobilité réduite.",
        image: "/images/classification/mobilite-reduite.png"
      },
      {
        id: "acces-interdit-cyclistes",
        name: "Accès interdit aux cyclistes",
        description: "Cercle rouge avec vélo : circulation des cyclistes interdite.",
        image: "/images/classification/acces-interdit-cyclistes.png"
      },
      {
        id: "piste-cyclable-obligatoire",
        name: "Piste cyclable obligatoire",
        description: "Cercle bleu avec vélo blanc : voie obligatoire réservée aux cyclistes.",
        image: "/images/classification/piste-cyclable-obligatoire.png"
      },
      {
        id: "triangle-blanc-priorite",
        name: "Triangle blanc (cédez le passage)",
        description: "Triangle blanc à bordure rouge : panonceau de cédez le passage.",
        image: "/images/classification/triangle-blanc.png"
      },
      {
        id: "arret-bus",
        name: "Arrêt d'autobus",
        description: "Panneau d'indication : arrêt d'autobus.",
        image: "/images/classification/arret-1-15.png"
      },
      {
        id: "chaussee-glissante",
        name: "Chaussée glissante",
        description: "Triangle rouge avec dérapage : annonce une chaussée glissante.",
        image: "/images/classification/chausse-glissante.png"
      },
      {
        id: "fin-route-prioritaire",
        name: "Fin de route prioritaire",
        description: "Losange blanc à bordure noire : fin de la route prioritaire.",
        image: "/images/classification/fin-prio.png"
      },
      {
        id: "descente-dangereuse",
        name: "Descente dangereuse",
        description: "Triangle rouge avec pente : annonce une descente dangereuse.",
        image: "/images/classification/descente.png"
      },
      {
        id: "zone-stationnement",
        name: "Zone de stationnement",
        description: "Panneau carré : entrée dans une zone de stationnement réglementée.",
        image: "/images/classification/zone-stationnement.png"
      },
      {
        id: "enfants",
        name: "Enfants",
        description: "Triangle rouge avec enfants : annonce un danger lié aux enfants.",
        image: "/images/classification/enfants.png"
      },
      {
        id: "acces-interdit-pietons",
        name: "Accès interdit aux piétons",
        description: "Cercle rouge avec piéton barré : interdiction de circuler pour les piétons.",
        image: "/images/classification/interdit-pieton.png"
      },
      {
        id: "premier-virage-gauche",
        name: "Premier virage à gauche",
        description: "Triangle rouge avec virage : annonce un premier virage à gauche.",
        image: "/images/classification/virage-gauche.png"
      },
      {
        id: "animaux-domestiques",
        name: "Animaux domestiques",
        description: "Triangle rouge avec animal : annonce un danger lié aux animaux domestiques.",
        image: "/images/classification/anim-domes.png"
      },
      {
        id: "interdiction-bus",
        name: "Interdiction aux bus",
        description: "Cercle rouge avec bus : interdiction de circuler pour les autobus.",
        image: "/images/classification/interdit-bus.png"
      },
      {
        id: "voie-obligatoire-bus",
        name: "Voie obligatoire pour bus",
        description: "Cercle bleu avec bus : voie réservée aux autobus.",
        image: "/images/classification/oblig-bus.png"
      },
      {
        id: "voie-reservee-bus",
        name: "Voie réservée aux bus",
        description: "Panneau carré bleu : voie réservée aux autobus.",
        image: "/images/classification/bus.png"
      }
    ]
  },
    {
    id: 16,
    title: "Série 16",
    items: [
      {
        id: "danger-general",
        name: "Danger général",
        description: "Triangle rouge avec point d'exclamation : annonce un danger non précisé à l'approche.",
        image: "/images/classification/danger-general.png"
      },
      {
        id: "interdiction-tourner-droite",
        name: "Interdiction de tourner à droite",
        description: "Cercle rouge avec flèche à droite barrée : interdiction de tourner à droite.",
        image: "/images/classification/interdiction-tourner-droite.png"
      },
      {
        id: "stationnement-interdit",
        name: "Stationnement interdit",
        description: "Cercle bleu à bordure rouge avec barre oblique : stationnement interdit.",
        image: "/images/classification/stationnement-interdit.png"
      },
      {
        id: "direction-obligatoire",
        name: "Direction obligatoire",
        description: "Cercle bleu avec flèche blanche : obligation de suivre la direction indiquée.",
        image: "/images/classification/rond-bleu.png"
      },
      {
        id: "fin-interdictions",
        name: "Fin de toutes les interdictions",
        description: "Cercle blanc avec barre oblique noire : lève toutes les interdictions précédentes.",
        image: "/images/classification/fin-interdiction.png"
      },
      {
        id: "intersection-priorite-droite",
        name: "Intersection, priorité à droite",
        description: "Triangle rouge avec croix de Saint-André : annonce une intersection où la priorité est à droite.",
        image: "/images/classification/inter-prio-droite.png"
      },
      {
        id: "fin-interdiction-depasser-pl",
        name: "Fin d'interdiction de dépasser pour les poids lourds",
        description: "Cercle blanc à bordure noire : fin de l'interdiction de dépasser pour les poids lourds.",
        image: "/images/classification/fin-interdiction-depasser-pl.png"
      },
      {
        id: "station-taxis",
        name: "Station de taxis",
        description: "Rectangle bleu avec inscription TAXIS : emplacement réservé aux taxis.",
        image: "/images/classification/station-taxis.png"
      },
      {
        id: "piste-cyclable-obligatoire",
        name: "Piste cyclable obligatoire",
        description: "Cercle bleu avec vélo blanc : voie obligatoire réservée aux cyclistes.",
        image: "/images/classification/piste-cyclable-obligatoire.png"
      },
      {
        id: "zone-arret-stationnement-interdit",
        name: "Zone d'arrêt et de stationnement interdits",
        description: "Panneau carré blanc à bordure rouge : entrée dans une zone où l'arrêt et le stationnement sont interdits.",
        image: "/images/classification/zone-arret-stationnement-interdit.png"
      },
      {
        id: "fin-voie-reservee",
        name: "Fin de voie réservée",
        description: "Panneau blanc avec barres noires diagonales : fin de voie réservée ou fin de prescription.",
        image: "/images/classification/fin-voie-reservee.png"
      },
      {
        id: "sortie-interdiction",
        name: "Sortie d'interdiction",
        description: "Panneau rond blanc à barre noire oblique : sortie d'interdiction ou fin de toutes les prescriptions.",
        image: "/images/classification/sortie-interdiction.png"
      },
      {
        id: "risque-incendie-foret",
        name: "Risque d'incendie de forêt",
        description: "Panneau carré représentant un arbre en flammes : attention au risque d'incendie de forêt.",
        image: "/images/classification/feu-foret.WEBP"
      },
      {
        id: "acces-interdit-cyclistes",
        name: "Accès interdit aux cyclistes",
        description: "Cercle rouge avec vélo : circulation des cyclistes interdite.",
        image: "/images/classification/acces-interdit-cyclistes.png"
      },
      {
        id: "double-sens-circulation",
        name: "Double sens de circulation",
        description: "Panneau carré blanc avec deux flèches opposées : circulation dans les deux sens.",
        image: "/images/classification/double-sens-circulation.png"
      },
      {
        id: "zone-30",
        name: "Zone 30",
        description: "Panneau carré blanc avec mention ZONE 30 : entrée dans une zone limitée à 30 km/h.",
        image: "/images/classification/zone-30.png"
      }
    ]
  },
  {
    id: 17,
    title: "Série 17",
    items: [
      {
        id: "interdiction-depasser-pl",
        name: "Interdiction de dépasser pour les poids lourds",
        description: "Cercle rouge avec camion : interdiction de dépasser pour les poids lourds.",
        image: "/images/classification/interdit-depasser-pl.png"
      },
      {
        id: "gendarmerie",
        name: "Gendarmerie",
        description: "Panneau d'indication : gendarmerie.",
        image: "/images/classification/gendarmerie.png"
      },
      {
        id: "aerodrome",
        name: "Aérodrome",
        description: "Panneau d'indication : aérodrome ou aéroport.",
        image: "/images/classification/aerienne.png"
      },
      {
        id: "police",
        name: "Police",
        description: "Panneau d'indication : commissariat de police.",
        image: "/images/classification/police.png"
      },
      {
        id: "quai-embarcadere",
        name: "Quai / Embarcadère",
        description: "Panneau d'indication : quai ou embarcadère.",
        image: "/images/classification/quai.png"
      },
      {
        id: "chaines-neige-obligatoires",
        name: "Chaînes à neige obligatoires",
        description: "Cercle bleu avec pneu à chaîne : obligation d'équiper son véhicule de chaînes à neige.",
        image: "/images/classification/chaine-neige.png"
      },
      {
        id: "route-a57",
        name: "Route A57",
        description: "Panneau d'indication : route numéro A57.",
        image: "/images/classification/a57.png"
      },
      {
        id: "balise-virage",
        name: "Balise de virage",
        description: "Balise blanche et rouge indiquant un virage.",
        image: "/images/classification/balise-virage.WEBP"
      },
      {
        id: "cavaliers",
        name: "Cavaliers",
        description: "Triangle rouge avec cavalier : annonce un danger lié aux cavaliers.",
        image: "/images/classification/cavaliers.png"
      },
      {
        id: "pont-mobile",
        name: "Pont mobile",
        description: "Triangle rouge avec pont : annonce un pont mobile.",
        image: "/images/classification/pont-mobile.png"
      },
      {
        id: "vent-lateral",
        name: "Vent latéral",
        description: "Triangle rouge avec drapeau : annonce un risque de vent latéral.",
        image: "/images/classification/vent.png"
      },
      {
        id: "demi-tour-interdit",
        name: "Demi-tour interdit",
        description: "Cercle rouge avec flèche en U barrée : interdiction de faire demi-tour.",
        image: "/images/classification/interdit-demi-tour.png"
      },
      {
        id: "direction-obligatoire-gauche",
        name: "Direction obligatoire à gauche",
        description: "Cercle bleu avec flèche blanche pointant à gauche : obligation de tourner à gauche.",
        image: "/images/classification/oblig-gauche.png"
      },
      {
        id: "fin-limitation-50",
        name: "Fin de limitation de vitesse à 50 km/h",
        description: "Cercle blanc à bordure noire avec barre oblique : fin de la limitation de vitesse à 50 km/h.",
        image: "/images/classification/fin-limit-50.png"
      },
      {
        id: "panneau-carre-bleu",
        name: "Panneau carré bleu (indication)",
        description: "Panneau carré bleu : indication ou service.",
        image: "/images/classification/carre-bleu.png"
      },
      {
        id: "double-sens-circulation",
        name: "Double sens de circulation",
        description: "Panneau carré blanc avec deux flèches opposées : circulation dans les deux sens.",
        image: "/images/classification/double-sens-circulation.png"
      }
    ]
  },
    {
    id: 18,
    title: "Série 18",
    items: [
      {
        id: "retrecissement-chaussee-1",
        name: "Rétrécissement de chaussée",
        description: "Triangle rouge : annonce un rétrécissement de la chaussée.",
        image: "/images/classification/retreci-chausse.png"
      },
      {
        id: "circulation-sens-unique",
        name: "Circulation en sens unique",
        description: "Panneau carré bleu : circulation en sens unique.",
        image: "/images/classification/circulation-sensunique.png"
      },
      {
        id: "circulation-bidirectionnelle",
        name: "Circulation bidirectionnelle",
        description: "Panneau annonçant une circulation dans les deux sens.",
        image: "/images/classification/bidirection.png"
      },
      {
        id: "interdiction-avertisseur-sonore",
        name: "Interdiction d'utiliser l'avertisseur sonore",
        description: "Cercle rouge avec klaxon barré : interdiction d'utiliser l'avertisseur sonore.",
        image: "/images/classification/interdit-klaxon.WEBP"
      },
      {
        id: "separation-voies",
        name: "Séparation de voies",
        description: "Panneau indiquant une séparation des voies de circulation.",
        image: "/images/classification/separation.png"
      },
      {
        id: "fin-limitation-110",
        name: "Fin de limitation de vitesse à 110 km/h",
        description: "Cercle blanc à bordure noire avec barre oblique : fin de la limitation à 110 km/h.",
        image: "/images/classification/fin-de-limititation-vitesse-110.WEBP"
      },
      {
        id: "fin-limitation-30",
        name: "Fin de limitation de vitesse à 30 km/h",
        description: "Cercle blanc à bordure noire avec barre oblique : fin de la limitation à 30 km/h.",
        image: "/images/classification/fin-max-30.png"
      },
      {
        id: "passage-pietons",
        name: "Passage pour piétons",
        description: "Triangle rouge avec piéton : annonce un passage pour piétons à proximité.",
        image: "/images/classification/passage-pieton.png"
      },
      {
        id: "retrecissement-chaussee-2",
        name: "Rétrécissement de chaussée",
        description: "Triangle rouge : annonce un rétrécissement de la chaussée.",
        image: "/images/classification/chausse-retrecissement.png"
      },
      {
        id: "direction-obligatoire-tout-droit",
        name: "Direction obligatoire tout droit",
        description: "Cercle bleu avec flèche blanche tout droit : obligation de continuer tout droit.",
        image: "/images/classification/toutdroit.png"
      },
      {
        id: "intersection-priorite-droite",
        name: "Intersection, priorité à droite",
        description: "Triangle rouge avec croix de Saint-André : annonce une intersection où la priorité est à droite.",
        image: "/images/classification/inter-prio-droite.png"
      },
      {
        id: "route-89",
        name: "Route numéro 89",
        description: "Panneau d'indication : route numéro 89.",
        image: "/images/classification/route89.png"
      },
      {
        id: "station-essence",
        name: "Station-service",
        description: "Panneau d'indication : station-service (gazole).",
        image: "/images/classification/gazoil.png"
      },
      {
        id: "fin-limitation-30-v2",
        name: "Fin de limitation de vitesse à 30 km/h",
        description: "Cercle blanc à bordure noire avec barre oblique : fin de la limitation à 30 km/h.",
        image: "/images/classification/Panneau-fin-de-limitation-30.WEBP"
      },
      {
        id: "vitesse-minimale-obligatoire",
        name: "Vitesse minimale obligatoire",
        description: "Cercle bleu avec chiffre blanc : vitesse minimale obligatoire à respecter.",
        image: "/images/classification/vitesse-minimal.png"
      },
      {
        id: "vitesse-maximale-30",
        name: "Vitesse maximale 30 km/h",
        description: "Cercle blanc à bordure rouge avec 30 : limitation de vitesse à 30 km/h.",
        image: "/images/classification/vitesse-max-30.png"
      }
    ]
  },
    {
    id: 19,
    title: "Série 19",
    items: [
{
        id: "sens-interdit",
        name: "Sens interdit",
        description: "Cercle rouge avec barre horizontale blanche : interdiction d'accès, sens interdit.",
        image: "/images/classification/sens-interdit.png"
      },
      {
        id: "sortie-interdiction",
        name: "Sortie d'interdiction",
        description: "Panneau rond blanc à barre noire oblique : sortie d'interdiction ou fin de toutes les prescriptions.",
        image: "/images/classification/sortie-interdiction.png"
      },
      {
        id: "sens-inverse",
        name: "Sens inverse",
        description: "Panneau annonçant une circulation en sens inverse.",
        image: "/images/classification/sensinverse.png"
      },
      {
        id: "danger-temporaire",
        name: "Danger temporaire",
        description: "Triangle jaune/orange : annonce un danger temporaire lié à des travaux.",
        image: "/images/classification/danger-tempo.png"
      },
      {
        id: "danger-general",
        name: "Danger général",
        description: "Triangle rouge avec point d'exclamation : annonce un danger non précisé à l'approche.",
        image: "/images/classification/danger-general.png"
      },
      {
        id: "passage-pietons",
        name: "Passage pour piétons",
        description: "Triangle rouge avec piéton : annonce un passage pour piétons à proximité.",
        image: "/images/classification/passage-pieton.png"
      },
      {
        id: "retrecissement-temporaire",
        name: "Rétrécissement temporaire",
        description: "Triangle jaune/orange : rétrécissement de la chaussée temporaire.",
        image: "/images/classification/retrec-tempo.png"
      },
      {
        id: "cabine-telephonique",
        name: "Cabine téléphonique",
        description: "Panneau d'indication : cabine téléphonique.",
        image: "/images/classification/cabine-tel.png"
      },
      {
        id: "chemin-obligatoire-pietons",
        name: "Chemin obligatoire pour piétons",
        description: "Cercle bleu avec piéton : chemin réservé aux piétons.",
        image: "/images/classification/obligatoire-pieton.png"
      },
      {
        id: "aire-pietonne",
        name: "Aire piétonne",
        description: "Panneau carré bleu : entrée dans une aire piétonne.",
        image: "/images/classification/aire-pieton.png"
      },
      {
        id: "douane",
        name: "Douane",
        description: "Panneau d'indication : poste de douane.",
        image: "/images/classification/douane.png"
      },
      {
        id: "chaussee-glissante",
        name: "Chaussée glissante",
        description: "Triangle rouge avec dérapage : annonce une chaussée glissante.",
        image: "/images/classification/chausse-glissante.png"
      },
      {
        id: "chaussee-glissante-temporaire",
        name: "Chaussée glissante temporaire",
        description: "Triangle jaune/orange : chaussée glissante temporaire (chantier).",
        image: "/images/classification/gliss-tempo.png"
      },
      {
        id: "station-taxis",
        name: "Station de taxis",
        description: "Rectangle bleu avec inscription TAXIS : emplacement réservé aux taxis.",
        image: "/images/classification/station-taxis.png"
      },
      {
        id: "passage-a-niveau-lumineux",
        name: "Passage à niveau lumineux",
        description: "Panneau indiquant un passage à niveau avec signal lumineux.",
        image: "/images/classification/cheminferlumineux.png"
      },
      {
        id: "deviation",
        name: "Déviation",
        description: "Panneau jaune/orange : indication d'une déviation.",
        image: "/images/classification/deviation.png"
      }
    ]
  },
    {
    id: 20,
    title: "Série 20",
    items: [
      {
        id: "vitesse-conseillee-70",
        name: "Vitesse conseillée 70 km/h",
        description: "Panneau carré bleu avec 70 : vitesse conseillée à 70 km/h.",
        image: "/images/classification/conseille-70.WEBP"
      },
      {
        id: "premier-virage-gauche",
        name: "Premier virage à gauche",
        description: "Triangle rouge avec virage : annonce un premier virage à gauche.",
        image: "/images/classification/virage-gauche.png"
      },
      {
        id: "route-7",
        name: "Route numéro 7",
        description: "Panneau d'indication : route numéro 7.",
        image: "/images/classification/route7.png"
      },
      {
        id: "travaux",
        name: "Travaux",
        description: "Triangle rouge avec homme creusant : annonce des travaux sur la chaussée.",
        image: "/images/classification/travaux.png"
      },
      {
        id: "intersection-priorite-droite",
        name: "Intersection, priorité à droite",
        description: "Triangle rouge avec croix de Saint-André : annonce une intersection où la priorité est à droite.",
        image: "/images/classification/inter-prio-droite.png"
      },
      {
        id: "tramway",
        name: "Tramway",
        description: "Triangle rouge avec tramway : annonce un passage de tramway.",
        image: "/images/classification/tram.WEBP"
      },
      {
        id: "borne-detresse",
        name: "Borne d'appel d'urgence",
        description: "Panneau indiquant une borne d'appel d'urgence sur le côté droit.",
        image: "/images/classification/detresse-droite.png"
      },
      {
        id: "vitesse-maximale-70",
        name: "Vitesse maximale 70 km/h",
        description: "Cercle blanc à bordure rouge avec 70 : limitation de vitesse à 70 km/h.",
        image: "/images/classification/vitesse-max-70.png"
      },
      {
        id: "demi-tour-interdit",
        name: "Demi-tour interdit",
        description: "Cercle rouge avec flèche en U barrée : interdiction de faire demi-tour.",
        image: "/images/classification/interdit-demi-tour.png"
      },
      {
        id: "passage-pietons",
        name: "Passage pour piétons",
        description: "Triangle rouge avec piéton : annonce un passage pour piétons à proximité.",
        image: "/images/classification/passage-pieton.png"
      },
      {
        id: "contournement-droite",
        name: "Contournement par la droite",
        description: "Panneau blanc avec flèche courbe : indique un contournement par la droite.",
        image: "/images/classification/contournement-droite.png"
      },
      {
        id: "fin-interdiction-avertisseur-sonore",
        name: "Fin d'interdiction d'usage de l'avertisseur sonore",
        description: "Cercle blanc à bordure noire : fin de l'interdiction d'utiliser l'avertisseur sonore.",
        image: "/images/classification/fin-interdit-usage-sonore.png"
      },
      {
        id: "sens-interdit",
        name: "Sens interdit",
        description: "Cercle rouge avec barre horizontale blanche : interdiction d'accès, sens interdit.",
        image: "/images/classification/sens-interdit.png"
      },
      {
        id: "sens-inverse",
        name: "Sens inverse",
        description: "Panneau annonçant une circulation en sens inverse.",
        image: "/images/classification/sensinverse.png"
      },
      {
        id: "fin-route-prioritaire",
        name: "Fin de route prioritaire",
        description: "Losange blanc à bordure noire : fin de la route prioritaire.",
        image: "/images/classification/fin-prio.png"
      },
      {
        id: "interdiction-depasser-camions-10m",
        name: "Interdiction de dépasser pour véhicules de plus de 10 mètres",
        description: "Panneau indiquant l'interdiction de dépasser pour les véhicules de plus de 10 mètres.",
        image: "/images/classification/camions-10m.png"
      }
    ]
  },
]
