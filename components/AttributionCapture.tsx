"use client"

import { useEffect } from "react"
import { captureConversionAttribution } from "@/lib/attribution"

export function AttributionCapture() {
  useEffect(() => {
    captureConversionAttribution()
  }, [])

  return null
}
