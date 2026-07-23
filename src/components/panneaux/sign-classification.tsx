import { getTranslations } from "next-intl/server"
import { Card, CardContent } from "@/components/ui/card"
import SignImage from "@/components/ui/sign-image"

interface Props {
  locale: string
}

const categoryIds = [
  { id: "triangle-blanc", image: "/images/classification/triangle-blanc.png", key: "triangleBlanc" },
  { id: "triangle-jaune", image: "/images/classification/triangle-jaune.png", key: "triangleJaune" },
  { id: "rond-blanc-interdiction", image: "/images/classification/rond-blanc-interdiction.png", key: "rondBlanc" },
  { id: "rond-bleu", image: "/images/classification/rond-bleu.png", key: "rondBleu" },
  { id: "carre-bleu", image: "/images/classification/carre-bleu.png", key: "carreBleu" },
  { id: "carre-blanc", image: "/images/classification/carre-blanc.png", key: "carreBlanc" },
  { id: "losange-jaune", image: "/images/classification/losange-jaune.png", key: "losangeJaune" },
  { id: "stop", image: "/images/classification/stop.png", key: "stop" },
  { id: "fin-interdiction", image: "/images/classification/fin-interdiction.png", key: "finInterdiction" },
  { id: "arret-stationnement", image: "/images/classification/arret.png", key: "arretStationnement" },
]

export default async function SignClassification({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: "signClassification" })

  return (
    <section className="mb-12 bg-muted/30 rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-8 w-1 bg-primary rounded-full" />
        <h2 className="text-2xl font-semibold">{t("title")}</h2>
      </div>
      <p className="text-muted-foreground mb-6 text-sm">
        {t("subtitle")}
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categoryIds.map((cat) => (
          <Card key={cat.id} className="bg-background">
            <CardContent className="p-4 flex flex-col items-center text-center space-y-2">
              <div className="w-16 h-16 bg-muted/50 rounded-xl flex items-center justify-center">
                <SignImage src={cat.image} alt={t(cat.key)} width={48} height={48} />
              </div>
              <h3 className="font-semibold text-sm">{t(cat.key)}</h3>
              <p className="text-xs text-muted-foreground">{t(cat.key + "Desc")}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
