'use client';

import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Mic, Play, CheckCircle2, TrendingUp, Cpu, Volume2, ShieldCheck, Zap, BarChart3, LineChart, RefreshCw } from 'lucide-react';

export default function HeroSection({ onOpenWaitlist }) {
  const [activeTab, setActiveTab] = useState('edu'); // 'edu' or 'finance'
  
  // Interactive Edu State
  const [isRecording, setIsRecording] = useState(false);
  const [eduScore, setEduScore] = useState(8.5);
  const [eduAudioPlaying, setEduAudioPlaying] = useState(false);

  // Interactive Trading State
  const [selectedPair, setSelectedPair] = useState('NVDA/USD');
  const [isSimulating, setIsSimulating] = useState(false);

  const simulateSpeechTest = () => {
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      const newScore = (7.5 + Math.random() * 1.5).toFixed(1);
      setEduScore(newScore);
    }, 2200);
  };

  const simulateTradeSignal = (pair) => {
    setSelectedPair(pair);
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
    }, 1200);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-cyber-grid bg-radial-glow">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs sm:text-sm backdrop-blur-md shadow-lg shadow-cyan-500/10 hover:border-cyan-500/60 transition-all cursor-pointer" onClick={onOpenWaitlist}>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="font-semibold text-cyan-300">Announcing Ninjavo AI v2.4</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 flex items-center gap-1">
              Edu & Fintech AI Engines <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </span>
          </div>
        </div>

        {/* Hero Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Intelligence Redefined for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
              Education
            </span>{' '}
            &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400">
              Financial Mastery
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto mb-8">
            Ninjavo Tech builds hyper-personalized, ultra-low latency AI applications. Master spoken English and pass standardized tests with real-time AI speech feedback, while automating wealth management and market trading with precision neural signals.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenWaitlist}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-base rounded-2xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-5 h-5 text-cyan-200 group-hover:rotate-12 transition-transform" />
              <span>Explore Ninjavo Ecosystem</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#sandbox-demo"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-base rounded-2xl border border-slate-700/80 backdrop-blur-md hover:border-slate-500 transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-cyan-400 text-cyan-400" />
              <span>Interactive Live Demo</span>
            </a>
          </div>

          {/* Quick Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>99.8% AI Speech Phoneme Precision</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Sub-15ms Neural Latency</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Bank-Grade Encryption</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Hero Simulator Component */}
        <div className="max-w-5xl mx-auto">
          <div className="glass-panel rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800/80 relative">
            
            {/* Header Tabs */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="ml-2 font-mono text-xs text-slate-400 hidden sm:inline-block">ninjavo-core-v2.4.ai</span>
              </div>

              {/* Tab Switcher */}
              <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setActiveTab('edu')}
                  className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                    activeTab === 'edu' 
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Mic className="w-3.5 h-3.5" />
                  <span>Ninjavo Edu AI</span>
                </button>

                <button
                  onClick={() => setActiveTab('finance')}
                  className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                    activeTab === 'finance' 
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Ninjavo Trade AI</span>
                </button>
              </div>
            </div>

            {/* TAB CONTENT 1: EDU AI SIMULATOR */}
            {activeTab === 'edu' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center animate-in fade-in duration-300">
                <div className="md:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
                    <Zap className="w-3.5 h-3.5" /> IELTS / TOEFL Live Audio Evaluator
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Real-time Phonetic & Fluency Feedback
                  </h3>

                  <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span>ORAL PRACTICE PROMPT:</span>
                      <span className="text-cyan-400">PART 2 • SPEAKING MOCK</span>
                    </div>
                    <p className="text-sm text-slate-200 font-medium italic">
                      &quot;Describe a technological innovation that significantly changed your daily productivity and how you adapted to it.&quot;
                    </p>

                    {/* Audio Equalizer wave */}
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-center justify-between gap-3">
                      <button
                        onClick={simulateSpeechTest}
                        disabled={isRecording}
                        className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                          isRecording 
                            ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30 animate-pulse'
                            : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20'
                        }`}
                      >
                        <Mic className="w-4 h-4" />
                        {isRecording ? 'Listening & Analyzing...' : 'Simulate Mic Input'}
                      </button>

                      <div className="flex-1 h-8 bg-slate-950 rounded-lg flex items-center justify-center px-3 gap-1 overflow-hidden">
                        {isRecording ? (
                          <div className="flex items-center justify-center gap-1 h-6 w-full">
                            <div className="w-1 bg-cyan-400 rounded-full eq-bar-1"></div>
                            <div className="w-1 bg-cyan-300 rounded-full eq-bar-2"></div>
                            <div className="w-1 bg-indigo-400 rounded-full eq-bar-3"></div>
                            <div className="w-1 bg-cyan-400 rounded-full eq-bar-4"></div>
                            <div className="w-1 bg-purple-400 rounded-full eq-bar-5"></div>
                            <div className="w-1 bg-cyan-300 rounded-full eq-bar-2"></div>
                            <div className="w-1 bg-indigo-400 rounded-full eq-bar-1"></div>
                          </div>
                        ) : (
                          <span className="text-xs text-slate-500 font-mono">Click button to test AI scoring engine</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Feedback Tags */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Fluency</div>
                      <div className="text-base font-bold text-cyan-400">8.8 / 9.0</div>
                    </div>
                    <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Grammar</div>
                      <div className="text-base font-bold text-indigo-400">8.3 / 9.0</div>
                    </div>
                    <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Phonetics</div>
                      <div className="text-base font-bold text-emerald-400">8.6 / 9.0</div>
                    </div>
                  </div>
                </div>

                {/* Edu Right Score Card */}
                <div className="md:col-span-5 bg-gradient-to-b from-slate-900 to-[#0b1329] p-6 rounded-2xl border border-cyan-500/20 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                    ESTIMATED BAND SCORE
                  </span>

                  <div className="my-4 relative inline-flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full border-4 border-cyan-500/30 border-t-cyan-400 animate-spin duration-1000 absolute"></div>
                    <div className="w-24 h-24 rounded-full bg-slate-950 flex flex-col items-center justify-center border border-slate-800 shadow-inner">
                      <span className="text-3xl font-extrabold text-white tracking-tight">{eduScore}</span>
                      <span className="text-[10px] text-cyan-400 font-mono">C1 ADVANCED</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 mb-4 px-2">
                    &quot;Your intonation pattern on multi-syllable adverbs improved by 14%. Excellent natural pacing!&quot;
                  </p>

                  <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-left text-xs space-y-1">
                    <div className="font-semibold text-cyan-300 flex items-center justify-between">
                      <span>Target Vocabulary Used:</span>
                      <span className="font-mono text-emerald-400">92% Match</span>
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      Suggested synonyms: <span className="text-cyan-200 font-mono">&quot;catalyst&quot;, &quot;seamlessly&quot;</span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: FINANCE & TRADING AI SIMULATOR */}
            {activeTab === 'finance' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center animate-in fade-in duration-300">
                <div className="md:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">
                    <TrendingUp className="w-3.5 h-3.5" /> Ninjavo Trade AI Sentiment & Signal Engine
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Algorithmic Signals & Smart Wealth Control
                  </h3>

                  {/* Ticker Selector */}
                  <div className="flex items-center gap-2">
                    {['NVDA/USD', 'BTC/USD', 'AAPL/USD', 'ETH/USD'].map((pair) => (
                      <button
                        key={pair}
                        onClick={() => simulateTradeSignal(pair)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                          selectedPair === pair 
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold' 
                            : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                        }`}
                      >
                        {pair}
                      </button>
                    ))}
                  </div>

                  {/* Simulated Chart preview */}
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-slate-400 font-mono">ACTIVE TICKER:</span>
                        <div className="text-lg font-bold text-white flex items-center gap-2">
                          {selectedPair} <span className="text-xs font-mono text-emerald-400">+3.42% (Today)</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 uppercase font-mono">AI CONFIDENCE</span>
                        <div className="text-sm font-extrabold text-emerald-400 font-mono">89.4% STRONG BUY</div>
                      </div>
                    </div>

                    {/* SVG Chart Line mock */}
                    <div className="h-24 w-full relative flex items-end pt-4">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80">
                        <defs>
                          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 0 60 Q 40 50 80 55 T 160 30 T 240 40 T 300 10 L 300 80 L 0 80 Z"
                          fill="url(#chartGrad)"
                        />
                        <path
                          d="M 0 60 Q 40 50 80 55 T 160 30 T 240 40 T 300 10"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <circle cx="300" cy="10" r="4" fill="#10b981" className="animate-ping" />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-900 pt-2 font-mono">
                      <span>Sentiment: Bullish Momentum</span>
                      <span>Execution Speed: &lt; 12ms</span>
                    </div>
                  </div>
                </div>

                {/* Right Trading Dashboard Card */}
                <div className="md:col-span-5 bg-gradient-to-b from-slate-900 to-[#061712] p-6 rounded-2xl border border-emerald-500/20 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                    AUTO WEALTH REBALANCING
                  </span>

                  <div className="my-4 p-4 bg-slate-950 rounded-xl border border-slate-800 text-left space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Total Portfolio Value</span>
                      <span className="text-white font-bold font-mono">$124,580.40</span>
                    </div>
                    <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden flex">
                      <div className="bg-emerald-400 h-full" style={{ width: '45%' }}></div>
                      <div className="bg-cyan-400 h-full" style={{ width: '30%' }}></div>
                      <div className="bg-purple-400 h-full" style={{ width: '25%' }}></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono pt-1">
                      <span className="text-emerald-400">• Stocks 45%</span>
                      <span className="text-cyan-400">• Crypto 30%</span>
                      <span className="text-purple-400">• Cash/Yield 25%</span>
                    </div>
                  </div>

                  <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-left text-xs space-y-1">
                    <div className="font-semibold text-emerald-300 flex items-center justify-between">
                      <span>Smart Risk Protection</span>
                      <span className="font-mono text-emerald-400">ACTIVE</span>
                    </div>
                    <p className="text-slate-300 text-[11px]">
                      AI auto-hedged downside exposure by 12% ahead of market volatility announcement.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
