import JsonLd from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"

export default function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/nav-logo.png`,
        description: siteConfig.description,
        email: siteConfig.contactEmail,
        areaServed: {
          "@type": "Country",
          name: "Algérie",
        },
      }}
    />
  )
}
