import type { MetadataRoute } from 'next';

const ROUTES: { path: string; priority: number }[] = [
  { path: '', priority: 1 },
  { path: '/bio', priority: 0.8 },
  { path: '/grafik', priority: 0.8 },
  { path: '/kontaktua', priority: 0.8 },
  { path: '/cas', priority: 0.8 },
  { path: '/cas-bio', priority: 0.8 },
  { path: '/cas-grafik', priority: 0.8 },
  { path: '/cas-contacto', priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority }) => ({
    url: `https://www.sutangrafik.com${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }));
}
