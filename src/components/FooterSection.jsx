'use client';

import { Cpu, ArrowRight, Github, Linkedin, Mail, ShieldCheck, CheckCircle2, Calendar, UserCheck } from 'lucide-react';
import Link from 'next/link';

export default function FooterSection({ onOpenWaitlist }) {
  return (
    <footer className="bg-[#04060d] border-t border-slate-800/80 pt-16 pb-12 relative text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1px] flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-[#080d1a] rounded-[11px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Ninjavo<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Tech</span>
              </span>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Founded in <strong>October 2025</strong>, Ninjavo Tech (NinjavoTech) architects next-generation AI platforms for English speech practice, exam simulation, money management, and quantitative trading.
            </p>

            {/* Admin & Founding details */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>Established: <strong className="text-white font-mono">October 2025</strong></span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300">
                <UserCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>Admin / Leadership: <a href="mailto:vdntruong@ninjavo.tech" className="text-cyan-300 hover:underline font-mono">vdntruong@ninjavo.tech</a></span>
              </div>
            </div>

            {/* System Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono mt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-300">All AI Systems Operational</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400 font-bold">99.99% Uptime</span>
            </div>
          </div>

          {/* Col 2: Products */}
          <div>
            <h4 className="text-white font-bold text-xs font-mono uppercase tracking-wider mb-4">
              AI Products
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#edu-section" className="hover:text-cyan-400 transition-colors">Ninjavo Edu AI Coach</a>
              </li>
              <li>
                <a href="#edu-section" className="hover:text-cyan-400 transition-colors">IELTS & TOEFL Simulator</a>
              </li>
              <li>
                <a href="#finance-section" className="hover:text-emerald-400 transition-colors">Ninjavo Trade AI Terminal</a>
              </li>
              <li>
                <a href="#finance-section" className="hover:text-emerald-400 transition-colors">Smart Money & Expense Engine</a>
              </li>
              <li>
                <a href="#sandbox-demo" className="hover:text-cyan-400 transition-colors">Interactive AI Sandbox</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Technology */}
          <div>
            <h4 className="text-white font-bold text-xs font-mono uppercase tracking-wider mb-4">
              Technology & API
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#core-tech" className="hover:text-purple-400 transition-colors">Ninjavo Neural Engine</a>
              </li>
              <li>
                <a href="#core-tech" className="hover:text-purple-400 transition-colors">Edge Zero-Knowledge Privacy</a>
              </li>
              <li>
                <a href="#core-tech" className="hover:text-purple-400 transition-colors">Developer REST & WebSockets</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Enterprise SLA Plans</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-white font-bold text-xs font-mono uppercase tracking-wider mb-4">
              Stay Updated
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Subscribe to Ninjavo Tech updates or contact admin directly at <a href="mailto:vdntruong@ninjavo.tech" className="text-cyan-400 hover:underline font-mono">vdntruong@ninjavo.tech</a>.
            </p>
            <div className="flex items-center bg-slate-900 rounded-xl border border-slate-800 p-1">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent text-xs text-white px-3 py-1.5 focus:outline-none w-full placeholder:text-slate-600"
              />
              <button
                onClick={onOpenWaitlist}
                className="p-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-lg transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-500">
            © {new Date().getFullYear()} Ninjavo Tech (NinjavoTech). Founded Oct 2025 • Admin: <a href="mailto:vdntruong@ninjavo.tech" className="text-slate-400 hover:text-cyan-400 transition-colors">vdntruong@ninjavo.tech</a>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/vdntruong" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/in/vdntruong" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:vdntruong@ninjavo.tech" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <span className="font-mono text-[11px]">vdntruong@ninjavo.tech</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
