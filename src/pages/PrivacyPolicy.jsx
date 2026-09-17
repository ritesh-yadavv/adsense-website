import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const sections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'information-we-collect', title: 'Information We Collect' },
  { id: 'log-files', title: 'Log Files' },
  { id: 'cookies', title: 'Cookies & Web Beacons' },
  { id: 'adsense', title: 'Google AdSense & DART Cookie' },
  { id: 'third-party', title: 'Third-Party Privacy Policies' },
  { id: 'ccpa', title: 'CCPA Privacy Rights' },
  { id: 'gdpr', title: 'GDPR Data Protection Rights' },
  { id: 'children', title: "Children's Information" },
  { id: 'consent', title: 'Consent' },
  { id: 'contact', title: 'Contact Us' },
]

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy — TechInsider"
        description="Read TechInsider's Privacy Policy to understand how we collect, use and protect your personal information."
        keywords="privacy policy, data protection, GDPR, CCPA, AdSense privacy"
      />

      {/* ============ HERO ============ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/80 via-white to-white">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-300/40 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
            🔒 Legal
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Privacy{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use and protect
            your personal information.
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
                <nav className="space-y-1">
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
                <div className="prose-custom text-slate-700 leading-relaxed">

                  {/* 1. Introduction */}
                  <section id="introduction" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        1
                      </span>
                      Introduction
                    </h2>
                    <p>
                      Welcome to <strong>TechInsider</strong> ("we", "our", "us"). We are committed
                      to protecting your privacy and handling your personal data with transparency
                      and care.
                    </p>
                    <p>
                      This Privacy Policy explains how we collect, use, disclose and safeguard your
                      information when you visit our website. By using our website, you consent to
                      the practices described in this policy.
                    </p>
                  </section>

                  {/* 2. Information We Collect */}
                  <section id="information-we-collect" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        2
                      </span>
                      Information We Collect
                    </h2>
                    <p>
                      We may collect the following types of information when you interact with our
                      website:
                    </p>

                    <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">
                      Personal Information You Provide
                    </h3>
                    <ul>
                      <li>Name and email address (when you contact us or subscribe)</li>
                      <li>Subject and message content (via our contact form)</li>
                      <li>Any other information you voluntarily provide</li>
                    </ul>

                    <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">
                      Automatically Collected Information
                    </h3>
                    <ul>
                      <li>IP address and approximate geographic location</li>
                      <li>Browser type, version and operating system</li>
                      <li>Pages visited, time spent and referral sources</li>
                      <li>Device information (screen size, device type)</li>
                    </ul>
                  </section>

                  {/* 3. Log Files */}
                  <section id="log-files" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        3
                      </span>
                      Log Files
                    </h2>
                    <p>
                      TechInsider follows a standard procedure of using log files. These files log
                      visitors when they visit websites. All hosting companies do this as part of
                      hosting services' analytics.
                    </p>
                    <p>The information collected by log files includes:</p>
                    <ul>
                      <li>Internet protocol (IP) addresses</li>
                      <li>Browser type and Internet Service Provider (ISP)</li>
                      <li>Date and time stamp</li>
                      <li>Referring/exit pages</li>
                      <li>Number of clicks</li>
                    </ul>
                    <p>
                      These are not linked to any information that is personally identifiable. The
                      purpose of this information is to analyze trends, administer the site, track
                      users' movement on the website and gather demographic information.
                    </p>
                  </section>

                  {/* 4. Cookies */}
                  <section id="cookies" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        4
                      </span>
                      Cookies & Web Beacons
                    </h2>
                    <p>
                      Like any other website, TechInsider uses cookies. These cookies are used to
                      store information including visitors' preferences and the pages on the website
                      that the visitor accessed or visited.
                    </p>
                    <p>
                      The information is used to optimize the users' experience by customizing our
                      web page content based on visitors' browser type and/or other information.
                    </p>

                    <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">
                      Types of Cookies We Use
                    </h3>
                    <ul>
                      <li><strong>Essential cookies:</strong> Required for the website to function</li>
                      <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
                      <li><strong>Advertising cookies:</strong> Used to show relevant advertisements</li>
                      <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
                    </ul>
                    <p>
                      You can choose to disable cookies through your individual browser options.
                    </p>
                  </section>

                  {/* 5. AdSense */}
                  <section id="adsense" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        5
                      </span>
                      Google AdSense & DART Cookie
                    </h2>

                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-xl my-5">
                      <p className="text-slate-700 m-0">
                        <strong>Important:</strong> Google is a third-party vendor on our site. It
                        also uses cookies, known as DART cookies, to serve ads to our site visitors
                        based on their visit to our website and other sites on the Internet.
                      </p>
                    </div>

                    <p>
                      Google, as a third-party vendor, uses cookies to serve ads on TechInsider.
                      Google's use of the DART cookie enables it to serve ads to our site's visitors
                      based on their visit to our site and other sites on the Internet.
                    </p>

                    <p>
                      Users may opt out of the use of the DART cookie by visiting the Google Ad and
                      Content Network Privacy Policy at the following URL:
                    </p>

                    <p>
                      <a
                        href="https://policies.google.com/technologies/ads"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-700 font-semibold underline break-all"
                      >
                        https://policies.google.com/technologies/ads
                      </a>
                    </p>

                    <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">
                      Third-Party Ad Partners
                    </h3>
                    <p>
                      Some of our advertising partners may use cookies and web beacons on our site.
                      Our advertising partners include:
                    </p>
                    <ul>
                      <li>Google AdSense</li>
                      <li>Google Ad Manager</li>
                    </ul>
                    <p>
                      Each of these advertising partners has its own Privacy Policy. You can review
                      their policies on their respective websites.
                    </p>
                  </section>

                  {/* 6. Third-Party */}
                  <section id="third-party" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        6
                      </span>
                      Third-Party Privacy Policies
                    </h2>
                    <p>
                      TechInsider's Privacy Policy does not apply to other advertisers or websites.
                      Thus, we are advising you to consult the respective Privacy Policies of these
                      third-party ad servers for more detailed information.
                    </p>
                    <p>
                      It may include their practices and instructions about how to opt out of certain
                      options. You can choose to disable cookies through your individual browser
                      options.
                    </p>
                  </section>

                  {/* 7. CCPA */}
                  <section id="ccpa" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        7
                      </span>
                      CCPA Privacy Rights (California Residents)
                    </h2>
                    <p>
                      Under the CCPA, among other rights, California consumers have the right to:
                    </p>
                    <ul>
                      <li>Request that a business disclose the categories and specific pieces of personal data collected about consumers</li>
                      <li>Request that a business delete any personal data about the consumer</li>
                      <li>Request that a business that sells personal data not sell the consumer's personal data</li>
                    </ul>
                    <p>
                      If you make a request, we have one month to respond to you. If you would like
                      to exercise any of these rights, please contact us.
                    </p>
                  </section>

                  {/* 8. GDPR */}
                  <section id="gdpr" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        8
                      </span>
                      GDPR Data Protection Rights
                    </h2>
                    <p>
                      We would like to make sure you are fully aware of all of your data protection
                      rights. Every user is entitled to the following:
                    </p>
                    <ul>
                      <li><strong>The right to access:</strong> You have the right to request copies of your personal data</li>
                      <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate</li>
                      <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data</li>
                      <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data</li>
                      <li><strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data</li>
                      <li><strong>The right to data portability:</strong> You have the right to request that we transfer the data we have collected to another organization</li>
                    </ul>
                  </section>

                  {/* 9. Children */}
                  <section id="children" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        9
                      </span>
                      Children's Information
                    </h2>
                    <p>
                      Another part of our priority is adding protection for children while using the
                      internet. We encourage parents and guardians to observe, participate in and/or
                      monitor and guide their online activity.
                    </p>
                    <p>
                      TechInsider does not knowingly collect any Personal Identifiable Information
                      from children under the age of 13. If you think that your child provided this
                      kind of information on our website, we strongly encourage you to contact us
                      immediately and we will do our best efforts to promptly remove such information
                      from our records.
                    </p>
                  </section>

                  {/* 10. Consent */}
                  <section id="consent" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        10
                      </span>
                      Consent
                    </h2>
                    <p>
                      By using our website, you hereby consent to our Privacy Policy and agree to
                      its terms. If we update, amend or make any changes to this document, those
                      changes will be prominently posted here.
                    </p>
                  </section>

                  {/* 11. Contact */}
                  <section id="contact" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        11
                      </span>
                      Contact Us
                    </h2>
                    <p>
                      If you have any questions about this Privacy Policy, please contact us:
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
                    to="/terms"
                    className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 text-sm font-semibold transition"
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    to="/disclaimer"
                    className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 text-sm font-semibold transition"
                  >
                    Disclaimer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}