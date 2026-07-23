import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import ContactForm from "@/components/contact/contact-form"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "contact" })

  return {
    title: t("title"),
    description: t("description"),
  }
}

export default function ContactPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <ContactForm />
    </div>
  )
}
