'use client';

import { Github, Linkedin, Mail, ExternalLink, Code2, Server, Container, Cloud, Boxes, Database, GitBranch } from 'lucide-react';

export default function Home() {
  const skills = [
    { name: 'Golang', icon: Code2, color: 'text-cyan-400', description: 'Primary language' },
    { name: 'Python', icon: Code2, color: 'text-blue-400', description: 'Backend & Data' },
    { name: 'Rust', icon: Code2, color: 'text-orange-400', description: 'Systems programming' },
    { name: 'JavaScript', icon: Code2, color: 'text-yellow-400', description: 'Full-stack' },
    { name: 'Docker', icon: Container, color: 'text-blue-500', description: 'Containerization' },
    { name: 'Kubernetes', icon: Boxes, color: 'text-blue-600', description: 'Orchestration' },
    { name: 'GCP', icon: Cloud, color: 'text-red-400', description: 'Cloud infrastructure' },
    { name: 'Microservices', icon: Server, color: 'text-green-400', description: 'Architecture' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white"></h1>
          <div className="flex gap-4">
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-slate-300 hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-5xl font-bold text-white shadow-2xl">
                PT
              </div>
              <div className="absolute -bottom-2 -right-2 bg-cyan-400 rounded-full p-2">
                <Code2 className="w-6 h-6 text-slate-900" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Pete</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-slate-300 mb-6">
              Senior Software Engineer <span className="text-cyan-400">🐹 Gopher</span>
            </p>
            
            <p className="text-lg text-slate-400 max-w-2xl mb-8">
              Building scalable distributed systems and cloud-native applications with a passion for clean code and elegant architecture.
            </p>

            <div className="flex gap-4 mb-8">
              <a 
                href="https://github.com/vdntruong" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all hover:scale-105 border border-slate-700"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/vdntruong" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-colors">
              <GitBranch className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">Backend Specialist</h3>
              <p className="text-slate-300 leading-relaxed">
                Experienced in designing and implementing high-performance backend systems using Go. 
                Proficient in building RESTful APIs, gRPC services, and event-driven architectures.
              </p>
            </div>
            
            <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700/50 hover:border-blue-400/50 transition-colors">
              <Cloud className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">Cloud Native</h3>
              <p className="text-slate-300 leading-relaxed">
                Deep expertise in containerization with Docker and orchestration with Kubernetes. 
                Skilled in deploying and managing applications on GCP with focus on scalability and reliability.
              </p>
            </div>
            
            <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700/50 hover:border-green-400/50 transition-colors">
              <Server className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">Microservices Architecture</h3>
              <p className="text-slate-300 leading-relaxed">
                Proven track record in breaking down monoliths into microservices, implementing service mesh, 
                and ensuring system observability with distributed tracing and monitoring.
              </p>
            </div>
            
            <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700/50 hover:border-orange-400/50 transition-colors">
              <Database className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">Polyglot Developer</h3>
              <p className="text-slate-300 leading-relaxed">
                Versatile with multiple programming languages including Python for data processing, 
                Rust for performance-critical components, and JavaScript for full-stack development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Tech Stack</h2>
          <p className="text-slate-400 text-center mb-12">Technologies I work with daily</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={skill.name}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all hover:scale-105 hover:shadow-xl group"
                >
                  <Icon className={`w-12 h-12 ${skill.color} mb-3 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-xl font-semibold text-white mb-1">{skill.name}</h3>
                  <p className="text-sm text-slate-400">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Let&apos;s Connect</h2>
          <p className="text-slate-400 mb-8">
            Interested in collaborating or have a project in mind? Feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:truongvodainhat@gmail.com"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all hover:scale-105 font-semibold shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            
            <a 
              href="https://github.com/vdntruong"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all hover:scale-105 font-semibold"
            >
              <ExternalLink className="w-5 h-5" />
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2025 Pete. Built with Next.js & Tailwind CSS</p>
          <div className="flex gap-6 justify-center mt-4">
            <a href="https://github.com/vdntruong" className="hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/vdntruong" className="hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:truongvodainhat@gmail.com" className="hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
