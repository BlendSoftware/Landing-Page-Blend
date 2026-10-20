import type { Metadata, Viewport } from 'next';
import { Archivo, Instrument_Serif, Onest } from 'next/font/google';
import JsonLd, { organizationSchema, websiteSchema } from '@/components/seo/JsonLd';
import { site } from '@/lib/site';
import '@/styles/globals.scss';

// Importás los dos
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';

const display = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-display',
  display: 'swap',
});

const accent = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-accent',
  display: 'swap',
});

const body = Onest({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  // ... (todo lo tuyo queda igual, no te lo toco)
  metadataBase: new URL(site.url),
  title: {
    default: 'Blend Software',
    template: '%s | Blend Software',
  },
  description:
    'Estudio de desarrollo de software a medida en Mendoza. Sistemas de gestión, automatización de procesos e integración de sistemas para empresas. Primera consulta sin cargo.',
  applicationName: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: site.name,
    url: '/',
    title: 'Blend Software',
    description:
      'Sistemas de gestión, automatización de procesos e integraciones para empresas que ya no entran en una planilla.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  colorScheme: 'light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${display.variable} ${accent.variable} ${body.variable}`}>
      <body>
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        {children}
        
        {/* Vercel haciendo lo suyo */}
        <Analytics />

        {/* GA4 haciendo lo suyo. ¡Cambiá el G-XYZ por tu ID real! */}
        <GoogleAnalytics gaId="G-GYETPTX7S0" />
      </body>
    </html>
  );
}