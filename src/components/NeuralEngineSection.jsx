'use client';

import { Cpu, ShieldCheck, Zap, Layers, Network, Lock, Code2, Calendar, Mail, UserCheck } from 'lucide-react';

export default function NeuralEngineSection() {
  const pillars = [
    {
      icon: Cpu,
      title: "Custom Multi-Modal Neural Models",
      desc: "Fine-tuned transformer models specialized for vocal acoustic phoneme matching and financial market order book dynamics.",
      badge: "SUB-15MS LATENCY",
      color: "text-cyan-400"
    },
    {
      icon: Lock,
      title: "Zero-Knowledge Edge Privacy",
      desc: "Voice recordings and personal transaction histories are encrypted on-device with zero-knowledge cryptographic proofs.",
      badge: "SOC2 & GDPR READY",
      color: "text-purple-400"
    },
    {
      icon: Network,
      title: "Unified Ninjavo Intelligence Graph",
      desc: "Cross-app synergy that correlates long-term learning goals with automated personal financial planning.",
      badge: "CROSS-PRODUCT AI",
      color: "text-emerald-400"
    },
    {
      icon: Code2,
      title: "Enterprise WebSockets & REST API",
      desc: "Seamless integration layer for universities, language academies, and fintech platforms to embed Ninjavo AI engines.",
      badge: "99.99% UPTIME SLA",
      color: "text-amber-400"
    }
  ];

  return (
    <section id="core-tech" className="py-24 bg-[#060913] relative overflow-hidden">
      {/* Background Cyber Mesh */}
      <div className="absolute inset-0 bg-cyber-grid opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>NINJAVO NEURAL CORE ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Engineered for High Precision &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400">
              Uncompromising Security
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Founded in <strong>October 2025</strong>, Ninjavo Tech’s proprietary distributed AI infra delivers lightning response times, bank-grade privacy, and real-time intelligence.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-slate-900 border border-slate-800 ${item.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Technical Specification Banner & Company Profile */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 bg-gradient-to-r from-slate-950 via-[#0a0f1d] to-slate-950">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950 px-2.5 py-1 rounded">
                COMPANY MILESTONE & LEADERSHIP
              </div>

              <h3 className="text-2xl font-bold text-white">
                Ninjavo Tech History & Admin Operations
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Founded in <strong>October 2025</strong>, Ninjavo Tech (NinjavoTech) operates state-of-the-art AI clusters bridging multi-modal vocal processing and financial analytics.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-1">
                <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 text-slate-300">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>Founded: Oct 2025</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 text-slate-300">
                  <UserCheck className="w-4 h-4 text-purple-400" />
                  <span>Admin: <a href="mailto:vdntruong@ninjavo.tech" className="text-cyan-300 hover:underline">vdntruong@ninjavo.tech</a></span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-start lg:justify-end">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1 w-full">
                <div className="text-slate-500">// Company & Admin Registry</div>
                <div className="text-cyan-400">const company = &quot;Ninjavo Tech&quot;;</div>
                <div className="text-purple-400">const founded = &quot;2025-10&quot;;</div>
                <div className="text-emerald-400">const adminEmail = &quot;vdntruong@ninjavo.tech&quot;;</div>
                <div className="text-amber-400">const status = &quot;Active Production Nodes&quot;;</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
