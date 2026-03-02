"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import {
  Bot, Plus, Zap, MessageSquare, Globe, Phone, Send,
  Play, Pause, Trash2, Settings, ChevronRight, Webhook,
  Brain, Clock, CheckCircle2, Code2, X, Cpu
} from "lucide-react";

const existingAgents = [
  {
    id: 1, name: "Salon_AI_Assistant", status: "active",
    description: "Full-featured salon booking assistant with SMS, Telegram, Instagram, and web form support. Handles appointments, rescheduling, and customer queries.",
    channels: ["SMS", "Telegram", "Instagram", "Form"],
    requests: 1284, tools: 7, model: "GPT-4o",
    color: "#00d4ff",
  },
  {
    id: 2, name: "Salon_Reminder_Cron", status: "active",
    description: "Automated reminder system sending 24h and 2h pre-appointment notifications across all channels.",
    channels: ["SMS", "WhatsApp", "Email", "Telegram"],
    requests: 847, tools: 3, model: "GPT-4o",
    color: "#8b00ff",
  },
  {
    id: 3, name: "Salon_Followup_Cron", status: "active",
    description: "Post-appointment follow-up agent that checks in 6 hours after service and collects feedback.",
    channels: ["SMS", "WhatsApp", "Email"],
    requests: 312, tools: 3, model: "GPT-4o",
    color: "#00ff88",
  },
  {
    id: 4, name: "Salon_Reactivation", status: "active",
    description: "60-day re-engagement campaign targeting dormant customers with personalized outreach.",
    channels: ["Email", "SMS"],
    requests: 93, tools: 2, model: "GPT-4o",
    color: "#ffcc00",
  },
  {
    id: 5, name: "Factory_WhatsApp", status: "active",
    description: "Daily operational report dispatcher for factory management team via WhatsApp.",
    channels: ["WhatsApp"],
    requests: 509, tools: 4, model: "GPT-4o",
    color: "#ff00a0",
  },
  {
    id: 6, name: "NIOIE_National", status: "offline",
    description: "National intelligence data processor and alert system for NIOIE records and monitoring.",
    channels: ["SMS", "Telegram"],
    requests: 0, tools: 5, model: "GPT-4o",
    color: "#00f0ff",
  },
];

const channelIcons: Record<string, typeof Phone> = {
  SMS: Phone,
  Telegram: Send,
  Instagram: Globe,
  Form: Globe,
  WhatsApp: MessageSquare,
  Email: MessageSquare,
};

const templates = [
  { name: "Customer Support Bot", icon: MessageSquare, desc: "24/7 support agent with FAQ, escalation, and ticket creation", color: "#00d4ff" },
  { name: "Booking Assistant", icon: Clock, desc: "Calendar-aware agent that books, reschedules, and sends reminders", color: "#8b00ff" },
  { name: "Sales Qualifier", icon: CheckCircle2, desc: "Lead qualification bot with CRM integration and follow-up sequences", color: "#00ff88" },
  { name: "Data Analyst", icon: Brain, desc: "Agent that reads Google Sheets, analyzes trends, and sends reports", color: "#ffcc00" },
  { name: "Webhook Processor", icon: Webhook, desc: "Event-driven agent that reacts to webhooks and executes workflows", color: "#ff00a0" },
  { name: "Code Assistant", icon: Code2, desc: "Developer-focused agent with code review, docs, and API help", color: "#00f0ff" },
];

