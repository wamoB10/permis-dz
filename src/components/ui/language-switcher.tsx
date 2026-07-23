"use client"

import { usePathname, useRouter } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"
import { useLocale } from "next-intl"
import { useTransition } from "react"

export default function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const toggleLocale = () => {
    const nextLocale = locale === "fr" ? "ar" : "fr"
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      disabled={isPending}
      className="gap-1.5 px-2.5"
      title={locale === "fr" ? "العربية" : "Français"}
    >
      <Languages className="h-4 w-4" />
      <span className="text-xs font-medium">{locale === "fr" ? "العربية" : "FR"}</span>
    </Button>
  )
}
