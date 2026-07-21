export const siteConfig = {
  name: "Permi Algérie",
  legalName: "Permis Algérie",
  description:
    "Préparez l'examen du code de la route algérien gratuitement. Révisez les panneaux, les priorités et entraînez-vous avec des tests.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.permi-algerie.dz",
  locale: "fr_DZ",
  contactEmail: "privacypermis-algerie@gmail.com",
  ogImage: "/images/nav-logo.png",
} as const
