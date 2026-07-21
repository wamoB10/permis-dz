import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/80">
      <div className="container py-8 md:py-12 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-20 pl-20">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">Navigation</h3>
            <ul className="space-y-1">
              <li><Link href="/panneaux" className="text-sm text-muted-foreground hover:text-primary">Panneaux</Link></li>
              <li><Link href="/priorites" className="text-sm text-muted-foreground hover:text-primary">Priorités</Link></li>
              <li><Link href="/questions-theoriques" className="text-sm text-muted-foreground hover:text-primary">Questions</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">Tests</h3>
            <ul className="space-y-1">
              <li><Link href="/series-panneaux" className="text-sm text-muted-foreground hover:text-primary">Test Panneaux</Link></li>
              <li><Link href="/series-priorites" className="text-sm text-muted-foreground hover:text-primary">Test Priorités</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">Informations</h3>
            <ul className="space-y-1">
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link></li>
              <li><Link href="/a-propos" className="text-sm text-muted-foreground hover:text-primary">À propos</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">Légal</h3>
            <ul className="space-y-1">
              <li><Link href="/confidentialite" className="text-sm text-muted-foreground hover:text-primary">Confidentialité</Link></li>
              <li><Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary">Cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Permis Algérie. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}