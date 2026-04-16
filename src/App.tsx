import { useState } from 'react'

const TEAL = '#2dd4bf'

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function ShieldIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}

export default function App() {
  const [email, setEmail] = useState('')
  const [tier, setTier] = useState<'solo' | 'team' | 'enterprise'>('solo')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitting(true)
    // Log to kit@ — replace with Supabase insert when backend is ready
    try {
      await fetch('https://formspree.io/f/xpwzgkqo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, tier, source: 'by-kit.com waitlist', timestamp: new Date().toISOString() }),
      })
    } catch {}
    setSubmitted(true)
    setSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-[#080d1a] text-white antialiased" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080d1a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            <span style={{ color: TEAL }}>by</span>
            <span className="text-white">·kit</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#how" className="text-sm text-slate-400 hover:text-white transition-colors hidden md:block">How it works</a>
            <a href="#pricing" className="text-sm text-slate-400 hover:text-white transition-colors hidden md:block">Pricing</a>
            <a href="#waitlist" className="text-sm px-4 py-2 rounded-lg font-semibold transition-all text-white"
              style={{ background: 'linear-gradient(135deg, #14b8a6, #0d9488)' }}>
              Get Early Access
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6 text-center relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-20"
            style={{ background: 'radial-gradient(ellipse at center, #14b8a6 0%, transparent 70%)' }} />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border mb-8"
            style={{ background: 'rgba(20,184,166,0.08)', borderColor: 'rgba(20,184,166,0.25)', color: TEAL }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: TEAL }} />
            Early Access — Waitlist Open
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            Your firm's AI brain.<br />
            <span style={{ color: TEAL }}>Built for Microsoft 365.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-4 max-w-2xl mx-auto font-light">
            Kit connects to your Outlook, calendar, and documents — and builds a memory of everything that matters.
          </p>
          <p className="text-base text-slate-500 mb-12 max-w-xl mx-auto">
            Meeting prep in 30 seconds. Client history on demand. Follow-up drafts, automatically. No Google. No data leaving Microsoft.
          </p>

          {/* Hero CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a href="#waitlist"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:opacity-90 hover:shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #14b8a6, #0d9488)', boxShadow: '0 0 40px rgba(20,184,166,0.3)' }}>
              Join the Waitlist — Free
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="mailto:kit@axiomstreamgroup.com?subject=Demo Request — by-kit.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
              Request a Live Demo
            </a>
          </div>
          <p className="text-xs text-slate-600">No credit card. No IT ticket required. Read-only M365 permissions.</p>
        </div>
      </section>

      {/* Logos bar */}
      <div className="border-y border-white/5 bg-white/[0.02] py-5 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-xs font-semibold uppercase tracking-widest text-slate-600">
          <span>Wealth Advisory</span>
          <span className="text-white/5">|</span>
          <span>Law Firms</span>
          <span className="text-white/5">|</span>
          <span>CPA & Tax</span>
          <span className="text-white/5">|</span>
          <span>Financial Advisory</span>
          <span className="text-white/5">|</span>
          <span>Consulting</span>
        </div>
      </div>

      {/* The problem / reframe */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5">
            {/* Without Kit */}
            <div className="rounded-2xl p-8 bg-white/[0.03] border border-white/5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">Without Kit</p>
              <ul className="space-y-4">
                {[
                  'Searching Outlook for 10 minutes before every client call',
                  'Client asks about something from 8 months ago — you have no idea',
                  'Follow-up emails written from scratch every time',
                  'Institutional knowledge walks out when people leave',
                  'Copilot exists but doesn\'t actually know your clients',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                    <svg className="w-4 h-4 text-red-400/60 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* With Kit */}
            <div className="rounded-2xl p-8 border" style={{ background: 'rgba(20,184,166,0.04)', borderColor: 'rgba(20,184,166,0.2)' }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: TEAL }}>With Kit</p>
              <ul className="space-y-4">
                {[
                  '"Prep me for my 2pm" — full brief in 30 seconds',
                  'Every client\'s history, in plain language, on demand',
                  'Meeting ends → follow-up draft waiting in your inbox',
                  'Everything your firm knows, searchable forever',
                  'Works alongside Copilot — adds the memory layer it\'s missing',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24 px-6 bg-[#0a0f1e]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">How it works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Three steps. No IT project.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Connect Microsoft 365',
                desc: 'Authorize Kit with read-only OAuth. Takes 5 minutes. No IT ticket. We request the minimum permissions required — nothing more.',
              },
              {
                step: '02',
                title: 'Kit builds your brain',
                desc: 'Kit indexes your email, calendar, and documents. Client profiles form automatically. The longer you use it, the smarter it gets.',
              },
              {
                step: '03',
                title: 'Ask in plain language',
                desc: '"Prep me for Sarah Chen." "What did we send Reynolds American in Q1?" "Draft the follow-up from today\'s call." Done.',
              },
            ].map((s) => (
              <div key={s.step} className="text-left">
                <div className="text-5xl font-black mb-4" style={{ color: 'rgba(20,184,166,0.2)' }}>{s.step}</div>
                <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kit vs Copilot */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">The question we get asked</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">"We already have Copilot. Why Kit?"</h2>
          </div>
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-3 text-xs font-semibold uppercase tracking-widest">
              <div className="p-4 bg-white/5 text-slate-500">Feature</div>
              <div className="p-4 bg-white/5 text-slate-400 text-center">Microsoft Copilot</div>
              <div className="p-4 text-center" style={{ background: 'rgba(20,184,166,0.08)', color: TEAL }}>Kit</div>
            </div>
            {[
              ['Knows your specific clients by name', false, true],
              ['Builds a compounding memory over time', false, true],
              ['Meeting prep dossier on demand', false, true],
              ['Auto-drafts follow-up emails', 'Basic', true],
              ['Reads M365 email + calendar', true, true],
              ['Searches documents', true, true],
              ['Data stays in Microsoft tenant', true, true],
              ['Requires Microsoft 365 license', true, false],
            ].map(([feat, copilot, kit]) => (
              <div key={String(feat)} className="grid grid-cols-3 border-t border-white/5">
                <div className="p-4 text-sm text-slate-300">{String(feat)}</div>
                <div className="p-4 text-center flex items-center justify-center">
                  {copilot === true
                    ? <CheckIcon />
                    : copilot === false
                    ? <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    : <span className="text-xs text-slate-500">{copilot}</span>
                  }
                </div>
                <div className="p-4 text-center flex items-center justify-center" style={{ background: 'rgba(20,184,166,0.04)' }}>
                  {kit === true
                    ? <CheckIcon />
                    : <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  }
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">Kit works <em>alongside</em> Copilot — it adds the memory layer Copilot doesn't have. You don't have to choose.</p>
        </div>
      </section>

      {/* Trust / Security */}
      <section className="py-24 px-6 bg-[#0a0f1e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Security & Privacy</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for the scrutiny.</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Enterprise buyers ask hard questions. Here are the real answers.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {[
              {
                icon: <ShieldIcon className="w-5 h-5 text-teal-400" />,
                title: 'Read-only permissions',
                desc: 'Kit only requests what it needs: Mail.Read, Calendars.Read, Files.Read.All. It cannot send email, create calendar events, or modify anything. Ever.',
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: 'Your data stays in Microsoft',
                desc: "Kit reads your M365 data to build your brain. Your emails and documents are not stored on Kit's servers. The brain index is yours — hosted in your account.",
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2" />
                  </svg>
                ),
                title: 'Revoke access anytime',
                desc: 'Kit connects via standard Microsoft OAuth. You can revoke Kit\'s permissions from your Microsoft account at any time — no support ticket, no waiting.',
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                title: 'IT one-pager available',
                desc: "We know your IT director will ask. We have a plain-language technical brief covering permissions, data flow, and architecture — ready to share with your compliance team.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-6 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="mailto:kit@axiomstreamgroup.com?subject=IT Security Brief — by-kit.com"
              className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ color: TEAL }}>
              Request the IT Security Brief
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Simple. No surprises.</h2>
            <p className="text-slate-400 text-sm">Early access pricing — locked in at launch for waitlist members.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                id: 'solo' as const,
                name: 'Solo',
                price: '$79',
                period: '/mo',
                desc: 'One professional. Your M365, your brain.',
                badge: null,
                features: [
                  'Outlook email + calendar indexing',
                  'Client intelligence profiles',
                  'Meeting prep on demand',
                  'Document search (OneDrive)',
                  'Follow-up draft generation',
                  'Async support',
                ],
              },
              {
                id: 'team' as const,
                name: 'Team',
                price: '$299',
                period: '/mo',
                desc: 'Up to 5 users. Shared brain, shared clients.',
                badge: 'Most Popular',
                features: [
                  'Everything in Solo × 5 seats',
                  'Shared client intelligence',
                  'Shared document library',
                  'Admin dashboard',
                  'Priority support (24hr)',
                  '1hr onboarding call',
                  '$49/mo per extra seat',
                ],
              },
              {
                id: 'enterprise' as const,
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                desc: 'White-label deployment for your firm.',
                badge: null,
                features: [
                  'Everything in Team',
                  'SharePoint + Teams integration',
                  'Custom branding / white-label',
                  'Compliance + IT review support',
                  '3-session onboarding',
                  'SLA: 4hr response',
                  'Min. 10 seats',
                ],
              },
            ].map((t) => {
              const isHighlight = t.id === 'team'
              return (
                <div key={t.id}
                  className={`relative rounded-2xl p-7 flex flex-col border ${isHighlight ? 'border-teal-500/40' : 'border-white/8 bg-white/[0.03]'}`}
                  style={isHighlight ? { background: 'rgba(20,184,166,0.07)' } : {}}>
                  {t.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold text-white"
                        style={{ background: 'linear-gradient(135deg, #14b8a6, #0d9488)' }}>
                        {t.badge}
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">{t.name}</p>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className={`text-4xl font-black ${isHighlight ? 'text-teal-400' : 'text-white'}`}>{t.price}</span>
                      <span className="text-slate-500 text-sm">{t.period}</span>
                    </div>
                    <p className="text-sm text-slate-400">{t.desc}</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckIcon />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={t.id === 'enterprise' ? 'mailto:kit@axiomstreamgroup.com?subject=Enterprise — by-kit.com' : '#waitlist'}
                    onClick={() => t.id !== 'enterprise' && setTier(t.id)}
                    className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all ${
                      isHighlight
                        ? 'text-white hover:opacity-90'
                        : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                    }`}
                    style={isHighlight ? { background: 'linear-gradient(135deg, #14b8a6, #0d9488)' } : {}}>
                    {t.id === 'enterprise' ? 'Talk to Us' : 'Join Waitlist'}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-24 px-6 bg-[#0a0f1e]">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ background: 'rgba(20,184,166,0.1)' }}>
            <svg className="w-7 h-7 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get early access.</h2>
          <p className="text-slate-400 mb-3 leading-relaxed">
            We're onboarding professional services firms now. Early access members lock in launch pricing.
          </p>
          <p className="text-sm text-slate-500 mb-10">No credit card. No commitment. We reach out with next steps.</p>

          {submitted ? (
            <div className="p-6 rounded-2xl border text-center"
              style={{ background: 'rgba(20,184,166,0.08)', borderColor: 'rgba(20,184,166,0.3)', color: TEAL }}>
              <div className="text-2xl mb-2">✓</div>
              <p className="font-semibold">You're on the list.</p>
              <p className="text-sm mt-1 text-teal-500/70">We'll reach out within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleWaitlist} className="space-y-3">
              {/* Tier selector */}
              <div className="grid grid-cols-3 gap-2 p-1 rounded-xl bg-white/5 border border-white/5 mb-4">
                {(['solo', 'team', 'enterprise'] as const).map((t) => (
                  <button key={t} type="button" onClick={() => setTier(t)}
                    className={`py-2 rounded-lg text-xs font-semibold capitalize transition-all ${tier === t ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
                    style={tier === t ? { background: 'linear-gradient(135deg, #14b8a6, #0d9488)' } : {}}>
                    {t}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@firm.com"
                  className="flex-1 px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-teal-500/40 transition-colors"
                />
                <button type="submit" disabled={submitting}
                  className="px-6 py-4 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 disabled:opacity-60 whitespace-nowrap"
                  style={{ background: 'linear-gradient(135deg, #14b8a6, #0d9488)' }}>
                  {submitting ? 'Joining...' : 'Join Waitlist'}
                </button>
              </div>
              <p className="text-xs text-slate-600">No spam. No pitch. Early access when we're ready.</p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-base font-bold tracking-tight">
            <span style={{ color: TEAL }}>by</span>
            <span className="text-white">·kit</span>
            <span className="text-slate-700 ml-2 text-sm font-normal">by-kit.com</span>
          </div>
          <div className="text-sm text-slate-600 flex flex-wrap items-center gap-4 justify-center">
            <a href="mailto:kit@axiomstreamgroup.com" className="hover:text-teal-400 transition-colors">kit@axiomstreamgroup.com</a>
            <span>·</span>
            <span>© 2026 AxiomStream Group</span>
          </div>
        </div>
      </footer>

    </div>
  )
}
