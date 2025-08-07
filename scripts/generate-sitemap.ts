import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

// Load .env variables
dotenv.config()

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com'
const date = new Date().toISOString()

const urls = [
  '',
  '#projects',
  '#services',
  '#contact',
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => {
  const fullUrl = url.startsWith('#') ? `${baseUrl}/${url}` : `${baseUrl}${url}`
  return `<url>
  <loc>${fullUrl}</loc>
  <lastmod>${date}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>${url === '' ? '1.0' : '0.8'}</priority>
</url>`
}).join('\n')}
</urlset>`

fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), sitemap)
console.log('✅ sitemap.xml generated with baseUrl:', baseUrl)
