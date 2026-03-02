"use client";

import Link from "next/link";
import {
  Bot, Webhook, MessageSquare, BarChart3, Zap, Shield,
  ArrowRight, Phone, Send, Mail, Globe, Lock, Cpu
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Custom AI Agents",
    description:
      "Deploy intelligent agents trained on your business logic. Each agent operates autonomously, handles conversations, makes decisions, and executes actions 24/7.",
    tags: ["OpenAI GPT-4", "LangChain", "Memory"],
    color: "#00d4ff",
  },
  {
    icon: Webhook,
    title: "Webhook Integrations",
    description:
      "Connect any external service through intelligent webhooks. Trigger agents from Stripe payments, form submissions, CRM updates, and custom events.",
    tags: ["REST API", "n8n", "Real-time"],
    color: "#8b00ff",
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Chat",
    description:
      "One AI brain, every channel. Your agents communicate via SMS, WhatsApp, Telegram, Email, and web chat — all synchronized through a single command layer.",
    tags: ["WhatsApp", "SMS", "Telegram"],
    color: "#00f0ff",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Real-time intelligence on every agent interaction. Track conversation volumes, response times, conversion rates, and system health from your command center.",
    tags: ["Real-time", "Charts", "Insights"],
    color: "#00ff88",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Military-grade security with end-to-end encryption, role-based access control, audit logging, and Supabase Row Level Security on all data.",
    tags: ["RLS", "JWT", "Encrypted"],
    color: "#ffcc00",
  },
  {
    icon: Zap,
    title: "Autonomous Automation",
    description:
      "Schedule campaigns, trigger reminders, follow up after appointments, and reactivate dormant customers — all without human intervention.",
    tags: ["Cron Jobs", "Smart Rules", "No-Code"],
    color: "#ff00a0",
  },
];

const channels = [
  { icon: Phone, label: "SMS / Twilio", color: "#00d4ff" },
  { icon: Send, label: "Telegram", color: "#8b00ff" },
  { icon: Globe, label: "WhatsApp", color: "#00ff88" },
  { icon: Mail, label: "Email / SMTP", color: "#ffcc00" },
  { icon: MessageSquare, label: "Web Chat", color: "#ff00a0" },
  { icon: Webhook, label: "Webhooks", color: "#00f0ff" },
];

export default function Platform() {
  return (
    <section id="platform" className="relative py-32 bg-[#08080f] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hex-bg opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b00ff] to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent opacity-40" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.04)_0%,transparent_70%)]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(139,0,255,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.05)] mb-6">
            <Cpu size={10} className="text-[#00d4ff]" />
            <span className="font-mono-cyber text-[10px] text-[#00d4ff] tracking-[0.2em]">PLATFORM.CORE</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">AI AGENT</span>{" "}
            <span className="text-[rgba(232,244,255,0.9)]">PLATFORM</span>
          </h2>
          <p className="font-exo text-[rgba(232,244,255,0.5)] text-base max-w-2xl mx-auto leading-relaxed">
            A complete intelligence infrastructure. Build, deploy, and command AI agents
            that operate across every channel your business uses.
          </p>
          <div className="cyber-divider max-w-sm mx-auto mt-6" />
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((f, i) => (
            <div
              key={i}
              className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden group"
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-5 rounded-bl-full"
                style={{ background: f.color }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `${f.color}15`,
                  border: `1px solid ${f.color}30`,
                  boxShadow: `0 0 15px ${f.color}15`,
                }}
              >
                <f.icon size={22} style={{ color: f.color }} />
              </div>

              <h3
                className="font-orbitron text-sm font-bold mb-2 tracking-wider"
                style={{ color: f.color }}
              >
                {f.title}
              </h3>
              <p className="font-exo text-[rgba(232,244,255,0.6)] text-sm leading-relaxed mb-4">
                {f.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {f.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="font-mono-cyber text-[9px] px-2 py-0.5 rounded tracking-widest"
                    style={{
                      color: f.color,
                      background: `${f.color}10`,
                      border: `1px solid ${f.color}25`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover line */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${f.color}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Channels bar */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="text-center mb-6">
            <h3 className="font-orbitron text-lg font-bold text-[rgba(232,244,255,0.8)] tracking-wider">
              CONNECTED CHANNELS
            </h3>
            <p className="font-exo text-[rgba(232,244,255,0.4)] text-sm mt-1">
              One AI, every communication surface
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {channels.map((ch, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] hover:border-[rgba(0,212,255,0.2)] transition-all duration-300 group cursor-pointer"
              >
                <ch.icon size={24} style={{ color: ch.color }} className="group-hover:scale-110 transition-transform" />
                <span className="font-mono-cyber text-[9px] text-center tracking-widest" style={{ color: `${ch.color}80` }}>
                  {ch.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/agents"
              className="group flex items-center gap-3 btn-primary px-8 py-4 rounded-lg text-sm font-orbitron font-bold tracking-wider"
            >
              <Bot size={16} />
              BUILD YOUR FIRST AGENT
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-3 btn-outline px-8 py-4 rounded-lg text-sm"
            >
              <Lock size={16} />
              VIEW COMMAND CENTER
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
