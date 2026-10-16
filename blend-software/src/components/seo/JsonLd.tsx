import { absoluteUrl, site } from '@/lib/site';

type Schema = Record<string, unknown>;

export default function JsonLd({ data }: { data: Schema | Schema[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is escaped for "<" so the payload cannot close the script tag
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

export const organizationId = absoluteUrl('/#organization');

export const organizationSchema: Schema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': organizationId,
  name: site.name,
  url: site.url,
  logo: absoluteUrl('/logo-blend-mark.svg'),
  image: absoluteUrl('/opengraph-image'),
  description: site.description,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.locality,
    addressRegion: site.region,
    addressCountry: site.countryCode,
  },
  areaServed: { '@type': 'Country', name: site.country },
  sameAs: [site.instagram],
  knowsAbout: [
    'Desarrollo de software a medida',
    'Automatización de procesos',
    'Integración de sistemas',
    'Inteligencia artificial aplicada',
  ],
};

export const websiteSchema: Schema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': absoluteUrl('/#website'),
  url: site.url,
  name: site.name,
  inLanguage: 'es-AR',
  publisher: { '@id': organizationId },
};

export const breadcrumbSchema = (items: { name: string; path: string }[]): Schema => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Inicio', path: '/' }, ...items].map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});
