"use client";

import { Zap, ArrowRight, Sparkles, CreditCard, RefreshCw, MessageSquare, Bot } from "lucide-react";

const autoTiers = [
  {
    name: "Starter",
    id: "auto-starter",
    subtitle: "Simple website + essentials",
    setup: 399,
    monthly: 99,
    setupNote: "Website + basic automation",
    monthlyNote: "Hosting, updates, uptime",
    payLink: "https://buy.stripe.com/cNi14gegqfTU88x0pm5EY04",
    features: ["1-page or simple website", "Contact form", "Mobile-friendly design", "Call/text button"],
    color: "#00d4ff",
    popular: false,
  },
  {
    name: "Pro",
    id: "auto-pro",
    subtitle: "Website + booking automation",
    setup: 799,
    monthly: 199,
    setupNote: "Website + full booking system",
    monthlyNote: "Hosting, automation, support",
    payLink: "https://buy.stripe.com/cNibIU4FQcHIbkJfkg5EY05",
    features: ["Website", "Booking system", "Confirmation messages", "Reminder messages", "Contact automation"],
    color: "#8b00ff",
    popular: true,
  },
  {
    name: "Premium",
    id: "auto-premium",
    subtitle: "Full automation suite",
    setup: 1299,
    monthly: 299,
    setupNote: "Website + complete automation",
    monthlyNote: "Full automation support",
    payLink: "https://buy.stripe.com/9B6aEQegq378fAZ2xu5EY06",
    features: ["Website", "Booking setup", "Reminder system", "Follow-up automation", "Review request automation", "AI chat/help system", "Deposit setup"],
    color: "#00ff88",
    popular: false,
  },
  {
    name: "Custom",
    id: "auto-custom",
    subtitle: "Enterprise-grade automation",
    setup: 1499,
    monthly: 499,
    setupNote: "Scoped per project",
    monthlyNote: "Dedicated support",
    payLink: "https://buy.stripe.com/fZu14g8W67no0G5c845EY07",
    features: ["Custom automation workflow", "Special business logic", "Multi-step client journey", "CRM or internal process setup", "Advanced integrations"],
    color: "#ff6b35",
    popular: false,
  },
];

const tiers = [
  {
    name: "Starter",
    id: "starter",
    subtitle: "Simple landing page",
    setup: 250,
    monthly: 99,
    setupNote: "Design + build",
    monthlyNote: "Hosting, updates, uptime",
    payLink: "https://buy.stripe.com/eVq6oAgoyfTUdsR0pm5EY00",
    features: ["Up to 3 pages", "Contact form", "Mobile responsive", "Basic SEO setup"],
    color: "#00d4ff",
    popular: false,
  },
  {
    name: "Pro",
    id: "pro",
    subtitle: "Multi-page business site",
    setup: 400,
    monthly: 155,
    setupNote: "Design + build + content",
    monthlyNote: "Hosting, updates, support",
    payLink: "https://buy.stripe.com/00waEQ1tE0Z09cBc845EY01",
    features: ["Up to 8 pages", "Blog or news section", "Google Analytics", "Monthly content edits"],
    color: "#8b00ff",
    popular: true,
  },
  {
    name: "Business",
    id: "business",
    subtitle: "Online store",
    setup: 675,
    monthly: 229,
    setupNote: "Design + store + products",
    monthlyNote: "Hosting, store, security",
    payLink: "https://buy.stripe.com/5kQ7sE8W6gXY74tegc5EY02",
    features: ["Up to 50 products", "Payment integration", "Inventory management", "Monthly performance report"],
    color: "#00ff88",
    popular: false,
  },
  {
    name: "Custom",
    id: "custom",
    subtitle: "Complex / enterprise build",
    setup: 99,
    monthly: 419,
    setupNote: "Scoped per project",
    monthlyNote: "Dedicated support",
    payLink: "https://buy.stripe.com/3cIcMYgoy5fgbkJ5JG5EY08",
    features: ["Custom features & portals", "Integrations (CRM, API)", "Priority support", "Monthly strategy call"],
    color: "#ff6b35",
    popular: false,
  },
];

