import { GOOGLE_ADS_ID } from '@/src/config';

export function isWhatsAppLink(href?: string) {
  if (!href) return false;
  return href.includes('wa.me') || href.includes('whatsapp.com');
}

export function trackWhatsAppClick() {
  if (typeof window === 'undefined') return;

  const w = window as Window & {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  };

  if (typeof w.fbq === 'function') {
    w.fbq('track', 'Lead', {
      content_name: 'whatsapp_click',
      content_category: 'contact',
    });
  }

  if (typeof w.gtag === 'function') {
    w.gtag('event', 'generate_lead', {
      event_category: 'engagement',
      event_label: 'whatsapp_click',
    });
    w.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_ID,
    });
  }
}
