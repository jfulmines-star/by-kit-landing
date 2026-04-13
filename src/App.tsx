function App() {
  const capabilities = [
    {
      icon: "📋",
      title: "Pre-call intelligence",
      desc: "Before every client meeting, Kit has the brief ready. Account history, talking points, risk flags — done before you dial."
    },
    {
      icon: "🧠",
      title: "Institutional memory",
      desc: "Every conversation, decision, and document your firm has ever produced — queryable in plain language. Nothing walks out the door when someone leaves."
    },
    {
      icon: "⚡",
      title: "Two weeks, not two years",
      desc: "Purpose-built for your practice. Deployed in two weeks. No IT project, no vendor procurement, no 18-month rollout."
    },
  ]

  const verticals = [
    { label: "Wealth & Investment Advisory", desc: "Client intelligence, meeting prep, compliance drafts, portfolio summaries." },
    { label: "Law Firms", desc: "Matter prep, legal research, document drafting, client intake." },
    { label: "Accounting & Tax", desc: "Tax analysis, compliance documentation, client communication." },
    { label: "Any Professional Services Firm", desc: "If your business runs on expertise and relationships, Kit belongs in it." },
  ]

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white">

      {/* Nav */}
      <nav className="px-6 md:px-12 py-6 flex items-center justify-between border-b border-white/5">
        <div className="text-lg font-semibold tracking-tight">
          <span className="text-teal-400">by</span>
          <span className="text-white">·kit</span>
        </div>
        <a
          href="mailto:kit@axiomstreamgroup.com?subject=Demo Request — by-kit.com"
          className="text-sm px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-white font-semibold transition-colors"
        >
          Book a Demo
        </a>
      </nav>

      {/* Hero */}
      <section className="hero-gradient px-6 md:px-12 py-28 md:py-40 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-8 tracking-wide uppercase">
            Purpose-built AI for professional services
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            Every firm deserves<br />
            <span className="text-teal-400">their own Kit.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Kit is a purpose-built AI agent deployed inside your firm — trained on your domain, calibrated to your clients, and operational in two weeks. Not a chatbot. Not a generic tool. Yours.
          </p>
          <a
            href="mailto:kit@axiomstreamgroup.com?subject=Demo Request — by-kit.com"
            className="inline-block px-8 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-teal-500/25"
          >
            Book a Demo
          </a>
          <p className="text-xs text-slate-600 mt-4">Built by AxiomStream Group · Deployed at firms across WNY and nationwide</p>
        </div>
      </section>

      {/* What Kit does */}
      <section className="px-6 md:px-12 py-20 bg-[#0d1117]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-12">
            What Kit does inside your firm
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((v) => (
              <div
                key={v.title}
                className="card-glow bg-[#111827] rounded-2xl p-7 transition-all cursor-default"
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-base font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The real pitch */}
      <section className="px-6 md:px-12 py-20 bg-[#0a0f1e]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Everyone's selling AI.<br />We build the one that actually fits.
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            Generic AI tools fail in professional services because they don't know your clients, your practice, or your standards. Kit is calibrated to one firm — yours. It knows what you know, speaks your language, and gets better the longer you use it.
          </p>
          <p className="text-slate-400 leading-relaxed">
            The professionals we work with use Kit to prep for high-stakes meetings, draft faster, and capture the institutional knowledge that normally lives only in one person's head. The AI does the prep work. The expert makes the call.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-6 md:px-12 py-20 bg-[#0d1117]">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
            Built for
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-14">
            Firms that run on expertise and relationships
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {verticals.map((v) => (
              <div key={v.label} className="flex gap-4 items-start p-6 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white mb-1">{v.label}</p>
                  <p className="text-sm text-slate-500">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6 md:px-12 py-20 bg-[#0a0f1e]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            See it inside your firm in 20 minutes.
          </h2>
          <p className="text-slate-400 mb-8">
            No slides. No pitch deck. We show you a live Kit configured for a firm like yours and you tell us if it fits.
          </p>
          <a
            href="mailto:kit@axiomstreamgroup.com?subject=Demo Request — by-kit.com"
            className="inline-block px-8 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-teal-500/25"
          >
            Book a Demo
          </a>
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
