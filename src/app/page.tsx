import type { Metadata } from "next"
import Hero from "@/components/home/hero"
import Stats from "@/components/home/stats"
import Features from "@/components/home/features"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Accueil",
  description: siteConfig.description,
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
    </>
  )
}
