/**
 * Utility to generate WhatsApp click-to-chat URL with context-aware prefilled message
 * and UTM tracking preservation.
 */

// Nomor WhatsApp Resmi Sales/Konsultasi Ritelindo Group (dapat disesuaikan)
export const DEFAULT_WHATSAPP_NUMBER = '6281234567890';

export interface WhatsAppUrlOptions {
  phone?: string;
  source?: 'hero' | 'header' | 'usp' | 'layout3d' | 'package' | 'floating' | 'sticky' | 'faq' | 'final';
  packageId?: string;
  packageName?: string;
  customMessage?: string;
}

/**
 * Sanitizes input string to prevent injection of malicious characters or URL-breaking sequences.
 * Restricts to alphanumeric and safe punctuation with a length cap.
 */
function sanitizeTrackingParam(param: string | null, maxLength = 50): string {
  if (!param) return '';
  return param
    .replace(/[^a-zA-Z0-9_\-\.]/g, '')
    .slice(0, maxLength);
}

export function generateWhatsAppUrl(options: WhatsAppUrlOptions = {}): string {
  // Enforce numeric-only phone number format for security
  const rawPhone = options.phone || DEFAULT_WHATSAPP_NUMBER;
  const sanitizedPhone = rawPhone.replace(/\D/g, '') || DEFAULT_WHATSAPP_NUMBER;

  let text = '';

  if (options.customMessage) {
    text = options.customMessage;
  } else if (options.source === 'layout3d') {
    text =
      'Halo Tim Ritelindo, saya melihat iklan di Google dan tertarik untuk klaim layanan *Desain Layout 3D Gratis* untuk toko saya. Mohon info data ruangan apa saja yang perlu saya siapkan?';
  } else if (options.source === 'package' && options.packageName) {
    text = `Halo Tim Ritelindo, saya melihat penawaran di Google dan tertarik berkonsultasi mengenai *${options.packageName}*. Boleh minta rincian estimasi biaya, ketersediaan stok, dan jadwal pengirimannya?`;
  } else if (options.source === 'faq') {
    text =
      'Halo Tim Ritelindo, saya ingin menanyakan lebih lanjut mengenai syarat *Free Ongkir Jawa-Bali* dan *Free Perakitan* untuk toko saya.';
  } else {
    // Default Hero, Header, Sticky, dan Final CTA
    text =
      'Halo Tim Ritelindo, saya melihat penawaran Paket Rak Minimarket di Google dan ingin *Konsultasi Gratis* untuk kebutuhan toko retail saya. Terima kasih!';
  }

  // Preserve and securely sanitize Google Ads UTM tracking parameters
  if (typeof window !== 'undefined' && window.location?.search) {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const source = sanitizeTrackingParam(urlParams.get('utm_source'));
      const medium = sanitizeTrackingParam(urlParams.get('utm_medium'));
      const campaign = sanitizeTrackingParam(urlParams.get('utm_campaign'));
      const term = sanitizeTrackingParam(urlParams.get('utm_term'));

      const trackingFragments: string[] = [];
      if (source) trackingFragments.push(`src=${source}`);
      if (medium) trackingFragments.push(`med=${medium}`);
      if (campaign) trackingFragments.push(`camp=${campaign}`);
      if (term) trackingFragments.push(`term=${term}`);

      if (trackingFragments.length > 0) {
        text += `\n\n(Ref: Ads-${trackingFragments.join('|')})`;
      }
    } catch {
      // Safe fallback if URL parsing encounters environment restrictions
    }
  }

  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${sanitizedPhone}?text=${encodedText}`;
}
