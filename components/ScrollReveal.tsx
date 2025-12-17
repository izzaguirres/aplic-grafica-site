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
          threshold: 0, // Trigger as soon as any part is visible
          rootMargin: "0px 0px -50px 0px", // Trigger slightly before it comes into view
        }
      )

      const elements = document.querySelectorAll(".reveal")
      elements.forEach((el) => observer.observe(el))

      // Fallback: Force reveal all elements after 2 seconds to prevent content from staying hidden
      setTimeout(() => {
        elements.forEach((el) => {
            if (!el.classList.contains("active")) {
                el.classList.add("active")
            }
        })
      }, 2000)
      
      return () => observer.disconnect()
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [pathname]) // Re-run when route changes

  return null
}