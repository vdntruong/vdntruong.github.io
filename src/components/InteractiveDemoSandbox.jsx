'use client';

import { useState } from 'react';
import { Sparkles, Mic, Play, RefreshCw, CheckCircle2, TrendingUp, BookOpen, Volume2, Cpu, BarChart3, Zap } from 'lucide-react';

export default function InteractiveDemoSandbox({ onOpenWaitlist }) {
  const [activeMode, setActiveMode] = useState('edu'); // 'edu' or 'trade'

  // Edu Sandbox State
  const [selectedTextIndex, setSelectedTextIndex] = useState(0);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState(null);

  const sampleOralSentences = [
    "I strongly advocate for artificial intelligence in academic research because it accelerates learning efficiency.",
    "Despite market volatility, diversification remains the cornerstone of long-term capital preservation.",
    "The implementation of microservices architecture drastically improved our system throughput and fault tolerance."
  ];

  const handleEvaluateText = () => {
    setIsEvaluating(true);
    setEvaluationResult(null);
    setTimeout(() => {
      setIsEvaluating(false);
      setEvaluationResult({
        bandScore: '8.5 / 9.0',
        phonetics: '96% Native Precision',
        grammar: '100% Correct Syntax',
        improvedPhrase: 'Consider using "catalyzes" instead of "accelerates" for higher academic band weight.',
        vocabularyLevel: 'C2 Proficient'
      });
    }, 1200);
  };

  // Trade Sandbox State
  const [strategy, setStrategy] = useState('tech_growth');
  const [backtestRunning, setBacktestRunning] = useState(false);
  const [backtestData, setBacktestData] = useState({
    returnRate: '+34.8%',
    sharpeRatio: '2.41',
    maxDrawdown: '-6.2%',
    winRate: '82.4%'
  });

  const strategies = {
    tech_growth: {
      name: 'AI Tech Growth Momentum',
      returnRate: '+38.4%',
      sharpeRatio: '2.65',
      maxDrawdown: '-5.8%',
      winRate: '84.2%',
      desc: 'Focuses on semiconductor, enterprise SaaS & cloud infrastructure leaders.'
    },
    balanced_yield: {
      name: 'Balanced Wealth & Dividend Yield',
      returnRate: '+18.2%',
      sharpeRatio: '3.12',
      maxDrawdown: '-2.4%',
      winRate: '91.0%',
      desc: 'Combines blue-chip dividend growth with automated stablecoin yield farming.'
    },
    crypto_alpha: {
      name: 'Crypto Alpha Quantitative Arbitrage',
      returnRate: '+54.6%',
      sharpeRatio: '2.10',
      maxDrawdown: '-11.2%',
      winRate: '78.5%',
      desc: 'High-frequency cross-exchange sentiment and momentum trading.'
    }
  };

  const handleSelectStrategy = (key) => {
    setStrategy(key);
    setBacktestRunning(true);
    setTimeout(() => {
      setBacktestRunning(false);
      setBacktestData(strategies[key]);
    }, 1000);
  };

  return (
    <section id="sandbox-demo" className="py-24 bg-[#080d1a] relative overflow-hidden border-t border-slate-800/80 bg-radial-glow-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE AI SANDBOX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Test Ninjavo Tech Engines{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-emerald-400">
              Live in Your Browser
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Experience firsthand how our dual AI engines process human language and financial data in milliseconds.
          </p>
        </div>

        {/* Sandbox Container */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl">
            
            {/* Mode Switcher Buttons */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <button
                onClick={() => setActiveMode('edu')}
                className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all flex items-center gap-2 ${
                  activeMode === 'edu'
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Ninjavo Edu Speaking Coach</span>
              </button>

              <button
                onClick={() => setActiveMode('trade')}
                className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all flex items-center gap-2 ${
                  activeMode === 'trade'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                <span>Ninjavo Trade AI Strategy Backtester</span>
              </button>
            </div>

            {/* MODE A: EDU AI */}
            {activeMode === 'edu' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    SELECT A SAMPLE ORAL PHRASE TO EVALUATE:
                  </label>

                  <div className="space-y-2">
                    {sampleOralSentences.map((text, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedTextIndex(idx)}
                        className={`p-3 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all ${
                          selectedTextIndex === idx
                            ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-200 font-medium'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        &quot;{text}&quot;
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={handleEvaluateText}
                      disabled={isEvaluating}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md flex items-center gap-2 transition-all disabled:opacity-50"
                    >
                      {isEvaluating ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin text-cyan-200" />
                          <span>AI Engine Processing...</span>
                        </>
                      ) : (
                        <>
                          <Zap className="w-4 h-4 text-cyan-300" />
                          <span>Run AI Phonetic & Lexical Diagnostics</span>
                        </>
                      )}
                    </button>

                    <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block">
                      Latency: 11ms • Rubric: IELTS 2026 Standard
                    </span>
                  </div>
                </div>

                {/* Evaluation Result Output */}
                {evaluationResult && (
                  <div className="bg-gradient-to-r from-slate-950 via-[#0a1124] to-slate-950 p-6 rounded-2xl border border-cyan-500/30 space-y-4 animate-in slide-in-from-bottom-2 duration-300">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <span className="font-bold text-white text-sm">AI Evaluation Complete</span>
                      </div>
                      <span className="text-xs font-mono bg-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-md font-bold">
                        ESTIMATED BAND: {evaluationResult.bandScore}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center">
                        <div className="text-[10px] text-slate-400 uppercase font-mono">Phonetic Score</div>
                        <div className="text-sm font-bold text-cyan-400">{evaluationResult.phonetics}</div>
                      </div>
                      <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center">
                        <div className="text-[10px] text-slate-400 uppercase font-mono">Grammar Check</div>
                        <div className="text-sm font-bold text-emerald-400">{evaluationResult.grammar}</div>
                      </div>
                      <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center">
                        <div className="text-[10px] text-slate-400 uppercase font-mono">Lexical Level</div>
                        <div className="text-sm font-bold text-purple-400">{evaluationResult.vocabularyLevel}</div>
                      </div>
                    </div>

                    <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-xs text-cyan-200">
                      💡 <strong>AI Recommendation:</strong> &quot;{evaluationResult.improvedPhrase}&quot;
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* MODE B: TRADE AI */}
            {activeMode === 'trade' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    CHOOSE AN ALGORITHMIC STRATEGY MODEL:
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {Object.keys(strategies).map((key) => {
                      const item = strategies[key];
                      return (
                        <button
                          key={key}
                          onClick={() => handleSelectStrategy(key)}
                          className={`p-3 rounded-xl border text-left transition-all ${
                            strategy === key
                              ? 'bg-emerald-500/15 border-emerald-500/50 text-white font-semibold'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          <div className="text-xs font-bold mb-1 text-white">{item.name}</div>
                          <div className="text-[11px] text-slate-400 leading-tight">{item.desc}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Backtest Results */}
                <div className="bg-gradient-to-r from-slate-950 via-[#061712] to-slate-950 p-6 rounded-2xl border border-emerald-500/30 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-emerald-400" />
                      <span className="font-bold text-white text-sm">
                        Simulated 12-Month Performance ({strategies[strategy].name})
                      </span>
                    </div>
                    {backtestRunning && (
                      <span className="text-xs font-mono text-emerald-400 animate-pulse">
                        Simulating backtest...
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Annualized Return</div>
                      <div className="text-lg font-extrabold text-emerald-400 font-mono">{backtestData.returnRate}</div>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Sharpe Ratio</div>
                      <div className="text-lg font-extrabold text-cyan-400 font-mono">{backtestData.sharpeRatio}</div>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Max Drawdown</div>
                      <div className="text-lg font-extrabold text-purple-400 font-mono">{backtestData.maxDrawdown}</div>
                    </div>
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Win Rate</div>
                      <div className="text-lg font-extrabold text-amber-400 font-mono">{backtestData.winRate}</div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Bottom Call to Action */}
            <div className="mt-8 text-center pt-4 border-t border-slate-800">
              <button
                onClick={onOpenWaitlist}
                className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-cyan-500/20 transition-all"
              >
                Request Full Product Sandbox Access &rarr;
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
