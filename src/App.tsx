function App() {
  const values = [
    {
      icon: "🧠",
      title: "Learns your practice",
      desc: "Kit is calibrated to your firm — your clients, your language, your standards. Not a generic tool. Yours."
    },
    {
      icon: "📋",
      title: "Always prepared",
      desc: "Before every client meeting, Kit has the brief ready. Research, history, talking points — done."
    },
    {
      icon: "🤝",
      title: "Works across your team",
      desc: "One Kit for your whole firm. Every interaction builds shared institutional knowledge."
    },
  ]

  const verticals = [
    { label: "Registered Investment Advisors", desc: "Quarterly reports, client intelligence, trade proposals — automated." },
    { label: "Law Firms", desc: "Legal research, document drafting, matter prep — always on." },
    { label: "Accounting & CPA Firms", desc: "Tax analysis, compliance prep, client communication — handled." },
    { label: "Advisory Practices", desc: "Any professional services firm that runs on expertise and relationships." },
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
          href="mailto:kit@axiomstreamgroup.com"
          className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
        >
          kit@axiomstreamgroup.com
        </a>
      </nav>

      {/* Hero */}
      <section className="hero-gradient px-6 md:px-12 py-28 md:py-40 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-8 tracking-wide uppercase">
            Purpose-built AI for professional services
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            Your firm.<br />
            <span className="text-teal-400">Your Kit.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto">
            AI built around how you actually work — calibrated to your practice, trained on your domain, always prepared.
          </p>
          <a
            href="mailto:kit@axiomstreamgroup.com?subject=I'd like to learn more about Kit"
            className="inline-block px-8 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-teal-500/25"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Value Cards */}
      <section className="px-6 md:px-12 py-20 bg-[#0d1117]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-12">
            What makes Kit different
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
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

      {/* Who it's for */}
      <section className="px-6 md:px-12 py-20 bg-[#0a0f1e]">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
            Built for
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-14">
            Professional services firms that run on expertise
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
      <section className="px-6 md:px-12 py-20 bg-[#0d1117]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to meet your Kit?
          </h2>
          <p className="text-slate-400 mb-8">
            Every firm gets a Kit configured for their practice. Not a demo — yours, from day one.
          </p>
          <a
            href="mailto:kit@axiomstreamgroup.com?subject=I'd like to learn more about Kit"
            className="inline-block px-8 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-teal-500/25"
          >
            Get in Touch
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
