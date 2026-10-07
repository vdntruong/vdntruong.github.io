'use client';

import { Users, Award, ShieldCheck, Zap, Globe, Activity } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      value: "99.8%",
      label: "AI Phoneme & Accent Accuracy",
      desc: "Ninjavo Edu multi-accent recognition",
      icon: Award,
      color: "text-cyan-400",
      borderColor: "hover:border-cyan-500/50"
    },
    {
      id: 2,
      value: "$1.4B+",
      label: "Simulated & Managed Portfolio",
      desc: "Ninjavo Trade AI algorithmic volume",
      icon: Activity,
      color: "text-emerald-400",
      borderColor: "hover:border-emerald-500/50"
    },
    {
      id: 3,
      value: "500K+",
      label: "Active Learners & Investors",
      desc: "Worldwide power users across 85+ countries",
      icon: Users,
      color: "text-indigo-400",
      borderColor: "hover:border-indigo-500/50"
    },
    {
      id: 4,
      value: "<12ms",
      label: "Real-time AI Neural Latency",
      desc: "Edge-computed streaming response time",
      icon: Zap,
      color: "text-amber-400",
      borderColor: "hover:border-amber-500/50"
    }
  ];

  return (
    <section className="py-12 bg-[#060913]/90 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`glass-panel p-6 rounded-2xl border border-slate-800/80 transition-all duration-300 ${item.borderColor} hover:-translate-y-1 group`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-white ${item.color}`}>
                    {item.value}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-white group-hover:bg-slate-800 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="text-base font-semibold text-slate-100 mb-1">
                  {item.label}
                </h4>
                <p className="text-xs text-slate-400">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
