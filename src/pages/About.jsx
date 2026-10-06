import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const values = [
  {
    icon: '🎯',
    title: 'Quality First',
    desc: 'Every article is thoroughly researched and reviewed before publishing.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '💡',
    title: 'Real Value',
    desc: 'We focus on actionable insights you can apply immediately, not just theory.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: '🔒',
    title: 'Transparency',
    desc: 'We clearly disclose affiliate links, sponsorships and any potential conflicts.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: '🚀',
    title: 'Always Evolving',
    desc: 'Content is continuously updated to stay current with the latest trends.',
    color: 'from-purple-500 to-pink-500',
  },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Us — TechInsider"
        description="Learn about TechInsider — our mission, values and what drives our content. A new blog focused on web development, SEO, blogging and monetization."
        keywords="about techinsider, our mission, web development blog, SEO blog"
      />

      {/* ============ HERO ============ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/80 via-white to-white">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-300/40 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
            About Us
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            We help people{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              learn and grow online
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            TechInsider is a learning platform dedicated to helping developers, bloggers and
            entrepreneurs build successful online businesses with practical, actionable guides.
          </p>
        </div>
      </section>

      {/* ============ OUR STORY — HONEST VERSION ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6 leading-tight">
                A new blog with a clear mission
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
                <p>
                  TechInsider is a new blog created to share practical, hands-on guides on{' '}
                  <strong>web development</strong>, <strong>SEO</strong>,{' '}
                  <strong>blogging</strong> and <strong>monetization</strong>.
                </p>
                <p>
                  We're starting small — publishing fresh, well-researched articles every week.
                  As we grow, so does our library of guides.
                </p>
                <p>
                  Our mission is simple: provide honest, actionable content that helps you
                  succeed online. No fluff. No filler. Just value.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  Read Our Blog →
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-800 font-semibold border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-10 aspect-square flex items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-8 left-8 w-32 h-32 border-4 border-white rounded-full"></div>
                  <div className="absolute bottom-8 right-8 w-40 h-40 border-4 border-white rounded-3xl rotate-45"></div>
                  <div className="absolute top-1/2 left-1/2 w-24 h-24 border-4 border-white rounded-full"></div>
                </div>
                <div className="relative text-center text-white">
                  <div className="text-7xl md:text-8xl font-extrabold mb-4">T</div>
                  <div className="text-sm uppercase tracking-widest opacity-90">
                    TechInsider
                  </div>
                </div>
              </div>

              {/* Floating badge — honest */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-2xl">
                    ✓
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">100%</div>
                    <div className="text-xs text-slate-500 font-medium">Free Content</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT WE COVER ============ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
              Topics
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              What We Write About
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Four core areas we focus on
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '💻',
                title: 'Web Development',
                desc: 'React, JavaScript, CSS, and modern web technologies explained step by step.',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: '🔍',
                title: 'SEO',
                desc: 'Keyword research, on-page optimization, and ranking strategies that work.',
                color: 'from-emerald-500 to-teal-500',
              },
              {
                icon: '✍️',
                title: 'Blogging',
                desc: 'How to start, grow, and maintain a successful blog from scratch.',
                color: 'from-amber-500 to-orange-500',
              },
              {
                icon: '💰',
                title: 'Monetization',
                desc: 'AdSense, affiliate marketing, and multiple income streams for creators.',
                color: 'from-pink-500 to-rose-500',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-7 rounded-2xl bg-white border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl mb-5 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we publish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="group p-7 rounded-2xl bg-white border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-3xl mb-5 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY TRUST US ============ */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
              Our Promise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our Commitment to You
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              What you can always expect from TechInsider
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '📝',
                title: 'Original Content',
                desc: 'Every article is written by us — no scraped, spun, or AI-generated content.',
              },
              {
                icon: '🔍',
                title: 'Researched Facts',
                desc: 'We verify information from official sources before publishing.',
              },
              {
                icon: '🚫',
                title: 'No Clickbait',
                desc: 'Our titles and content match. What you see is what you get.',
              },
              {
                icon: '🔄',
                title: 'Regular Updates',
                desc: 'We review and refresh articles when tools or best practices change.',
              },
              {
                icon: '💬',
                title: 'Open Communication',
                desc: 'Reach out anytime through our contact page — we respond within 48 hours.',
              },
              {
                icon: '🚫',
                title: 'No Spam',
                desc: 'We never sell your data or send unsolicited emails.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-10 md:p-16 text-center text-white shadow-2xl">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative">
              <div className="text-5xl mb-6">🚀</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-white/90 mb-10 max-w-2xl mx-auto text-lg">
                Explore our growing library of practical guides and tutorials.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-700 font-bold hover:bg-slate-100 hover:scale-105 transition-all shadow-lg"
                >
                  📚 Browse Articles
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-bold border border-white/30 hover:bg-white/20 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}