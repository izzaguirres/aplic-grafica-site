import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: "white" | "secondary" | "gradient"
  id?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export function Section({ children, className, background = "white", id, size = "lg" }: SectionProps) {
  const sizeClasses = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-20",
    lg: "py-20 md:py-24",
    xl: "py-24 md:py-32",
  }

  const backgroundClasses = {
    white: "bg-background",
    secondary: "bg-gradient-to-br from-secondary/30 via-secondary/20 to-secondary/30 relative",
    gradient: "bg-gradient-to-br from-background via-secondary/10 to-background relative",
  }

  return (
    <section id={id} className={cn(sizeClasses[size], backgroundClasses[background], className)}>
      {background !== "white" && (
        <>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
        </>
      )}
      <div className="container relative">{children}</div>
    </section>
  )
}
