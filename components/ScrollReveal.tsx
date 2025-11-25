"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    // Small delay to ensure DOM is ready after navigation
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active")
              // Stop observing once active to save resources
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -20px 0px", 
        }
      )

      const elements = document.querySelectorAll(".reveal")
      
      // If no elements found (or JS disabled fallback), we might want to ensure content is visible?
      // But for now, let's just observe.
      elements.forEach((el) => observer.observe(el))
      
      return () => observer.disconnect()
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [pathname]) // Re-run when route changes

  return null
}