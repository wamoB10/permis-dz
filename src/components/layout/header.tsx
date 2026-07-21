import Image from "next/image"
import Link from "next/link"
import MobileNav from "./mobile-nav"
import ThemeToggle from "@/components/ui/theme-toggle"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/nav-logo.png"
            alt="Logo Permis Algérie"
            width={56}
            height={56}
            className="h-12 w-auto object-contain"
            priority
          />
          <span className="text-xl font-bold">Permis Algérie</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Navigation principale">
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
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
