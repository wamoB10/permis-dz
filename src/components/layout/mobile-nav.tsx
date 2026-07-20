"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span className="sr-only">Menu</span>
      </Button>
      {open && (
        <div className="fixed inset-0 top-16 z-50 bg-background p-6 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-lg font-medium" onClick={() => setOpen(false)}>Accueil</Link>
            <Link href="/panneaux" className="text-lg font-medium" onClick={() => setOpen(false)}>Panneaux</Link>
            <Link href="/priorites" className="text-lg font-medium" onClick={() => setOpen(false)}>Priorités</Link>
            <Link href="/questions-theoriques" className="text-lg font-medium" onClick={() => setOpen(false)}>Questions théoriques</Link>
            <Link href="/series" className="text-lg font-medium" onClick={() => setOpen(false)}>Séries</Link>
          </nav>
        </div>
      )}
    </>
  )
}