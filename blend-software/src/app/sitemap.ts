import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';

const routes: { path: string; priority: number; changeFrequency: 'monthly' | 'yearly' }[] = [
  { path: '/', priority: 1, changeFrequency: 'monthly' },
  { path: '/servicios', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/contacto', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/proceso', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/solucion', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/resultados', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/tecnologia', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/privacidad', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/terminos', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/cookies', priority: 0.2, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: absoluteUrl(r.path),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
