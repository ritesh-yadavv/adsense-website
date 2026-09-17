import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  const socials = [
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
 
    {
      name: 'YouTube',
      href: 'https://youtube.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ]

  const links = {
    explore: [
      { label: 'Home', to: '/' },
      { label: 'Blog', to: '/blog' },
      { label: 'About Us', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
    categories: [
      { label: 'Web Development', to: '/blog' },
      { label: 'SEO', to: '/blog' },
      { label: 'Blogging', to: '/blog' },
      { label: 'Monetization', to: '/blog' },
    ],
    legal: [
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms & Conditions', to: '/terms' },
      { label: 'Disclaimer', to: '/disclaimer' },
    ],
  }

  return (
    <footer className="relative bg-slate-950 text-slate-400 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Stay in the loop 📬
              </h3>
              <p className="text-slate-400">
                Get the latest articles, tutorials and tips delivered straight to your inbox. No spam, ever.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <svg
                  className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                />
              </div>
              <button
                type="submit"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all whitespace-nowrap"
              >
                {subscribed ? '✅ Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand — spans 2 cols on desktop */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-5 group w-fit">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition">
                T
              </div>
              <span className="text-2xl font-bold text-white">TechInsider</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted source for web development, SEO, blogging and monetization guides.
              Learn, build and grow with us.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 hover:border-transparent text-slate-400 hover:text-white flex items-center justify-center transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {links.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
                  >
                    <span className="w-0 h-px bg-indigo-400 group-hover:w-3 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-3 text-sm">
              {links.categories.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
                  >
                    <span className="w-0 h-px bg-indigo-400 group-hover:w-3 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
                  >
                    <span className="w-0 h-px bg-indigo-400 group-hover:w-3 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@techinsider.com" className="hover:text-indigo-400 transition break-all">
                  contact@techinsider.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-slate-500">
              © {new Date().getFullYear()}{' '}
              <span className="text-white font-semibold">TechInsider</span>. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-slate-500">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                All systems operational
              </span>
              <span className="text-slate-500 flex items-center gap-1.5">
                Made with <span className="text-red-500">❤️</span> in India
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/60 hover:-translate-y-1 transition-all z-40 flex items-center justify-center"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  )
}