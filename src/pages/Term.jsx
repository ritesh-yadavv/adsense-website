import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const sections = [
  { id: 'agreement', title: 'Agreement to Terms' },
  { id: 'intellectual-property', title: 'Intellectual Property Rights' },
  { id: 'user-representations', title: 'User Representations' },
  { id: 'prohibited-activities', title: 'Prohibited Activities' },
  { id: 'user-generated', title: 'User Generated Contributions' },
  { id: 'guidelines', title: 'Contribution Guidelines' },
  { id: 'license', title: 'License' },
  { id: 'third-party', title: 'Third-Party Websites' },
  { id: 'management', title: 'Site Management' },
  { id: 'termination', title: 'Termination' },
  { id: 'modifications', title: 'Modifications & Interruptions' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'disclaimer', title: 'Disclaimer' },
  { id: 'limitations', title: 'Limitations of Liability' },
  { id: 'indemnification', title: 'Indemnification' },
  { id: 'contact', title: 'Contact Us' },
]

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions — TechInsider"
        description="Read the Terms & Conditions governing the use of TechInsider website and services."
        keywords="terms and conditions, user agreement, terms of service"
      />

      {/* ============ HERO ============ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/80 via-white to-white">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-300/40 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
            📋 Legal
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Terms &{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Please read these terms carefully before using our website. By accessing TechInsider,
            you agree to be bound by these terms.
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
                <div className="prose-custom text-slate-700 leading-relaxed">

                  {/* Intro */}
                  <div className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-xl mb-8">
                    <p className="text-slate-700 m-0">
                      <strong>Important:</strong> By accessing this website, you agree to be bound
                      by these Terms and Conditions, all applicable laws and regulations. If you do
                      not agree with any of these terms, you are prohibited from using or accessing
                      this site.
                    </p>
                  </div>

                  {/* 1. Agreement */}
                  <section id="agreement" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        1
                      </span>
                      Agreement to Terms
                    </h2>
                    <p>
                      These Terms and Conditions constitute a legally binding agreement made between
                      you, whether personally or on behalf of an entity ("you") and{' '}
                      <strong>TechInsider</strong> ("we", "us" or "our"), concerning your access to
                      and use of the TechInsider website as well as any other media form, media
                      channel, mobile website or mobile application related, linked or otherwise
                      connected thereto.
                    </p>
                    <p>
                      You agree that by accessing the Site, you have read, understood and agreed to
                      be bound by all of these Terms and Conditions. If you do not agree with all of
                      these Terms and Conditions, then you are expressly prohibited from using the
                      Site and you must discontinue use immediately.
                    </p>
                  </section>

                  {/* 2. Intellectual Property */}
                  <section id="intellectual-property" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        2
                      </span>
                      Intellectual Property Rights
                    </h2>
                    <p>
                      Unless otherwise indicated, the Site is our proprietary property and all source
                      code, databases, functionality, software, website designs, audio, video, text,
                      photographs and graphics on the Site (collectively, the "Content") and the
                      trademarks, service marks and logos contained therein (the "Marks") are owned
                      or controlled by us or licensed to us.
                    </p>
                    <p>
                      The Content and the Marks are provided on the Site "AS IS" for your information
                      and personal use only. Except as expressly provided in these Terms and
                      Conditions, no part of the Site and no Content or Marks may be copied,
                      reproduced, aggregated, republished, uploaded, posted, publicly displayed,
                      encoded, translated, transmitted, distributed, sold, licensed or otherwise
                      exploited for any commercial purpose whatsoever without our express prior
                      written permission.
                    </p>
                  </section>

                  {/* 3. User Representations */}
                  <section id="user-representations" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        3
                      </span>
                      User Representations
                    </h2>
                    <p>
                      By using the Site, you represent and warrant that:
                    </p>
                    <ul>
                      <li>All registration information you submit will be true, accurate, current and complete</li>
                      <li>You will maintain the accuracy of such information and promptly update it as necessary</li>
                      <li>You have the legal capacity and you agree to comply with these Terms and Conditions</li>
                      <li>You are not a minor in the jurisdiction in which you reside</li>
                      <li>You will not access the Site through automated or non-human means</li>
                      <li>You will not use the Site for any illegal or unauthorized purpose</li>
                      <li>Your use of the Site will not violate any applicable law or regulation</li>
                    </ul>
                  </section>

                  {/* 4. Prohibited Activities */}
                  <section id="prohibited-activities" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        4
                      </span>
                      Prohibited Activities
                    </h2>
                    <p>
                      You may not access or use the Site for any purpose other than that for which
                      we make the Site available. The Site may not be used in connection with any
                      commercial endeavors except those that are specifically endorsed or approved
                      by us.
                    </p>
                    <p>As a user of the Site, you agree not to:</p>
                    <ul>
                      <li>Systematically retrieve data or other content from the Site</li>
                      <li>Make any unauthorized use of the Site</li>
                      <li>Engage in unauthorized framing of or linking to the Site</li>
                      <li>Attempt to bypass any measures of the Site designed to prevent or restrict access</li>
                      <li>Use any automated system, including scripts, robots or similar data gathering tools</li>
                      <li>Copy or adapt the Site's software</li>
                      <li>Reverse engineer, decompile or disassemble any portion of the Site</li>
                      <li>Use the Site in a manner inconsistent with any applicable laws or regulations</li>
                    </ul>
                  </section>

                  {/* 5. User Generated */}
                  <section id="user-generated" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        5
                      </span>
                      User Generated Contributions
                    </h2>
                    <p>
                      The Site may invite you to chat, contribute to or participate in blogs, message
                      boards, online forums and other functionality. When you create, submit, post or
                      display any content on the Site, you represent and warrant that:
                    </p>
                    <ul>
                      <li>Your Contributions do not infringe on the proprietary rights of any third party</li>
                      <li>Your Contributions are not false, inaccurate or misleading</li>
                      <li>Your Contributions are not unsolicited or unauthorized advertising</li>
                      <li>Your Contributions do not violate any applicable law, regulation or ordinance</li>
                      <li>Your Contributions do not contain any viruses, malware or harmful code</li>
                    </ul>
                  </section>

                  {/* 6. Guidelines */}
                  <section id="guidelines" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        6
                      </span>
                      Contribution Guidelines
                    </h2>
                    <p>
                      We may provide you with areas to create, submit, post, display, transmit or
                      publish content and materials to us or on the Site. When you do so, you
                      agree to maintain the following guidelines:
                    </p>
                    <ul>
                      <li>Treat others with respect and courtesy</li>
                      <li>Do not post content that is defamatory, hateful or obscene</li>
                      <li>Respect copyright and intellectual property rights</li>
                      <li>Do not share personal information of others without consent</li>
                      <li>Keep the discussion relevant and constructive</li>
                    </ul>
                  </section>

                  {/* 7. License */}
                  <section id="license" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        7
                      </span>
                      License
                    </h2>
                    <p>
                      Permission is granted to temporarily download one copy of the materials on
                      the TechInsider website for personal, non-commercial transitory viewing only.
                      This is the grant of a license, not a transfer of title, and under this
                      license you may not:
                    </p>
                    <ul>
                      <li>Modify or copy the materials</li>
                      <li>Use the materials for any commercial purpose or for any public display</li>
                      <li>Attempt to decompile or reverse engineer any software on the Site</li>
                      <li>Remove any copyright or other proprietary notations from the materials</li>
                      <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                    </ul>
                  </section>

                  {/* 8. Third-Party */}
                  <section id="third-party" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        8
                      </span>
                      Third-Party Websites & Content
                    </h2>
                    <p>
                      The Site may contain (or you may be sent via the Site) links to other websites
                      ("Third-Party Websites") as well as articles, photographs, text, graphics,
                      pictures, designs, music, sound, video, information, applications, software
                      and other content or items belonging to or originating from third parties.
                    </p>
                    <p>
                      Such Third-Party Websites and Third-Party Content are not investigated,
                      monitored or checked for accuracy, appropriateness or completeness by us. We
                      are not responsible for any Third-Party Websites accessed through the Site or
                      any Third-Party Content posted on, available through or installed from the
                      Site.
                    </p>
                  </section>

                  {/* 9. Management */}
                  <section id="management" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        9
                      </span>
                      Site Management
                    </h2>
                    <p>
                      We reserve the right, but not the obligation, to:
                    </p>
                    <ul>
                      <li>Monitor the Site for violations of these Terms and Conditions</li>
                      <li>Take appropriate legal action against anyone who violates the law or these Terms</li>
                      <li>Refuse, restrict access to, limit the availability of or disable any of your Contributions</li>
                      <li>Remove from the Site or otherwise disable all files and content that are excessive in size or burdensome to our systems</li>
                      <li>Otherwise manage the Site in a manner designed to protect our rights and property</li>
                    </ul>
                  </section>

                  {/* 10. Termination */}
                  <section id="termination" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        10
                      </span>
                      Termination
                    </h2>
                    <p>
                      These Terms and Conditions shall remain in full force and effect while you use
                      the Site. Without limiting any other provision of these Terms and Conditions,
                      we reserve the right to, in our sole discretion and without notice or
                      liability, deny access to and use of the Site to any person for any reason,
                      including without limitation for breach of any representation, warranty or
                      covenant contained in these Terms and Conditions or of any applicable law or
                      regulation.
                    </p>
                  </section>

                  {/* 11. Modifications */}
                  <section id="modifications" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        11
                      </span>
                      Modifications & Interruptions
                    </h2>
                    <p>
                      We reserve the right to change, modify or remove the contents of the Site at
                      any time or for any reason at our sole discretion without notice. However, we
                      have no obligation to update any information on our Site.
                    </p>
                    <p>
                      We cannot guarantee the Site will be available at all times. We may experience
                      hardware, software or other problems or need to perform maintenance related to
                      the Site, resulting in interruptions, delays or errors.
                    </p>
                  </section>

                  {/* 12. Governing Law */}
                  <section id="governing-law" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        12
                      </span>
                      Governing Law
                    </h2>
                    <p>
                      These Terms and Conditions and your use of the Site are governed by and
                      construed in accordance with the laws of <strong>India</strong>, applicable to
                      agreements made and to be entirely performed within India, without regard to
                      its conflict of law principles.
                    </p>
                  </section>

                  {/* 13. Disclaimer */}
                  <section id="disclaimer" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        13
                      </span>
                      Disclaimer
                    </h2>
                    <div className="bg-slate-50 border-l-4 border-slate-400 p-5 rounded-r-xl my-5">
                      <p className="text-slate-700 m-0 text-sm">
                        THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT
                        YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK.
                      </p>
                    </div>
                    <p>
                      To the fullest extent permitted by law, we disclaim all warranties, express or
                      implied, in connection with the Site and your use thereof, including, without
                      limitation, the implied warranties of merchantability, fitness for a
                      particular purpose and non-infringement.
                    </p>
                    <p>
                      We make no warranties or representations about the accuracy or completeness of
                      the Site's content or the content of any websites linked to the Site and we
                      will assume no liability or responsibility for any errors, mistakes or
                      inaccuracies of content and materials.
                    </p>
                  </section>

                  {/* 14. Limitations */}
                  <section id="limitations" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        14
                      </span>
                      Limitations of Liability
                    </h2>
                    <p>
                      In no event will we or our directors, employees or agents be liable to you or
                      any third party for any direct, indirect, consequential, exemplary, incidental,
                      special or punitive damages, including lost profit, lost revenue, loss of data
                      or other damages arising from your use of the Site, even if we have been
                      advised of the possibility of such damages.
                    </p>
                  </section>

                  {/* 15. Indemnification */}
                  <section id="indemnification" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        15
                      </span>
                      Indemnification
                    </h2>
                    <p>
                      You agree to defend, indemnify and hold us harmless, including our
                      subsidiaries, affiliates and all of our respective officers, agents, partners
                      and employees, from and against any loss, damage, liability, claim or demand,
                      including reasonable attorneys' fees and expenses, made by any third party due
                      to or arising out of:
                    </p>
                    <ul>
                      <li>Your use of the Site</li>
                      <li>Your breach of these Terms and Conditions</li>
                      <li>Any breach of your representations and warranties set forth in these Terms</li>
                      <li>Your violation of the rights of a third party</li>
                      <li>Any harmful act toward any other user of the Site with whom you connected via the Site</li>
                    </ul>
                  </section>

                  {/* 16. Contact */}
                  <section id="contact" className="scroll-mt-32 mt-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                        16
                      </span>
                      Contact Us
                    </h2>
                    <p>
                      In order to resolve a complaint regarding the Site or to receive further
                      information regarding use of the Site, please contact us at:
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