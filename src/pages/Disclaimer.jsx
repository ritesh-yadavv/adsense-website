import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const sections = [
  { id: 'general', title: 'General Disclaimer' },
  { id: 'accuracy', title: 'Accuracy of Information' },
  { id: 'professional', title: 'Professional Disclaimer' },
  { id: 'external-links', title: 'External Links Disclaimer' },
  { id: 'affiliates', title: 'Affiliates Disclaimer' },
  { id: 'adsense', title: 'AdSense & Advertising Disclaimer' },
  { id: 'testimonials', title: 'Testimonials Disclaimer' },
  { id: 'errors', title: 'Errors & Omissions' },
  { id: 'fair-use', title: 'Fair Use Notice' },
  { id: 'views', title: 'Views Expressed' },
  { id: 'consent', title: 'Consent' },
  { id: 'contact', title: 'Contact Us' },
]

export default function Disclaimer() {
  return (
    <>
      <SEO
        title="Disclaimer — TechInsider"
        description="Read the Disclaimer for TechInsider. Important information about our content, accuracy and liability."
        keywords="disclaimer, content disclaimer, affiliate disclaimer, AdSense disclaimer"
      />

      {/* ============ HERO ============ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/80 via-white to-white">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-300/40 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider mb-6">
            ⚠️ Legal Notice
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Website{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Disclaimer
            </span>
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Please read this disclaimer carefully before using our website. The information
            provided is for general informational purposes only.
          </p>

          <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-600">
            <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Last Updated: <strong className="text-slate-900">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</strong>
          </div>
        </div>
      </section>

      {/* ============ CONTENT ============ */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* TOC Sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  Contents
                </h3>
                <nav className="space-y-1 max-h-[70vh] overflow-y-auto">
                  {sections.map((s, i) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition"
                    >
                      <span className="text-indigo-400 font-mono text-xs mr-2">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm">
                {/* Warning banner */}
                <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl mb-8 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-amber-900 mb-1">Important Notice</div>
                    <p className="text-amber-800 m-0 text-sm">
                      The information on this website is provided "as is" and for general
                      informational purposes only. We make no warranties about the completeness,
                      reliability or accuracy of this information.
                    </p>
                  </div>
                </div>

                <div className="prose-custom text-slate-700 leading-relaxed">

                  {/* 1. General Disclaimer */}
                  <section id="general" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        1
                      </span>
                      General Disclaimer
                    </h2>
                    <p>
                      The information provided by <strong>TechInsider</strong> ("we", "us" or "our")
                      on our website is for general informational purposes only. All information on
                      the Site is provided in good faith, however we make no representation or
                      warranty of any kind, express or implied, regarding the accuracy, adequacy,
                      validity, reliability, availability or completeness of any information on the
                      Site.
                    </p>
                    <p>
                      Under no circumstance shall we have any liability to you for any loss or damage
                      of any kind incurred as a result of the use of the Site or reliance on any
                      information provided on the Site. Your use of the Site and your reliance on
                      any information on the Site is solely at your own risk.
                    </p>
                  </section>

                  {/* 2. Accuracy */}
                  <section id="accuracy" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        2
                      </span>
                      Accuracy of Information
                    </h2>
                    <p>
                      While we strive to keep the information on our website up-to-date and correct,
                      we make no representations or warranties of any kind, express or implied,
                      about the completeness, accuracy, reliability or availability with respect to
                      the website or the information, products, services or related graphics
                      contained on the website for any purpose.
                    </p>
                    <p>
                      Any reliance you place on such information is therefore strictly at your own
                      risk. Technology and best practices evolve rapidly, so always verify
                      information from official sources before making important decisions.
                    </p>
                  </section>

                  {/* 3. Professional */}
                  <section id="professional" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        3
                      </span>
                      Professional Disclaimer
                    </h2>
                    <p>
                      The Site cannot and does not contain professional advice. The information is
                      provided for general informational and educational purposes only and is not a
                      substitute for professional advice.
                    </p>
                    <p>
                      Accordingly, before taking any actions based upon such information, we
                      encourage you to consult with the appropriate professionals. We do not provide
                      any kind of formal or informal professional advice. The use or reliance of any
                      information contained on the Site is solely at your own risk.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
                      {[
                        { icon: '💼', label: 'Business', desc: 'Consult a business advisor' },
                        { icon: '⚖️', label: 'Legal', desc: 'Consult a licensed attorney' },
                        { icon: '🏥', label: 'Medical', desc: 'Consult a qualified doctor' },
                        { icon: '💰', label: 'Financial', desc: 'Consult a financial expert' },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3"
                        >
                          <div className="text-2xl">{item.icon}</div>
                          <div>
                            <div className="text-sm font-bold text-slate-900">{item.label}</div>
                            <div className="text-xs text-slate-500">{item.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 4. External Links */}
                  <section id="external-links" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        4
                      </span>
                      External Links Disclaimer
                    </h2>
                    <p>
                      The Site may contain (or you may be sent through the Site) links to other
                      websites or content belonging to or originating from third parties or links
                      to websites and features in banners or other advertising. Such external links
                      are not investigated, monitored or checked for accuracy, adequacy, validity,
                      reliability, availability or completeness by us.
                    </p>
                    <p>
                      We do not warrant, endorse, guarantee or assume responsibility for the
                      accuracy or reliability of any information offered by third-party websites
                      linked through the Site or any website or feature linked in any banner or
                      other advertising. We will not be a party to or in any way be responsible for
                      monitoring any transaction between you and third-party providers of products
                      or services.
                    </p>
                  </section>

                  {/* 5. Affiliates */}
                  <section id="affiliates" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        5
                      </span>
                      Affiliates Disclaimer
                    </h2>
                    <p>
                      The Site may contain links to affiliate websites, and we receive an affiliate
                      commission for any purchases made by you on the affiliate website using such
                      links. This comes at no additional cost to you.
                    </p>
                    <p>
                      Our affiliates include (but are not limited to):
                    </p>
                    <ul>
                      <li>Amazon Associates</li>
                      <li>Impact Radius</li>
                      <li>ShareASale</li>
                      <li>ClickBank</li>
                      <li>Various other affiliate networks</li>
                    </ul>
                    <p>
                      We only recommend products and services we genuinely believe will add value to
                      our readers. All affiliate links are clearly disclosed where applicable.
                    </p>
                  </section>

                  {/* 6. AdSense */}
                  <section id="adsense" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        6
                      </span>
                      AdSense & Advertising Disclaimer
                    </h2>
                    <p>
                      This website may display advertisements through Google AdSense and other
                      advertising networks. These ads help us keep our content free for all readers.
                    </p>
                    <p>
                      We want to make it clear that:
                    </p>
                    <ul>
                      <li>We do not control the content of the ads displayed on our site</li>
                      <li>We do not personally endorse every product or service shown in ads</li>
                      <li>We do not receive any special compensation for clicks from our readers</li>
                      <li>We are not responsible for the products or services advertised</li>
                    </ul>
                    <p>
                      If you make a purchase through an advertisement, please review the advertiser's
                      terms and conditions before completing any transaction.
                    </p>
                  </section>

                  {/* 7. Testimonials */}
                  <section id="testimonials" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        7
                      </span>
                      Testimonials Disclaimer
                    </h2>
                    <p>
                      The Site may contain testimonials by users of our products and/or services.
                      These testimonials reflect the real-life experiences and opinions of such
                      users. However, the experiences are personal to those particular users and
                      may not necessarily be representative of all users of our products and/or
                      services.
                    </p>
                    <p>
                      We do not claim, and you should not assume, that all users will have the same
                      experiences. Your individual results may vary.
                    </p>
                  </section>

                  {/* 8. Errors */}
                  <section id="errors" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        8
                      </span>
                      Errors & Omissions
                    </h2>
                    <p>
                      While we have made every attempt to ensure that the information contained in
                      this site has been obtained from reliable sources, TechInsider is not
                      responsible for any errors or omissions or for the results obtained from the
                      use of this information.
                    </p>
                    <p>
                      If you notice any errors or have suggestions for improvement, please contact
                      us. We appreciate our readers helping us maintain accurate, high-quality
                      content.
                    </p>
                  </section>

                  {/* 9. Fair Use */}
                  <section id="fair-use" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        9
                      </span>
                      Fair Use Notice
                    </h2>
                    <p>
                      This website may contain copyrighted material, the use of which has not
                      always been specifically authorized by the copyright owner. We make such
                      material available for the purposes of criticism, comment, news reporting,
                      teaching, scholarship or research.
                    </p>
                    <p>
                      This constitutes a "fair use" of any such copyrighted material as provided for
                      in Section 107 of the US Copyright Law. If you wish to use copyrighted
                      material from this site for purposes of your own that go beyond "fair use",
                      you must obtain permission from the copyright owner.
                    </p>
                  </section>

                  {/* 10. Views */}
                  <section id="views" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        10
                      </span>
                      Views Expressed
                    </h2>
                    <p>
                      The views and opinions expressed on this website are those of the authors and
                      do not necessarily reflect the official policy or position of any other
                      agency, organization, employer or company.
                    </p>
                    <p>
                      Any content provided by our bloggers or authors is of their opinion and not
                      intended to malign any religion, ethnic group, club, organization, company,
                      individual or anyone or anything.
                    </p>
                  </section>

                  {/* 11. Consent */}
                  <section id="consent" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        11
                      </span>
                      Consent
                    </h2>
                    <p>
                      By using our website, you hereby consent to our Disclaimer and agree to its
                      terms. If we update, amend or make any changes to this document, those changes
                      will be prominently posted here.
                    </p>
                    <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-xl my-5">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-emerald-900 mb-1">You're Good to Go!</div>
                          <p className="text-emerald-800 m-0 text-sm">
                            Thank you for reading our disclaimer. Now you can browse our site with
                            full confidence and transparency.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* 12. Contact */}
                  <section id="contact" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        12
                      </span>
                      Contact Us
                    </h2>
                    <p>
                      If you require any more information or have any questions about our site's
                      disclaimer, please feel free to contact us:
                    </p>

                    <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      <a
                        href="mailto:pujakumarijn41@gmail.com"
                        className="group p-5 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white flex-shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs text-slate-500 font-medium">Email</div>
                            <div className="text-sm font-semibold text-slate-900 truncate group-hover:text-indigo-600 transition">
                              pujakumarijn41@gmail.com
                            </div>
                          </div>
                        </div>
                      </a>

                      <a
                        href="https://wa.me/918004431753"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-5 rounded-xl bg-slate-50 hover:bg-green-50 border border-slate-200 hover:border-green-200 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white flex-shrink-0">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs text-slate-500 font-medium">WhatsApp</div>
                            <div className="text-sm font-semibold text-slate-900 group-hover:text-green-600 transition">
                              +91 8004431753
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </section>

                </div>
              </div>

              {/* Related Links */}
              <div className="mt-8 flex flex-wrap gap-4 justify-between items-center">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-semibold transition"
                >
                  ← Back to Home
                </Link>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/privacy-policy"
                    className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 text-sm font-semibold transition"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/terms"
                    className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 text-sm font-semibold transition"
                  >
                    Terms & Conditions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            All Legal Pages Complete!
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Your website now has all the required legal pages for Google AdSense approval.
            Let's continue building.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all"
          >
            📚 Explore Blog Articles →
          </Link>
        </div>
      </section>
    </>
  )
}