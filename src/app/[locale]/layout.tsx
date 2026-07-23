import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations } from "next-intl/server"
import { Inter, Tajawal } from "next/font/google"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import "../globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import CookieConsent from "@/components/layout/cookie-consent"
import OrganizationJsonLd from "@/components/seo/organization-json-ld"
import { siteConfig } from "@/lib/site-config"
import { ThemeProvider } from "@/lib/theme-provider"

const inter = Inter({ subsets: ["latin"], display: "swap" })
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
})

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "site" })

  return {
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    keywords: t.raw("keywords"),
    openGraph: {
      type: "website" as const,
      locale: locale === "ar" ? "ar_DZ" : siteConfig.locale,
      url: siteConfig.url,
      siteName: locale === "ar" ? "Permi Algérie بالعربية" : siteConfig.name,
      title: t("ogTitle"),
      description: t("description"),
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: locale === "ar" ? "بيرمي الجزائر" : siteConfig.name,
      description: t("twitterDescription"),
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      languages: {
        fr: `${siteConfig.url}/`,
        ar: `${siteConfig.url}/ar`,
      },
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as "fr" | "ar")) {
    notFound()
  }

  const messages = await getMessages()
  const isRtl = locale === "ar"

  return (
    <html lang={locale} dir={isRtl ? "rtl" : "ltr"} suppressHydrationWarning>
      <body className={isRtl ? tajawal.className : inter.className}>
        <OrganizationJsonLd />
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer locale={locale} />
            </div>
            <CookieConsent />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
