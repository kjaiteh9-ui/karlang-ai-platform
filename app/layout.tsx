import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KARLANG DIATE | AI Architect & Intelligent Systems Builder",
  description:
    "Elite AI Agent Platform built by Karlang Diate — Software Engineer, AI Architect, and Intelligent Systems Builder. Deploy custom AI agents, automate workflows, and command your digital infrastructure.",
  keywords: ["AI Agent", "Karlang Diate", "AI Platform", "Automation", "n8n", "OpenAI", "Supabase"],
  authors: [{ name: "Karlang Diate" }],
  openGraph: {
    title: "KARLANG DIATE | AI Command Platform",
    description: "Elite AI Agent Platform — Deploy, Manage & Command Intelligent Systems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-[#050508] text-[#e8f4ff] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
