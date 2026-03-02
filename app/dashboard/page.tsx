"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import {
  Bot, Activity, Zap, Users, MessageSquare, TrendingUp, Clock,
  AlertCircle, CheckCircle2, Cpu, Database, Globe, RefreshCw,
  ArrowUp, ArrowDown, Terminal, Wifi, Server
} from "lucide-react";

// Simulated live data
const agents = [
  { name: "Salon_AI_Assistant", status: "online", requests: 1284, uptime: "99.9%", channel: "SMS+TG+IG", lastPing: "2s ago" },
  { name: "Salon_Reminder_Cron", status: "online", requests: 847, uptime: "100%", channel: "Multi", lastPing: "14s ago" },
  { name: "Salon_Followup_Cron", status: "online", requests: 312, uptime: "99.7%", channel: "Multi", lastPing: "28s ago" },
  { name: "Salon_Reactivation", status: "busy", requests: 93, uptime: "98.2%", channel: "Email+SMS", lastPing: "1m ago" },
  { name: "Factory_WhatsApp", status: "online", requests: 509, uptime: "99.5%", channel: "WhatsApp", lastPing: "5s ago" },
  { name: "NIOIE_National", status: "offline", requests: 0, uptime: "0%", channel: "SMS+TG", lastPing: "4h ago" },
];

const logs = [
  { time: "14:23:08", type: "success", msg: "Salon_AI_Assistant: Booking confirmed for client #4821" },
  { time: "14:22:55", type: "info", msg: "Reminder sent via SMS to +1912***1070" },
  { time: "14:22:41", type: "success", msg: "Factory_WhatsApp: Daily report dispatched to 3 managers" },
  { time: "14:22:18", type: "warning", msg: "Rate limit approaching: OpenAI API at 78% capacity" },
  { time: "14:21:59", msg: "NIOIE_National: Connection timeout - retrying...", type: "error" },
  { time: "14:21:33", type: "info", msg: "Reactivation campaign: 12 emails queued for dispatch" },
  { time: "14:21:12", type: "success", msg: "New customer registered: Sarah M. via Instagram DM" },
  { time: "14:20:47", type: "info", msg: "Salon_Followup_Cron: Sending 6h post-appointment followup x5" },
  { time: "14:20:31", type: "success", msg: "Webhook trigger: salon-lead received new submission" },
  { time: "14:20:08", type: "info", msg: "Google Sheets sync: 3 new bookings written to Bookings tab" },
];

function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="font-mono-cyber text-[#00d4ff]">{time}</span>;
}

