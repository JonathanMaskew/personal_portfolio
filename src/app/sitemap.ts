import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jonathanmaskew.com/',
      lastModified: new Date(),
    },
  ];
}
