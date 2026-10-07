'use client';

import { useState } from 'react';
import { Check, Sparkles, Zap, Shield, ArrowRight } from 'lucide-react';

export default function PricingSection({ onOpenWaitlist }) {
  const [billingCycle, setBillingCycle] = useState('yearly'); // 'monthly' or 'yearly'

  const plans = [
    {
      name: "Starter",
      desc: "For curious individuals exploring AI speaking and budgeting.",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      popular: false,
      buttonText: "Start Free Trial",
      buttonStyle: "bg-slate-900 text-slate-200 hover:bg-slate-800 border border-slate-800",
      features: [
        "15 mins/day AI Speech Practice",
        "Basic IELTS Part 1 Scoring",
        "Manual Expense Tracking",
        "Standard Market Updates",
        "Community Discord Support"
      ]
    },
    {
      name: "Ninjavo Edu Pro",
      desc: "Comprehensive AI English speaking & standardized test prep.",
      monthlyPrice: "$19",
      yearlyPrice: "$15",
      popular: false,
      buttonText: "Get Edu Pro",
      buttonStyle: "bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold",
      features: [
        "Unlimited AI Voice Coach & Speaking Tests",
        "IELTS, TOEFL, TOEIC Real-time Band Rubrics",
        "Phonetic Heatmap & Intonation Tutor",
        "Smart Spaced Repetition Vocabulary Decks",
        "Export Oral Performance Reports (PDF)"
      ]
    },
    {
      name: "Ninjavo Trade Pro",
      desc: "Intelligent expense control & quantitative trading alerts.",
      monthlyPrice: "$29",
      yearlyPrice: "$23",
      popular: false,
      buttonText: "Get Trade Pro",
      buttonStyle: "bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold",
      features: [
        "Real-time AI Trading Signals (Crypto, Stocks, Forex)",
        "Automated Portfolio Rebalancing & Guardrails",
        "AI Cashflow Categorization & Yield Routing",
        "Personal AI CFO Natural Language Chat",
        "Sub-15ms Signal Execution Alerts"
      ]
    },
    {
      name: "Ninjavo All-Access Bundle",
      desc: "The ultimate power suite: Full Edu AI + Trade AI ecosystem.",
      monthlyPrice: "$39",
      yearlyPrice: "$31",
      popular: true,
      buttonText: "Claim All-Access Pass",
      buttonStyle: "bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold shadow-lg shadow-cyan-500/25",
      features: [
        "FULL access to Ninjavo Edu AI Pro Features",
        "FULL access to Ninjavo Trade AI Pro Features",
        "Priority High-Speed AI Neural Node Server",
        "1-on-1 AI Strategy & Learning Onboarding",
        "API Access (50,000 monthly calls)"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#060913] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSPARENT PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Simple Plans for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Students, Traders & Institutions
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg mb-8">
            Choose individual products or unlock the complete Ninjavo Tech AI Ecosystem.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="inline-flex items-center bg-slate-950 p-1.5 rounded-2xl border border-slate-800 shadow-inner">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-slate-800 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-cyan-400 text-slate-950 px-1.5 py-0.5 rounded font-mono font-bold">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => {
            const price = billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <div
                key={index}
                className={`glass-panel rounded-3xl p-6 flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular 
                    ? 'border-2 border-cyan-500/80 shadow-2xl shadow-cyan-500/20 bg-gradient-to-b from-[#0c152e] via-[#091024] to-[#060913]' 
                    : 'border border-slate-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-[11px] font-mono font-bold tracking-wider uppercase shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Most Popular Bundle
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6 min-h-[36px]">{plan.desc}</p>

                  {/* Price display */}
                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold font-mono text-white tracking-tight">{price}</span>
                    <span className="text-xs text-slate-400 font-mono">
                      {price === '$0' ? 'forever' : `/ month ${billingCycle === 'yearly' ? '(billed yearly)' : ''}`}
                    </span>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3 mb-8 border-t border-slate-800/80 pt-6">
                    <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold">Included Features:</div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenWaitlist}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 ${plan.buttonStyle}`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
