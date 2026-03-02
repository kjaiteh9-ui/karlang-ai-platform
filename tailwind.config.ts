import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: "#050508",
          dark: "#0a0a0f",
          deeper: "#080810",
          card: "#0d0d1a",
          border: "#1a1a2e",
          blue: "#00d4ff",
          "blue-dim": "#0066ff",
          "blue-dark": "#003380",
          cyan: "#00f0ff",
          purple: "#8b00ff",
          "purple-dim": "#6600cc",
          pink: "#ff00a0",
          green: "#00ff88",
          "green-dim": "#00cc6a",
          yellow: "#ffcc00",
          red: "#ff3355",
          white: "#e8f4ff",
          muted: "#4a5568",
          "muted-light": "#718096",
        },
      },
      fontFamily: {
        mono: ["'Courier New'", "Courier", "monospace"],
        cyber: ["'Orbitron'", "sans-serif"],
        display: ["'Exo 2'", "sans-serif"],
      },
      backgroundImage: {
        "cyber-gradient": "linear-gradient(135deg, #050508 0%, #0a0a1a 50%, #050508 100%)",
        "neon-gradient": "linear-gradient(90deg, #00d4ff, #8b00ff, #00d4ff)",
        "blue-glow": "radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(13,13,26,0.9) 0%, rgba(10,10,20,0.95) 100%)",
      },
      boxShadow: {
        "neon-blue": "0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.2)",
        "neon-blue-lg": "0 0 40px rgba(0, 212, 255, 0.6), 0 0 80px rgba(0, 212, 255, 0.3)",
        "neon-purple": "0 0 20px rgba(139, 0, 255, 0.5), 0 0 40px rgba(139, 0, 255, 0.2)",
        "neon-cyan": "0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.2)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
        "card-hover": "0 20px 60px rgba(0, 212, 255, 0.15), 0 0 40px rgba(0, 212, 255, 0.05)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "scan": "scan 4s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glitch": "glitch 0.5s ease-in-out",
        "spin-slow": "spin 8s linear infinite",
        "border-flow": "borderFlow 3s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "matrix": "matrix 20s linear infinite",
        "flicker": "flicker 3s linear infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(0, 212, 255, 0.8), 0 0 80px rgba(0, 212, 255, 0.4)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "10%": { transform: "translate(-2px, 2px)" },
          "20%": { transform: "translate(2px, -2px)" },
          "30%": { transform: "translate(-2px, 0)" },
          "40%": { transform: "translate(2px, 0)" },
          "50%": { transform: "translate(0, 2px)" },
        },
        borderFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        matrix: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        flicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: "1" },
          "20%, 24%, 55%": { opacity: "0.4" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
