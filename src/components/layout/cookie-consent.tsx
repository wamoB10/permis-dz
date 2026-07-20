"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const CONSENT_KEY = "permi-algerie-cookie-consent"

/**
 * Bandeau de consentement aux cookies.
 * Désactivé par défaut — activer via NEXT_PUBLIC_ENABLE_COOKIE_CONSENT=true
 * lors de la mise en place de Google AdSense.
 */
export default function CookieConsent() {
  const enabled = process.env.NEXT_PUBLIC_ENABLE_COOKIE_CONSENT === "true"
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!enabled) return
    const consent = localStorage.getItem(CONSENT_KEY)
    if (!consent) setVisible(true)
  }, [enabled])

  if (!enabled || !visible) return null

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted")
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, "rejected")
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      className="fixed bottom-0 inset-x-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 p-4 shadow-lg"
    >
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground max-w-3xl">
          Nous utilisons des cookies techniques et, avec votre accord, des cookies publicitaires
          (Google AdSense) pour financer ce service gratuit. Consultez notre{" "}
          <Link href="/cookies" className="text-primary underline underline-offset-2">
            politique des cookies
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" size="sm" onClick={reject}>
            Refuser
          </Button>
          <Button size="sm" onClick={accept}>
            Accepter
          </Button>
        </div>
      </div>
    </div>
  )
}
