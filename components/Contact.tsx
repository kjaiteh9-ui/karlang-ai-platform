"use client";

import { useState } from "react";
import { Mail, Phone, Send, CheckCircle2, MapPin, Zap } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1800));
    setSending(false);
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-32 bg-[#050508] overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-25" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.05)] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="font-mono-cyber text-[10px] text-[#00ff88] tracking-[0.2em]">CONTACT.INIT</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black mb-4">
            <span className="text-[rgba(232,244,255,0.9)]">OPEN</span>{" "}
            <span className="neon-text-green text-[#00ff88]">CHANNEL</span>
          </h2>
          <p className="font-exo text-[rgba(232,244,255,0.5)] text-sm max-w-xl mx-auto">
            Ready to build intelligent systems? Reach out for consulting, custom AI agents, or automation projects.
          </p>
          <div className="cyber-divider max-w-sm mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "kjaiteh9@gmail.com",
                href: "mailto:kjaiteh9@gmail.com",
                color: "#00d4ff",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+1 (912) 480-1070",
                href: "tel:+19124801070",
                color: "#8b00ff",
              },
              {
                icon: MapPin,
                label: "Timezone",
                value: "EST — Available 24/7",
                href: undefined,
                color: "#00ff88",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className={`flex items-center gap-4 glass-card rounded-xl p-4 ${item.href ? "glass-card-hover" : ""}`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                >
                  <item.icon size={18} style={{ color: item.color }} />
                </div>
                <div>
                  <div className="font-mono-cyber text-[9px] tracking-widest mb-0.5" style={{ color: `${item.color}99` }}>
                    {item.label}
                  </div>
                  <div className="font-exo text-sm text-[rgba(232,244,255,0.8)]">{item.value}</div>
                </div>
              </a>
            ))}

            <div className="glass-card rounded-xl p-5 border-[rgba(0,255,136,0.15)]">
              <div className="flex items-center gap-2 mb-3">
                <Zap size={14} className="text-[#00ff88]" />
                <span className="font-orbitron text-xs font-bold text-[#00ff88] tracking-widest">STATUS</span>
              </div>
              <div className="space-y-2">
                {[
                  { label: "AI Consulting", status: "OPEN" },
                  { label: "Custom Agent Builds", status: "OPEN" },
                  { label: "n8n Automation", status: "OPEN" },
                  { label: "Full-time Roles", status: "SELECTIVE" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="font-exo text-xs text-[rgba(232,244,255,0.5)]">{s.label}</span>
                    <span
                      className={`font-mono-cyber text-[9px] tracking-widest ${
                        s.status === "OPEN" ? "text-[#00ff88]" : "text-[#ffcc00]"
                      }`}
                    >
                      {s.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="glass-card rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                <CheckCircle2 size={52} className="text-[#00ff88] mb-4" />
                <div className="font-orbitron text-xl font-bold text-[#00ff88] neon-text-green mb-2">
                  MESSAGE TRANSMITTED
                </div>
                <p className="font-exo text-sm text-[rgba(232,244,255,0.5)]">
                  Signal received. Karlang will respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-7 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono-cyber text-[9px] text-[rgba(0,212,255,0.5)] tracking-widest mb-1.5 uppercase">
                      Name
                    </label>
                    <input
                      required
                      className="cyber-input w-full px-4 py-2.5 rounded-lg text-sm"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block font-mono-cyber text-[9px] text-[rgba(0,212,255,0.5)] tracking-widest mb-1.5 uppercase">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      className="cyber-input w-full px-4 py-2.5 rounded-lg text-sm"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-mono-cyber text-[9px] text-[rgba(0,212,255,0.5)] tracking-widest mb-1.5 uppercase">
                    Subject
                  </label>
                  <input
                    required
                    className="cyber-input w-full px-4 py-2.5 rounded-lg text-sm"
                    placeholder="e.g. Custom AI Agent Build"
                    value={form.subject}
                    onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block font-mono-cyber text-[9px] text-[rgba(0,212,255,0.5)] tracking-widest mb-1.5 uppercase">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="cyber-input w-full px-4 py-2.5 rounded-lg text-sm resize-none"
                    placeholder="Describe your project or inquiry..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full btn-primary py-4 rounded-lg text-sm font-orbitron font-bold tracking-wider flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#050508] border-t-transparent rounded-full animate-spin" />
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
