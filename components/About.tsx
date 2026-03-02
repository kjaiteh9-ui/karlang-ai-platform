"use client";

import { Brain, Code2, Network, Zap, Shield, Database, GitBranch, Globe } from "lucide-react";

const skills = [
  { name: "AI/ML Engineering", level: 95, color: "#00d4ff" },
  { name: "n8n Automation", level: 98, color: "#8b00ff" },
  { name: "Next.js / React", level: 92, color: "#00f0ff" },
  { name: "Python / TypeScript", level: 90, color: "#00ff88" },
  { name: "Supabase / PostgreSQL", level: 88, color: "#ffcc00" },
  { name: "OpenAI API Integration", level: 96, color: "#ff00a0" },
  { name: "LangChain / Agents", level: 93, color: "#00d4ff" },
  { name: "System Architecture", level: 91, color: "#8b00ff" },
];

const techStack = [
  { icon: Brain, label: "OpenAI", color: "#00d4ff" },
  { icon: Code2, label: "Next.js", color: "#8b00ff" },
  { icon: Database, label: "Supabase", color: "#00ff88" },
  { icon: Network, label: "n8n", color: "#ffcc00" },
  { icon: GitBranch, label: "Vercel", color: "#00f0ff" },
  { icon: Globe, label: "Twilio", color: "#ff00a0" },
  { icon: Shield, label: "LangChain", color: "#00d4ff" },
  { icon: Zap, label: "Telegram", color: "#8b00ff" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-[#050508] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(139,0,255,0.3)] bg-[rgba(139,0,255,0.05)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8b00ff] animate-pulse" />
            <span className="font-mono-cyber text-[10px] text-[#8b00ff] tracking-[0.2em]">PROFILE.SYS</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black mb-4">
            <span className="text-[rgba(232,244,255,0.9)]">ABOUT THE</span>{" "}
            <span className="neon-text text-[#00d4ff]">ARCHITECT</span>
          </h2>
          <div className="cyber-divider max-w-sm mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio + Vision */}
          <div>
            {/* Avatar placeholder */}
            <div className="relative mb-10 flex items-center gap-6">
              <div className="relative flex-shrink-0">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[rgba(0,212,255,0.15)] to-[rgba(139,0,255,0.15)] border border-[rgba(0,212,255,0.3)] flex items-center justify-center">
                  <Brain size={48} className="text-[#00d4ff] opacity-80" />
                </div>
                <div className="absolute -bottom-2 -right-2 flex items-center gap-1 bg-[#050508] border border-[rgba(0,255,136,0.4)] rounded-full px-2 py-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] status-online animate-pulse" />
                  <span className="font-mono-cyber text-[8px] text-[#00ff88]">ACTIVE</span>
                </div>
              </div>
              <div>
                <h3 className="font-orbitron text-2xl font-bold text-[#00d4ff] mb-1">KARLANG DIATE</h3>
                <p className="font-exo text-[rgba(232,244,255,0.5)] text-sm tracking-wider">
                  Software Engineer • AI Architect
                </p>
                <p className="font-mono-cyber text-[10px] text-[rgba(0,212,255,0.4)] mt-1 tracking-widest">
                  kjaiteh9@gmail.com
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-6">
                <h4 className="font-orbitron text-sm font-bold text-[#00d4ff] tracking-widest mb-3 flex items-center gap-2">
                  <Code2 size={14} />
                  BIO
                </h4>
                <p className="font-exo text-[rgba(232,244,255,0.7)] text-sm leading-relaxed">
                  I build intelligent systems that think, adapt, and automate. As a Software Engineer
                  and AI Architect, I specialize in deploying production-grade AI agents,
                  designing multi-channel automation pipelines, and engineering the infrastructure
                  that powers the next generation of intelligent applications.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 border-[rgba(139,0,255,0.2)]">
                <h4 className="font-orbitron text-sm font-bold text-[#8b00ff] tracking-widest mb-3 flex items-center gap-2">
                  <Network size={14} />
                  VISION
                </h4>
                <p className="font-exo text-[rgba(232,244,255,0.7)] text-sm leading-relaxed">
                  A future where every business operates with a dedicated AI command layer —
                  autonomous agents that handle bookings, customer communications, data pipelines,
                  and decision-making in real time. My mission is to architect that infrastructure
                  and make it accessible, reliable, and powerful.
                </p>
              </div>

              {/* Tech stack badges */}
              <div>
                <h4 className="font-orbitron text-xs font-bold text-[rgba(232,244,255,0.4)] tracking-widest mb-4 flex items-center gap-2">
                  <Zap size={12} />
                  TECH ARSENAL
                </h4>
                <div className="grid grid-cols-4 gap-3">
                  {techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="glass-card glass-card-hover rounded-xl p-3 flex flex-col items-center gap-2 text-center"
                    >
                      <tech.icon size={20} style={{ color: tech.color }} />
                      <span className="font-mono-cyber text-[9px] tracking-wider" style={{ color: `${tech.color}99` }}>
                        {tech.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h4 className="font-orbitron text-sm font-bold text-[rgba(232,244,255,0.4)] tracking-widest mb-8 flex items-center gap-2">
              <Shield size={12} />
              CAPABILITY MATRIX
            </h4>
            <div className="space-y-5">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-exo text-sm text-[rgba(232,244,255,0.7)]">{skill.name}</span>
                    <span className="font-mono-cyber text-xs" style={{ color: skill.color }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${skill.color}66, ${skill.color})`,
                        boxShadow: `0 0 8px ${skill.color}66`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { label: "Workflows Deployed", value: "120+", sub: "Production Grade" },
                { label: "AI Agents Built", value: "50+", sub: "Multi-channel" },
                { label: "Automation Hours Saved", value: "10K+", sub: "Per Month" },
                { label: "Systems Running", value: "24/7", sub: "Zero Downtime" },
              ].map((m, i) => (
                <div key={i} className="glass-card rounded-xl p-4">
                  <div className="font-orbitron text-2xl font-black text-[#00d4ff] neon-text">{m.value}</div>
                  <div className="font-exo text-xs text-[rgba(232,244,255,0.7)] mt-1">{m.label}</div>
                  <div className="font-mono-cyber text-[9px] text-[rgba(0,212,255,0.4)] tracking-widest mt-0.5">
                    {m.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
