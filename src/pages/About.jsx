import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const stats = [
  { num: '1+', label: 'Articles Published', icon: '📝' },
  { num: '3+', label: 'Monthly Readers', icon: '👥' },
  { num: '1+', label: 'Countries Reached', icon: '🌍' },
  { num: '4.9', label: 'Average Rating', icon: '⭐' },
]

const values = [
  {
    icon: '🎯',
    title: 'Quality First',
    desc: 'Every article is thoroughly researched, fact-checked and reviewed before publishing.',
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

const team = [
  {
    name: 'Alex Kumar',
    role: 'Founder & Lead Writer',
    bio: 'Full-stack developer with 8+ years of experience. Passionate about teaching web technologies.',
    initials: 'AK',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    name: 'Priya Sharma',
    role: 'SEO & Content Strategist',
    bio: 'SEO specialist who has helped 100+ websites rank on Google page one.',
    initials: 'PS',
    color: 'from-pink-500 to-rose-600',
  },
  {
    name: 'Rohan Verma',
    role: 'Technical Editor',
    bio: 'Reviews every article for accuracy. Loves clean code and clean writing.',
    initials: 'RV',
    color: 'from-emerald-500 to-teal-600',
  },
]

const timeline = [
  {
    year: '2022',
    title: 'The Beginning',
    desc: 'Started as a small personal blog to share web development tips with friends.',
  },
  {
    year: '2023',
    title: 'Growing Community',
    desc: 'Crossed 1,000 monthly readers and expanded into SEO and blogging topics.',
  },
  {
    year: '2024',
    title: 'Monetization Guides',
    desc: 'Added comprehensive guides on AdSense, affiliate marketing and blog monetization.',
  },
  {
    year: '2025',
    title: '10,000+ Readers',
    desc: 'Now trusted by over 10,000 readers worldwide across 50+ countries.',
  },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Us — TechInsider"
        description="Learn about TechInsider — our mission, values and the team behind the content."
        keywords="about techinsider, our team, our mission, web development blog"
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

      {/* ============ STATS ============ */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-200 hover:shadow-xl transition-all text-center"
              >
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {s.num}
                </div>
                <div className="text-xs md:text-sm text-slate-500 font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OUR STORY ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6 leading-tight">
                From a small blog to a global learning hub
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
                <p>
                  TechInsider started in 2022 as a simple personal blog. What began as a way to
                  share coding tips with a few friends quickly grew into something much bigger.
                </p>
                <p>
                  Today, we publish in-depth guides on <strong>web development</strong>,{' '}
                  <strong>SEO</strong>, <strong>blogging</strong> and{' '}
                  <strong>monetization</strong> — trusted by over 10,000 readers across 50+
                  countries.
                </p>
                <p>
                  Our mission is simple: to give you the knowledge and tools to succeed online.
                  No fluff, no filler — just honest, well-researched content.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
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
                    Since 2022
                  </div>
                </div>
              </div>

              {/* Floating badge */}
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

      {/* ============ VALUES ============ */}
      <section className="py-20 bg-slate-50">
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

      {/* ============ TIMELINE ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Milestones So Far
            </h2>
            <p className="text-lg text-slate-600">How we've grown over the years</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transform -translate-x-1/2"></div>

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} w-full md:w-auto`}>
                    <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-200 hover:shadow-xl transition-all">
                      <div className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="hidden md:flex flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 items-center justify-center text-white font-bold shadow-xl shadow-indigo-500/30 z-10 border-4 border-white">
                    {i + 1}
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ TEAM ============ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
              The Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Meet the People Behind
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A small team of passionate writers, developers and strategists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Avatar */}
                <div
                  className={`h-40 bg-gradient-to-br ${member.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-white rounded-2xl rotate-12"></div>
                  </div>
                  <div className="relative w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-3xl font-bold border-4 border-white/40">
                    {member.initials}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                  <p className="text-sm text-indigo-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{member.bio}</p>

                  <div className="flex justify-center gap-2 mt-5">
                    {['twitter', 'linkedin', 'github'].map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 hover:text-white text-slate-500 flex items-center justify-center transition-all"
                        aria-label={s}
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" opacity="0.3" />
                        </svg>
                      </a>
                    ))}
                  </div>
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
                Join thousands of readers getting practical tips and tutorials every week.
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