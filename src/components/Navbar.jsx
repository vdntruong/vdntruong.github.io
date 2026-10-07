'use client';

import { useState, useEffect } from 'react';
import { Cpu, Sparkles, BookOpen, TrendingUp, ChevronDown, Menu, X, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Navbar({ onOpenWaitlist }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#060913]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-[#080d1a] rounded-[11px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                Ninjavo<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Tech</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest font-mono text-cyan-400/80 font-medium">
                AI Next-Gen Systems
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            
            {/* Products Dropdown */}
            <div className="relative" onMouseLeave={() => setDropdownOpen(false)}>
              <button
                onMouseEnter={() => setDropdownOpen(true)}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-slate-800/60 transition-all"
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>

              {dropdownOpen && (
                <div 
                  onMouseEnter={() => setDropdownOpen(true)}
                  className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-[#0b1120] border border-slate-800 shadow-2xl p-3 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                >
                  <a
                    href="#edu-section"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-800/60 transition-all group"
                  >
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                        Ninjavo Edu AI
                        <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded font-mono">v2.4</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        AI English speaking coach, IELTS scoring & adaptive test prep.
                      </p>
                    </div>
                  </a>

                  <a
                    href="#finance-section"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-800/60 transition-all group"
                  >
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                        Ninjavo Trade AI
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono">FINTECH</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Smart money management, predictive signals & automated trading.
                      </p>
                    </div>
                  </a>

                  <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between px-3 py-1 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-amber-400" /> Powered by Ninjavo Core
                    </span>
                    <a href="#sandbox-demo" className="text-cyan-400 hover:underline">Try Demos &rarr;</a>
                  </div>
                </div>
              )}
            </div>

            <a href="#core-tech" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-slate-800/60 transition-all">
              Neural Engine
            </a>

            <a href="#sandbox-demo" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-slate-800/60 transition-all flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Live Demo
            </a>

            <a href="#pricing" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-slate-800/60 transition-all">
              Pricing
            </a>

            <a href="#testimonials" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-slate-800/60 transition-all">
              Reviews
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenWaitlist}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </button>

            <button
              onClick={onOpenWaitlist}
              className="group relative inline-flex items-center justify-center p-0.5 text-sm font-semibold overflow-hidden rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-cyan-500/20"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-full animate-pulse-glow"></span>
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-[#080d1a] rounded-full flex items-center gap-2 group-hover:bg-opacity-0 text-white">
                <span>Get Early Access</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080d1a]/95 border-b border-slate-800 px-4 pt-4 pb-6 backdrop-blur-2xl animate-in slide-in-from-top duration-300">
          <div className="space-y-3">
            <div className="font-mono text-xs text-slate-500 uppercase px-3 pt-2">Products</div>
            
            <a
              href="#edu-section"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80"
            >
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-sm font-semibold text-white">Ninjavo Edu AI</div>
                <div className="text-xs text-slate-400">English Speaking & IELTS AI Testing</div>
              </div>
            </a>

            <a
              href="#finance-section"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80"
            >
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="text-sm font-semibold text-white">Ninjavo Trade AI</div>
                <div className="text-xs text-slate-400">Money Management & AI Trading Signals</div>
              </div>
            </a>

            <div className="border-t border-slate-800/80 my-2 pt-2 space-y-1">
              <a
                href="#core-tech"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-slate-300 hover:text-white"
              >
                Neural AI Engine
              </a>
              <a
                href="#sandbox-demo"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-slate-300 hover:text-white"
              >
                Live Interactive Sandbox
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-slate-300 hover:text-white"
              >
                Pricing Plans
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWaitlist();
              }}
              className="w-full mt-3 py-3 px-4 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              Get Early Access
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
