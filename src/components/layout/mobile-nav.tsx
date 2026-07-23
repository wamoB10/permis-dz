"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/ui/theme-toggle"

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined)
  const openTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (openTimerRef.current) clearTimeout(openTimerRef.current)
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    }
  }, [])

  const handleToggle = () => {
    if (open) {
      // Fermeture : d'abord l'animation, puis on retire du DOM
      if (openTimerRef.current) clearTimeout(openTimerRef.current)
      setShow(false)
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
      closeTimerRef.current = setTimeout(() => setOpen(false), 300)
    } else {
      // Ouverture : on monte d'abord dans le DOM, puis on déclenche l'animation
      setOpen(true)
      openTimerRef.current = setTimeout(() => setShow(true), 20)
    }
  }

  const handleClose = () => {
    if (openTimerRef.current) clearTimeout(openTimerRef.current)
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    setShow(false)
    closeTimerRef.current = setTimeout(() => setOpen(false), 300)
  }

  return (
    <>
      <Button variant="ghost" size="icon" onClick={handleToggle}>
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span className="sr-only">Menu</span>
      </Button>
      {open && (
        <>
          {/* Overlay semi-transparent */}
          <div
            className={`fixed inset-0 top-16 z-40 bg-black/50 md:hidden transition-opacity duration-300 ease-in-out ${
              show ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleClose}
          />
          {/* Panneau latéral */}
          <div
            className={`fixed right-0 top-16 z-50 h-[calc(100vh-4rem)] w-72 border-l bg-background p-6 shadow-xl md:hidden transition-transform duration-300 ease-in-out ${
              show ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-lg font-medium transition-colors hover:text-primary" onClick={handleClose}>
                Accueil
              </Link>
              <Link href="/panneaux" className="text-lg font-medium transition-colors hover:text-primary" onClick={handleClose}>
                Panneaux
              </Link>
              <Link href="/priorites" className="text-lg font-medium transition-colors hover:text-primary" onClick={handleClose}>
                Priorités
              </Link>
              <Link href="/questions-theoriques" className="text-lg font-medium transition-colors hover:text-primary" onClick={handleClose}>
                Questions théoriques
              </Link>
              <Link href="/series" className="text-lg font-medium transition-colors hover:text-primary" onClick={handleClose}>
                Séries
              </Link>
              <div className="mt-6 pt-6 border-t border-border">
                <ThemeToggle variant="full" />
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  )
}