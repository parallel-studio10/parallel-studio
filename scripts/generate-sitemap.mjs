import fs from 'node:fs'
import path from 'node:path'
import { loadEnv } from 'vite'

const env = loadEnv('production', process.cwd(), '')
const siteUrl = (process.env.VITE_SITE_URL || env.VITE_SITE_URL || '').trim().replace(/\/+$/, '')
const outputDir = path.resolve('dist')

if (!siteUrl) {
  console.warn('[seo] VITE_SITE_URL is not set; keeping the crawlable robots.txt without a sitemap URL.')
  process.exit(0)
}

const routes = [
  { path: '/', priority: '1.0' },
  { path: '/work', priority: '0.8' },
  { path: '/services', priority: '0.8' },
  { path: '/about', priority: '0.7' },
  { path: '/contact', priority: '0.8' },
  { path: '/work/studydump', priority: '0.7' },
]

const escapeXml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;')
const urls = routes.map(({ path: route, priority }) => `  <url>\n    <loc>${escapeXml(`${siteUrl}${route}`)}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`).join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), sitemap)
fs.writeFileSync(path.join(outputDir, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`)
console.log(`[seo] Generated sitemap.xml for ${siteUrl}`)
