import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://auto-ecole-yosraharrabi.tn'; // Replace with actual domain

  // We add the standard locales
  const locales = ['fr', 'ar', 'en'];
  
  const entries: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  }));

  // Default redirect route
  entries.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  });

  return entries;
}
