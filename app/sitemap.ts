import { MetadataRoute } from 'next'

const BASE = 'https://www.kartikeygupta.co'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                                           lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/projects`,                             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/projects/ai-support-platform`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/projects/mcp-workflow-engine`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/projects/cross-platform-ecosystem`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/projects/etl-sync-pipeline`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/projects/automation-framework`,                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`,                                            lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/blog/ai-auto-resolution-production`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/blog/llm-gateway-architecture`,                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/blog/building-mcp-agents`,                        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]
}
