'use client';

import { useState } from 'react';
import { BookOpen, Mic, Brain, Sparkles, Check, Headphones, Award, BarChart2, MessageSquare, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function ProductEdu({ onOpenWaitlist }) {
  const [activeScenario, setActiveScenario] = useState('interview');

  const scenarios = [
    {
      id: 'interview',
      title: 'Tech Job Interview Simulator',
      prompt: '"Tell me about a complex engineering challenge you resolved using Go or Python."',
      aiFeedback: 'Band 8.5 • Smooth transitional phrases: "Subsequent to that", "Mitigated latency".',
      band: '8.5'
    },
    {
      id: 'ielts',
      title: 'IELTS Speaking Part 3',
      prompt: '"How do you think artificial intelligence will impact secondary education over the next decade?"',
      aiFeedback: 'Band 8.0 • Excellent grammatical range; work on intonation pitch cadence.',
      band: '8.0'
    },
    {
      id: 'toefl',
      title: 'TOEFL Academic Pitch',
      prompt: '"Summarize the key differences between renewable solar energy storage and grid capacity."',
      aiFeedback: 'Band 28/30 • Outstanding academic vocabulary & clarity.',
      band: '28/30'
    }
  ];

  return (
    <section id="edu-section" className="py-24 bg-[#060913] relative overflow-hidden bg-radial-glow">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>NINJAVO EDU AI • PRODUCT SPOTLIGHT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Master English Speaking & Exam Scoring with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
              Personalized AI Intelligence
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Ninjavo Edu replaces expensive tutors with an instant, hyper-accurate 24/7 AI Speaking Coach. Practice real-time conversation, receive phonetic diagnostics, and get band scores calculated instantly using standardized rubrics.
          </p>
        </div>

        {/* Core Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Column: Interactive Feature List & Simulator */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              
              {/* Feature Card 1 */}
              <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Mic className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      Real-Time AI Voice Tutor & Phonetic Analysis
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Speak naturally into your mic. Ninjavo Edu analyzes syllable timing, accent clarity, intonation pitch curves, and vocal hesitations in under 15ms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      IELTS, TOEFL & TOEIC Mock Exam Simulator
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Take realistic speaking and writing mock exams. Receive detailed band score diagnostics broken down by Lexical Resource, Fluency, Grammar, and Coherence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      Smart Vocabulary & Spaced Repetition Flashcards
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Automatically extract advanced idioms, collocations, and topic-specific vocabulary from your oral mistakes into interactive spaced-repetition decks.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Interactive Scenario Switcher */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <div className="text-xs font-mono text-slate-400 uppercase mb-3 flex items-center justify-between">
                <span>SELECT PREVIEW SCENARIO:</span>
                <span className="text-cyan-400">INSTANT EVALUATION</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {scenarios.map((sc) => (
                  <button
                    key={sc.id}
                    onClick={() => setActiveScenario(sc.id)}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all text-center ${
                      activeScenario === sc.id
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {sc.id.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Scenario Feedback Box */}
              {scenarios.filter(s => s.id === activeScenario).map((sc) => (
                <div key={sc.id} className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs space-y-2">
                  <div className="text-slate-300 italic font-medium">{sc.prompt}</div>
                  <div className="flex items-center justify-between border-t border-slate-800 pt-2">
                    <span className="text-slate-400">{sc.aiFeedback}</span>
                    <span className="font-mono font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded">
                      {sc.band}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <button
                onClick={onOpenWaitlist}
                className="w-full sm:w-auto px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Try Ninjavo Edu AI Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: App Mockup Generated Image Showcase */}
          <div className="lg:col-span-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              <div className="relative glass-panel rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl">
                {/* Visual Header bar */}
                <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">Ninjavo Edu Dashboard UI</span>
                  <span className="text-xs font-mono text-cyan-400">LIVE FEED</span>
                </div>

                <div className="relative w-full aspect-video bg-slate-900">
                  <Image
                    src="/images/ninjavo_edu_app.jpg"
                    alt="Ninjavo Edu AI App Interface"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
