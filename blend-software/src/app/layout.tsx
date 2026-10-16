import type { Metadata, Viewport } from 'next';
import { Archivo, Instrument_Serif, Onest } from 'next/font/google';
import JsonLd, { organizationSchema, websiteSchema } from '@/components/seo/JsonLd';
import { site } from '@/lib/site';
import '@/styles/globals.scss';

// Self-hosted at build time: no request to Google, no layout shift on swap.
// Archivo's width axis gives the expanded, poster-style headlines.
const display = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-display',
  display: 'swap',
});

// Serif accent for short phrases (eyebrows, the odd italic word)
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
      </body>
    </html>
  );
}
