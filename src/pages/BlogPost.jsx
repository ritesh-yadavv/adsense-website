import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { blogs } from '../data/blogs'
import SEO from '../components/SEO'
import AdBanner from '../components/AdBanner'

const gradientCombos = [
  'from-blue-500 via-cyan-500 to-teal-500',
  'from-emerald-500 via-teal-500 to-cyan-500',
  'from-amber-500 via-orange-500 to-red-500',
  'from-pink-500 via-rose-500 to-red-500',
  'from-indigo-500 via-purple-500 to-pink-500',
  'from-violet-500 via-purple-500 to-fuchsia-500',
]

export default function BlogPost() {
  const { slug } = useParams()
  const blog = blogs.find((b) => b.slug === slug)
  const [copied, setCopied] = useState(false)
  const [progress, setProgress] = useState(0)

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setProgress(scrolled)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // Not found
  if (!blog) {
    return (
      <>
        <SEO title="Article Not Found — TechInsider" description="The article you are looking for does not exist." />
        <section className="min-h-[70vh] flex items-center justify-center px-4 pt-32">
          <div className="text-center">
            <div className="text-8xl mb-6">🔍</div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Article Not Found</h1>
            <p className="text-slate-500 mb-8">The article you're looking for doesn't exist or has been moved.</p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all"
            >
              ← Back to Blog
            </Link>
          </div>
        </section>
      </>
    )
  }

  // Related posts (same category, excluding current)
  const related = blogs
    .filter((b) => b.category === blog.category && b.slug !== blog.slug)
    .slice(0, 3)

  // Fallback: if no related in same category, show random
  const finalRelated = related.length > 0 ? related : blogs.filter((b) => b.slug !== blog.slug).slice(0, 3)

  const postUrl = typeof window !== 'undefined' ? window.location.href : ''

  const handleCopyLink = () => {
    navigator.clipboard.writeText(postUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareLinks = [
    {
      name: 'Twitter',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(postUrl)}`,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: 'hover:bg-sky-500 hover:border-sky-500',
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      color: 'hover:bg-blue-600 hover:border-blue-600',
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: 'hover:bg-blue-700 hover:border-blue-700',
    },
    {
      name: 'WhatsApp',
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(blog.title + ' ' + postUrl)}`,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      color: 'hover:bg-green-500 hover:border-green-500',
    },
  ]

  // Simple table of contents from content headings
  const tocItems = blog.content
    .split('\n')
    .filter((line) => line.trim().length > 0 && line.trim().length < 60 && !line.includes('.') && !line.startsWith('-'))
    .slice(0, 6)

  return (
    <>
      <SEO
        title={`${blog.title} — TechInsider`}
        description={blog.excerpt}
        keywords={`${blog.category.toLowerCase()}, ${blog.title.toLowerCase()}, tutorial, guide`}
        url={postUrl}
      />

      {/* Scroll Progress Bar */}
      <div className="fixed top-16 md:top-20 left-0 right-0 h-1 bg-transparent z-40">
        <div
          className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transition-all duration-150"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* ============ HERO ============ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/80 via-white to-white">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-300/40 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6 flex-wrap">
            <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-indigo-600 transition">Blog</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium truncate max-w-[200px]">{blog.title}</span>
          </nav>

          {/* Category badge */}
          <span className="inline-block px-3 py-1.5 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full mb-5 uppercase tracking-wider">
            {blog.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
            {blog.excerpt}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pb-6 border-b border-slate-200">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/30">
                {blog.author.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{blog.author}</div>
                <div className="text-xs text-slate-500">Author</div>
              </div>
            </div>

            <span className="hidden sm:block text-slate-300">•</span>

            {/* Date */}
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(blog.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </div>

            <span className="hidden sm:block text-slate-300">•</span>

            {/* Read time */}
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              5 min read
            </div>
          </div>
        </div>
      </section>

      {/* ============ ARTICLE BODY ============ */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero image */}
          <div className="relative h-64 md:h-96 rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center overflow-hidden mb-10 shadow-2xl">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-8 left-8 w-40 h-40 border-4 border-white rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-48 h-48 border-4 border-white rounded-3xl rotate-45"></div>
              <div className="absolute top-1/2 left-1/2 w-24 h-24 border-4 border-white rounded-full"></div>
            </div>
            <div className="relative text-white text-9xl font-extrabold opacity-90">
              {blog.category.charAt(0)}
            </div>
          </div>

          {/* Share buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200 mb-10">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share this article
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {shareLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Share on ${s.name}`}
                  className={`w-9 h-9 rounded-lg bg-white border border-slate-200 text-slate-600 flex items-center justify-center transition-all hover:text-white hover:-translate-y-0.5 ${s.color}`}
                >
                  {s.icon}
                </a>
              ))}
              <button
                onClick={handleCopyLink}
                className="h-9 px-3 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 flex items-center gap-1.5 transition-all text-xs font-semibold"
              >
                {copied ? (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3" />
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Article content */}
          <article className="prose-custom text-lg text-slate-700 leading-relaxed">
            {blog.content.split('\n').map((para, i) => {
              const trimmed = para.trim()
              if (!trimmed) return null

              // H2 detection (short line without punctuation)
              if (trimmed.length < 60 && !trimmed.endsWith('.') && !trimmed.startsWith('-') && trimmed.split(' ').length <= 8) {
                return <h2 key={i}>{trimmed}</h2>
              }

              // List item
              if (trimmed.startsWith('-')) {
                return <li key={i}>{trimmed.substring(1).trim()}</li>
              }

              return <p key={i}>{trimmed}</p>
            })}
          </article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm font-bold text-slate-700">Tags:</span>
              {[blog.category, 'Tutorial', 'Guide', '2025'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full hover:bg-indigo-100 transition cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Card */}
          <div className="mt-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-3xl shadow-lg shadow-indigo-500/30 flex-shrink-0">
                {blog.author.charAt(0)}
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                  Written by
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{blog.author}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Full-stack developer and content creator passionate about teaching web
                  technologies. Writing in-depth tutorials to help developers level up their skills.
                </p>
              </div>
            </div>
          </div>

          {/* In-article Ad */}
          <AdBanner />
        </div>
      </section>

      {/* ============ RELATED POSTS ============ */}
      {finalRelated.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
                Keep Reading
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Related Articles
              </h2>
              <p className="text-slate-600">More articles you might enjoy</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {finalRelated.map((post, i) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                >
                  <div
                    className={`relative h-44 bg-gradient-to-br ${gradientCombos[i % gradientCombos.length]} flex items-center justify-center overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
                      <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-white rounded-2xl rotate-12"></div>
                    </div>
                    <span className="relative text-white text-5xl font-extrabold opacity-90 group-hover:scale-110 transition-transform duration-300">
                      {post.category.charAt(0)}
                    </span>
                    <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-5 line-clamp-2 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
                      <span>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="text-indigo-600 font-semibold flex items-center gap-1">
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ CTA ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-4">📬</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Enjoyed This Article?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get more content like this delivered weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all"
            >
              ← More Articles
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-800 font-semibold border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}