import type { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"

export function createPageMetadata(
  title: string,
  description: string,
  path?: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path ? `${siteConfig.url}${path}` : siteConfig.url,
    },
    alternates: path
      ? { canonical: `${siteConfig.url}${path}` }
      : undefined,
  }
}
