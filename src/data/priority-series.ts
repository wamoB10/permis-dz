export interface PrioritySeriesItem {
  id: string
  title: string
  description: string
  scheme: string // chemin de l'image dans /public
}

export interface PrioritySeries {
  id: number
  title: string
  items: PrioritySeriesItem[]
}

export const prioritySeriesList: PrioritySeries[] = [
  {
    id: 1,
    title: "Série 1",
    items: [
      { id: "1", title: "Sens giratoire et cédez le passage", description: "Cédez le passage aux véhicules déjà engagés dans le giratoire. Le véhicule rouge passe, puis le jaune.", scheme: "/images/priorities/prio1.png" },
      { id: "2", title: "Arrêt STOP", description: "Arrêt obligatoire avant la ligne. Les véhicules jaune et bleu passent, puis le rouge.", scheme: "/images/priorities/prio2.png" },
      { id: "3", title: "Intersection de routes secondaires", description: "Priorité à droite. Le véhicule bleu passe, puis le jaune, puis le rouge.", scheme: "/images/priorities/prio3.png" },
      { id: "4", title: "Feu rouge", description: "Le feu rouge impose l'arrêt. Priorité aux piétons et au véhicule jaune. Ensuite le véhicule bleu, puis le rouge au feu vert.", scheme: "/images/priorities/prio4.png" },
      { id: "5", title: "Route prioritaire", description: "Route prioritaire. Les véhicules bleu et rouge circulent simultanément, puis le jaune.", scheme: "/images/priorities/prio5.png" },
      { id: "6", title: "Carrefour avec feux", description: "Le véhicule rouge passe au feu vert. Lorsque le feu devient vert, les véhicules jaune et bleu passent ensemble.", scheme: "/images/priorities/prio6.png" },
      { id: "7", title: "Absence de signalisation (priorité à droite)", description: "En l'absence de panneaux, la priorité à droite s'applique. Le véhicule jaune passe, puis le rouge, puis le bleu.", scheme: "/images/priorities/prio7.png" },
      { id: "8", title: "Dépassement autorisé ou interdit", description: "Le véhicule vert peut dépasser, mais pas le jaune (ligne continue ou danger).", scheme: "/images/priorities/prio8.png" }
    ]
  },
  {
    id: 2,
    title: "Série 2",
    items: [
      { id: "1", title: "Sens giratoire", description: "Dans un giratoire, priorité aux véhicules déjà à l'intérieur. Le véhicule bleu passe, puis le blanc.", scheme: "/images/priorities/prio9.png" },
      { id: "2", title: "Sens giratoire et cédez le passage", description: "Cédez le passage aux véhicules déjà engagés dans le giratoire. Les véhicules vert et jaune passent ensemble, puis le rouge.", scheme: "/images/priorities/prio10.png" },
      { id: "3", title: "Route prioritaire", description: "Route prioritaire. Les véhicules bleu et jaune passent ensemble, puis le rouge.", scheme: "/images/priorities/prio11.png" },
      { id: "4", title: "Cédez le passage", description: "Cédez le passage. Les véhicules jaune et bleu passent, puis le rouge.", scheme: "/images/priorities/prio12.png" },
      { id: "5", title: "Fin de route prioritaire", description: "Fin de route prioritaire. La priorité à droite reprend. Le véhicule bleu passe, puis le jaune, puis le rouge.", scheme: "/images/priorities/prio14.png" },
      { id: "6", title: "Carrefour avec feux", description: "Le véhicule jaune passe au feu vert. Quand le feu passe au vert, les véhicules rouge et bleu passent ensemble.", scheme: "/images/priorities/prio15.png" },
      { id: "7", title: "Ligne continue – Interdiction de dépasser", description: "Ligne continue, le véhicule bleu ne peut pas dépasser.", scheme: "/images/priorities/prio16.png" },
    ]
  },
  {
    id: 3,
    title: "Série 3",
    items: [
      { id: "1", title: "Priorité à droite", description: "Priorité à droite classique. Le véhicule bleu passe, puis le rouge.", scheme: "/images/priorities/prio17.png" },
      { id: "2", title: "Route principale", description: "Route principale (priorité ponctuelle). Les véhicules bleu et rouge passent ensemble, puis le jaune.", scheme: "/images/priorities/prio18.png" },
      { id: "3", title: "Cédez le passage", description: "Cédez le passage. Le véhicule jaune passe, puis le bleu, puis le rouge.", scheme: "/images/priorities/prio19.png" },
      { id: "4", title: "Panneau manquant : Stop à 150 m", description: "Le panneau manquant est 'Stop à 150 m', annonçant un arrêt obligatoire.", scheme: "/images/priorities/prio20.png" },
      { id: "5", title: "Intersection de routes secondaires", description: "Priorité à droite. Le véhicule jaune passe, puis le rouge, puis le bleu.", scheme: "/images/priorities/prio21.png" },
      { id: "6", title: "Carrefour avec feux", description: "Le véhicule rouge passe au feu vert. Au vert suivant, les véhicules bleu et jaune passent ensemble.", scheme: "/images/priorities/prio22.png" },
      { id: "7", title: "Absence de signalisation (priorité à droite)", description: "En l'absence de panneaux, priorité à droite. Le véhicule rouge s'avance, libère la droite du jaune qui passe, puis le bleu, puis le rouge.", scheme: "/images/priorities/prio23.png" },
      { id: "8", title: "Arrêt STOP", description: "Arrêt STOP. Le véhicule bleu passe, puis le jaune, puis le rouge.", scheme: "/images/priorities/prio24.png" }
    ]
  },
  {
    id: 4,
    title: "Série 4",
    items: [
      { id: "1", title: "Route principale", description: "Route prioritaire. Les véhicules rouge et bleu passent ensemble, puis le jaune.", scheme: "/images/priorities/prio5.png" },
      { id: "2", title: "Feu tricolore et route prioritaire", description: "En présence d'un feu tricolore et d'une route prioritaire, les véhicules jaune et bleu passent ensemble, puis le rouge au feu vert.", scheme: "/images/priorities/prio26.png" },
      { id: "3", title: "Panneau manquant : Stop", description: "Le panneau manquant est un panneau 'Stop'.", scheme: "/images/priorities/prio27.png" },
      { id: "4", title: "Sens giratoire", description: "Dans un giratoire, priorité aux véhicules déjà à l'intérieur, Le véhicule rouge passe puis le jaune.", scheme: "/images/priorities/prio28.png" },
      { id: "5", title: "Absence de signalisation (priorité à droite)", description: "En l'absence de panneaux, priorité à droite. Le véhicule bleu passe, puis le jaune, puis le rouge.", scheme: "/images/priorities/prio29.png" },
      { id: "6", title: "Feu rouge et passage piétons", description: "Le feu rouge impose l'arrêt. Priorité aux piétons et au véhicule jaune, puis au bleu ( quand la voie se libère ), puis au rouge au feu vert.", scheme: "/images/priorities/prio30.png" },
      { id: "7", title: "Feu tricolore", description: "Le véhicule bleu passe, les véhicules jaune et vert attendent le feu vert.", scheme: "/images/priorities/prio31.png" },
      { id: "8", title: "Feu tricolore", description: "Les véhicules bleu et vert passent, les véhicules jaune et rouge attendent le feu vert.", scheme: "/images/priorities/prio32.png" }
    ]
  },
  {
    id: 5,
    title: "Série 5",
    items: [
      { id: "1", title: "Priorité à droite", description: "Priorité à droite. Le véhicule rouge passe, puis les deux bleu et rouge, puis le jaune.", scheme: "/images/priorities/prio33.png" },
      { id: "2", title: "Route principale", description: "Route principale. Les véhicules jaune et bleu passent ensemble, puis les deux rouges.", scheme: "/images/priorities/prio34.png" },
      { id: "3", title: "Panneau manquant : Cédez le passage à 150 m", description: "Le panneau manquant est 'Cédez le passage à 150 m'.", scheme: "/images/priorities/prio35.png" },
      { id: "4", title: "Feu tricolore", description: "Les véhicules rouge et jaune passent ensemble, les véhicules bleu et blanc attendent le feu vert.", scheme: "/images/priorities/prio36.png" },
      { id: "5", title: "Absence de signalisation (priorité à droite)", description: "Sans panneaux, priorité à droite. Le véhicule jaune passe, puis les deux bleus, puis le rouge.", scheme: "/images/priorities/prio37.png" },
      { id: "6", title: "Route principale et cédez le passage", description: "Route principale. Les véhicules rouge et bleu passent ensemble, puis le jaune.", scheme: "/images/priorities/prio38.png" },
      { id: "7", title: "Caractère prioritaire", description: "Route prioritaire. Les véhicules rouge et jaune passent ensemble, puis les bleu et blanc ensemble.", scheme: "/images/priorities/prio39.png" },
      { id: "8", title: "Arrêt STOP", description: "Arrêt STOP. Les véhicules rouge et jaune passent ensemble, puis le bleu.", scheme: "/images/priorities/prio40.png" }
    ]
  },
  {
    id: 6,
    title: "Série 6",
    items: [
      { id: "1", title: "Caractère prioritaire", description: "Route prioritaire. Les véhicules rouge et jaune passent ensemble, puis le bleu.", scheme: "/images/priorities/prio41.png" },
      { id: "2", title: "Feu tricolore et route prioritaire", description: "Les véhicules jaune et bleu passent ensemble, puis le rouge au feu vert.", scheme: "/images/priorities/prio42.png" },
      { id: "3", title: "Fin de priorité et cédez le passage", description: "Fin de route prioritaire suivie d'un cédez le passage. Le véhicule rouge passe en premier.", scheme: "/images/priorities/prio43.png" },
      { id: "4", title: "Panneau manquant : route prioritaire", description: "Le panneau manquant est celui de route prioritaire (priorité ponctuelle).", scheme: "/images/priorities/prio44.png" },
      { id: "5", title: "Feu orange", description: "Au feu orange, on applique les règles des panneaux. Le véhicule rouge passe, puis le bleu, puis le vert.", scheme: "/images/priorities/prio45.png" },
      { id: "6", title: "Sens giratoire et cédez le passage", description: "Cédez le passage aux véhicules déjà dans le giratoire. Le véhicule rouge passe, puis le jaune.", scheme: "/images/priorities/prio1.png" },
      { id: "7", title: "Fin de ligne continue", description: "Fin de ligne continue, le dépassement est autorisé.", scheme: "/images/priorities/prio47.png" },
      { id: "8", title: "Agent de circulation", description: "L'agent règle la circulation. Les véhicules jaune et vert passent, les autres attendent le signal.", scheme: "/images/priorities/prio48.png" }
    ]
  },
  {
    id: 7,
    title: "Série 7",
    items: [
      { id: "1", title: "Priorité à droite", description: "Priorité à droite. Le véhicule rouge passe, puis le jaune.", scheme: "/images/priorities/prio49.png" },
      { id: "2", title: "Route prioritaire", description: "Route prioritaire. Les véhicules jaune et vert passent ensemble, puis les bleu et rouge ensemble.", scheme: "/images/priorities/prio50.png" },
      { id: "3", title: "Intersection de routes secondaires", description: "Priorité à droite. Le camion et le véhicule vert passent ensemble, puis la moto, puis la voiture rouge.", scheme: "/images/priorities/prio51.png" },
      { id: "4", title: "Sens giratoire", description: "Dans un giratoire, priorité aux véhicules déjà à l'intérieur. Les jaune et blanc passent, puis le bleu, puis le rouge au feu vert.", scheme: "/images/priorities/prio52.png" },
      { id: "5", title: "Fin de priorité et cédez le passage", description: "Fin de route prioritaire suivie d'un cédez le passage. Le véhicule rouge passe en premier.", scheme: "/images/priorities/prio53.png" },
      { id: "6", title: "Sens giratoire et cédez le passage", description: "Cédez le passage aux véhicules déjà engagés. Le véhicule rouge passe, puis le jaune.", scheme: "/images/priorities/prio1.png" },
      { id: "7", title: "Agent de circulation", description: "Les véhicules bleu et vert passent ensemble, les jaune et rouge attendent le signal de l'agent.", scheme: "/images/priorities/prio55.png" },
      { id: "8", title: "Fin de ligne continue", description: "Fin de ligne continue, le dépassement est autorisé.", scheme: "/images/priorities/prio64.png" }
    ]
  },
  {
    id: 8,
    title: "Série 8",
    items: [
      { id: "1", title: "Priorité et feu tricolore", description: "Le véhicule bleu passe, les véhicules rouge et jaune attendent le feu vert.", scheme: "/images/priorities/prio57.png" },
      { id: "2", title: "Absence de signalisation (priorité à droite)", description: "Sans panneaux, priorité à droite. Les véhicules rouge et bleu passent ensemble, puis le jaune, puis le vert.", scheme: "/images/priorities/prio58.png" },
      { id: "3", title: "Route prioritaire", description: "Route prioritaire. Le véhicule bleu passe, puis le jaune.", scheme: "/images/priorities/prio59.png" },
      { id: "4", title: "Absence de signalisation (priorité à droite)", description: "Sans panneaux, priorité à droite. Les trois véhicules du haut passent ensemble, puis le bleu, puis le rouge.", scheme: "/images/priorities/prio60.png" },
      { id: "5", title: "Route prioritaire", description: "Route prioritaire. Le véhicule bleu passe, puis le rouge.", scheme: "/images/priorities/prio61.png" },
      { id: "6", title: "Route principale", description: "Route principale. Le véhicule rouge passe, puis le jaune.", scheme: "/images/priorities/prio62.png" },
      { id: "7", title: "Fin de priorité et STOP", description: "Fin de route prioritaire suivie d'un STOP. Les véhicules rouge et bleu passent ensemble, puis le jaune.", scheme: "/images/priorities/prio63.png" },
      { id: "8", title: "Fin de ligne continue", description: "Fin de ligne continue, le dépassement est autorisé.", scheme: "/images/priorities/prio64.png" }
    ]
  },
  {
    id: 9,
    title: "Série 9",
    items: [
      { id: "1", title: "Route prioritaire et STOP", description: "Route prioritaire avec STOP. Le véhicule bleu passe, puis le jaune.", scheme: "/images/priorities/prio65.png" },
      { id: "2", title: "Véhicule descendant", description: "Le véhicule tractant une caravane doit s'arrêter (le plus encombrant ou descendant).", scheme: "/images/priorities/prio66.png" },
      { id: "3", title: "Panneau manquant : route principale", description: "Le panneau manquant est 'route principale' (priorité ponctuelle).", scheme: "/images/priorities/prio67.png" },
      { id: "4", title: "Fin de ligne continue", description: "Fin de ligne continue, le dépassement est autorisé.", scheme: "/images/priorities/prio68.png" },
      { id: "5", title: "Position pour tourner à gauche", description: "Le véhicule jaune n'est pas correctement positionné pour tourner à gauche.", scheme: "/images/priorities/prio69.png" },
      { id: "6", title: "Véhicule le plus encombrant", description: "Le véhicule le plus encombrant (jaune) doit s'arrêter.", scheme: "/images/priorities/prio70.png" },
      { id: "7", title: "Position pour tourner à gauche", description: "Le véhicule rouge est correctement positionné pour tourner à gauche.", scheme: "/images/priorities/prio71.png" },
      { id: "8", title: "Véhicule descendant", description: "Le bus, véhicule descendant, doit s'arrêter.", scheme: "/images/priorities/prio72.png" }
    ]
  },
  {
    id: 10,
    title: "Série 10",
    items: [
      { id: "1", title: "Panneau manquant : intersection de routes secondaires", description: "Le panneau manquant est 'Intersection de routes secondaires' (priorité à droite).", scheme: "/images/priorities/prio73.png" },
      { id: "2", title: "Sens giratoire et cédez le passage", description: "Cédez le passage aux véhicules déjà engagés. Le véhicule rouge passe, puis le jaune.", scheme: "/images/priorities/prio1.png" },
      { id: "3", title: "Feu orange", description: "Le véhicule bleu poursuit ou s'arrête selon la distance, les autres attendent le feu vert.", scheme: "/images/priorities/prio75.png" },
      { id: "4", title: "Intersection de routes secondaires", description: "Priorité à droite. Le véhicule jaune passe, puis le rouge, puis le bleu.", scheme: "/images/priorities/prio76.png" },
      { id: "5", title: "Route prioritaire", description: "Route prioritaire. Le véhicule bleu passe, puis le jaune.", scheme: "/images/priorities/prio77.png" },
      { id: "6", title: "Véhicule descendant", description: "Le bus, véhicule descendant, doit s'arrêter.", scheme: "/images/priorities/prio78.png" },
      { id: "7", title: "Dépassement autorisé", description: "Le dépassement est autorisé (pas de ligne continue).", scheme: "/images/priorities/prio79.png" },
      { id: "8", title: "Agent de circulation", description: "Les véhicules vert et jaune passent ensemble, les rouge et bleu attendent l'ordre de l'agent.", scheme: "/images/priorities/prio80.png" }
    ]
  },
  {
    id: 11,
    title: "Série 11",
    items: [
      { id: "1", title: "Panneau manquant : intersection de routes secondaires", description: "Le panneau manquant est 'Intersection de routes secondaires' (priorité à droite).", scheme: "/images/priorities/prio73.png" },
      { id: "2", title: "Cédez le passage", description: "Cédez le passage. Les véhicules bleu et jaune passent ensemble, puis le rouge.", scheme: "/images/priorities/prio82.png" },
      { id: "3", title: "Feu orange", description: "Le véhicule bleu poursuit ou s'arrête selon la distance, les autres attendent le feu vert.", scheme: "/images/priorities/prio83.png" },
      { id: "4", title: "Priorité à droite", description: "Priorité à droite. Le véhicule jaune passe, puis le rouge, puis le bleu.", scheme: "/images/priorities/prio84.png" },
      { id: "5", title: "Route principale", description: "Route principale. Les véhicules rouge et blanc passent ensemble, puis le jaune.", scheme: "/images/priorities/prio85.png" },
      { id: "6", title: "Panneau manquant : STOP", description: "Le panneau manquant est un panneau 'STOP'.", scheme: "/images/priorities/prio86.png" },
      { id: "7", title: "Route prioritaire", description: "Route prioritaire. Le véhicule jaune passe, puis les rouge et bleu ensemble.", scheme: "/images/priorities/prio87.png" },
      { id: "8", title: "Véhicule descendant", description: "Le véhicule tractant une caravane, plus encombrant et descendant, doit s'arrêter.", scheme: "/images/priorities/prio88.png" }
    ]
  },
  {
    id: 12,
    title: "Série 12",
    items: [
      { id: "1", title: "Priorité à droite", description: "Priorité à droite. Le véhicule rouge passe, puis le bleu, puis le jaune.", scheme: "/images/priorities/prio89.png" },
      { id: "2", title: "Dépassement autorisé", description: "Le dépassement est autorisé (pas de ligne continue).", scheme: "/images/priorities/prio90.png" },
      { id: "3", title: "Feu orange et route prioritaire", description: "Au feu orange, priorité selon les panneaux. Les véhicules bleu et vert passent ensemble, puis le rouge.", scheme: "/images/priorities/prio91.png" },
      { id: "4", title: "Véhicule le plus encombrant", description: "Le véhicule tractant une caravane, plus encombrant, doit s'arrêter.", scheme: "/images/priorities/prio92.png" },
      { id: "5", title: "Route principale", description: "Route principale. Les véhicules jaune et vert passent ensemble, puis les bleu et rouge.", scheme: "/images/priorities/prio93.png" },
      { id: "6", title: "Route prioritaire", description: "Route prioritaire. Le véhicule jaune passe, puis les rouge et bleu ensemble.", scheme: "/images/priorities/prio94.png" },
      { id: "7", title: "Agent de circulation", description: "Les véhicules vert et jaune passent ensemble, les rouge et bleu attendent le signal de l'agent.", scheme: "/images/priorities/prio95.png" },
      { id: "8", title: "Cédez le passage", description: "Cédez le passage. Le véhicule rouge passe, puis le jaune.", scheme: "/images/priorities/prio96.png" }
    ]
  },
  {
    id: 13,
    title: "Série 13",
    items: [
      { id: "1", title: "Arrêt STOP", description: "Arrêt STOP. Le véhicule rouge passe, puis le jaune.", scheme: "/images/priorities/prio97.png" },
      { id: "2", title: "Arrêt STOP", description: "Arrêt STOP. Les véhicules rouge et bleu passent ensemble, puis le jaune.", scheme: "/images/priorities/prio98.png" },
      { id: "3", title: "Sens giratoire", description: "Dans un giratoire, priorité aux véhicules déjà à l'intérieur.", scheme: "/images/priorities/prio99.png" },
      { id: "4", title: "Dépassement interdit", description: "Vous ne pouvez pas dépasser car un autre véhicule vous double déjà.", scheme: "/images/priorities/prio100.png" },
      { id: "5", title: "Dépassement autorisé", description: "Le dépassement est autorisé (pas de ligne continue).", scheme: "/images/priorities/prio101.png" },
      { id: "6", title: "Feu orange et route prioritaire", description: "Au feu orange, priorité selon les panneaux. Le véhicule bleu passe puis le vert et ensuite le rouge.", scheme: "/images/priorities/prio102.png" },
      { id: "7", title: "Dépassement autorisé", description: "Le dépassement est autorisé (pas de ligne continue).", scheme: "/images/priorities/prio103.png" },
      { id: "8", title: "Ligne discontinue avant ligne continue", description: "Le dépassement est autorisé car la ligne discontinue précède la ligne continue.", scheme: "/images/priorities/prio104.png" }
    ]
  },
    {
    id: 14,
    title: "Série 14",
    items: [
      { id: "1", title: "Sens giratoire et cédez le passage", description: "Cédez le passage aux véhicules déjà engagés dans le giratoire. Le véhicule rouge passe, puis le jaune.", scheme: "/images/priorities/prio1.png" },
      { id: "2", title: "Priorité à droite", description: "Priorité à droite. Le véhicule rouge passe, puis le bleu, puis le jaune.", scheme: "/images/priorities/prio106.png" },
      { id: "3", title: "Cédez le passage", description: "Vous perdez la priorité et un panneau 'Cédez le passage' se trouve devant vous. Le véhicule rouge passe en premier.", scheme: "/images/priorities/prio107.png" },
      { id: "4", title: "Feu orange (priorité à droite)", description: "Au feu orange, en l'absence de panneaux, la priorité à droite s'applique. Le véhicule bleu passe, puis le jaune.", scheme: "/images/priorities/prio108.png" },
      { id: "5", title: "Arrêt STOP", description: "Arrêt STOP. Le véhicule rouge passe, puis le bleu, puis le jaune.", scheme: "/images/priorities/prio109.png" },
      { id: "6", title: "Dépassement autorisé", description: "Le dépassement est autorisé (ligne continue absente ou fin de ligne continue).", scheme: "/images/priorities/prio110.png" },
      { id: "7", title: "Dépassement interdit (véhicule en cours de dépassement)", description: "Vous ne pouvez pas dépasser car un autre véhicule derrière vous est déjà en train de dépasser.", scheme: "/images/priorities/prio111.png" },
      { id: "8", title: "Cédez le passage et caractère prioritaire", description: "Cédez le passage suivi d'un caractère prioritaire. Le véhicule jaune passe, puis les véhicules rouge et bleu ensemble.", scheme: "/images/priorities/prio112.png" }
    ]
  },
  {
    id: 15,
    title: "Série 15",
    items: [
      { id: "1", title: "Cédez le passage et piste cyclable", description: "Cédez le passage aux cyclistes. Le cycliste passe en premier, puis le véhicule jaune, puis le rouge.", scheme: "/images/priorities/prio113.png" },
      { id: "2", title: "Arrêt autorisé (sens unique)", description: "L'arrêt est autorisé aux deux emplacements car la circulation est à sens unique.", scheme: "/images/priorities/prio114.png" },
      { id: "3", title: "Position incorrecte pour tourner (sens unique)", description: "Dans une rue à sens unique, le véhicule bleu n'est pas dans la position autorisée pour tourner.", scheme: "/images/priorities/prio115.png" },
      { id: "4", title: "Dépassement autorisé", description: "Le dépassement est autorisé (ligne discontinue).", scheme: "/images/priorities/prio116.png" },
      { id: "5", title: "Panneau manquant : Cédez le passage à 150 m", description: "Le panneau manquant est 'Cédez le passage à 150 m'.", scheme: "/images/priorities/prio117.png" },
      { id: "6", title: "Arrêt interdit", description: "L'arrêt n'est pas autorisé des deux côtés (bordure irrégulière et ligne continue).", scheme: "/images/priorities/prio118.png" },
      { id: "7", title: "Agent de circulation", description: "Les véhicules vert et bleu passent ensemble, les véhicules rouge et jaune attendent le signal de l'agent.", scheme: "/images/priorities/prio119.png" },
      { id: "8", title: "Route principale et arrêt STOP", description: "Route principale avec STOP. Les véhicules rouge et bleu passent ensemble, puis le jaune.", scheme: "/images/priorities/prio120.png" }
    ]
  },
  {
    id: 16,
    title: "Série 16",
    items: [
      { id: "1", title: "Feu orange et route prioritaire", description: "Au feu orange, priorité selon les panneaux. Le véhicule bleu passe (droite libre), puis le vert, puis le rouge.", scheme: "/images/priorities/prio121.png" },
      { id: "2", title: "Véhicule descendant ou encombrant", description: "Le véhicule tractant une caravane, plus encombrant ou descendant, doit s'arrêter.", scheme: "/images/priorities/prio122.png" },
      { id: "3", title: "Absence de signalisation", description: "En l'absence de panneaux, la priorité à droite s'applique. Le véhicule bleu passe, puis le rouge.", scheme: "/images/priorities/prio123.png" },
      { id: "4", title: "Cédez le passage (véhicules tournant)", description: "Cédez le passage. Les véhicules rouge et jaune passent ensemble (en tournant), puis le bleu.", scheme: "/images/priorities/prio124.png" },
      { id: "5", title: "Carrefour avec feux", description: "Carrefour à feux. Le véhicule rouge passe, les véhicules jaunes attendent le feu vert.", scheme: "/images/priorities/prio125.png" },
      { id: "6", title: "Sens giratoire", description: "Dans un giratoire, priorité aux véhicules déjà à l'intérieur.", scheme: "/images/priorities/prio99.png" },
      { id: "7", title: "Panneau manquant : Cédez le passage à 150 m", description: "Le panneau manquant est 'Cédez le passage à 150 m'.", scheme: "/images/priorities/prio117.png" },
      { id: "8", title: "Dépassement autorisé", description: "Le dépassement est autorisé car la ligne discontinue précède la ligne continue.", scheme: "/images/priorities/prio110.png" }
    ]
  },
  {
    id: 17,
    title: "Série 17",
    items: [
      { id: "1", title: "Caractère prioritaire", description: "Route prioritaire. Les véhicules bleu et jaune passent ensemble, puis le rouge.", scheme: "/images/priorities/prio127.png" },
      { id: "2", title: "Cédez le passage", description: "Cédez le passage. Les véhicules jaune et bleu passent, puis le rouge.", scheme: "/images/priorities/prio128.png" },
      { id: "3", title: "Carrefour avec feux", description: "Carrefour à feux. Le véhicule jaune passe au feu vert. Quand le feu passe au vert pour les autres, les véhicules rouge et bleu passent ensemble.", scheme: "/images/priorities/prio129.png" },
      { id: "4", title: "Ligne continue – Interdiction de dépasser", description: "Ligne continue, le véhicule bleu ne peut pas dépasser.", scheme: "/images/priorities/prio130.png" },
      { id: "5", title: "Intersection de routes secondaires", description: "Priorité à droite. Le véhicule jaune passe, puis le rouge, puis le bleu.", scheme: "/images/priorities/prio131.png" },
      { id: "6", title: "Véhicule le plus encombrant", description: "Le véhicule le plus encombrant (jaune) doit s'arrêter.", scheme: "/images/priorities/prio132.png" },
      { id: "7", title: "Cédez le passage", description: "Cédez le passage. Le véhicule bleu passe, puis le rouge, puis le jaune.", scheme: "/images/priorities/prio133.png" },
      { id: "8", title: "Véhicule descendant", description: "Le bus, véhicule descendant, doit s'arrêter.", scheme: "/images/priorities/prio134.png" }
    ]
  },
  {
    id: 18,
    title: "Série 18",
    items: [
      { id: "1", title: "Priorité à droite", description: "Priorité à droite. Le véhicule rouge passe, puis le jaune.", scheme: "/images/priorities/prio49.png" },
      { id: "2", title: "Route prioritaire", description: "Route prioritaire. Les véhicules jaune et vert passent ensemble, puis les bleu et rouge ensemble.", scheme: "/images/priorities/prio50.png" },
      { id: "3", title: "Cédez le passage", description: "Vous perdez la priorité et un panneau 'Cédez le passage' se trouve devant vous. Le véhicule rouge passe en premier.", scheme: "/images/priorities/prio107.png" },
      { id: "4", title: "Feu tricolore et signalisation", description: "Le véhicule bleu passe, les véhicules rouge et jaune attendent le feu vert.", scheme: "/images/priorities/prio138.png" },
      { id: "5", title: "Absence de signalisation (priorité à droite)", description: "Sans panneaux, priorité à droite. Le véhicule jaune passe, puis les deux bleus, puis le rouge.", scheme: "/images/priorities/prio139.png" },
      { id: "6", title: "Route principale et STOP", description: "Route principale avec STOP. Les véhicules rouge et bleu passent ensemble, puis le jaune.", scheme: "/images/priorities/prio140.png" },
      { id: "7", title: "Caractère prioritaire et STOP", description: "Route prioritaire avec STOP. Les véhicules rouge et jaunes passent ensemble, puis les bleu et blanc ensemble.", scheme: "/images/priorities/prio141.png" },
      { id: "8", title: "Arrêt STOP", description: "Arrêt STOP. Les véhicules rouge et jaune passent ensemble, puis le bleu.", scheme: "/images/priorities/prio142.png" }
    ]
  },
  {
    id: 19,
    title: "Série 19",
    items: [
      { id: "1", title: "Sens giratoire", description: "Dans un giratoire, priorité aux véhicules déjà à l'intérieur. Le véhicule bleu passe, puis le blanc.", scheme: "/images/priorities/prio9.png" },
      { id: "2", title: "Sens giratoire et cédez le passage", description: "Cédez le passage aux véhicules déjà engagés dans le giratoire. Les véhicules vert et jaune passent ensemble, puis le rouge.", scheme: "/images/priorities/prio10.png" },
      { id: "3", title: "Caractère prioritaire", description: "Route prioritaire. Les véhicules jaune et bleu passent ensemble, puis le rouge.", scheme: "/images/priorities/prio145.png" },
      { id: "4", title: "Cédez le passage", description: "Cédez le passage. Les véhicules jaune et bleu passent ensemble, puis le rouge.", scheme: "/images/priorities/prio146.png" },
      { id: "5", title: "Feu orange et signalisation", description: "Au feu orange, priorité selon les panneaux. Le véhicule rouge passe, puis le bleu, puis le vert.", scheme: "/images/priorities/prio147.png" },
      { id: "6", title: "Feu orange et signalisation", description: "Au feu orange, priorité selon les panneaux. Le véhicule bleu passe, puis le vert, puis le rouge.", scheme: "/images/priorities/prio148.png" },
      { id: "7", title: "Agent de circulation", description: "Les véhicules jaune et vert passent ensemble, les véhicules bleu et rouge attendent le signal de l'agent.", scheme: "/images/priorities/prio149.png" },
      { id: "8", title: "Agent de circulation", description: "Les véhicules bleu et vert passent ensemble, les véhicules jaune et rouge attendent le signal de l'agent.", scheme: "/images/priorities/prio150.png" }
    ]
  },
   {
    id: 20,
    title: "Série 20",
    items: [
      { id: "1", title: "Sens giratoire et cédez le passage", description: "Cédez le passage aux véhicules déjà engagés dans le giratoire. Le véhicule rouge passe, puis le jaune.", scheme: "/images/priorities/prio1.png" },
      { id: "2", title: "Priorité à droite", description: "Priorité à droite. Le véhicule rouge passe, puis le bleu, puis le jaune.", scheme: "/images/priorities/prio106.png" },
      { id: "3", title: "Cédez le passage", description: "Vous perdez la priorité et un panneau 'Cédez le passage' se trouve devant vous. Le véhicule rouge passe en premier.", scheme: "/images/priorities/prio107.png" },
      { id: "4", title: "Feu orange (priorité à droite)", description: "Au feu orange, en l'absence de panneaux, la priorité à droite s'applique. Le véhicule bleu passe, puis le jaune.", scheme: "/images/priorities/prio108.png" },
      { id: "5", title: "Arrêt STOP", description: "Arrêt STOP. Le véhicule rouge passe, puis le bleu, puis le jaune.", scheme: "/images/priorities/prio109.png" },
      { id: "6", title: "Dépassement autorisé", description: "Le dépassement est autorisé (ligne continue absente ou fin de ligne continue).", scheme: "/images/priorities/prio110.png" },
      { id: "7", title: "Dépassement interdit (véhicule en cours de dépassement)", description: "Vous ne pouvez pas dépasser car un autre véhicule derrière vous est déjà en train de dépasser.", scheme: "/images/priorities/prio111.png" },
      { id: "8", title: "Cédez le passage et caractère prioritaire", description: "Cédez le passage suivi d'un caractère prioritaire. Le véhicule jaune passe, puis les véhicules rouge et bleu ensemble.", scheme: "/images/priorities/prio112.png" }
    ]
  }
]