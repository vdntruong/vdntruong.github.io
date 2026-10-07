'use client';

import { Star, Quote, Award, TrendingUp, BookOpen } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Dr. Jonathan Vance",
      role: "IELTS Candidate • Band 8.5 Score",
      tag: "EDU AI USER",
      avatar: "JV",
      color: "from-cyan-500 to-indigo-500",
      content: "Ninjavo Edu completely changed how I prepared for IELTS Speaking Part 2 & 3. The real-time phonetic feedback caught accent nuances that traditional mock apps missed. Scored Band 8.5 on my first try!",
      icon: BookOpen
    },
    {
      name: "Sophia Chen",
      role: "Quantitative Trader & Portfolio Lead",
      tag: "FINTECH USER",
      avatar: "SC",
      color: "from-emerald-500 to-teal-500",
      content: "The market sentiment alerts from Ninjavo Trade AI give me an unfair advantage. The sub-15ms signal latency and automatic downside stop-loss saved my portfolio during last month's crypto dip.",
      icon: TrendingUp
    },
    {
      name: "Marcus Miller",
      role: "Software Architect & TOEFL Scholar",
      tag: "DUAL ECOSYSTEM USER",
      avatar: "MM",
      color: "from-purple-500 to-pink-500",
      content: "Having both Edu AI for accent polishing and Trade AI for automated personal wealth management in one platform is unbelievable. Ninjavo Tech is standardizing how AI serves daily human growth.",
      icon: Award
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#080d1a] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-mono text-indigo-300 mb-4">
            <Star className="w-3.5 h-3.5 fill-indigo-400" />
            <span>GLOBAL COMMUNITY REVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Trusted by Over 500,000{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
              Learners & Investors
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            See how Ninjavo Tech applications empower people worldwide to speak fluently and invest intelligently.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => {
            const Icon = rev.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400">
                      {rev.tag}
                    </span>
                  </div>

                  <Quote className="w-8 h-8 text-slate-700 mb-4 group-hover:text-indigo-400 transition-colors" />

                  <p className="text-sm text-slate-200 leading-relaxed mb-6 italic">
                    &quot;{rev.content}&quot;
                  </p>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3 border-t border-slate-800/80 pt-4">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${rev.color} flex items-center justify-center font-bold text-white text-xs shadow-md`}>
                    {rev.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{rev.name}</div>
                    <div className="text-xs text-slate-400">{rev.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
