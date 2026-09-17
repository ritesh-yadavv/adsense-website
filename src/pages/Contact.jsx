import { useState } from 'react'
import SEO from '../components/SEO'

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email Us',
    value: 'pujakumarijn41@gmail.com',
    href: 'mailto:pujakumarijn41@gmail.com',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Call Us',
    value: '+91 8004431753',
    href: 'tel:+918004431753',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    title: 'WhatsApp',
    value: 'Chat with us',
    href: 'https://wa.me/918004431753',
    color: 'from-green-500 to-emerald-600',
  },
]

const faqs = [
  {
    q: 'How can I start learning web development?',
    a: 'Start with HTML, CSS and JavaScript basics. Then move to React or another framework. Our blog has in-depth guides for every step of your journey.',
  },
  {
    q: 'Do you offer paid courses or one-on-one mentoring?',
    a: 'Currently, all our content is 100% free. We may introduce premium courses in the future — subscribe to our newsletter to stay updated.',
  },
  {
    q: 'Can I republish your articles on my website?',
    a: 'Please reach out to us via email first. We generally allow republishing with a clear link back to the original article.',
  },
  {
    q: 'How quickly do you respond to queries?',
    a: 'We usually respond within 24-48 hours on business days. For urgent matters, please WhatsApp us.',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate submit — yahan aap Formspree / EmailJS / backend API use kar sakte ho
    setTimeout(() => {
      console.log('Form data:', form)
      setSent(true)
      setLoading(false)
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    }, 1000)
  }

  return (
    <>
      <SEO
        title="Contact Us — TechInsider"
        description="Get in touch with TechInsider. Email, call or WhatsApp us for queries, feedback or collaborations."
        keywords="contact techinsider, support, feedback, business inquiry"
      />

      {/* ============ HERO ============ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/80 via-white to-white">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-300/40 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
            📬 Get in Touch
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Let's{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have a question, feedback or collaboration idea? We'd love to hear from you.
            Reach out and we'll get back to you within 24-48 hours.
          </p>
        </div>
      </section>

      {/* ============ CONTACT CARDS ============ */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-7 border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white mb-5 mx-auto shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{info.title}</h3>
                <p className="text-slate-600 text-sm break-all">{info.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FORM + INFO ============ */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form - takes 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-10 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form and we'll respond as soon as possible.
                </p>

                {sent && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3 animate-fade-up">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">Message Sent Successfully!</div>
                      <div className="text-sm">We'll get back to you within 24-48 hours.</div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="How can we help you?"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows="6"
                      required
                      placeholder="Tell us more about your query..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition resize-none"
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Info Panel - takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Availability card */}
              <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                    </span>
                    <span className="text-sm font-semibold">Currently Available</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">We're Online</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-6">
                    Our team responds within 24-48 hours. For urgent queries, WhatsApp is the fastest way to reach us.
                  </p>

                  <a
                    href="https://wa.me/918004431753"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-indigo-700 font-bold hover:bg-slate-100 transition shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Response time card */}
              <div className="bg-white rounded-3xl border border-slate-200 p-7">
                <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                  <span className="text-2xl">⏱️</span>
                  Response Times
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Email', time: '24-48 hours', color: 'bg-blue-500' },
                    { label: 'WhatsApp', time: '1-4 hours', color: 'bg-green-500' },
                    { label: 'Phone', time: '9 AM - 9 PM IST', color: 'bg-purple-500' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                        <span className="text-sm font-medium text-slate-700">{item.label}</span>
                      </div>
                      <span className="text-sm text-slate-500">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location card */}
              <div className="bg-white rounded-3xl border border-slate-200 p-7">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">📍</span>
                  Based In
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We're a remote-first team operating from India, serving readers across 50+ countries worldwide.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-indigo-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  India
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Quick answers to the most common questions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-indigo-200 transition"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-slate-50 transition"
                >
                  <span className="font-bold text-slate-900 text-base md:text-lg pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center transition-transform ${
                      openFaq === i ? 'rotate-45' : ''
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-4">💬</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Don't hesitate to reach out. We're here to help you succeed online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918004431753"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold shadow-xl shadow-green-500/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all"
            >
              💬 WhatsApp Us
            </a>
            <a
              href="mailto:pujakumarijn41@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-800 font-semibold border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
            >
              ✉️ Send Email
            </a>
          </div>
        </div>
      </section>
    </>
  )
}