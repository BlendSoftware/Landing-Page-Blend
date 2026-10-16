/**
 * Single source of truth for business data used in copy, metadata and
 * structured data. Change the email or domain here, not in components.
 */
export const site = {
  name: 'Blend Software',
  legalName: 'Blend Software',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://blendsoftware.tech').replace(/\/$/, ''),
  email: 'contacto@blendsoftware.tech',
  instagram: 'https://www.instagram.com/blendsoftware.mza/',
  locality: 'Mendoza',
  region: 'Mendoza',
  country: 'Argentina',
  countryCode: 'AR',
  responseTime: 'menos de 48 horas hábiles',
  description:
    'Estudio de desarrollo de software a medida en Mendoza. Creamos sistemas de gestión, automatizamos procesos e integramos las herramientas que tu empresa ya usa.',
} as const;

export const absoluteUrl = (path = '/') => `${site.url}${path.startsWith('/') ? path : `/${path}`}`;

export const mainNav = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Cómo trabajamos', href: '/proceso' },
  { label: 'Casos', href: '/resultados' },
] as const;
