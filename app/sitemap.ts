// app/sitemap.ts
import { MetadataRoute } from 'next'

const baseUrl = 'https://halal.io/'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastUpdated = new Date('2024-10-30') // Update this when you deploy new content

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 1.0    // Homepage gets highest priority
    },
    {
      url: `${baseUrl}/tokenomics`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8    // Core product information
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.7    // Supporting information
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.6    // Supporting information
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.5    // Legal/auxiliary information
    }
  ]

  return routes
}