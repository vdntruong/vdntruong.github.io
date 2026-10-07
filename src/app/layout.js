import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ninjavo Tech | Next-Gen AI for Education & Intelligent Finance",
  description: "Ninjavo Tech (NinjavoTech) creates high-performance AI applications. Flagship products include Ninjavo Edu AI (real-time English speaking & IELTS exam simulator) and Ninjavo Trade AI (intelligent money management & algorithmic trading).",
  keywords: ["Ninjavo", "NinjavoTech", "Ninjavo Tech", "AI Education App", "English AI Tutor", "IELTS AI Simulator", "AI Trading App", "AI Wealth Management", "FinTech AI"],
  authors: [{ name: "Ninjavo Tech" }],
  openGraph: {
    title: "Ninjavo Tech | AI Powered Edu & Trading Applications",
    description: "Architecting the future of human learning and financial intelligence with state-of-the-art AI.",
    url: "https://ninjavotech.com",
    siteName: "Ninjavo Tech",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#060913] text-slate-100 selection:bg-cyan-500 selection:text-slate-950`}
      >
        {children}
      </body>
    </html>
  );
}
