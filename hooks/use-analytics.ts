declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

const push = (payload: Record<string, unknown>) => {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push(payload)
}

export const useAnalytics = () => {
  const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
    push({ event: eventName, ...parameters })
  }

  const trackPageView = (url: string) => {
    push({ event: 'page_view', page_path: url })
  }

  const trackWhatsAppClick = (source: string, product?: string, whatsappUrl?: string) => {
    push({
      event: 'whatsapp_click',
      event_category: 'engagement',
      event_label: source,
      product,
      whatsapp_url: whatsappUrl,
      page_location: typeof window !== 'undefined' ? window.location.href : undefined,
      page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
      page_title: typeof document !== 'undefined' ? document.title : undefined,
    })
  }

  const trackProductView = (productName: string) => {
    push({
      event: 'view_item',
      event_category: 'ecommerce',
      event_label: productName,
      value: 1,
    })
  }

  const trackContactForm = (formType: string) => {
    push({
      event: 'form_submit',
      event_category: 'engagement',
      event_label: formType,
      value: 1,
    })
  }

  return {
    trackEvent,
    trackPageView,
    trackWhatsAppClick,
    trackProductView,
    trackContactForm,
  }
}
