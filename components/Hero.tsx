"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Terminal, Cpu, Zap, Shield } from "lucide-react";

// Particle canvas animation
function CyberCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // Particles
    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }[] = [];

    const colors = ["#00d4ff", "#8b00ff", "#00f0ff", "#0066ff"];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Grid lines
    const gridLines: { x1: number; y1: number; x2: number; y2: number; opacity: number }[] = [];
    for (let i = 0; i < 20; i++) {
      const isHorizontal = Math.random() > 0.5;
      if (isHorizontal) {
        const y = Math.random() * height;
        gridLines.push({ x1: 0, y1: y, x2: width, y2: y, opacity: Math.random() * 0.08 });
      } else {
        const x = Math.random() * width;
        gridLines.push({ x1: x, y1: 0, x2: x, y2: height, opacity: Math.random() * 0.08 });
      }
    }

    let animId: number;
    let frame = 0;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Draw grid
      ctx.lineWidth = 0.5;
      for (const line of gridLines) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 212, 255, ${line.opacity})`;
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();
      }

      // Draw connections between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        grad.addColorStop(0, p.color.replace(")", `, ${p.opacity})`).replace("rgb", "rgba"));
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Scan line
      const scanY = (frame * 1.5) % (height + 100) - 50;
      const scanGrad = ctx.createLinearGradient(0, scanY - 30, 0, scanY + 30);
      scanGrad.addColorStop(0, "transparent");
      scanGrad.addColorStop(0.5, "rgba(0, 212, 255, 0.04)");
      scanGrad.addColorStop(1, "transparent");
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 30, width, 60);

      frame++;
      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

// Typewriter hook
function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text.length === current.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(
    ["Software Engineer", "AI Architect", "Systems Builder", "Intelligence Commander", "Automation Expert"],
    90,
    2200
  );

  const stats = [
    { value: "50+", label: "AI Agents Deployed" },
    { value: "99.9%", label: "System Uptime" },
    { value: "1M+", label: "API Calls Served" },
    { value: "24/7", label: "Autonomous Operation" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050508]">
      {/* Animated canvas background */}
      <CyberCanvas />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.06)_0%,transparent_70%)]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(139,0,255,0.04)_0%,transparent_70%)]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* System badge */}
        <div className="fade-in-up inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.05)] backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse status-online" />
          <span className="font-mono-cyber text-[10px] text-[#00d4ff] tracking-[0.2em]">
            AI COMMAND SYSTEM // ONLINE
          </span>
          <Zap size={10} className="text-[#00ff88]" />
        </div>

        {/* Main name */}
        <h1
          className="fade-in-up delay-100 font-orbitron font-black text-6xl md:text-8xl lg:text-9xl tracking-tight mb-2 glitch"
          data-text="KARLANG"
        >
          <span className="neon-text text-[#00d4ff]">KARLANG</span>
        </h1>
        <h1
          className="fade-in-up delay-200 font-orbitron font-black text-6xl md:text-8xl lg:text-9xl tracking-tight mb-8"
          data-text="DIATE"
        >
          <span className="gradient-text">DIATE</span>
        </h1>

        {/* Role typewriter */}
        <div className="fade-in-up delay-300 flex items-center justify-center gap-3 mb-4 h-8">
          <span className="w-6 h-px bg-[rgba(0,212,255,0.4)]" />
          <span className="font-exo text-lg md:text-xl text-[rgba(232,244,255,0.7)] tracking-widest font-light min-w-[280px]">
            {role}
            <span className="cursor-blink text-[#00d4ff] font-bold ml-0.5">|</span>
          </span>
          <span className="w-6 h-px bg-[rgba(0,212,255,0.4)]" />
        </div>

        {/* Subtitle */}
        <p className="fade-in-up delay-400 font-exo text-[rgba(232,244,255,0.5)] text-sm md:text-base tracking-[0.2em] uppercase mb-12">
          Intelligent Systems • AI Infrastructure • Autonomous Agents
        </p>

        {/* CTA Buttons */}
        <div className="fade-in-up delay-500 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/dashboard"
            className="group relative flex items-center gap-3 btn-primary px-8 py-4 rounded-lg text-sm font-orbitron font-bold tracking-wider overflow-hidden"
          >
            <Cpu size={16} />
            <span>ENTER COMMAND CENTER</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            <span className="absolute inset-0 bg-[rgba(255,255,255,0.1)] opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link
            href="/agents"
            className="flex items-center gap-3 btn-outline px-8 py-4 rounded-lg text-sm backdrop-blur-sm"
          >
            <Terminal size={16} />
            <span>DEPLOY AI AGENT</span>
          </Link>
        </div>

        {/* Stats */}
        <div className="fade-in-up delay-600 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-4 border-[rgba(0,212,255,0.1)]"
            >
              <div className="font-orbitron text-2xl font-black text-[#00d4ff] neon-text">
                {stat.value}
              </div>
              <div className="font-exo text-[10px] text-[rgba(232,244,255,0.4)] tracking-widest uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature badges */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3">
        {["WEBHOOK READY", "MULTI-CHANNEL", "REAL-TIME AI", "AUTONOMOUS"].map((tag, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(13,13,26,0.7)] border border-[rgba(0,212,255,0.1)] backdrop-blur-sm"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            <Shield size={10} className="text-[#00d4ff]" />
            <span className="font-mono-cyber text-[9px] text-[rgba(0,212,255,0.6)] tracking-widest">{tag}</span>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono-cyber text-[9px] text-[rgba(0,212,255,0.4)] tracking-widest">SCROLL</span>
        <ChevronDown size={16} className="text-[rgba(0,212,255,0.4)]" />
      </div>
    </section>
  );
}
