import { MetadataRoute } from 'next'
import { models } from '@/data/models'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://xiaohongmodels.com'
  const currentDate = new Date()
  
  // Main pages with high priority
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/newyork`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/losangeles`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sanfrancisco`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/boston`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/seattle`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lasvegas`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  // Model detail pages with medium priority
  const modelPages = models.map((model) => ({
    url: `${baseUrl}/${model.city}/${model.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // City pages with pagination (assuming 10 models per page)
  const cityPages: MetadataRoute.Sitemap = []
  const cities = ['newyork', 'losangeles', 'sanfrancisco', 'boston', 'seattle', 'lasvegas']
  
  cities.forEach(city => {
    const cityModels = models.filter(model => model.city === city)
    const totalPages = Math.ceil(cityModels.length / 10)
    
    for (let page = 1; page <= totalPages; page++) {
      cityPages.push({
        url: `${baseUrl}/${city}?page=${page}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: page === 1 ? 0.8 : 0.6,
      })
    }
  })

  // Additional SEO pages
  const seoPages = [
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  return [...mainPages, ...modelPages, ...cityPages, ...seoPages]
} 