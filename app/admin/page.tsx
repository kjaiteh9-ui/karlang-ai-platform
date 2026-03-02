"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import {
  Users, Activity, Shield, Settings, Search, Filter,
  MoreVertical, CheckCircle2, XCircle, AlertCircle,
  Download, Plus, Trash2, Edit, Eye, Lock, Unlock,
  BarChart3, TrendingUp, Calendar, Mail
} from "lucide-react";

const users = [
  { id: 1, name: "Karlang Diate", email: "kjaiteh9@gmail.com", role: "SUPERADMIN", status: "active", agents: 13, lastSeen: "Now", joined: "2024-01-01" },
  { id: 2, name: "Sarah Mitchell", email: "sarah@salon.com", role: "CLIENT", status: "active", agents: 3, lastSeen: "2h ago", joined: "2024-11-15" },
  { id: 3, name: "James Osei", email: "james@factory.com", role: "CLIENT", status: "active", agents: 2, lastSeen: "1d ago", joined: "2024-12-03" },
  { id: 4, name: "Demo User", email: "demo@example.com", role: "VIEWER", status: "suspended", agents: 0, lastSeen: "5d ago", joined: "2025-01-20" },
  { id: 5, name: "API Bot Alpha", email: "bot@system.ai", role: "BOT", status: "active", agents: 5, lastSeen: "12s ago", joined: "2025-02-01" },
];

const activityLog = [
  { time: "14:24:01", user: "Karlang Diate", action: "Deployed new agent: Salon_AI_Assistant v2", type: "deploy" },
  { time: "14:22:33", user: "Sarah Mitchell", action: "Updated booking: #4821 rescheduled", type: "update" },
  { time: "14:20:18", user: "System", action: "Auto-reactivation campaign triggered for 14 customers", type: "auto" },
  { time: "14:18:44", user: "Karlang Diate", action: "Modified OpenAI credential config", type: "config" },
  { time: "14:15:09", user: "API Bot Alpha", action: "Processed 47 webhook events", type: "api" },
  { time: "14:12:55", user: "James Osei", action: "Viewed Factory_WhatsApp dashboard", type: "view" },
  { time: "14:10:22", user: "System", action: "Backup completed: 3.2MB snapshot saved", type: "backup" },
  { time: "14:07:11", user: "Demo User", action: "Login attempt blocked — account suspended", type: "security" },
];

const usageData = [
  { label: "API Calls", used: 78234, limit: 100000, color: "#00d4ff" },
  { label: "Storage (MB)", used: 842, limit: 2048, color: "#8b00ff" },
  { label: "Agents", used: 13, limit: 50, color: "#00ff88" },
  { label: "SMS Credits", used: 2341, limit: 5000, color: "#ffcc00" },
];

const roleBadge: Record<string, { color: string; bg: string }> = {
  SUPERADMIN: { color: "#00d4ff", bg: "rgba(0,212,255,0.1)" },
  CLIENT: { color: "#00ff88", bg: "rgba(0,255,136,0.1)" },
  VIEWER: { color: "#ffcc00", bg: "rgba(255,204,0,0.1)" },
  BOT: { color: "#8b00ff", bg: "rgba(139,0,255,0.1)" },
};

const actionBadge: Record<string, string> = {
  deploy: "text-[#00d4ff]",
  update: "text-[#00ff88]",
  auto: "text-[#8b00ff]",
  config: "text-[#ffcc00]",
  api: "text-[rgba(232,244,255,0.5)]",
  view: "text-[rgba(232,244,255,0.4)]",
  backup: "text-[#00f0ff]",
  security: "text-[#ff3355]",
};

