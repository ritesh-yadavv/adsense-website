import { Link } from 'react-router-dom'
import { blogs } from '../data/blogs'
import SEO from '../components/SEO'
import AdBanner from '../components/AdBanner'

const categories = [
  { name: 'Web Development', icon: '💻', slug: 'Web Development', color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50', text: 'text-blue-600' },
  { name: 'SEO', icon: '🔍', slug: 'SEO', color: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-50', text: 'text-emerald-600' },
  { name: 'Blogging', icon: '✍️', slug: 'Blogging', color: 'from-amber-500 to-orange-500', bg: 'bg-amber-50', text: 'text-amber-600' },
  { name: 'Monetization', icon: '💰', slug: 'Monetization', color: 'from-pink-500 to-rose-500', bg: 'bg-pink-50', text: 'text-pink-600' },
]

const gradientCombos = [
  'from-blue-500 via-cyan-500 to-teal-500',
  'from-emerald-500 via-teal-500 to-cyan-500',
  'from-amber-500 via-orange-500 to-red-500',
  'from-pink-500 via-rose-500 to-red-500',
  'from-indigo-500 via-purple-500 to-pink-500',
  'from-violet-500 via-purple-500 to-fuchsia-500',
]

export default function Home() {
  const featured = blogs[0]
  const recent = blogs.slice(1, 7)
  const trending = blogs.slice(7, 10)

  return (
    <>
      <SEO
        title="TechInsider — Web Development, SEO & Blogging Guides"
        description="Learn web development, SEO, blogging and monetization with in-depth guides and tutorials. Trusted by 10,000+ readers worldwide."
        keywords="web development, SEO, blogging, AdSense, React tutorials, monetization"
      />

      {/* ============ HERO SECTION ============ */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/80 via-white to-white">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-300/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-100 text-indigo-700 text-sm font-medium mb-8 shadow-sm hover:shadow-md transition">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Trusted by 10,000+ readers worldwide
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Learn, Build &{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Grow Online
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 10C50 2 100 2 150 6C200 10 250 10 298 4"
                    stroke="url(#grad)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="300" y2="0">
                      <stop stopColor="#6366f1" />
                      <stop offset="0.5" stopColor="#a855f7" />
                      <stop offset="1" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              In-depth guides on <span className="font-semibold text-slate-800">web development</span>,{' '}
              <span className="font-semibold text-slate-800">SEO</span>,{' '}
              <span className="font-semibold text-slate-800">blogging</span> and{' '}
              <span className="font-semibold text-slate-800">monetization</span>. Everything you need
              to build a successful online presence — in one place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/blog"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all"
              >
                <span>📚 Explore Articles</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-800 font-semibold border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all shadow-sm hover:shadow-md"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { num: '1+', label: 'Articles Published', icon: '📝' },
                { num: '3+', label: 'Monthly Readers', icon: '👥' },
                { num: '4', label: 'Content Categories', icon: '🏷️' },
                { num: '100%', label: 'Free Access', icon: '✨' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/60 hover:border-indigo-200 hover:shadow-lg transition-all"
                >
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {s.num}
                  </div>
                  <div className="text-xs md:text-sm text-slate-500 font-medium mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
              Categories
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Find exactly what you need to level up your skills
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to="/blog"
                className="group relative overflow-hidden p-7 rounded-2xl bg-white border-2 border-slate-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-white/20 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 group-hover:text-white transition-colors text-lg mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-slate-500 group-hover:text-white/90 transition-colors flex items-center gap-1">
                    Explore
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED ARTICLE ============ */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 uppercase tracking-wider mb-3">
                <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
                ⭐ Featured
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                Editor's Pick
              </h2>
            </div>
            <Link
              to="/blog"
              className="hidden md:inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition"
            >
              View all articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <Link
            to={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:border-indigo-200 transition-all duration-300"
          >
            {/* Left - Visual */}
            <div className="relative h-72 lg:h-auto bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-3xl rotate-45"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-white rounded-full"></div>
              </div>
              <div className="relative text-center">
                <div className="text-white text-8xl md:text-9xl font-extrabold opacity-90 mb-4">
                  {featured.category.charAt(0)}
                </div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider">
                  Featured Article
                </span>
              </div>
            </div>

            {/* Right - Content */}
            <div className="p-8 lg:p-14 flex flex-col justify-center">
              <span className="inline-block px-3 py-1.5 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full mb-5 w-fit uppercase tracking-wider">
                {featured.category}
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-5 leading-tight group-hover:text-indigo-600 transition">
                {featured.title}
              </h3>
              <p className="text-slate-600 mb-7 leading-relaxed text-lg">{featured.excerpt}</p>

              <div className="flex items-center gap-5 text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100">
                <span className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                    {featured.author.charAt(0)}
                  </div>
                  {featured.author}
                </span>
                <span>•</span>
                <span>
                  {new Date(featured.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                <span>•</span>
                <span>8 min read</span>
              </div>

              <div className="text-indigo-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all text-lg">
                Read Full Article
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ============ AD BANNER ============ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdBanner />
      </div>

      {/* ============ RECENT ARTICLES ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 uppercase tracking-wider mb-3">
                <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
                📖 Latest Posts
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                Recent Articles
              </h2>
            </div>
            <Link
              to="/blog"
              className="hidden md:inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition"
            >
              View all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {recent.map((blog, i) => (
              <Link
                key={blog.slug}
                to={`/blog/${blog.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:border-transparent hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image / Gradient */}
                <div className={`relative h-48 bg-gradient-to-br ${gradientCombos[i % 6]} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-white rounded-2xl rotate-12"></div>
                  </div>
                  <span className="relative text-white text-6xl font-extrabold opacity-90 group-hover:scale-110 transition-transform duration-300">
                    {blog.category.charAt(0)}
                  </span>
                  <span className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {blog.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition leading-snug min-h-[3.5rem]">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-5 line-clamp-2 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      5 min read
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="md:hidden text-center mt-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/30"
            >
              View All Articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ TRENDING ============ */}
      {trending.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 uppercase tracking-wider mb-3">
                <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
                🔥 Trending Now
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                Most Popular
              </h2>
            </div>

            <div className="space-y-4">
              {trending.map((blog, i) => (
                <Link
                  key={blog.slug}
                  to={`/blog/${blog.slug}`}
                  className="group flex items-center gap-6 p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:border-indigo-200 transition-all"
                >
                  <div className="flex-shrink-0 text-5xl font-extrabold bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent w-16 text-center">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-grow min-w-0">
                    <span className="inline-block text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">
                      {blog.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition line-clamp-1">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 line-clamp-1 hidden md:block">
                      {blog.excerpt}
                    </p>
                  </div>
                  <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ NEWSLETTER ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-10 md:p-16 text-center text-white shadow-2xl">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm mb-6 text-4xl">
                📬
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Get Weekly Insights
              </h2>
              <p className="text-white/90 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                Join 10,000+ developers and bloggers. Get the latest tips, tutorials and
                monetization strategies delivered to your inbox every week.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  alert('Thank you for subscribing! ✅')
                }}
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:bg-white/30 focus:border-white/50 backdrop-blur-sm transition"
                />
                <button
                  type="submit"
                  className="px-8 py-4 rounded-xl bg-white text-indigo-700 font-bold hover:bg-slate-100 hover:scale-105 transition-all shadow-lg"
                >
                  Subscribe →
                </button>
              </form>
              <p className="text-xs text-white/70 mt-5 flex items-center justify-center gap-2">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Why Choose TechInsider?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We deliver real value, not fluff
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Actionable Content',
                desc: 'Every article is packed with practical tips you can apply immediately to your projects.',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: '🔄',
                title: 'Always Updated',
                desc: 'We keep our content fresh with the latest trends, tools and industry best practices.',
                color: 'from-emerald-500 to-teal-500',
              },
              {
                icon: '🛡️',
                title: 'Trusted Source',
                desc: 'Reliable, well-researched information written by experienced professionals.',
                color: 'from-purple-500 to-pink-500',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Explore our full library of articles and take your skills to the next level.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all text-lg"
          >
            Browse All Articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}