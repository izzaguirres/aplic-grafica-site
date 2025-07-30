import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"

interface CTASectionProps {
  headline: string
  subtitle: string
  buttonText: string
  buttonUrl: string
  background?: "primary" | "secondary" | "white"
}

export function CTASection({ headline, subtitle, buttonText, buttonUrl, background = "primary" }: CTASectionProps) {
  const bgClass = {
    primary: "primary-section relative overflow-hidden",
    secondary: "bg-secondary/50",
    white: "bg-background",
  }[background]

  return (
    <section className={`py-20 md:py-28 ${bgClass}`}>
      {background === "primary" && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] opacity-20" />
        </>
      )}

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground">
              {headline}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto font-medium">
              {subtitle}
            </p>
          </div>

          <Button
            size="lg"
            asChild
            className="text-base md:text-lg px-8 py-6 h-14 font-bold bg-white text-gray-900 shadow-2xl hover:shadow-3xl hover:bg-gray-50 transition-all group hover:scale-105 rounded-2xl border-0"
          >
            <Link href={buttonUrl}>
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
