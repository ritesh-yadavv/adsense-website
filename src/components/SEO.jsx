import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://adsense-website.netlify.app'

export default function SEO({ title, description, keywords, image, url, type = 'website' }) {
  const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL
  const fullImage = image || `${SITE_URL}/og-image.png`

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="TechInsider" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
    </Helmet>
  )
}