export default function Pricing() {
  const handleContact = (tierName: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const subjectInput = document.querySelector<HTMLInputElement>('input[placeholder="e.g. Custom AI Agent Build"]');
        if (subjectInput) {
          const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
          nativeInputValueSetter?.call(subjectInput, `${tierName} Website Package Inquiry`);
          subjectInput.dispatchEvent(new Event("input", { bubbles: true }));
        }
      }, 600);
    }
  };

  return (
    <section id="pricing" className="relative py-32 bg-[#050508] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-25" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b00ff] to-transparent opacity-40" />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/5 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(139,0,255,0.04)_0%,transparent_70%)]" />
      <div className="absolute bottom-1/3 right-1/5 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(0,255,136,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(139,0,255,0.3)] bg-[rgba(139,0,255,0.05)] mb-6">
            <CreditCard size={10} className="text-[#8b00ff]" />
            <span className="font-mono-cyber text-[10px] text-[#8b00ff] tracking-[0.2em]">PRICING.TIERS</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black mb-4">
            <span className="text-[rgba(232,244,255,0.9)]">WEBSITE</span>{" "}
            <span className="text-[#8b00ff]" style={{ textShadow: "0 0 10px rgba(139,0,255,0.8), 0 0 20px rgba(139,0,255,0.5)" }}>
              PACKAGES
            </span>
          </h2>
          <p className="font-exo text-[rgba(232,244,255,0.5)] text-base max-w-2xl mx-auto leading-relaxed">
            Professional websites built with precision. One-time setup to get started,
            then monthly maintenance keeps everything running smooth.
          </p>
          <div className="cyber-divider max-w-sm mx-auto mt-6" />
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="relative glass-card glass-card-hover rounded-2xl p-6 flex flex-col transition-all duration-300 group"
              style={{
                borderColor: tier.popular ? `${tier.color}40` : undefined,
                boxShadow: tier.popular ? `0 0 40px ${tier.color}10` : undefined,
              }}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 rounded-full text-[10px] font-orbitron font-bold tracking-widest z-10"
                  style={{ background: `${tier.color}20`, border: `1px solid ${tier.color}50`, color: tier.color }}
                >
                  <Sparkles size={10} />
                  MOST POPULAR
                </div>
              )}

              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-5 rounded-bl-full"
                style={{ background: tier.color }}
              />

              {/* Tier name */}
              <div className="mb-6">
                <h3
                  className="font-orbitron text-lg font-bold tracking-wider"
                  style={{ color: tier.color }}
                >
                  {tier.name.toUpperCase()}
                </h3>
                <p className="font-exo text-xs text-[rgba(232,244,255,0.4)] mt-1">{tier.subtitle}</p>
              </div>

              {/* Setup price */}
              <div className="mb-5 pb-5 border-b border-[rgba(232,244,255,0.08)]">
                <div className="flex items-center gap-2 mb-2">
                  <CreditCard size={10} style={{ color: `${tier.color}80` }} />
                  <span className="font-mono-cyber text-[9px] text-[rgba(232,244,255,0.4)] tracking-widest">ONE-TIME SETUP</span>
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-orbitron text-3xl font-black text-[rgba(232,244,255,0.95)]">
                    ${tier.setup.toLocaleString()}
                  </span>
                  {tier.id === "custom" && <span className="font-exo text-sm text-[rgba(232,244,255,0.4)]">+</span>}
                </div>
                <p className="font-exo text-[10px] text-[rgba(232,244,255,0.35)] mb-3">{tier.setupNote}</p>
                <a
                  href={tier.payLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg text-xs font-orbitron font-bold tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: `${tier.color}15`,
                    border: `1px solid ${tier.color}40`,
                    color: tier.color,
                  }}
                >
                  PAY SETUP FEE <ArrowRight size={12} />
                </a>
              </div>

              {/* Monthly price display */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <RefreshCw size={10} style={{ color: `${tier.color}80` }} />
                  <span className="font-mono-cyber text-[9px] text-[rgba(232,244,255,0.4)] tracking-widest">MONTHLY MAINTENANCE</span>
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-orbitron text-2xl font-black text-[rgba(232,244,255,0.95)]">
                    ${tier.monthly}
                  </span>
                  <span className="font-exo text-sm text-[rgba(232,244,255,0.4)]">/mo</span>
                  {tier.id === "custom" && <span className="font-exo text-sm text-[rgba(232,244,255,0.4)]">+</span>}
                </div>
                <p className="font-exo text-[10px] text-[rgba(232,244,255,0.35)]">{tier.monthlyNote}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <div className="font-mono-cyber text-[9px] text-[rgba(232,244,255,0.3)] tracking-widest mb-3">INCLUDES</div>
                <div className="space-y-2.5">
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <Zap size={10} className="flex-shrink-0 mt-1" style={{ color: `${tier.color}80` }} />
                      <span className="font-exo text-xs text-[rgba(232,244,255,0.6)] leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact button */}
              <div className="mt-auto">
                <button
                  onClick={() => handleContact(tier.name)}
                  className="w-full py-3 rounded-lg text-xs font-orbitron font-bold tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "transparent",
                    border: `1px solid ${tier.color}30`,
                    color: `${tier.color}cc`,
                  }}
                >
                  <MessageSquare size={14} />
                  CONTACT FOR {tier.name.toUpperCase()}
                </button>
              </div>

              {/* Hover line */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${tier.color}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* How it works - Website */}
        <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="font-orbitron text-lg font-bold text-[rgba(232,244,255,0.8)] tracking-wider">
              HOW IT WORKS
            </h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Choose Your Tier", desc: "Pick the package that fits your business needs.", color: "#00d4ff" },
              { step: "02", title: "Get In Touch", desc: "Contact us to discuss your project and get started.", color: "#8b00ff" },
              { step: "03", title: "We Build It", desc: "We design, build, and launch your website.", color: "#00ff88" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3"
                  style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
                >
                  <span className="font-orbitron text-sm font-bold" style={{ color: s.color }}>{s.step}</span>
                </div>
                <h4 className="font-orbitron text-xs font-bold tracking-wider text-[rgba(232,244,255,0.8)] mb-1">
                  {s.title}
                </h4>
                <p className="font-exo text-[11px] text-[rgba(232,244,255,0.4)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── AGENTIC AUTOMATION SECTION ────────────────────────────── */}
        <div className="mt-32">
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-30 mb-20" />

          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.05)] mb-6">
              <Bot size={10} className="text-[#00ff88]" />
              <span className="font-mono-cyber text-[10px] text-[#00ff88] tracking-[0.2em]">AUTOMATION.TIERS</span>
            </div>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black mb-4">
              <span className="text-[rgba(232,244,255,0.9)]">AGENTIC</span>{" "}
              <span className="text-[#00ff88]" style={{ textShadow: "0 0 10px rgba(0,255,136,0.8), 0 0 20px rgba(0,255,136,0.5)" }}>
                AUTOMATION
              </span>
            </h2>
            <p className="font-exo text-[rgba(232,244,255,0.5)] text-base max-w-2xl mx-auto leading-relaxed">
              Website + intelligent automation. Booking, reminders, follow-ups, reviews, and AI — all running on autopilot for your business.
            </p>
            <div className="cyber-divider max-w-sm mx-auto mt-6" />
          </div>

          {/* Automation Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
            {autoTiers.map((tier) => (
              <div
                key={tier.id}
                className="relative glass-card glass-card-hover rounded-2xl p-6 flex flex-col transition-all duration-300 group"
                style={{
                  borderColor: tier.popular ? `${tier.color}40` : undefined,
                  boxShadow: tier.popular ? `0 0 40px ${tier.color}10` : undefined,
                }}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 rounded-full text-[10px] font-orbitron font-bold tracking-widest z-10"
                    style={{ background: `${tier.color}20`, border: `1px solid ${tier.color}50`, color: tier.color }}
                  >
                    <Sparkles size={10} />
                    MOST POPULAR
                  </div>
                )}

                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 opacity-5 rounded-bl-full"
                  style={{ background: tier.color }}
                />

                {/* Tier name */}
                <div className="mb-6">
                  <h3
                    className="font-orbitron text-lg font-bold tracking-wider"
                    style={{ color: tier.color }}
                  >
                    {tier.name.toUpperCase()}
                  </h3>
                  <p className="font-exo text-xs text-[rgba(232,244,255,0.4)] mt-1">{tier.subtitle}</p>
                </div>

                {/* Setup price */}
                <div className="mb-5 pb-5 border-b border-[rgba(232,244,255,0.08)]">
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard size={10} style={{ color: `${tier.color}80` }} />
                    <span className="font-mono-cyber text-[9px] text-[rgba(232,244,255,0.4)] tracking-widest">ONE-TIME SETUP</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-orbitron text-3xl font-black text-[rgba(232,244,255,0.95)]">
                      ${tier.setup.toLocaleString()}
                    </span>
                    {tier.id === "auto-custom" && <span className="font-exo text-sm text-[rgba(232,244,255,0.4)]">+</span>}
                  </div>
                  <p className="font-exo text-[10px] text-[rgba(232,244,255,0.35)] mb-3">{tier.setupNote}</p>
                  <a
                    href={tier.payLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-lg text-xs font-orbitron font-bold tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: `${tier.color}15`,
                      border: `1px solid ${tier.color}40`,
                      color: tier.color,
                    }}
                  >
                    PAY SETUP FEE <ArrowRight size={12} />
                  </a>
                </div>

                {/* Monthly price display */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <RefreshCw size={10} style={{ color: `${tier.color}80` }} />
                    <span className="font-mono-cyber text-[9px] text-[rgba(232,244,255,0.4)] tracking-widest">MONTHLY SUPPORT</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-orbitron text-2xl font-black text-[rgba(232,244,255,0.95)]">
                      ${tier.monthly}
                    </span>
                    <span className="font-exo text-sm text-[rgba(232,244,255,0.4)]">/mo</span>
                    {tier.id === "auto-custom" && <span className="font-exo text-sm text-[rgba(232,244,255,0.4)]">+</span>}
                  </div>
                  <p className="font-exo text-[10px] text-[rgba(232,244,255,0.35)]">{tier.monthlyNote}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="font-mono-cyber text-[9px] text-[rgba(232,244,255,0.3)] tracking-widest mb-3">INCLUDES</div>
                  <div className="space-y-2.5">
                    {tier.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Zap size={10} className="flex-shrink-0 mt-1" style={{ color: `${tier.color}80` }} />
                        <span className="font-exo text-xs text-[rgba(232,244,255,0.6)] leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact button */}
                <div className="mt-auto">
                  <button
                    onClick={() => handleContact(`${tier.name} Automation`)}
                    className="w-full py-3 rounded-lg text-xs font-orbitron font-bold tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: "transparent",
                      border: `1px solid ${tier.color}30`,
                      color: `${tier.color}cc`,
                    }}
                  >
                    <MessageSquare size={14} />
                    CONTACT FOR {tier.name.toUpperCase()}
                  </button>
                </div>

                {/* Hover line */}
                <div
                  className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${tier.color}, transparent)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
