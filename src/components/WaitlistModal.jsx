'use client';

import { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, Cpu, Lock, Mail } from 'lucide-react';

export default function WaitlistModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [productInterest, setProductInterest] = useState('both'); // 'edu', 'trade', 'both'
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#060913]/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl overflow-hidden bg-gradient-to-b from-[#0b1224] to-[#060913]">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Join Ninjavo Tech Early Access</h3>
                <p className="text-xs text-slate-400">Founded Oct 2025 • Priority Access Pass</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1.5 uppercase">
                  Select Primary Interest
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setProductInterest('edu')}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all ${
                      productInterest === 'edu'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    Ninjavo Edu AI
                  </button>

                  <button
                    type="button"
                    onClick={() => setProductInterest('trade')}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all ${
                      productInterest === 'trade'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    Ninjavo Trade AI
                  </button>

                  <button
                    type="button"
                    onClick={() => setProductInterest('both')}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all ${
                      productInterest === 'both'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    Full Bundle
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1.5 uppercase">
                  Work / Personal Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-cyan-400" /> Zero spam guarantee.
                </span>
                <a href="mailto:vdntruong@ninjavo.tech" className="text-cyan-300 hover:underline font-mono">
                  Admin: vdntruong@ninjavo.tech
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <span>Reserving VIP Pass...</span>
                ) : (
                  <>
                    <span>Unlock Early Access Pass</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">VIP Slot Confirmed!</h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
              Thank you for registering <strong className="text-cyan-400">{email}</strong>. Admin (<a href="mailto:vdntruong@ninjavo.tech" className="text-cyan-300 hover:underline">vdntruong@ninjavo.tech</a>) will verify your priority slot shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setEmail('');
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl transition-colors"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
