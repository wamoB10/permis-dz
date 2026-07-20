import { Sign } from "@/types"

export const signs: Sign[] = [
  // ========== DANGERS (25) ==========
  {
    id: "danger-1",
    category: "danger",
    name: "Danger particulier",
    description: "Danger non précisé, soyez attentif.",
    longDescription: "Ce panneau signale un danger dont la nature n'est pas indiquée. Il impose de ralentir, d'observer attentivement la route et d'être prêt à s'adapter (freinage, évitement).",
    image: "/images/classification/anim-domes.png"
  },
  {
    id: "danger-2",
    category: "danger",
    name: "Danger particulier temporaire",
    description: "Danger temporaire non précisé, ralentissez.",
    longDescription: "Danger provisoire (chantier, accident, chaussée déformée). Adaptez votre allure et soyez prêt à vous arrêter. Le panneau est généralement jaune.",
    image: "/images/classification/danger-tempo.png"
  },
  {
    id: "danger-3",
    category: "danger",
    name: "Passage d'animaux domestiques",
    description: "Traversée possible d'animaux, soyez prudent.",
    longDescription: "Risque de rencontre avec du bétail, des moutons, chèvres... Modérez votre vitesse, ne klaxonnez pas pour ne pas effrayer les animaux.",
    image: "/images/classification/anim-domes.png"
  },
  {
    id: "danger-4",
    category: "danger",
    name: "Circulation dans les deux sens",
    description: "Vous allez croiser des véhicules venant en face.",
    longDescription: "Annonce la fin d'une voie à sens unique et le retour à une circulation bidirectionnelle. Restez à droite et facilitez le croisement.",
    image: "/images/classification/double-sens-circulation.png"
  },
  {
    id: "danger-5",
    category: "danger",
    name: "Virage à droite",
    description: "Virage dangereux à droite, ralentissez.",
    longDescription: "Abordez ce virage en réduisant votre vitesse avant d'y entrer, maintenez une trajectoire stable et ne dépasse pas.",
    image: "/images/classification/triangle-blanc.png"
  },
  {
    id: "danger-6",
    category: "danger",
    name: "Virage à gauche",
    description: "Virage dangereux à gauche, ralentissez.",
    longDescription: "Comme pour le virage à droite, réduisez votre allure, serrez bien votre droite et soyez attentif aux véhicules en face.",
    image: "/images/classification/virage-gauche.png"
  },
  {
    id: "danger-7",
    category: "danger",
    name: "Chaussée rétrécie par la gauche",
    description: "La chaussée se rétrécit par la gauche.",
    longDescription: "La voie devient plus étroite du côté gauche. Réduisez votre vitesse et facilitez le passage des autres usagers.",
    image: "/images/classification/retreci-gauche.png"
  },
  {
    id: "danger-8",
    category: "danger",
    name: "Chaussée rétrécie par la droite",
    description: "La chaussée se rétrécit par la droite.",
    longDescription: "Le rétrécissement se fait sur la droite. Adaptez votre vitesse et tenez bien votre gauche.",
    image: "/images/classification/retreci-droite.png"
  },
  {
    id: "danger-9",
    category: "danger",
    name: "Chaussée rétrécie",
    description: "La chaussée se rétrécit des deux côtés.",
    longDescription: "La chaussée se rétrécit symétriquement. La prudence s'impose, surtout en croisement.",
    image: "/images/classification/chausse-retrecissement.png"
  },
{
  id: "danger-10",
  category: "danger",
  name: "Travaux temporaires",
  description: "Chantier temporaire sur la route, ralentissez.",
  longDescription: "Ce panneau signale la présence de travaux en cours. Réduisez votre vitesse, soyez attentif aux ouvriers, aux engins de chantier et à la signalisation temporaire. Respectez les déviations et les restrictions de vitesse.",
  image: "/images/classification/travaux-tempo.png"
},
  {
    id: "danger-11",
    category: "danger",
    name: "Chaussée rétrécie (temporaire)",
    description: "Rétrécissement temporaire des deux côtés.",
    longDescription: "Les deux côtés de la chaussée sont réduits provisoirement. Ralentissez et soyez prêt à céder le passage.",
    image: "/images/classification/retreci-chausse.png"
  },
{
  id: "danger-12",
  category: "danger",
  name: "Embouteillage temporaire",
  description: "Risque d'embouteillage ou de ralentissement à venir.",
  longDescription: "Ce panneau signale une zone où la circulation peut être fortement ralentie ou arrêtée. Restez patient, gardez vos distances et évitez les changements de file intempestifs.",
  image: "/images/classification/triangle-jaune.png"
},
  {
    id: "danger-13",
    category: "danger",
    name: "Passage pour piétons",
    description: "Passage piéton à proximité, soyez vigilant.",
    longDescription: "Annonce un passage protégé pour les piétons. Ralentissez et cédez le passage aux piétons déjà engagés ou sur le point de traverser.",
    image: "/images/classification/passage-pieton.png"
  },
  {
    id: "danger-14",
    category: "danger",
    name: "Passage pour enfants",
    description: "Des enfants peuvent traverser, ralentissez.",
    longDescription: "Signale la proximité d'une école, d'un parc ou d'une aire de jeu. La prudence est maximale : les enfants peuvent surgir inopinément.",
    image: "/images/classification/enfants.png"
  },
  {
    id: "danger-15",
    category: "danger",
    name: "Descente dangereuse",
    description: "Pente raide, contrôlez votre vitesse.",
    longDescription: "Annonce une forte déclivité. Utilisez le frein moteur, rétrogradez si nécessaire, et ne laissez pas le véhicule prendre de la vitesse.",
    image: "/images/classification/descente.png"
  },
  {
    id: "danger-16",
    category: "danger",
    name: "Débouché sur un quai ou une berge",
    description: "Risque de chute dans l'eau, attention.",
    longDescription: "La route aboutit à un cours d'eau, un port ou un quai sans protection. Arrêtez-vous avant l'extrémité et manœuvrez prudemment.",
    image: "/images/classification/quai.png"
  },
  {
    id: "danger-17",
    category: "danger",
    name: "Vent latéral",
    description: "Risque de rafales de vent, tenez votre volant.",
    longDescription: "Zone exposée au vent violent. Les déportations sont possibles. Réduisez votre vitesse, tenez fermement le volant et soyez attentif aux véhicules légers.",
    image: "/images/classification/vent.png"
  },
  {
    id: "danger-18",
    category: "danger",
    name: "Pont mobile",
    description: "Pont mobile pouvant se lever, arrêt possible.",
    longDescription: "Approchez-vous avec prudence. Respectez la signalisation lumineuse et les barrières si le pont est en cours de manœuvre.",
    image: "/images/classification/pont-mobile.png"
  },
  {
    id: "danger-19",
    category: "danger",
    name: "Chaussée glissante",
    description: "Revêtement glissant, adaptez votre allure.",
    longDescription: "Risque de perte d'adhérence (pluie, verglas, huile). Évitez les freinages brusques et les accélérations soudaines.",
    image: "/images/classification/chausse-glissante.png"
  },
  {
    id: "danger-20",
    category: "danger",
    name: "Chaussée glissante temporaire",
    description: "Glissance temporaire (pluie, verglas...).",
    longDescription: "Mêmes consignes que pour la chaussée glissante permanente, mais ici le phénomène est passager. Redoublez de vigilance.",
    image: "/images/classification/gliss-tempo.png"
  },
  {
    id: "danger-21",
    category: "danger",
    name: "Accident temporaire",
    description: "Accident signalé, approchez prudemment.",
    longDescription: "Un accident s'est produit en amont. Ralentissez, ne vous arrêtez pas pour regarder et suivez les instructions des agents ou des panneaux de déviation.",
    image: "/images/classification/accident.png"
  },
  {
    id: "danger-22",
    category: "danger",
    name: "Traversée d'une aire de danger aérien",
    description: "Avions à basse altitude, bruit soudain possible.",
    longDescription: "Vous êtes à proximité d'un aérodrome. Les avions passent bas. Ne vous laissez pas surprendre par le bruit et restez maître de votre véhicule.",
    image: "/images/classification/aerienne.png"
  },
  {
    id: "danger-23",
    category: "danger",
    name: "Danger cavaliers",
    description: "Cavaliers ou chevaux, ralentissez.",
    longDescription: "Risque de rencontrer des cavaliers. Ralentissez, ne klaxonnez pas et doublez très lentement en laissant une distance de sécurité suffisante.",
    image: "/images/classification/cavaliers.png"
  },
  {
    id: "danger-24",
    category: "danger",
    name: "Succession de virages, premier à droite",
    description: "Plusieurs virages rapprochés, le premier tourne à droite.",
    longDescription: "Annonce une série de virages. Abordez le premier à droite en ralentissant, gardez une vitesse modérée jusqu'à la fin de la succession.",
    image: "/images/classification/premier-virage-droite.png"
  },
  {
    id: "danger-25",
    category: "danger",
    name: "Succession de virages, premier à gauche",
    description: "Plusieurs virages rapprochés, le premier tourne à gauche.",
    longDescription: "Même situation, mais le premier virage est à gauche. Adaptez votre allure avant la série de courbes.",
    image: "/images/classification/premier-virage-gauche.png"
  },
  {
  id: "danger-26",
  category: "danger",
  name: "Balise de déviation par la droite (rétrécissement temporaire)",
  description: "Rétrécissement temporaire de la chaussée, balise de déviation par la droite.",
  longDescription: "Approchez avec prudence, ralentissez et préparez-vous à vous déporter légèrement vers la droite.",
  image: "/images/classification/retrec-tempo.png"
},

  // ========== INTERDICTIONS (24) ==========
  {
    id: "interdiction-1",
    category: "interdiction",
    name: "Circulation interdite dans les deux sens",
    description: "Aucun véhicule ne peut circuler dans les deux sens.",
    longDescription: "Ce panneau interdit la circulation à tous les véhicules, dans les deux sens de la voie. Il est souvent placé à l'entrée d'une zone piétonne ou d'une voie privée.",
    image: "/images/classification/rond-blanc-interdiction.png"
  },
  {
    id: "interdiction-2",
    category: "interdiction",
    name: "Sens interdit",
    description: "Accès interdit à tout véhicule depuis cette direction.",
    longDescription: "Vous ne pouvez pas vous engager dans la voie en venant de ce côté. Respectez impérativement cette interdiction, sous peine d'accident grave.",
    image: "/images/classification/sens-interdit.png"
  },
  {
    id: "interdiction-3",
    category: "interdiction",
    name: "Interdit de faire demi-tour",
    description: "Il est interdit de faire demi-tour à partir de ce point.",
    longDescription: "Cette manœuvre est dangereuse à cet endroit. Continuez tout droit jusqu'à un carrefour approprié.",
    image: "/images/classification/interdit-demi-tour.png"
  },
  {
    id: "interdiction-4",
    category: "interdiction",
    name: "Interdit de dépasser",
    description: "Dépassement interdit pour tous les véhicules.",
    longDescription: "Vous ne devez pas dépasser les véhicules qui vous précèdent, même si la ligne de marquage le permettrait. Attendez la fin de l'interdiction.",
    image: "/images/classification/interdit-depasser-voiture.png"
  },
  {
    id: "interdiction-5",
    category: "interdiction",
    name: "Interdit de dépasser aux poids lourds",
    description: "Interdiction de dépasser pour les poids lourds.",
    longDescription: "Les véhicules de plus de 3,5 t ou les ensembles de véhicules n'ont pas le droit de dépasser. Cette mesure vise à fluidifier le trafic et à éviter les situations dangereuses.",
    image: "/images/classification/interdit-depasser-pl.png"
  },
  {
    id: "interdiction-6",
    category: "interdiction",
    name: "Douane / Zoll",
    description: "Poste de douane, arrêt obligatoire.",
    longDescription: "Vous devez vous arrêter au poste de douane pour présenter vos documents et éventuellement votre chargement. L'arrêt est obligatoire.",
    image: "/images/classification/douane.png"
  },
  {
    id: "interdiction-7",
    category: "interdiction",
    name: "Halte gendarmerie",
    description: "Point de contrôle de gendarmerie, arrêt possible.",
    longDescription: "Les gendarmes peuvent effectuer des contrôles. Soyez prêt à vous arrêter et à présenter vos papiers si demandé.",
    image: "/images/classification/gendarmerie.png"
  },
  {
    id: "interdiction-8",
    category: "interdiction",
    name: "Police",
    description: "Poste de police, arrêt possible.",
    longDescription: "Identique à la halte gendarmerie, mais pour un poste de police. Arrêtez-vous si les forces de l'ordre vous le demandent.",
    image: "/images/classification/police.png"
  },
  {
    id: "interdiction-9",
    category: "interdiction",
    name: "Accès interdit aux véhicules de transport de marchandises",
    description: "Interdit aux camions de marchandises.",
    longDescription: "Les camions, camionnettes et tout véhicule transportant des marchandises ne peuvent pas emprunter cette voie.",
    image: "/images/classification/interdit-transport-marchandise.png"
  },
  {
    id: "interdiction-10",
    category: "interdiction",
    name: "Interdit aux cyclistes",
    description: "Accès interdit aux vélos.",
    longDescription: "Les bicyclettes et cycles en tout genre ne sont pas autorisés sur cette voie pour des raisons de sécurité.",
    image: "/images/classification/acces-interdit-cyclistes.png"
  },
  {
    id: "interdiction-11",
    category: "interdiction",
    name: "Interdit aux véhicules de plus de 5,5 tonnes",
    description: "Interdit aux véhicules dont le poids total autorisé en charge dépasse 5,5 t.",
    longDescription: "Les poids lourds et les véhicules lourds ne peuvent pas circuler ici, afin de préserver la chaussée ou pour des raisons de sécurité.",
    image: "/images/classification/5t.png"
  },
  {
    id: "interdiction-12",
    category: "interdiction",
    name: "Interdit aux véhicules transportant des produits inflammables",
    description: "Accès interdit aux véhicules chargés de matières inflammables.",
    longDescription: "Pour des raisons de sécurité, les citernes et véhicules transportant des matières dangereuses (essence, gaz...) ne peuvent pas passer.",
    image: "/images/classification/explosives.png"
  },
  {
    id: "interdiction-13",
    category: "interdiction",
    name: "Interdit de tourner à droite",
    description: "Il est interdit de tourner à droite à l'intersection.",
    longDescription: "À la prochaine intersection, vous ne devez pas effectuer de virage à droite. Cherchez un autre itinéraire.",
    image: "/images/classification/interdiction-tourner-droite.png"
  },
  {
    id: "interdiction-14",
    category: "interdiction",
    name: "Interdit aux bus",
    description: "Accès interdit aux autobus.",
    longDescription: "Les bus de transport en commun ne circulent pas sur cette voie. Réservé aux autres véhicules.",
    image: "/images/classification/interdit-bus.png"
  },
  {
    id: "interdiction-15",
    category: "interdiction",
    name: "Interdit aux véhicules de plus de 10 mètres",
    description: "Interdit aux véhicules dépassant 10 m de longueur.",
    longDescription: "Les véhicules très longs (camions articulés, bus longs) ne peuvent pas emprunter cette route à cause de virages serrés ou de gabarits limités.",
    image: "/images/classification/interdit-camion-10m.webp"
  },
  {
    id: "interdiction-16",
    category: "interdiction",
    name: "Signaux sonores interdits",
    description: "Usage du klaxon interdit.",
    longDescription: "Il est interdit d'utiliser l'avertisseur sonore dans cette zone (hôpital, école, zone résidentielle).",
    image: "/images/classification/interdit-klaxon.webp"
  },
  {
    id: "interdiction-17",
    category: "interdiction",
    name: "Interdit aux piétons",
    description: "Accès interdit aux piétons.",
    longDescription: "Les piétons ne doivent pas circuler sur cette voie (autoroute, tunnel). Utilisez les passages prévus.",
    image: "/images/classification/interdit-pieton.png"
  },
  {
    id: "interdiction-18",
    category: "interdiction",
    name: "Interdit de rouler à moins de 70 m d'intervalle",
    description: "Distance minimale de 70 mètres imposée entre les véhicules.",
    longDescription: "Vous devez maintenir une distance d'au moins 70 mètres avec le véhicule qui vous précède. Cette règle s'applique souvent dans les tunnels ou sur les ponts.",
    image: "/images/classification/intervalle.png"
  },
  {
    id: "interdiction-19",
    category: "interdiction",
    name: "Interdit de dépasser 50 km/h",
    description: "Vitesse limitée à 50 km/h.",
    longDescription: "Ne dépassez pas la vitesse de 50 km/h. Cette limitation peut être temporaire ou permanente.",
    image: "/images/classification/max-50.png"
  },
  {
    id: "interdiction-20",
    category: "interdiction",
    name: "Interdit de dépasser 90 km/h",
    description: "Vitesse limitée à 90 km/h.",
    longDescription: "Sur certaines voies rapides, la vitesse est plafonnée à 90 km/h pour des raisons de sécurité ou de fluidité.",
    image: "/images/classification/max-90.png"
  },
  {
    id: "interdiction-21",
    category: "interdiction",
    name: "Interdit aux véhicules transportant des objets polluant l'eau",
    description: "Accès interdit aux véhicules chargés de substances dangereuses pour l'eau.",
    longDescription: "Pour protéger les ressources en eau, les véhicules transportant des produits chimiques ou polluants ne peuvent pas circuler ici.",
    image: "/images/classification/polluer.png"
  },
  {
    id: "interdiction-22",
    category: "interdiction",
    name: "Cédez le passage à la circulation venant du sens inverse",
    description: "Vous devez laisser passer les véhicules venant en face.",
    longDescription: "Dans une chaussée rétrécie, la priorité est donnée aux véhicules qui arrivent en face. Arrêtez-vous si nécessaire pour les laisser passer.",
    image: "/images/classification/sensinverse.png"
  },
  {
    id: "interdiction-23",
    category: "interdiction",
    name: "Interdit de dépasser 30 km/h",
    description: "Vitesse limitée à 30 km/h.",
    longDescription: "Zone 30 : la vitesse est abaissée à 30 km/h pour la sécurité des piétons et des cyclistes.",
    image: "/images/classification/vitesse-max-30.png"
  },
  {
    id: "interdiction-24",
    category: "interdiction",
    name: "Interdit de dépasser 70 km/h",
    description: "Vitesse limitée à 70 km/h.",
    longDescription: "Limitation à 70 km/h, souvent rencontrée sur les routes à caractère prioritaire ou en agglomération étendue.",
    image: "/images/classification/vitesse-max-70.png"
  },

  // ========== OBLIGATIONS (15) ==========
  {
    id: "obligation-1",
    category: "obligation",
    name: "Direction obligatoire à droite",
    description: "Vous devez tourner à droite avant le panneau.",
    longDescription: "À l'intersection qui suit, vous êtes obligé de tourner à droite. Serrez à droite et actionnez votre clignotant.",
    image: "/images/classification/obligatoire-gauche.png"
  },
    {
    id: "obligation-2.1",
    category: "obligation",
    name: "Direction obligatoire à gauche",
    description: "Vous devez tourner à gauche avant le panneau.",
    longDescription: "À l'intersection qui suit, vous êtes obligé de tourner à gauche. Serrez à droite et actionnez votre clignotant.",
    image: "/images/classification/obligatoire-droite.png"
  },
  {
    id: "obligation-2.2",
    category: "obligation",
    name: "Direction obligatoire à gauche",
    description: "Direction obligatoire à la prochaine intersection.",
    longDescription: "Direction obligatoire à la prochaine intersection ( à droite ou à gauche ).",
    image: "/images/classification/bidirection.png"
  },
  {
    id: "obligation-3",
    category: "obligation",
    name: "Direction obligatoire tout droit",
    description: "Vous devez continuer tout droit.",
    longDescription: "Aucun virage n'est autorisé, vous devez poursuivre votre route en ligne droite.",
    image: "/images/classification/toutdroit.png"
  },
  {
    id: "obligation-4",
    category: "obligation",
    name: "Contournement obligatoire par la droite",
    description: "Vous devez contourner l'obstacle par la droite.",
    longDescription: "Un obstacle (terre-plein, travaux) vous oblige à passer par la droite. Respectez le balisage.",
    image: "/images/classification/contournement-droite.png"
  },
  {
    id: "obligation-5",
    category: "obligation",
    name: "Contournement obligatoire par la gauche",
    description: "Vous devez contourner l'obstacle par la gauche.",
    longDescription: "Même situation, mais le contournement se fait par la gauche.",
    image: "/images/classification/contournement-gauche.png"
  },
  {
    id: "obligation-6",
    category: "obligation",
    name: "Usage des chaînes à neige obligatoire",
    description: "Équipez votre véhicule de chaînes à neige pour continuer.",
    longDescription: "Au-delà de ce panneau, la route est enneigée ou verglacée. Les chaînes sont indispensables pour assurer l'adhérence.",
    image: "/images/classification/chaine-neige.png"
  },
  {
    id: "obligation-7",
    category: "obligation",
    name: "Vitesse minimale obligatoire",
    description: "Vous devez rouler au moins à la vitesse indiquée.",
    longDescription: "Sur certaines voies rapides, une vitesse minimale est imposée pour ne pas gêner la circulation. Ne descendez pas en dessous.",
    image: "/images/classification/vitesse-minimal.png"
  },
  {
    id: "obligation-8",
    category: "obligation",
    name: "Fin de vitesse minimale obligatoire",
    description: "La vitesse minimale n'est plus imposée.",
    longDescription: "Vous n'êtes plus contraint par une vitesse plancher. Adaptez votre allure aux conditions de circulation.",
    image: "/images/classification/fin-max-30.png"
  },
  {
    id: "obligation-9",
    category: "obligation",
    name: "Chemin obligatoire pour piétons",
    description: "Voie réservée aux piétons.",
    longDescription: "Cette voie est exclusivement réservée aux piétons. Les cyclistes et les véhicules à moteur n'ont pas le droit de l'emprunter.",
    image: "/images/classification/obligatoire-pieton.png"
  },
  {
    id: "obligation-10",
    category: "obligation",
    name: "Chemin obligatoire pour cyclistes",
    description: "Piste réservée aux cyclistes.",
    longDescription: "Les cyclistes doivent emprunter cette piste. Les autres usagers ne doivent ni circuler ni stationner dessus.",
    image: "/images/classification/piste-cyclable-obligatoire.png"
  },
  {
    id: "obligation-11",
    category: "obligation",
    name: "Chemin obligatoire pour bus",
    description: "Voie réservée aux bus.",
    longDescription: "Seuls les bus de transport en commun sont autorisés. Les taxis et autres véhicules ne peuvent pas y circuler.",
    image: "/images/classification/oblig-bus.png"
  },
  {
    id: "obligation-12",
    category: "obligation",
    name: "Fin de chemin obligatoire pour piétons",
    description: "La voie réservée aux piétons prend fin.",
    longDescription: "Au-delà de ce panneau, le cheminement spécifique pour piétons se termine. Restez vigilants en tant que conducteur.",
    image: "/images/classification/fin-obligatoire-pieton.png"
  },
  {
    id: "obligation-13",
    category: "obligation",
    name: "Fin de piste obligatoire pour cyclistes",
    description: "La piste cyclable obligatoire prend fin.",
    longDescription: "Les cyclistes doivent réintégrer la chaussée normale. Les conducteurs doivent partager la route avec prudence.",
    image: "/images/classification/fin-voie-reservee.png"
  },
  {
    id: "obligation-14",
    category: "obligation",
    name: "Fin de bande réservée aux bus",
    description: "La voie réservée aux bus prend fin.",
    longDescription: "La voie spéciale pour les bus s'arrête. Les autres véhicules peuvent à nouveau circuler normalement.",
    image: "/images/classification/fin-obligation.png"
  },

  // ========== INDICATIONS (27) ==========
  {
    id: "indication-1",
    category: "indication",
    name: "Station essence",
    description: "Poste de ravitaillement en carburant à proximité.",
    longDescription: "Indique la présence d'une station-service où vous pourrez faire le plein de carburant, vérifier la pression des pneus, etc.",
    image: "/images/classification/gazoil.png"
  },
  {
    id: "indication-2",
    category: "indication",
    name: "Restaurant",
    description: "Restaurant ou point de restauration.",
    longDescription: "Signale un lieu où vous pouvez vous restaurer. Parfois accompagné d'une indication de distance.",
    image: "/images/classification/restaurent.png"
  },
  {
    id: "indication-3",
    category: "indication",
    name: "Issue de secours sur la droite",
    description: "Sortie de secours accessible par la droite.",
    longDescription: "En cas d'urgence (incendie, accident), une sortie de secours est disponible sur la droite. Repérez-la à l'avance.",
    image: "/images/classification/detresse-droite.png"
  },
  {
    id: "indication-4",
    category: "indication",
    name: "Chemin sans issue",
    description: "Voie en impasse, aucune issue.",
    longDescription: "La route se termine en cul-de-sac. Ne vous engagez que si vous avez une destination précise dans cette voie.",
    image: "/images/classification/impasse.png"
  },
  {
    id: "indication-5",
    category: "indication",
    name: "Station de taxis",
    description: "Emplacement réservé aux taxis.",
    longDescription: "Les taxis attendent les clients à cet endroit. Le stationnement peut y être interdit pour les autres véhicules.",
    image: "/images/classification/station-taxis.png"
  },
  {
    id: "indication-6",
    category: "indication",
    name: "Réservé aux véhicules dépassant 10 m",
    description: "Accès limité aux véhicules de plus de 10 mètres.",
    longDescription: "Cette voie est spécialement aménagée pour les véhicules longs (camions, bus). Les véhicules plus courts doivent emprunter une autre voie.",
    image: "/images/classification/camions-10m.png"
  },
  {
    id: "indication-7",
    category: "indication",
    name: "Ne pas dépasser la vitesse indiquée sur les deux voies",
    description: "Limite de vitesse sur toutes les voies.",
    longDescription: "La vitesse maximale autorisée est la même pour toutes les voies de circulation. Respectez-la, quelle que soit votre file.",
    image: "/images/classification/90-70.webp"
  },
  {
    id: "indication-8",
    category: "indication",
    name: "Parking",
    description: "Aire de stationnement autorisée.",
    longDescription: "Vous pouvez garer votre véhicule à cet emplacement. Vérifiez les éventuelles restrictions (durée, payant, disque).",
    image: "/images/classification/zone-stationnement.png"
  },
  {
    id: "indication-9",
    category: "indication",
    name: "Parking caravane",
    description: "Stationnement réservé aux caravanes.",
    longDescription: "Emplacement spécifique pour les caravanes et camping-cars. Les voitures seules ne peuvent pas s'y arrêter.",
    image: "/images/classification/parking-caravane.png"
  },
  {
    id: "indication-10",
    category: "indication",
    name: "Hôpital",
    description: "Hôpital, urgences médicales.",
    longDescription: "Indique la direction ou la proximité d'un centre hospitalier. En cas d'urgence, suivez ce panneau.",
    image: "/images/classification/hopital.png"
  },
  {
    id: "indication-11",
    category: "indication",
    name: "Chemin piétons",
    description: "Voie ou chemin réservé aux piétons.",
    longDescription: "Cheminement conseillé ou obligatoire pour les piétons. Les véhicules ne doivent pas y circuler.",
    image: "/images/classification/aire-pieton.png"
  },
  {
    id: "indication-12",
    category: "indication",
    name: "Route pour automobiles",
    description: "Début d'une route réservée aux automobiles.",
    longDescription: "Seuls les véhicules à moteur capables d'atteindre une vitesse minimale sont autorisés. Piétons, cyclistes et animaux interdits.",
    image: "/images/classification/carre-bleu.png"
  },
  {
    id: "indication-13",
    category: "indication",
    name: "Fin de route pour automobiles",
    description: "Fin de la section réservée aux automobiles.",
    longDescription: "La voie rapide se termine. Les règles de circulation normales reprennent, les piétons et cyclistes peuvent à nouveau circuler.",
    image: "/images/classification/fin-route-automobiles.png"
  },
  {
    id: "indication-14",
    category: "indication",
    name: "Informations touristes",
    description: "Point d'information touristique.",
    longDescription: "Indique un bureau d'information où vous pourrez obtenir des renseignements sur les sites touristiques, l'hébergement, etc.",
    image: "/images/classification/touristique.png"
  },
  {
    id: "indication-15",
    category: "indication",
    name: "Mobilité réduite",
    description: "Aménagement pour personnes à mobilité réduite.",
    longDescription: "Ce lieu est accessible aux personnes handicapées (parking, sanitaires, rampe d'accès).",
    image: "/images/classification/mobilite-reduite.png"
  },
  {
    id: "indication-16",
    category: "indication",
    name: "Feu de forêt",
    description: "Risque d'incendie, prudence en forêt.",
    longDescription: "Soyez particulièrement vigilant, ne jetez pas de cigarette et évitez tout comportement à risque d'incendie.",
    image: "/images/classification/feu-foret.webp"
  },
  {
    id: "indication-17",
    category: "indication",
    name: "Circulation à sens unique",
    description: "Voie en sens unique.",
    longDescription: "Vous ne pouvez circuler que dans le sens indiqué par la flèche. Ne vous engagez pas en sens inverse.",
    image: "/images/classification/circulation-sensunique.png"
  },
  {
    id: "indication-18",
    category: "indication",
    name: "Vitesse conseillée 70",
    description: "Vitesse recommandée à 70 km/h.",
    longDescription: "Pour votre sécurité, il est conseillé de ne pas dépasser 70 km/h, même si la vitesse maximale autorisée est plus élevée.",
    image: "/images/classification/conseille-70.webp"
  },
  {
    id: "indication-19",
    category: "indication",
    name: "Station tramway",
    description: "Arrêt ou station de tramway.",
    longDescription: "Indique la présence d'un arrêt de tramway. Soyez attentif aux voyageurs qui traversent.",
    image: "/images/classification/tram.webp"
  },
  {
    id: "indication-20",
    category: "indication",
    name: "Parking vélo",
    description: "Stationnement pour vélos.",
    longDescription: "Emplacement réservé au stationnement des bicyclettes. Les cyclistes peuvent y attacher leur vélo en sécurité.",
    image: "/images/classification/parking-velo.png"
  },
  {
    id: "indication-21",
    category: "indication",
    name: "Emplacement d'un ralentisseur",
    description: "Ralentisseur de vitesse sur la chaussée.",
    longDescription: "Annonce un dos d'âne ou un ralentisseur. Ralentissez pour ne pas endommager votre véhicule.",
    image: "/images/classification/indication-dodane.png"
  },
  {
    id: "indication-22",
    category: "indication",
    name: "Entrée d'autoroute",
    description: "Début de l'autoroute.",
    longDescription: "Vous entrez sur une autoroute. Respectez les règles spécifiques : vitesse minimale, interdiction de s'arrêter, etc.",
    image: "/images/classification/Autoroute.png"
  },
  {
    id: "indication-23",
    category: "indication",
    name: "Sortie d'autoroute",
    description: "Prochaine sortie d'autoroute.",
    longDescription: "Préparez-vous à quitter l'autoroute. Ralentissez progressivement et serrez à droite.",
    image: "/images/classification/fin-autoroute.png"
  },
  {
    id: "indication-24",
    category: "indication",
    name: "Arrêt de bus",
    description: "Arrêt de bus.",
    longDescription: "Signale un arrêt de bus. Soyez vigilant : des piétons peuvent traverser devant ou derrière le bus.",
    image: "/images/classification/bus.png"
  },
  {
    id: "indication-25",
    category: "indication",
    name: "Balise de virage très prononcé à droite",
    description: "Virage dangereux à droite, balise de signalisation.",
    longDescription: "Cette balise renforce la visibilité du virage. Ralentissez et serrez bien votre droite.",
    image: "/images/classification/balise-virage.webp"
  },
  {
    id: "indication-26",
    category: "indication",
    name: "Cône de chantier",
    description: "Présence de chantier, ralentissez.",
    longDescription: "Objet de signalisation temporaire indiquant une zone de travaux. Réduisez votre vitesse et suivez les déviations.",
    image: "/images/classification/plot-chantier.png"
  },
  {
    id: "indication-27",
    category: "indication",
    name: "Barrage de début de travaux",
    description: "Entrée de zone de travaux, circulation réglementée.",
    longDescription: "Vous entrez dans une zone de chantier. Respectez la signalisation, la vitesse réduite et les consignes des personnels.",
    image: "/images/classification/travaux.png"
  },
    {
  id: "indication-28",
  category: "indication",
  name: "Route forestière",
  description: "Panneau indiquant une route forestière (F7).",
  longDescription: "Route réservée à la circulation forestière. Véhicules légers autorisés mais prudence, risque de croisement avec des engins forestiers.",
  image: "/images/classification/foret7.png"
},
  // ========== INTERSECTIONS (9) ==========
  {
    id: "intersection-1",
    category: "intersection",
    name: "Cédez le passage",
    description: "Cédez le passage aux véhicules de la voie prioritaire.",
    longDescription: "Vous devez ralentir et ne vous engager dans l'intersection que si la voie est libre. Vous n'êtes pas obligé de vous arrêter si la voie est libre.",
    image: "/images/classification/cedezpassage.png"
  },
  {
    id: "intersection-2",
    category: "intersection",
    name: "Cédez le passage à 150 m",
    description: "Annonce un panneau 'Cédez le passage' dans 150 mètres.",
    longDescription: "Préparez-vous à céder le passage à la prochaine intersection. Ralentissez et anticipez.",
    image: "/images/classification/cedez150.png"
  },
  {
    id: "intersection-3",
    category: "intersection",
    name: "Stop à 150 m",
    description: "Annonce un panneau 'Stop' dans 150 mètres.",
    longDescription: "Vous devrez marquer un arrêt complet à la prochaine intersection. Commencez à ralentir.",
    image: "/images/classification/stop-150.png"
  },
  {
    id: "intersection-4",
    category: "intersection",
    name: "Stop",
    description: "Arrêt obligatoire avant la ligne d'effet du signal.",
    longDescription: "Vous devez vous arrêter complètement à la ligne blanche ou avant le panneau. Cédez le passage à tous les véhicules avant de vous engager.",
    image: "/images/classification/stop.png"
  },
  {
    id: "intersection-5",
    category: "intersection",
    name: "Intersection ponctuelle",
    description: "Intersection où la priorité à droite s'applique.",
    longDescription: "À cette intersection, la règle de la priorité à droite est en vigueur. Cédez le passage aux véhicules venant de droite.",
    image: "/images/classification/ponctuelle.png"
  },
  {
    id: "intersection-6",
    category: "intersection",
    name: "Intersection de deux routes secondaires",
    description: "Croisement de deux routes secondaires, priorité à droite.",
    longDescription: "Deux routes secondaires se croisent. Appliquez la priorité à droite si aucun panneau ne la régit autrement.",
    image: "/images/classification/inter-prio-droite.png"
  },
  {
    id: "intersection-7",
    category: "intersection",
    name: "Caractère de priorité",
    description: "Route prioritaire : vous avez la priorité aux intersections.",
    longDescription: "Vous êtes sur une voie prioritaire. Les véhicules venant de droite ou de gauche doivent vous céder le passage.",
    image: "/images/classification/losange-jaune.png"
  },
  {
    id: "intersection-8",
    category: "intersection",
    name: "Fin de caractère de priorité",
    description: "Fin de la route prioritaire.",
    longDescription: "Vous perdez la priorité aux intersections. Désormais, la priorité à droite s'applique de nouveau.",
    image: "/images/classification/fin-prio.png"
  },
  {
    id: "intersection-9",
    category: "intersection",
    name: "Sens giratoire",
    description: "Carrefour à sens giratoire, priorité aux véhicules dans l'anneau.",
    longDescription: "Avant de vous engager, cédez le passage aux véhicules qui circulent déjà dans le rond-point (venant de votre gauche).",
    image: "/images/classification/sens-giratoire.png"
  },
    // ========== CHEMIN DE FER (3) ==========
  {
    id: "pn-1",
    category: "chemin_de_fer",
    name: "Signalisation de position d'un passage à niveau à une voie sans barrière ni demi-barrière",
    description: "Passage à niveau sans barrière,à une voie.",
    longDescription: "Indique un passage à niveau sans barrière. Soyez extrêmement prudent, ralentissez et assurez-vous qu'aucun train n'arrive avant de traverser.",
    image: "/images/classification/cheminfernonlum.png"
  },
  {
    id: "pn-2",
    category: "chemin_de_fer",
    name: "Signalisation de position d'un passage à niveau à une voie sans barrière ni demi-barrière muni de signal automatique",
    description: "Passage à niveau sans barrière, avec signal automatique.",
    longDescription: "Comme le précédent, mais équipé d'un signal lumineux automatique. Si le feu rouge clignote, arrêt absolu.",
    image: "/images/classification/cheminferlumineux.png"
  },
  {
    id: "pn-3",
    category: "chemin_de_fer",
    name: "Balise de chemin de fer à 50,100,150 m",
    description: "Balise annonçant un passage à niveau à 50 mètres ( un trait ), à 100 mètres ( deux traits ), 150 mètres ( trois traits )",
    longDescription: "Cette balise (hachures rouges et blanches) indique que le passage à niveau est situé à 50 mètres.",
    image: "/images/classification/passage-cheminfer.png"
  },
  // ========== FIN D'INTERDICTION (9) ==========
  {
    id: "fin-1",
    category: "fin_interdiction",
    name: "Fin de limitation de vitesse à 30 km/h",
    description: "Fin de la zone limitée à 30 km/h.",
    longDescription: "Vous pouvez à nouveau rouler à la vitesse normale autorisée sur cette voie.",
    image: "/images/classification/Panneau-fin-de-limitation-30.webp"
  },
  {
    id: "fin-2",
    category: "fin_interdiction",
    name: "Fin de limitation de vitesse à 50 km/h",
    description: "Fin de la zone limitée à 50 km/h.",
    longDescription: "La vitesse maximale redevient celle de la route.",
    image: "/images/classification/fin-limit-50.png"
  },
  {
    id: "fin-3",
    category: "fin_interdiction",
    name: "Fin de limitation de vitesse à 70 km/h",
    description: "Fin de la zone limitée à 70 km/h.",
    longDescription: "La vitesse maximale redevient celle de la route.",
    image: "/images/classification/fin-limit-70.webp"
  },
  {
    id: "fin-4",
    category: "fin_interdiction",
    name: "Fin de limitation de vitesse à 90 km/h",
    description: "Fin de la zone limitée à 90 km/h.",
    longDescription: "La vitesse maximale redevient celle de la route.",
    image: "/images/classification/fin-limit-90.webp"
  },
  {
    id: "fin-5",
    category: "fin_interdiction",
    name: "Fin de limitation de vitesse à 110 km/h",
    description: "Fin de la zone limitée à 110 km/h.",
    longDescription: "La vitesse maximale redevient celle de la route (généralement autoroute).",
    image: "/images/classification/fin-de-limititation-vitesse-110.webp"
  },
  {
    id: "fin-6",
    category: "fin_interdiction",
    name: "Fin de toutes les interdictions précédentes",
    description: "Lève toutes les prescriptions antérieures.",
    longDescription: "Aucune des interdictions rencontrées précédemment (vitesse, dépassement, stationnement…) ne s’applique au-delà de ce panneau.",
    image: "/images/classification/fin-interdiction.png"
  },
  {
    id: "fin-7",
    category: "fin_interdiction",
    name: "Fin d'interdiction de dépasser",
    description: "Fin de l'interdiction de dépasser.",
    longDescription: "Vous pouvez à nouveau effectuer des dépassements si les conditions le permettent.",
    image: "/images/classification/fin-interdiction-passer.png"
  },
  {
    id: "fin-8",
    category: "fin_interdiction",
    name: "Fin d'interdiction de dépasser pour les poids lourds",
    description: "Fin de l'interdiction de dépasser pour les camions.",
    longDescription: "Les poids lourds peuvent à nouveau dépasser, en respectant les règles de sécurité.",
    image: "/images/classification/fin-interdiction-depasser-pl.png"
  },
  {
    id: "fin-9",
    category: "fin_interdiction",
    name: "Fin de l'interdiction de l'usage de l'avertisseur sonore",
    description: "Vous pouvez réutiliser le klaxon si nécessaire.",
    longDescription: "L'interdiction d'utiliser le klaxon est levée. Restez courtois et ne l'utilisez qu'en cas de danger.",
    image: "/images/classification/fin-interdit-usage-sonore.png"
  }
]