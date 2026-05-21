import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const display = Oswald({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "The Forge — The room Omaha business owners have been waiting for",
  description: "A local mastermind for Omaha business owners built on Christian values. Monthly Stoplight Sessions, quarterly intensives, and direct access to five founding operators. $100/month or $1,000/year.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} font-body bg-forge-paper text-forge-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