export default function Admin() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<"users" | "activity" | "usage" | "settings">("users");

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050508] relative">
      <Navigation />

      <div className="fixed inset-0 cyber-grid opacity-15 pointer-events-none" />

      <main className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Shield size={16} className="text-[#ff00a0]" />
              <span className="font-mono-cyber text-[10px] text-[#ff00a0] tracking-[0.2em]">
                ADMIN // RESTRICTED ACCESS
              </span>
            </div>
            <h1 className="font-orbitron text-3xl md:text-4xl font-black text-[rgba(232,244,255,0.9)] tracking-wider">
              CONTROL <span className="neon-text-pink text-[#ff00a0]">PANEL</span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 btn-outline px-4 py-2 rounded-lg text-xs border-[rgba(255,0,160,0.4)] text-[#ff00a0] hover:bg-[rgba(255,0,160,0.08)]">
              <Download size={12} />
              EXPORT
            </button>
            <button className="flex items-center gap-2 btn-primary px-4 py-2 rounded-lg text-xs">
              <Plus size={12} />
              ADD USER
            </button>
          </div>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Users", value: users.length, icon: Users, color: "#00d4ff" },
            { label: "Active", value: users.filter(u => u.status === "active").length, icon: CheckCircle2, color: "#00ff88" },
            { label: "Suspended", value: users.filter(u => u.status === "suspended").length, icon: XCircle, color: "#ff3355" },
            { label: "Alerts", value: 2, icon: AlertCircle, color: "#ffcc00" },
          ].map((card, i) => (
            <div key={i} className="glass-card rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <card.icon size={18} style={{ color: card.color }} />
                <span className="font-orbitron text-2xl font-black" style={{ color: card.color }}>
                  {card.value}
                </span>
              </div>
              <div className="font-exo text-xs text-[rgba(232,244,255,0.5)]">{card.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-[rgba(13,13,26,0.5)] rounded-xl p-1 border border-[rgba(255,255,255,0.05)]">
          {(["users", "activity", "usage", "settings"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 text-xs font-orbitron tracking-widest rounded-lg transition-all ${
                activeTab === tab
                  ? "bg-[rgba(0,212,255,0.1)] text-[#00d4ff] border border-[rgba(0,212,255,0.3)]"
                  : "text-[rgba(232,244,255,0.4)] hover:text-[rgba(232,244,255,0.7)]"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Users Tab */}
        {activeTab === "users" && (
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-orbitron text-sm font-bold text-[#00d4ff] tracking-wider flex items-center gap-2">
                <Users size={14} />
                USER MANAGEMENT
              </h2>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-[rgba(0,212,255,0.4)]" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="cyber-input pl-8 pr-4 py-2 text-xs rounded-lg w-48"
                  />
                </div>
                <button className="flex items-center gap-2 btn-outline px-3 py-2 rounded-lg text-xs">
                  <Filter size={10} />
                  FILTER
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full cyber-table">
                <thead>
                  <tr>
                    <th className="text-left">USER</th>
                    <th className="text-left hidden md:table-cell">ROLE</th>
                    <th className="text-center">STATUS</th>
                    <th className="text-right hidden lg:table-cell">AGENTS</th>
                    <th className="text-right hidden lg:table-cell">LAST SEEN</th>
                    <th className="text-right">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => {
                    const role = roleBadge[user.role];
                    return (
                      <tr key={user.id}>
                        <td>
                          <div>
                            <div className="font-exo text-sm text-[rgba(232,244,255,0.85)]">{user.name}</div>
                            <div className="font-mono-cyber text-[9px] text-[rgba(232,244,255,0.35)]">{user.email}</div>
                          </div>
                        </td>
                        <td className="hidden md:table-cell">
                          <span
                            className="font-mono-cyber text-[9px] px-2 py-0.5 rounded tracking-widest"
                            style={{ color: role.color, background: role.bg }}
                          >
                            {user.role}
                          </span>
                        </td>
                        <td className="text-center">
                          <span
                            className={`font-mono-cyber text-[9px] px-2 py-0.5 rounded tracking-widest ${
                              user.status === "active"
                                ? "text-[#00ff88] bg-[rgba(0,255,136,0.08)]"
                                : "text-[#ff3355] bg-[rgba(255,51,85,0.08)]"
                            }`}
                          >
                            {user.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="text-right font-mono-cyber text-xs text-[rgba(232,244,255,0.6)] hidden lg:table-cell">
                          {user.agents}
                        </td>
                        <td className="text-right font-mono-cyber text-[10px] text-[rgba(232,244,255,0.35)] hidden lg:table-cell">
                          {user.lastSeen}
                        </td>
                        <td className="text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button className="p-1.5 rounded hover:bg-[rgba(0,212,255,0.1)] text-[rgba(232,244,255,0.4)] hover:text-[#00d4ff] transition-all">
                              <Eye size={12} />
                            </button>
                            <button className="p-1.5 rounded hover:bg-[rgba(0,212,255,0.1)] text-[rgba(232,244,255,0.4)] hover:text-[#00d4ff] transition-all">
                              <Edit size={12} />
                            </button>
                            {user.status === "active" ? (
                              <button className="p-1.5 rounded hover:bg-[rgba(255,204,0,0.1)] text-[rgba(232,244,255,0.4)] hover:text-[#ffcc00] transition-all">
                                <Lock size={12} />
                              </button>
                            ) : (
                              <button className="p-1.5 rounded hover:bg-[rgba(0,255,136,0.1)] text-[rgba(232,244,255,0.4)] hover:text-[#00ff88] transition-all">
                                <Unlock size={12} />
                              </button>
                            )}
                            <button className="p-1.5 rounded hover:bg-[rgba(255,51,85,0.1)] text-[rgba(232,244,255,0.4)] hover:text-[#ff3355] transition-all">
                              <Trash2 size={12} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Activity Tab */}
        {activeTab === "activity" && (
          <div className="glass-card rounded-2xl p-6">
            <h2 className="font-orbitron text-sm font-bold text-[#00d4ff] tracking-wider flex items-center gap-2 mb-6">
              <Activity size={14} />
              ACTIVITY LOG
            </h2>
            <div className="space-y-1">
              {activityLog.map((entry, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-3 px-4 rounded-lg hover:bg-[rgba(0,212,255,0.03)] transition-colors border-b border-[rgba(255,255,255,0.03)]"
                >
                  <span className="font-mono-cyber text-[10px] text-[rgba(0,212,255,0.4)] flex-shrink-0 mt-0.5 w-16">
                    {entry.time}
                  </span>
                  <span className="font-exo text-xs text-[rgba(232,244,255,0.6)] flex-shrink-0 w-28 truncate">
                    {entry.user}
                  </span>
                  <span className={`font-exo text-xs flex-1 ${actionBadge[entry.type]}`}>
                    {entry.action}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Usage Tab */}
        {activeTab === "usage" && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6">
              <h2 className="font-orbitron text-sm font-bold text-[#00d4ff] tracking-wider flex items-center gap-2 mb-6">
                <BarChart3 size={14} />
                RESOURCE USAGE
              </h2>
              <div className="space-y-6">
                {usageData.map((item, i) => {
                  const pct = Math.round((item.used / item.limit) * 100);
                  return (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="font-exo text-sm text-[rgba(232,244,255,0.7)]">{item.label}</span>
                        <span className="font-mono-cyber text-xs" style={{ color: item.color }}>
                          {item.used.toLocaleString()} / {item.limit.toLocaleString()}
                        </span>
                      </div>
                      <div className="h-2 bg-[rgba(255,255,255,0.05)] rounded-full">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${pct}%`,
                            background: `linear-gradient(90deg, ${item.color}88, ${item.color})`,
                            boxShadow: `0 0 8px ${item.color}60`,
                          }}
                        />
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="font-mono-cyber text-[9px] text-[rgba(232,244,255,0.3)]">
                          {pct}% USED
                        </span>
                        <span className="font-mono-cyber text-[9px] text-[rgba(232,244,255,0.3)]">
                          {(item.limit - item.used).toLocaleString()} REMAINING
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h2 className="font-orbitron text-sm font-bold text-[#8b00ff] tracking-wider flex items-center gap-2 mb-6">
                <TrendingUp size={14} />
                PLAN & BILLING
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[rgba(0,212,255,0.05)] border border-[rgba(0,212,255,0.2)]">
                  <div className="font-orbitron text-lg font-black text-[#00d4ff]">ELITE PLAN</div>
                  <div className="font-mono-cyber text-[10px] text-[rgba(0,212,255,0.5)] tracking-widest mt-1">
                    UNLIMITED AGENTS // PRIORITY SUPPORT
                  </div>
                </div>
                {[
                  { icon: Calendar, label: "Next Billing", val: "Apr 2, 2026" },
                  { icon: TrendingUp, label: "Monthly Cost", val: "$0 (Free Tier)" },
                  { icon: Mail, label: "Invoice Email", val: "kjaiteh9@gmail.com" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-[rgba(255,255,255,0.04)]">
                    <div className="flex items-center gap-2">
                      <item.icon size={12} className="text-[rgba(0,212,255,0.5)]" />
                      <span className="font-exo text-xs text-[rgba(232,244,255,0.5)]">{item.label}</span>
                    </div>
                    <span className="font-mono-cyber text-xs text-[rgba(232,244,255,0.8)]">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "PLATFORM CONFIG",
                icon: Settings,
                color: "#00d4ff",
                fields: [
                  { label: "Platform Name", value: "Karlang AI Platform" },
                  { label: "Instance URL", value: "rossan.app.n8n.cloud" },
                  { label: "Supabase Project", value: "karlang-ai-prod" },
                  { label: "Default Model", value: "gpt-4o" },
                ],
              },
              {
                title: "SECURITY",
                icon: Shield,
                color: "#ff00a0",
                fields: [
                  { label: "2FA Status", value: "ENABLED" },
                  { label: "Session Timeout", value: "24 hours" },
                  { label: "API Rate Limit", value: "1000 req/min" },
                  { label: "Log Retention", value: "90 days" },
                ],
              },
            ].map((section, i) => (
              <div key={i} className="glass-card rounded-2xl p-6">
                <h2
                  className="font-orbitron text-sm font-bold tracking-wider flex items-center gap-2 mb-6"
                  style={{ color: section.color }}
                >
                  <section.icon size={14} />
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.fields.map((field, j) => (
                    <div key={j}>
                      <label className="block font-mono-cyber text-[9px] text-[rgba(0,212,255,0.5)] tracking-widest mb-1 uppercase">
                        {field.label}
                      </label>
                      <div className="cyber-input px-4 py-2.5 rounded-lg text-sm flex items-center justify-between">
                        <span>{field.value}</span>
                        <Edit size={12} className="text-[rgba(0,212,255,0.3)] cursor-pointer hover:text-[#00d4ff]" />
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full btn-primary py-3 rounded-lg text-xs font-orbitron font-bold tracking-wider">
                  SAVE CHANGES
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
