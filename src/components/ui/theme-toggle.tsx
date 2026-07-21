"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/lib/theme-provider"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
  variant?: "icon" | "full"
}

export default function ThemeToggle({ className, variant = "icon" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size={variant === "full" ? "default" : "icon"}
      onClick={toggleTheme}
      className={cn(
        "relative gap-2 transition-all duration-300 hover:scale-105 active:scale-95",
        className
      )}
      aria-label={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}
    >
      <Sun
        className={cn(
          "h-5 w-5 transition-all duration-300",
          theme === "dark" ? "rotate-90 scale-0 opacity-0 absolute" : "rotate-0 scale-100 opacity-100 relative"
        )}
      />
      <Moon
        className={cn(
          "h-5 w-5 transition-all duration-300",
          theme === "dark" ? "rotate-0 scale-100 opacity-100 relative" : "-rotate-90 scale-0 opacity-0 absolute"
        )}
      />
      {variant === "full" && (
        <span className="ml-1">{theme === "light" ? "Mode sombre" : "Mode clair"}</span>
      )}
    </Button>
  )
}
