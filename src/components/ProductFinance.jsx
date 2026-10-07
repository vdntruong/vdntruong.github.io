'use client';

import { useState } from 'react';
import { TrendingUp, PieChart, ShieldCheck, Zap, DollarSign, Activity, Bot, ArrowRight, BarChart3, Lock } from 'lucide-react';
import Image from 'next/image';

export default function ProductFinance({ onOpenWaitlist }) {
  const [selectedSignal, setSelectedSignal] = useState('crypto');

  const signalDemos = {
    crypto: {
      asset: 'BTC/USD',
      price: '$94,250.00',
      change: '+4.12%',
      action: 'BUY SIGNAL',
      confidence: '91.8%',
      reasoning: 'On-chain accumulation + Orderbook bid support at $92.5k'
    },
    stocks: {
      asset: 'NVDA',
      price: '$148.72',
      change: '+2.85%',
      action: 'ACCUMULATE',
      confidence: '88.5%',
      reasoning: 'AI Hardware earnings revision + Institutional inflow surge'
    },
    forex: {
      asset: 'EUR/USD',
      price: '1.0845',
      change: '-0.32%',
      action: 'NEUTRAL / HOLD',
      confidence: '76.0%',
      reasoning: 'ECB rate decision pending; dynamic volatility compression'
    }
  };

  const current = signalDemos[selectedSignal];

  return (
    <section id="finance-section" className="py-24 bg-[#080d1a] relative overflow-hidden border-t border-slate-800/80">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>NINJAVO TRADE AI • FINTECH SPOTLIGHT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Smart Money Management & AI Algorithmic Trading with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Autonomous Precision
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Ninjavo Trade AI combines intelligent personal expense tracking with institutional-grade algorithmic market intelligence. Automate wealth accumulation, discover high-conviction trades, and protect downside risk automatically.
          </p>
        </div>

        {/* Product Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Column: App Visual Screenshot */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              <div className="relative glass-panel rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl">
                {/* Visual Header bar */}
                <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">Ninjavo Trade AI Terminal</span>
                  <span className="text-xs font-mono text-emerald-400 font-bold">● CONNECTED</span>
                </div>

                <div className="relative w-full aspect-video bg-slate-900">
                  <Image
                    src="/images/ninjavo_trade_app.jpg"
                    alt="Ninjavo Trade AI App Interface"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Features & Live Signal Simulator */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              
              {/* Feature Card 1 */}
              <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      Predictive Market Sentiment & Trade Signal AI
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Continuous neural scanning of order books, SEC filings, macro news, and technical momentum to generate high-probability buy/sell alerts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <PieChart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      Automated Budgeting & Expense Auto-Categorization
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Smart cashflow engine auto-sorts daily expenses, detects hidden subscription price hikes, and recommends optimal savings allocations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      Automated Downside Guardrails & Yield Optimization
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Protect capital during market crashes. Set stop-loss rules and let Ninjavo Trade automatically route idle cash to highest-yield stable vaults.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Interactive Signal Box */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>TEST LIVE AI TRADING ALERTS:</span>
                <span className="text-emerald-400">REAL-TIME FEED</span>
              </div>

              <div className="flex gap-2">
                {['crypto', 'stocks', 'forex'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedSignal(type)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase transition-all ${
                      selectedSignal === type
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 font-bold'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold font-mono text-sm">{current.asset} ({current.price})</span>
                  <span className="text-emerald-400 font-mono font-semibold">{current.change}</span>
                </div>
                <div className="flex items-center justify-between border-t border-slate-800 pt-2">
                  <span className="bg-emerald-500/20 text-emerald-300 font-mono px-2 py-0.5 rounded font-bold">
                    {current.action}
                  </span>
                  <span className="text-slate-400 font-mono">
                    CONFIDENCE: <strong className="text-white">{current.confidence}</strong>
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 pt-1">
                  AI Note: &quot;{current.reasoning}&quot;
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={onOpenWaitlist}
                className="w-full sm:w-auto px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Launch Ninjavo Trade AI</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
