import { useAnalytics } from './use-analytics'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export const useWhatsAppConversion = () => {
  const { trackWhatsAppClick } = useAnalytics()

  const handleWhatsAppClick = (message?: string, source: string = 'general', product?: string) => {
    const text = message || 'Olá, vim do site da Aplic Gráfica e quero um orçamento.'
    const whatsappUrl = `https://wa.me/5548999128310?text=${encodeURIComponent(text)}`

    trackWhatsAppClick(source, product, whatsappUrl)
    window.open(whatsappUrl, '_blank')
  }

  return { handleWhatsAppClick }
}
