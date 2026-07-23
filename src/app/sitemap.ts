import { MetadataRoute } from "next"
import { testSeriesList } from "@/data/test-series"
import { prioritySeriesList } from "@/data/priority-series"
import { siteConfig } from "@/lib/site-config"

type SitemapEntry = {
  url: string
  lastModified?: Date | string
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: number
  alternates?: {
    languages?: Record<string, string>
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const locales = ["fr", "ar"]

  const staticPages: SitemapEntry[] = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          fr: `${baseUrl}/`,
          ar: `${baseUrl}/ar`,
        },
      },
    },
    {
      url: `${baseUrl}/panneaux`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          fr: `${baseUrl}/panneaux`,
          ar: `${baseUrl}/ar/panneaux`,
        },
      },
    },
    {
      url: `${baseUrl}/priorites`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          fr: `${baseUrl}/priorites`,
          ar: `${baseUrl}/ar/priorites`,
        },
      },
    },
    {
      url: `${baseUrl}/questions-theoriques`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          fr: `${baseUrl}/questions-theoriques`,
          ar: `${baseUrl}/ar/questions-theoriques`,
        },
      },
    },
    {
      url: `${baseUrl}/test`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          fr: `${baseUrl}/test`,
          ar: `${baseUrl}/ar/test`,
        },
      },
    },
    {
      url: `${baseUrl}/test/panneaux`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          fr: `${baseUrl}/test/panneaux`,
          ar: `${baseUrl}/ar/test/panneaux`,
        },
      },
    },
    {
      url: `${baseUrl}/test/priorites`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          fr: `${baseUrl}/test/priorites`,
          ar: `${baseUrl}/ar/test/priorites`,
        },
      },
    },
    {
      url: `${baseUrl}/series`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          fr: `${baseUrl}/series`,
          ar: `${baseUrl}/ar/series`,
        },
      },
    },
    {
      url: `${baseUrl}/series-panneaux`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          fr: `${baseUrl}/series-panneaux`,
          ar: `${baseUrl}/ar/series-panneaux`,
        },
      },
    },
    {
      url: `${baseUrl}/series-priorites`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          fr: `${baseUrl}/series-priorites`,
          ar: `${baseUrl}/ar/series-priorites`,
        },
      },
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          fr: `${baseUrl}/faq`,
          ar: `${baseUrl}/ar/faq`,
        },
      },
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
      alternates: {
        languages: {
          fr: `${baseUrl}/a-propos`,
          ar: `${baseUrl}/ar/a-propos`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
      alternates: {
        languages: {
          fr: `${baseUrl}/contact`,
          ar: `${baseUrl}/ar/contact`,
        },
      },
    },
    {
      url: `${baseUrl}/confidentialite`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          fr: `${baseUrl}/confidentialite`,
          ar: `${baseUrl}/ar/confidentialite`,
        },
      },
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          fr: `${baseUrl}/cookies`,
          ar: `${baseUrl}/ar/cookies`,
        },
      },
    },
  ]

  const seriesPages: SitemapEntry[] = testSeriesList
    .filter((s) => s.items.length > 0)
    .flatMap((s) => [
      {
        url: `${baseUrl}/series/${s.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: {
          languages: {
            fr: `${baseUrl}/series/${s.id}`,
            ar: `${baseUrl}/ar/series/${s.id}`,
          },
        },
      },
    ])

  const prioritySeriesPages: SitemapEntry[] = prioritySeriesList
    .filter((s) => s.items.length > 0)
    .flatMap((s) => [
      {
        url: `${baseUrl}/series-priorites/${s.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: {
          languages: {
            fr: `${baseUrl}/series-priorites/${s.id}`,
            ar: `${baseUrl}/ar/series-priorites/${s.id}`,
          },
        },
      },
    ])

  return [...staticPages, ...seriesPages, ...prioritySeriesPages]
}