function MiniSparkline({ color }: { color: string }) {
  const points = Array.from({ length: 12 }, () => Math.random() * 40 + 10);
  const max = Math.max(...points);
  const w = 80, h = 30;
  const pts = points
    .map((v, i) => `${(i / (points.length - 1)) * w},${h - (v / max) * h}`)
    .join(" ");
  return (
    <svg width={w} height={h} className="opacity-70">
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Dashboard() {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1200);
  };

  const stats = [
    { label: "Active Agents", value: "5", change: "+1", up: true, icon: Bot, color: "#00d4ff" },
    { label: "API Calls Today", value: "3,045", change: "+12%", up: true, icon: Zap, color: "#8b00ff" },
    { label: "Messages Sent", value: "892", change: "+8%", up: true, icon: MessageSquare, color: "#00f0ff" },
    { label: "Success Rate", value: "98.7%", change: "+0.3%", up: true, icon: TrendingUp, color: "#00ff88" },
    { label: "Avg Response", value: "1.2s", change: "-0.1s", up: true, icon: Clock, color: "#ffcc00" },
    { label: "Users Online", value: "24", change: "+3", up: true, icon: Users, color: "#ff00a0" },
  ];

  return (
    <div className="min-h-screen bg-[#050508] relative">
      <Navigation />

      {/* Background */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent" />

      <main className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#00ff88] status-online animate-pulse" />
              <span className="font-mono-cyber text-[10px] text-[#00ff88] tracking-[0.2em]">COMMAND CENTER // LIVE</span>
            </div>
            <h1 className="font-orbitron text-3xl md:text-4xl font-black text-[#00d4ff] neon-text tracking-wider">
              COMMAND CENTER
            </h1>
            <p className="font-exo text-[rgba(232,244,255,0.4)] text-sm mt-1">
              Monitoring {agents.filter(a => a.status !== "offline").length} active systems
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg">
              <Clock size={12} className="text-[rgba(0,212,255,0.6)]" />
              <LiveClock />
            </div>
            <button
              onClick={handleRefresh}
              className="flex items-center gap-2 btn-outline px-4 py-2 rounded-lg text-xs"
            >
              <RefreshCw size={12} className={refreshing ? "animate-spin" : ""} />
              REFRESH
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="glass-card glass-card-hover rounded-xl p-4 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-16 h-16 opacity-5 rounded-bl-full"
                style={{ background: stat.color }}
              />
              <stat.icon size={16} style={{ color: stat.color }} className="mb-2" />
              <div className="font-orbitron text-xl font-black" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="font-exo text-[10px] text-[rgba(232,244,255,0.5)] mt-0.5">{stat.label}</div>
              <div className={`flex items-center gap-0.5 mt-1 font-mono-cyber text-[9px] ${stat.up ? "text-[#00ff88]" : "text-[#ff3355]"}`}>
                {stat.up ? <ArrowUp size={8} /> : <ArrowDown size={8} />}
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {/* Agent Status */}
          <div className="lg:col-span-2 glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Bot size={16} className="text-[#00d4ff]" />
                <h2 className="font-orbitron text-sm font-bold text-[#00d4ff] tracking-wider">
                  AGENT STATUS MATRIX
                </h2>
              </div>
              <span className="font-mono-cyber text-[9px] text-[rgba(0,212,255,0.4)] bg-[rgba(0,212,255,0.05)] px-2 py-1 rounded tracking-widest">
                {agents.length} AGENTS
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full cyber-table">
                <thead>
                  <tr>
                    <th className="text-left">AGENT</th>
                    <th className="text-left">STATUS</th>
                    <th className="text-right">REQUESTS</th>
                    <th className="text-right hidden md:table-cell">UPTIME</th>
                    <th className="text-right hidden lg:table-cell">CHANNEL</th>
                    <th className="text-right">PING</th>
                  </tr>
                </thead>
                <tbody>
                  {agents.map((agent, i) => (
                    <tr key={i}>
                      <td className="font-mono-cyber text-xs text-[rgba(232,244,255,0.8)]">{agent.name}</td>
                      <td>
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              agent.status === "online" ? "status-online" :
                              agent.status === "busy" ? "status-busy" : "status-offline"
                            }`}
                          />
                          <span
                            className={`font-mono-cyber text-[9px] tracking-widest ${
                              agent.status === "online" ? "text-[#00ff88]" :
                              agent.status === "busy" ? "text-[#ffcc00]" : "text-[#ff3355]"
                            }`}
                          >
                            {agent.status.toUpperCase()}
                          </span>
                        </div>
                      </td>
                      <td className="text-right font-mono-cyber text-xs text-[rgba(232,244,255,0.6)]">
                        {agent.requests.toLocaleString()}
                      </td>
                      <td className="text-right font-mono-cyber text-xs text-[#00ff88] hidden md:table-cell">
                        {agent.uptime}
                      </td>
                      <td className="text-right hidden lg:table-cell">
                        <span className="font-mono-cyber text-[9px] bg-[rgba(0,212,255,0.08)] text-[rgba(0,212,255,0.7)] px-2 py-0.5 rounded tracking-widest">
                          {agent.channel}
                        </span>
                      </td>
                      <td className="text-right font-mono-cyber text-[10px] text-[rgba(232,244,255,0.35)]">
                        {agent.lastPing}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* System Health */}
          <div className="space-y-4">
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Server size={14} className="text-[#00d4ff]" />
                <h3 className="font-orbitron text-xs font-bold text-[#00d4ff] tracking-wider">SYS HEALTH</h3>
              </div>
              {[
                { label: "OpenAI API", val: 78, color: "#8b00ff" },
                { label: "Supabase DB", val: 45, color: "#00d4ff" },
                { label: "n8n Engine", val: 62, color: "#00ff88" },
                { label: "Twilio SMS", val: 31, color: "#ffcc00" },
              ].map((item, i) => (
                <div key={i} className="mb-3">
                  <div className="flex justify-between mb-1">
                    <span className="font-exo text-xs text-[rgba(232,244,255,0.6)]">{item.label}</span>
                    <span className="font-mono-cyber text-[10px]" style={{ color: item.color }}>{item.val}%</span>
                  </div>
                  <div className="h-1 bg-[rgba(255,255,255,0.05)] rounded-full">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${item.val}%`, background: item.color, boxShadow: `0 0 6px ${item.color}60` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Activity size={14} className="text-[#00ff88]" />
                <h3 className="font-orbitron text-xs font-bold text-[#00ff88] tracking-wider">THROUGHPUT</h3>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Messages/hr", val: "124", color: "#00d4ff" },
                  { label: "API calls/min", val: "38", color: "#8b00ff" },
                  { label: "DB queries/s", val: "12", color: "#00ff88" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="font-exo text-xs text-[rgba(232,244,255,0.5)]">{item.label}</span>
                    <div className="flex items-center gap-3">
                      <MiniSparkline color={item.color} />
                      <span className="font-mono-cyber text-sm font-bold" style={{ color: item.color }}>
                        {item.val}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Wifi size={14} className="text-[#00f0ff]" />
                <h3 className="font-orbitron text-xs font-bold text-[#00f0ff] tracking-wider">NETWORK</h3>
              </div>
              <div className="space-y-2">
                {[
                  { label: "n8n Cloud", status: "OK" },
                  { label: "Supabase", status: "OK" },
                  { label: "OpenAI", status: "OK" },
                  { label: "Twilio", status: "OK" },
                  { label: "Telegram", status: "WARN" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="font-exo text-xs text-[rgba(232,244,255,0.5)]">{item.label}</span>
                    <span className={`font-mono-cyber text-[9px] tracking-widest ${item.status === "OK" ? "text-[#00ff88]" : "text-[#ffcc00]"}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* System Logs */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Terminal size={16} className="text-[#00d4ff]" />
              <h2 className="font-orbitron text-sm font-bold text-[#00d4ff] tracking-wider">
                SYSTEM LOG STREAM
              </h2>
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse ml-1" />
            </div>
            <span className="font-mono-cyber text-[9px] text-[rgba(0,212,255,0.4)] tracking-widest">LIVE FEED</span>
          </div>

          <div className="space-y-1 max-h-64 overflow-y-auto font-mono-cyber text-xs">
            {logs.map((log, i) => (
              <div
                key={i}
                className="flex items-start gap-3 py-1.5 px-3 rounded hover:bg-[rgba(0,212,255,0.03)] transition-colors"
              >
                <span className="text-[rgba(0,212,255,0.4)] flex-shrink-0">{log.time}</span>
                <span className="flex-shrink-0">
                  {log.type === "success" && <CheckCircle2 size={10} className="text-[#00ff88] mt-0.5" />}
                  {log.type === "error" && <AlertCircle size={10} className="text-[#ff3355] mt-0.5" />}
                  {log.type === "warning" && <AlertCircle size={10} className="text-[#ffcc00] mt-0.5" />}
                  {log.type === "info" && <Activity size={10} className="text-[#00d4ff] mt-0.5" />}
                </span>
                <span
                  className={`leading-tight ${
                    log.type === "success" ? "text-[rgba(0,255,136,0.8)]" :
                    log.type === "error" ? "text-[rgba(255,51,85,0.8)]" :
                    log.type === "warning" ? "text-[rgba(255,204,0,0.8)]" :
                    "text-[rgba(232,244,255,0.6)]"
                  }`}
                >
                  {log.msg}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
