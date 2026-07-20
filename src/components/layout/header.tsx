import Image from "next/image"
import Link from "next/link"
import { BookOpen } from "lucide-react"
import MobileNav from "./mobile-nav"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logonavbar.png"
            alt="Logo Permis Algérie"
            width={32}
            height={32}
            className="h-8 w-auto object-contain"
            priority
          />
          <span className="text-xl font-bold">Permis Algérie</span>
        </Link>
        <nav className="hidden md:flex gap-6" aria-label="Navigation principale">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Accueil
          </Link>
          <Link href="/panneaux" className="text-sm font-medium transition-colors hover:text-primary">
            Panneaux
          </Link>
          <Link href="/priorites" className="text-sm font-medium transition-colors hover:text-primary">
            Priorités
          </Link>
          <Link href="/questions-theoriques" className="text-sm font-medium transition-colors hover:text-primary">
            Questions théoriques
          </Link>
          <Link href="/series" className="text-sm font-medium transition-colors hover:text-primary">
            Séries
          </Link>
        </nav>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
