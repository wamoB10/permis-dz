import JsonLd from "@/components/seo/json-ld"
import { siteConfig } from "@/lib/site-config"

export interface BreadcrumbItem {
  name: string
  href: string
}

export default function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${siteConfig.url}${item.href}`,
        })),
      }}
    />
  )
}
