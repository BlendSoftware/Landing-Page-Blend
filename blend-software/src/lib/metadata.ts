import type { Metadata } from 'next';
import { site } from './site';

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  /** Legal pages and similar: indexable but not worth a social card */
  noSocial?: boolean;
}

/**
 * Next.js replaces (does not merge) a parent's `openGraph` object, so each page
 * builds its full social metadata here to keep title, description and URL in sync.
 */
export function pageMetadata({ title, description, path, noSocial = false }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: noSocial
      ? undefined
      : {
          type: 'website',
          locale: 'es_AR',
          siteName: site.name,
          url: path,
          title: `${title} | ${site.name}`,
          description,
          // Re-declared because a page-level openGraph drops the root opengraph-image
          images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `${site.name}: desarrollo de software a medida en Mendoza` }],
        },
  };
}
