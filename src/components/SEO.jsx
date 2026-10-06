import { Helmet } from 'react-helmet-async'

const SITE_URL =
  import.meta.env.VITE_SITE_URL || 'https://adsense-website.netlify.app'

const SITE_NAME = 'TechInsider'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`

export default function SEO({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
}) {
  // Build full URL safely
  const fullUrl = url
    ? url.startsWith('http')
      ? url
      : `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`
    : SITE_URL

  const fullImage = image
    ? image.startsWith('http')
      ? image
      : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`
    : DEFAULT_IMAGE

  // Ensure title always has site name suffix (unless it already has it)
  const fullTitle = title
    ? title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`
    : SITE_NAME

  return (
    <Helmet>
      {/* ============ PRIMARY META ============ */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="author" content={SITE_NAME} />
      <meta name="language" content="English" />

      {/* ============ OPEN GRAPH (Facebook, LinkedIn) ============ */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* ============ TWITTER CARD ============ */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* ============ ARTICLE SPECIFIC (only for blog posts) ============ */}
      {type === 'article' && (
        <>
          <meta property="article:publisher" content={SITE_NAME} />
        </>
      )}
    </Helmet>
  )
}