export default function Agents() {
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({
    name: "", description: "", model: "gpt-4o", channels: [] as string[], template: ""
  });
  const [creating, setCreating] = useState(false);
  const [created, setCreated] = useState(false);

  const toggleChannel = (ch: string) => {
    setForm(f => ({
      ...f,
      channels: f.channels.includes(ch) ? f.channels.filter(c => c !== ch) : [...f.channels, ch]
    }));
  };

  const handleCreate = async () => {
    if (!form.name) return;
    setCreating(true);
    await new Promise(r => setTimeout(r, 2000));
    setCreating(false);
    setCreated(true);
    setTimeout(() => { setCreated(false); setShowCreate(false); }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#050508] relative">
      <Navigation />
      <div className="fixed inset-0 cyber-grid opacity-15 pointer-events-none" />

      <main className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Bot size={14} className="text-[#00d4ff]" />
              <span className="font-mono-cyber text-[10px] text-[#00d4ff] tracking-[0.2em]">AGENT.REGISTRY</span>
            </div>
            <h1 className="font-orbitron text-3xl md:text-4xl font-black tracking-wider">
              <span className="gradient-text">AI AGENTS</span>
            </h1>
            <p className="font-exo text-[rgba(232,244,255,0.4)] text-sm mt-1">
              {existingAgents.filter(a => a.status === "active").length} active agents running autonomously
            </p>
          </div>
          <button
            onClick={() => setShowCreate(true)}
            className="group flex items-center gap-2 btn-primary px-6 py-3 rounded-lg text-sm font-orbitron font-bold tracking-wider"
          >
            <Plus size={16} />
            CREATE AGENT
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Agents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {existingAgents.map((agent) => (
            <div
              key={agent.id}
              className="glass-card rounded-2xl p-5 relative overflow-hidden group transition-all duration-300 hover:border-[rgba(0,212,255,0.3)] hover:-translate-y-1"
            >
              {/* Status indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${agent.color}15`, border: `1px solid ${agent.color}30` }}
                  >
                    <Bot size={16} style={{ color: agent.color }} />
                  </div>
                  <div>
                    <div className="font-mono-cyber text-[10px]" style={{ color: agent.color }}>
                      {agent.model}
                    </div>
                    <div className="flex items-center gap-1">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${agent.status === "active" ? "status-online" : "status-offline"} animate-pulse`}
                      />
                      <span className={`font-mono-cyber text-[9px] tracking-widest ${agent.status === "active" ? "text-[#00ff88]" : "text-[#ff3355]"}`}>
                        {agent.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1.5 rounded hover:bg-[rgba(0,212,255,0.1)] text-[rgba(232,244,255,0.4)] hover:text-[#00d4ff] transition-all">
                    <Settings size={12} />
                  </button>
                  {agent.status === "active" ? (
                    <button className="p-1.5 rounded hover:bg-[rgba(255,204,0,0.1)] text-[rgba(232,244,255,0.4)] hover:text-[#ffcc00] transition-all">
                      <Pause size={12} />
                    </button>
                  ) : (
                    <button className="p-1.5 rounded hover:bg-[rgba(0,255,136,0.1)] text-[rgba(232,244,255,0.4)] hover:text-[#00ff88] transition-all">
                      <Play size={12} />
                    </button>
                  )}
                  <button className="p-1.5 rounded hover:bg-[rgba(255,51,85,0.1)] text-[rgba(232,244,255,0.4)] hover:text-[#ff3355] transition-all">
                    <Trash2 size={12} />
                  </button>
                </div>
              </div>

              <h3 className="font-orbitron text-sm font-bold text-[rgba(232,244,255,0.9)] mb-2 tracking-wide">
                {agent.name}
              </h3>
              <p className="font-exo text-xs text-[rgba(232,244,255,0.5)] leading-relaxed mb-4">
                {agent.description}
              </p>

              {/* Channels */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {agent.channels.map((ch, j) => (
                  <span
                    key={j}
                    className="font-mono-cyber text-[9px] px-2 py-0.5 rounded tracking-widest"
                    style={{ color: agent.color, background: `${agent.color}10`, border: `1px solid ${agent.color}25` }}
                  >
                    {ch}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between pt-3 border-t border-[rgba(255,255,255,0.05)]">
                <div className="flex items-center gap-1 text-[rgba(232,244,255,0.4)]">
                  <Zap size={10} />
                  <span className="font-mono-cyber text-[9px]">{agent.requests.toLocaleString()} req</span>
                </div>
                <div className="flex items-center gap-1 text-[rgba(232,244,255,0.4)]">
                  <Cpu size={10} />
                  <span className="font-mono-cyber text-[9px]">{agent.tools} tools</span>
                </div>
              </div>

              {/* Bottom glow on hover */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${agent.color}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Templates */}
        <div className="mb-8">
          <h2 className="font-orbitron text-lg font-bold text-[rgba(232,244,255,0.7)] tracking-wider mb-6 flex items-center gap-2">
            <Cpu size={16} className="text-[#00d4ff]" />
            AGENT TEMPLATES
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((t, i) => (
              <button
                key={i}
                onClick={() => { setForm(f => ({ ...f, template: t.name, name: t.name.replace(/\s+/g, "_") })); setShowCreate(true); }}
                className="glass-card glass-card-hover rounded-xl p-4 text-left group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${t.color}15`, border: `1px solid ${t.color}25` }}
                  >
                    <t.icon size={14} style={{ color: t.color }} />
                  </div>
                  <span className="font-orbitron text-xs font-bold" style={{ color: t.color }}>
                    {t.name}
                  </span>
                </div>
                <p className="font-exo text-xs text-[rgba(232,244,255,0.45)] leading-relaxed">{t.desc}</p>
                <div className="flex items-center gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono-cyber text-[9px]" style={{ color: t.color }}>USE TEMPLATE</span>
                  <ChevronRight size={10} style={{ color: t.color }} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Create Agent Modal */}
      {showCreate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.8)] backdrop-blur-sm px-4">
          <div className="glass-card neon-border rounded-2xl p-8 w-full max-w-lg relative">
            <button
              onClick={() => { setShowCreate(false); setCreated(false); }}
              className="absolute top-4 right-4 text-[rgba(232,244,255,0.4)] hover:text-[#00d4ff] transition-colors"
            >
              <X size={18} />
            </button>

            {created ? (
              <div className="text-center py-8">
                <CheckCircle2 size={48} className="text-[#00ff88] mx-auto mb-4" />
                <div className="font-orbitron text-lg font-bold text-[#00ff88] neon-text-green">
                  AGENT DEPLOYED
                </div>
                <p className="font-exo text-sm text-[rgba(232,244,255,0.5)] mt-2">
                  {form.name} is now online and operational
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <Bot size={20} className="text-[#00d4ff]" />
                  <h2 className="font-orbitron text-lg font-bold text-[#00d4ff] tracking-wider">
                    CREATE AI AGENT
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block font-mono-cyber text-[9px] text-[rgba(0,212,255,0.5)] tracking-widest mb-1.5 uppercase">
                      Agent Name
                    </label>
                    <input
                      className="cyber-input w-full px-4 py-2.5 rounded-lg text-sm"
                      placeholder="e.g. MyBusiness_Support_Bot"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block font-mono-cyber text-[9px] text-[rgba(0,212,255,0.5)] tracking-widest mb-1.5 uppercase">
                      Description
                    </label>
                    <textarea
                      className="cyber-input w-full px-4 py-2.5 rounded-lg text-sm resize-none h-20"
                      placeholder="What should this agent do?"
                      value={form.description}
                      onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block font-mono-cyber text-[9px] text-[rgba(0,212,255,0.5)] tracking-widest mb-1.5 uppercase">
                      AI Model
                    </label>
                    <select
                      className="cyber-input w-full px-4 py-2.5 rounded-lg text-sm"
                      value={form.model}
                      onChange={e => setForm(f => ({ ...f, model: e.target.value }))}
                    >
                      <option value="gpt-4o">GPT-4o (Recommended)</option>
                      <option value="gpt-4o-mini">GPT-4o Mini (Fast)</option>
                      <option value="gpt-4-turbo">GPT-4 Turbo</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono-cyber text-[9px] text-[rgba(0,212,255,0.5)] tracking-widest mb-2 uppercase">
                      Channels
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["SMS", "WhatsApp", "Telegram", "Email", "Form", "Webhook"].map(ch => (
                        <button
                          key={ch}
                          onClick={() => toggleChannel(ch)}
                          className={`font-mono-cyber text-[9px] px-3 py-1.5 rounded-lg tracking-widest transition-all ${
                            form.channels.includes(ch)
                              ? "bg-[rgba(0,212,255,0.15)] border border-[rgba(0,212,255,0.5)] text-[#00d4ff]"
                              : "bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-[rgba(232,244,255,0.4)] hover:border-[rgba(0,212,255,0.2)]"
                          }`}
                        >
                          {ch}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCreate}
                  disabled={!form.name || creating}
                  className="mt-6 w-full btn-primary py-3.5 rounded-lg text-sm font-orbitron font-bold tracking-wider disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {creating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#050508] border-t-transparent rounded-full animate-spin" />
                      DEPLOYING...
                    </>
                  ) : (
                    <>
                      <Zap size={14} />
                      DEPLOY AGENT
                    </>
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
