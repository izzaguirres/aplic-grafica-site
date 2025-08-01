import { useAnalytics } from './use-analytics'

export const useWhatsAppConversion = () => {
  const { trackWhatsAppClick } = useAnalytics()
  
  const handleWhatsAppClick = (message?: string, source: string = 'general', product?: string) => {
    // Rastrear evento no Google Analytics
    trackWhatsAppClick(source, product)
    
    // Função para rastrear conversão do Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      const whatsappUrl = `https://wa.me/5548999128310?text=${message || 'Olá,%20vim%20do%20site%20da%20Aplic%20Gráfica%20e%20quero%20um%20orçamento.'}`
      ;(window as any).gtag_report_conversion(whatsappUrl)
    } else {
      // Fallback caso a função não esteja disponível
      const whatsappUrl = `https://wa.me/5548999128310?text=${message || 'Olá,%20vim%20do%20site%20da%20Aplic%20Gráfica%20e%20quero%20um%20orçamento.'}`
      window.open(whatsappUrl, '_blank')
    }
  }

  return { handleWhatsAppClick }
} 