import { siteConfig } from "@/lib/site"

export const defaultWhatsAppMessage =
  "Olá, vim do site da Aplic Gráfica e quero um orçamento."

export type WhatsAppConversionScope =
  | "general_quote"
  | "product_family"
  | "catalog_product"
  | "custom_order"
  | "artwork_submission"
  | "order_support"

export interface WhatsAppConversionDetails {
  scope?: WhatsAppConversionScope
  context?: string
  productId?: string
  variant?: string
  quantity?: string
  price?: number
}

export interface WhatsAppConversionInput extends WhatsAppConversionDetails {
  message?: string
  source: string
  product?: string
}

export function buildWhatsAppUrl(message?: string) {
  const text = message?.trim() || defaultWhatsAppMessage
  return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(text)}`
}

export function getWhatsAppTrackingAttributes({
  message,
  source,
  product,
  scope = "general_quote",
  context,
  productId,
  variant,
  quantity,
  price,
}: WhatsAppConversionInput) {
  return {
    "data-whatsapp-cta": "true",
    "data-whatsapp-url": buildWhatsAppUrl(message),
    "data-conversion-source": source,
    "data-conversion-scope": scope,
    ...(context ? { "data-conversion-context": context } : {}),
    ...(product ? { "data-product-name": product } : {}),
    ...(productId ? { "data-product-id": productId } : {}),
    ...(variant ? { "data-product-variant": variant } : {}),
    ...(quantity ? { "data-product-quantity": quantity } : {}),
    ...(typeof price === "number"
      ? { "data-product-price": price.toFixed(2) }
      : {}),
  }
}
