import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitting(true)
    // Send to kit@ for now — simple mailto fallback, replace with API later
    try {
      await fetch(`https://formspree.io/f/placeholder`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'by-kit.com waitlist' }),
      })
    } catch {}
    setSubmitted(true)
    setSubmitting(false)
  }

  const features = [
    {
      icon: (
        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Meeting prep in 30 seconds',
      desc: 'Ask "Prep me for my 2pm with Sarah Chen." Kit pulls email history, last meeting notes, open items, and recent docs. One response. No searching.',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Institutional memory',
      desc: 'Every email, calendar event, and document your firm has produced — queryable in plain language. Nothing walks out the door when someone leaves.',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'Client intelligence that compounds',
      desc: "A client mentioned in 3 emails gets a profile. After a meeting they get a full dossier. Kit learns who matters without being told.",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Follow-up drafts, automatically',
      desc: "After every meeting, Kit drafts the follow-up with specific action items. You review, edit if needed, send. Your standards, your voice.",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Document retrieval that works',
      desc: '"What did we send Reynolds American in Q1?" Kit finds it, summarizes it, surfaces the relevant section. No more digging through shared drives.',
    },
    {
      icon: (
        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Stays inside Microsoft 365',
      desc: "Your data never leaves your Microsoft tenant. No Google. No third-party data stores. Kit reads your M365, learns from it, stays in it.",
    },
  ]

  const tiers = [
    {
      name: 'Solo',
      price: '$79',
      period: '/month',
      desc: 'One professional. Your M365, your brain.',
      cta: 'Join Waitlist',
      highlight: false,
      features: [
        'Connect Outlook email + calendar',
        'Full email + calendar indexing',
        'Meeting prep on demand',
        'Client intelligence profiles',
        'Document search (OneDrive)',
        'Async support',
      ],
    },
    {
      name: 'Team',
      price: '$299',
      period: '/month',
      desc: 'Up to 5 professionals. Shared brain, shared clients.',
      cta: 'Join Waitlist',
      highlight: true,
      badge: 'Most Popular',
      features: [
        'Everything in Solo × 5 seats',
        'Shared client intelligence',
        'Team document library',
        'Admin dashboard',
        'Priority support (24hr)',
        '1hr onboarding call',
        '$49/mo per additional seat',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'White-label deployment inside your firm.',
      cta: 'Book a Call',
      highlight: false,
      features: [
        'Everything in Team',
        'SharePoint + Teams integration',
        'Custom branding / white-label',
        'Compliance review',
        'Dedicated onboarding (3 sessions)',
        'SLA: 4hr response',
        'Minimum 10 seats',
      ],
    },
  ]

  const verticals = [
    { label: 'Wealth & Investment Advisory', icon: '💼' },
    { label: 'Law Firms', icon: '⚖️' },
    { label: 'Accounting & Tax', icon: '📊' },
    { label: 'Financial Advisory', icon: '📈' },
    { label: 'Insurance & Risk', icon: '🛡️' },
    { label: 'Consulting', icon: '🧠' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white font-sans antialiased">

      {/* Nav */}
      <nav className="px-6 md:px-12 py-5 flex items-center justify-between border-b border-white/5 sticky top-0 bg-[#0a0f1e]/90 backdrop-blur-md z-50">
        <div className="text-lg font-semibold tracking-tight">
          <span className="text-teal-400">by</span>
          <span className="text-white">·kit</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#pricing" className="text-sm text-slate-400 hover:text-white transition-colors hidden md:block">
            Pricing
          </a>
          <a
            href="#waitlist"
            className="text-sm px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-white font-semibold transition-colors"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-12 py-24 md:py-36 text-center relative overflow-hidden">
        {/* Glow bg */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-500/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-8 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Now accepting early access
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            The AI brain built<br />
            <span className="text-teal-400">for Microsoft 365.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-4 max-w-2xl mx-auto">
            Kit connects to your Outlook, calendar, and documents — and remembers everything. Client history, meeting context, follow-ups, document retrieval. All in plain language.
          </p>
          <p className="text-sm text-slate-500 mb-10 max-w-xl mx-auto">
            Not built for Google. Not built for everyone. Built for professional services firms that run Microsoft 365.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#waitlist"
              className="inline-block px-8 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-teal-500/25"
            >
              Join the Waitlist — Free
            </a>
            <a
              href="mailto:kit@axiomstreamgroup.com?subject=Demo Request — by-kit.com"
              className="inline-block px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all"
            >
              See a Live Demo
            </a>
          </div>
          <p className="text-xs text-slate-600 mt-5">No credit card. No IT ticket. Connects to M365 in 5 minutes.</p>
        </div>
      </section>

      {/* Social proof bar */}
      <div className="border-y border-white/5 bg-[#0d1117] px-6 md:px-12 py-5">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs text-slate-500 font-medium uppercase tracking-widest">
          <span>Wealth Advisory</span>
          <span className="text-white/10">·</span>
          <span>Law Firms</span>
          <span className="text-white/10">·</span>
          <span>CPA & Tax</span>
          <span className="text-white/10">·</span>
          <span>Financial Advisory</span>
          <span className="text-white/10">·</span>
          <span>Professional Services</span>
        </div>
      </div>

      {/* Features */}
      <section className="px-6 md:px-12 py-24 bg-[#0a0f1e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">What Kit does</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Your firm's knowledge, instantly accessible
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[#111827] rounded-2xl p-6 border border-white/5 hover:border-teal-500/20 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M365 differentiator */}
      <section className="px-6 md:px-12 py-20 bg-[#0d1117]">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-500/15 mb-6">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Your data never leaves Microsoft 365.
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto mb-6">
              GBrain is built for Google. Kit is built for Microsoft. Your emails, calendar, SharePoint, and documents stay inside your Microsoft tenant — subject to the same compliance controls your IT team already trusts.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-xs font-medium">
              {['Outlook', 'Calendar', 'OneDrive', 'SharePoint', 'Teams (Enterprise)'].map(s => (
                <span key={s} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-6 md:px-12 py-20 bg-[#0a0f1e]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Built for</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
            Firms that run on expertise and relationships
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {verticals.map((v) => (
              <div key={v.label} className="flex flex-col items-center gap-2 p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
                <span className="text-2xl">{v.icon}</span>
                <span className="text-sm font-medium text-slate-300 text-center">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 md:px-12 py-24 bg-[#0d1117]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Pricing</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Simple, transparent tiers</h2>
            <p className="text-slate-400 text-sm">Early access pricing. Lock it in before launch.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-2xl p-7 border flex flex-col ${
                  t.highlight
                    ? 'bg-teal-500/10 border-teal-500/40'
                    : 'bg-[#111827] border-white/5'
                }`}
              >
                {t.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500 text-white">
                      {t.badge}
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">{t.name}</p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className={`text-3xl font-bold ${t.highlight ? 'text-teal-400' : 'text-white'}`}>{t.price}</span>
                    <span className="text-slate-500 text-sm">{t.period}</span>
                  </div>
                  <p className="text-sm text-slate-400">{t.desc}</p>
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={t.cta === 'Book a Call' ? 'mailto:kit@axiomstreamgroup.com?subject=Enterprise — by-kit.com' : '#waitlist'}
                  className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                    t.highlight
                      ? 'bg-teal-500 hover:bg-teal-400 text-white hover:shadow-lg hover:shadow-teal-500/25'
                      : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-600 mt-8">
            Enterprise pricing is custom. <a href="mailto:kit@axiomstreamgroup.com" className="text-teal-500 hover:text-teal-400">Contact us</a> for a conversation.
          </p>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="px-6 md:px-12 py-24 bg-[#0a0f1e]">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Get early access.
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            We're onboarding professional services firms now. Drop your email and we'll reach out with access and early pricing.
          </p>
          {submitted ? (
            <div className="p-6 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 font-medium">
              ✓ You're on the list. We'll be in touch shortly.
            </div>
          ) : (
            <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@firm.com"
                className="flex-1 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500/50 focus:bg-white/8 transition-colors"
              />
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-teal-500/25 disabled:opacity-60 whitespace-nowrap"
              >
                {submitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          )}
          <p className="text-xs text-slate-600 mt-4">No spam. No pitch deck. Just early access when we're ready.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm font-semibold">
          <span className="text-teal-400">by</span>
          <span className="text-white">·kit</span>
          <span className="text-slate-600 ml-2">by-kit.com</span>
        </div>
        <div className="text-sm text-slate-600">
          <a href="mailto:kit@axiomstreamgroup.com" className="hover:text-teal-400 transition-colors">
            kit@axiomstreamgroup.com
          </a>
          <span className="mx-3">·</span>
          © 2026 AxiomStream Group
        </div>
      </footer>

    </div>
  )
}

export default App
