export const siteConfig = {
  name: "Permi Algérie",
  legalName: "Permis Algérie",
  description:
    "Préparez l'examen du code de la route algérien gratuitement. Révisez les panneaux, les priorités et entraînez-vous avec des quiz.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.permi-algerie.dz",
  locale: "fr_DZ",
  contactEmail: "privacy@permis-algerie.dz",
  ogImage: "/images/logonavbar.png",
} as const
