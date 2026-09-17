import { useState } from 'react'
import { Link } from 'react-router-dom'
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
  'from-sky-500 via-blue-500 to-indigo-500',
  'from-rose-500 via-pink-500 to-fuchsia-500',
]

export default function Blog() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sortBy, setSortBy] = useState('newest')

  const categories = ['All', ...new Set(blogs.map((b) => b.category))]

  // Filter + Sort
  let filtered = blogs.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      b.category.toLowerCase().includes(search.toLowerCase())
    const matchesCat = category === 'All' || b.category === category
    return matchesSearch && matchesCat
  })

  filtered = [...filtered].sort((a, b) => {
    if (sortBy === 'newest') return new Date(b.date) - new Date(a.date)
    if (sortBy === 'oldest') return new Date(a.date) - new Date(b.date)
    if (sortBy === 'title') return a.title.localeCompare(b.title)
    return 0
  })

  const featuredPost = filtered[0]
  const restPosts = filtered.slice(1)

  return (
    <>
      <SEO
        title="Blog — TechInsider"
        description="Explore in-depth articles on web development, SEO, blogging and monetization. Fresh content published weekly."
        keywords="web development blog, SEO tutorials, blogging guides, AdSense tips"
      />

      {/* ============ HERO ============ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/80 via-white to-white">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-300/40 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
            📚 Our Blog
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Insights &{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Tutorials
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Deep dives into web development, SEO, blogging and monetization.
            Fresh content published every week.
          </p>
        </div>
      </section>

      {/* ============ SEARCH + FILTERS ============ */}
      <section className="sticky top-16 md:top-20 z-30 bg-white/80 backdrop-blur-lg border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            {/* Search */}
            <div className="flex-1 relative">
              <svg
                className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search articles, categories..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition bg-white"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition bg-white font-medium text-slate-700 cursor-pointer"
            >
              <option value="newest">📅 Newest First</option>
              <option value="oldest">📅 Oldest First</option>
              <option value="title">🔤 Title (A-Z)</option>
            </select>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  category === c
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 -translate-y-0.5'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {c}
                {c !== 'All' && (
                  <span className="ml-1.5 opacity-60">
                    ({blogs.filter((b) => b.category === c).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BLOG GRID ============ */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Result count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-slate-500">
              Showing <span className="font-bold text-slate-900">{filtered.length}</span>{' '}
              {filtered.length === 1 ? 'article' : 'articles'}
              {category !== 'All' && (
                <>
                  {' '}
                  in <span className="font-semibold text-indigo-600">{category}</span>
                </>
              )}
              {search && (
                <>
                  {' '}
                  matching "<span className="font-semibold text-indigo-600">{search}</span>"
                </>
              )}
            </p>

            {(search || category !== 'All') && (
              <button
                onClick={() => {
                  setSearch('')
                  setCategory('All')
                }}
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
              >
                Clear filters
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* No results */}
          {filtered.length === 0 && (
            <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No articles found</h3>
              <p className="text-slate-500 mb-6">
                Try a different search term or category
              </p>
              <button
                onClick={() => {
                  setSearch('')
                  setCategory('All')
                }}
                className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Featured Post */}
          {featuredPost && (
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:border-indigo-200 transition-all mb-10"
            >
              <div className="relative h-64 lg:h-auto bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-3xl rotate-45"></div>
                </div>
                <div className="relative">
                  <div className="text-white text-7xl md:text-8xl font-extrabold opacity-90 mb-3">
                    {featuredPost.category.charAt(0)}
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider">
                    ⭐ Featured
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1.5 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full mb-4 w-fit uppercase tracking-wider">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-indigo-600 transition">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500 pt-6 border-t border-slate-100">
                  <span className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                      {featuredPost.author.charAt(0)}
                    </div>
                    {featuredPost.author}
                  </span>
                  <span>•</span>
                  <span>
                    {new Date(featuredPost.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Ad */}
          <AdBanner />

          {/* Articles Grid */}
          {restPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
              {restPosts.map((blog, i) => (
                <Link
                  key={blog.slug}
                  to={`/blog/${blog.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:border-transparent hover:-translate-y-2 transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${gradientCombos[i % gradientCombos.length]} flex items-center justify-center overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
                      <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-white rounded-2xl rotate-12"></div>
                    </div>
                    <span className="relative text-white text-6xl font-extrabold opacity-90 group-hover:scale-110 transition-transform duration-300">
                      {blog.category.charAt(0)}
                    </span>
                    <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                      {blog.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition leading-snug min-h-[3.5rem]">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-5 line-clamp-2 leading-relaxed flex-grow">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {new Date(blog.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        5 min
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-4">📬</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Never Miss an Article
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest tutorials and tips delivered to your inbox.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all"
          >
            Subscribe Now →
          </Link>
        </div>
      </section>
    </>
  )
}