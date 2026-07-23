"use client"

import { useState, type FormEvent } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const t = useTranslations("contact.form")
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      })
      setSubmitted(true)
    } catch {
      alert(t("errorMessage"))
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <Card className="max-w-lg mx-auto">
        <CardContent className="p-8 text-center space-y-4">
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
          <h2 className="text-xl font-semibold">{t("successTitle")}</h2>
          <p className="text-muted-foreground">
            {t("successMessage")}
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-lg mx-auto">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY"} />
          <input type="hidden" name="subject" value={t("subject")} />

          <div>
            <label htmlFor="name" className="text-sm font-medium mb-1 block">
              {t("name")}
            </label>
            <Input id="name" name="name" required placeholder={t("namePlaceholder")} />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium mb-1 block">
              {t("email")}
            </label>
            <Input id="email" name="email" type="email" required placeholder={t("emailPlaceholder")} />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium mb-1 block">
              {t("message")}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder={t("messagePlaceholder")}
            />
          </div>

          <Button type="submit" className="w-full gap-2" disabled={sending}>
            <Send className="h-4 w-4" />
            {sending ? t("sending") : t("send")}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
