import { useEffect } from 'react'
import { site } from '../data/site.js'

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)

  if (!content) {
    element?.remove()
    return
  }

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.append(element)
  }

  element.setAttribute('content', content)
}

function setStructuredData(data) {
  let script = document.head.querySelector('script[data-seo-structured-data]')

  if (!data) {
    script?.remove()
    return
  }

  if (!script) {
    script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.seoStructuredData = 'true'
    document.head.append(script)
  }

  script.textContent = JSON.stringify(data)
}

export default function usePageMeta({ title, description = site.description, path = '', image = site.socialImage, type = 'website', robots = 'index, follow' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — ${site.descriptor}`
    const baseUrl = (site.url || (typeof window !== 'undefined' ? window.location.origin : null))?.replace(/\/+$/, '') || null
    const canonical = baseUrl ? new URL(path || '/', baseUrl).toString() : null
    const imageUrl = image && baseUrl ? new URL(image, baseUrl).toString() : null

    document.title = fullTitle
    setMeta('name', 'description', description)
    setMeta('name', 'author', site.founders)
    setMeta('name', 'robots', robots)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:site_name', site.name)
    setMeta('property', 'og:locale', 'en_IN')
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:image', imageUrl)
    setMeta('name', 'twitter:card', imageUrl ? 'summary_large_image' : 'summary')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', imageUrl)

    if (canonical && baseUrl) {
      setStructuredData({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'ProfessionalService',
            '@id': `${baseUrl}/#studio`,
            name: site.name,
            url: baseUrl,
            description: site.description,
            email: site.email ? `mailto:${site.email}` : undefined,
            founder: [
              { '@type': 'Person', name: 'Sehjal Saxena' },
              { '@type': 'Person', name: 'Sambhav Jain' },
            ],
            address: { '@type': 'PostalAddress', addressCountry: 'IN' },
            ...(site.socialLinks.length ? { sameAs: site.socialLinks.map(({ url }) => url) } : {}),
          },
          {
            '@type': type === 'article' ? 'Article' : 'WebPage',
            '@id': `${canonical}#page`,
            url: canonical,
            name: fullTitle,
            description,
            isPartOf: { '@id': `${baseUrl}/#studio` },
            ...(imageUrl ? { image: imageUrl } : {}),
          },
        ],
      })
    } else {
      setStructuredData(null)
    }

    let link = document.head.querySelector('link[rel="canonical"]')
    if (canonical) {
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.append(link)
      }
      link.href = canonical
    } else {
      link?.remove()
    }
  }, [title, description, path, image, type, robots])
}
