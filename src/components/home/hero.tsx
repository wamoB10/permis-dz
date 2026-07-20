import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-background py-20 md:py-32">
      <div className="container text-center">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-center mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Image
                src="/images/voiture.webp"
                alt=""
                width={20}
                height={20}
                className="h-5 w-auto object-contain"
                aria-hidden
              />
              Préparez-vous au code 100% gratuitement !
              <Image
                src="/images/voiture.webp"
                alt=""
                width={20}
                height={20}
                className="h-5 w-auto object-contain"
                aria-hidden
              />
            </span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Réussissez le Code de la Route{" "}
            <span className="text-primary">Algérien</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Apprenez et entraînez-vous gratuitement, sans inscription. Panneaux, priorités, questions théoriques et quiz. Commencez immédiatement.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/panneaux">
                <BookOpen className="h-5 w-5" /> Réviser les panneaux
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/quiz">
                <ArrowRight className="h-5 w-5" /> Faire un quiz
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
