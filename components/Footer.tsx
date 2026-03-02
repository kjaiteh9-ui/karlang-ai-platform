"use client";

import Link from "next/link";
import { Cpu, Mail, Phone, Github, Twitter, Linkedin, Zap } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050508] border-t border-[rgba(0,212,255,0.1)] overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.3)] flex items-center justify-center">
                <Cpu size={20} className="text-[#00d4ff]" />
              </div>
              <div>
                <div className="font-orbitron text-lg font-black text-[#00d4ff]">KARLANG DIATE</div>
                <div className="font-mono-cyber text-[9px] text-[rgba(0,212,255,0.4)] tracking-widest">
                  AI SYSTEMS ARCHITECT
                </div>
              </div>
            </div>
            <p className="font-exo text-[rgba(232,244,255,0.4)] text-sm leading-relaxed mb-4">
              Building the intelligence infrastructure of tomorrow. AI agents, automation
              pipelines, and intelligent systems that work while you sleep.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-8 h-8 rounded-lg bg-[rgba(0,212,255,0.05)] border border-[rgba(0,212,255,0.15)] flex items-center justify-center hover:border-[rgba(0,212,255,0.4)] hover:bg-[rgba(0,212,255,0.1)] transition-all"
                >
                  <s.icon size={14} className="text-[rgba(0,212,255,0.6)]" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-orbitron text-xs font-bold text-[rgba(232,244,255,0.4)] tracking-widest mb-4">
              NAVIGATION
            </h4>
            <div className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/#about", label: "About" },
                { href: "/#platform", label: "Platform" },
                { href: "/dashboard", label: "Command Center" },
                { href: "/agents", label: "AI Agents" },
                { href: "/admin", label: "Admin" },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="block font-exo text-sm text-[rgba(232,244,255,0.5)] hover:text-[#00d4ff] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-orbitron text-xs font-bold text-[rgba(232,244,255,0.4)] tracking-widest mb-4">
              CONTACT
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:kjaiteh9@gmail.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[rgba(0,212,255,0.05)] border border-[rgba(0,212,255,0.15)] flex items-center justify-center group-hover:border-[rgba(0,212,255,0.4)] transition-all">
                  <Mail size={14} className="text-[rgba(0,212,255,0.6)]" />
                </div>
                <span className="font-mono-cyber text-xs text-[rgba(232,244,255,0.5)] group-hover:text-[#00d4ff] transition-colors">
                  kjaiteh9@gmail.com
                </span>
              </a>
              <a
                href="tel:+19124801070"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[rgba(0,212,255,0.05)] border border-[rgba(0,212,255,0.15)] flex items-center justify-center group-hover:border-[rgba(0,212,255,0.4)] transition-all">
                  <Phone size={14} className="text-[rgba(0,212,255,0.6)]" />
                </div>
                <span className="font-mono-cyber text-xs text-[rgba(232,244,255,0.5)] group-hover:text-[#00d4ff] transition-colors">
                  +1 (912) 480-1070
                </span>
              </a>
              <div className="mt-4 p-3 rounded-xl bg-[rgba(0,255,136,0.05)] border border-[rgba(0,255,136,0.15)]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse status-online" />
                  <span className="font-mono-cyber text-[9px] text-[#00ff88] tracking-widest">SYSTEMS ONLINE</span>
                </div>
                <p className="font-exo text-[10px] text-[rgba(232,244,255,0.4)]">
                  Available for AI consulting & custom agent builds
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(255,255,255,0.05)] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Zap size={12} className="text-[#00d4ff]" />
            <span className="font-mono-cyber text-[10px] text-[rgba(232,244,255,0.3)] tracking-widest">
              © {year} KARLANG DIATE. ALL SYSTEMS RESERVED.
            </span>
          </div>
          <div className="font-mono-cyber text-[10px] text-[rgba(232,244,255,0.2)] tracking-widest">
            BUILT WITH NEXT.JS + SUPABASE + OPENAI
          </div>
        </div>
      </div>
    </footer>
  );
}
