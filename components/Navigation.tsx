"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Cpu, Zap } from "lucide-react";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/#about", label: "ABOUT" },
  { href: "/#platform", label: "PLATFORM" },
  { href: "/dashboard", label: "COMMAND CENTER" },
  { href: "/agents", label: "AI AGENTS" },
  { href: "/admin", label: "ADMIN" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(5,5,8,0.95)] backdrop-blur-xl border-b border-[rgba(0,212,255,0.15)] shadow-[0_0_30px_rgba(0,212,255,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.4)] flex items-center justify-center group-hover:border-[#00d4ff] transition-all duration-300">
              <Cpu size={20} className="text-[#00d4ff]" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#00ff88] status-online animate-pulse" />
          </div>
          <div>
            <div className="font-orbitron text-sm font-bold text-[#00d4ff] tracking-widest leading-none">
              KD
            </div>
            <div className="font-mono-cyber text-[9px] text-[rgba(0,212,255,0.5)] tracking-[0.2em] leading-none mt-0.5">
              AI.SYSTEMS
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-xs font-orbitron font-medium tracking-widest transition-all duration-300 rounded relative group ${
                  isActive
                    ? "text-[#00d4ff] bg-[rgba(0,212,255,0.08)]"
                    : "text-[rgba(232,244,255,0.5)] hover:text-[#00d4ff]"
                }`}
              >
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-[#00d4ff] shadow-[0_0_8px_#00d4ff]" />
                )}
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-[rgba(0,212,255,0.05)] transition-opacity duration-300" />
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 text-[10px] font-mono-cyber text-[rgba(0,212,255,0.6)]">
            <Zap size={12} className="text-[#00ff88]" />
            <span>SYSTEMS ONLINE</span>
          </div>
          <Link
            href="/dashboard"
            className="btn-primary px-5 py-2 text-xs rounded-lg font-orbitron font-bold tracking-wider"
          >
            LAUNCH
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#00d4ff] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[rgba(5,5,8,0.98)] backdrop-blur-xl border-t border-[rgba(0,212,255,0.15)] py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-8 py-3 text-xs font-orbitron tracking-widest text-[rgba(232,244,255,0.7)] hover:text-[#00d4ff] hover:bg-[rgba(0,212,255,0.05)] transition-all"
            >
              {link.label}
            </Link>
          ))}
          <div className="px-8 pt-4">
            <Link
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="btn-primary block text-center px-5 py-3 text-xs rounded-lg font-orbitron font-bold tracking-wider w-full"
            >
              LAUNCH COMMAND CENTER
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
