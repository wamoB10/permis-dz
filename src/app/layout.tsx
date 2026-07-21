import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import CookieConsent from "@/components/layout/cookie-consent"
import OrganizationJsonLd from "@/components/seo/organization-json-ld"
import { siteConfig } from "@/lib/site-config"
import { ThemeProvider } from "@/lib/theme-provider"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
    icons: {
    icon: "/favicon.ico?v=3",
  },
  title: {
    default: "Permi Algérie - Réussissez votre code de la route",
    template: "%s | Permi Algérie",
  },
  description: siteConfig.description,
  keywords: [
    "code de la route",
    "Algérie",
    "permis",
    "examen",
    "panneaux",
    "priorités",
    "test",
    "code",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Permi Algérie - Code de la route",
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: "Code de la route algérien gratuit.",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <OrganizationJsonLd />
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
