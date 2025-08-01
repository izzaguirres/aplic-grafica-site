export const useAnalytics = () => {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', eventName, parameters)
    }
  }

  const trackPageView = (url: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      })
    }
  }

  const trackWhatsAppClick = (source: string, product?: string) => {
    trackEvent('whatsapp_click', {
      event_category: 'engagement',
      event_label: source,
      product: product,
      value: 1
    })
  }

  const trackProductView = (productName: string) => {
    trackEvent('view_item', {
      event_category: 'ecommerce',
      event_label: productName,
      value: 1
    })
  }

  const trackContactForm = (formType: string) => {
    trackEvent('form_submit', {
      event_category: 'engagement',
      event_label: formType,
      value: 1
    })
  }

  return {
    trackEvent,
    trackPageView,
    trackWhatsAppClick,
    trackProductView,
    trackContactForm
  }
} 