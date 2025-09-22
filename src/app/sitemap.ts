// app/sitemap.ts
import { MetadataRoute } from 'next';
import { produtosData } from './layout';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/produtos`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/login`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/register`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/pesquisa`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/carrinho`,
      lastModified: new Date(),
      priority: 0.5,
    },
  ];

  const productRoutes: MetadataRoute.Sitemap = produtosData.map((produto) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/produto/${produto.id}`,
    lastModified: new Date('2025-08-01'),
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes];
}
