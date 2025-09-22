import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toolhouse Developer Relations Agent",
  description: "AI-powered chat assistant for Toolhouse development support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en ">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#F7F2E7] mt-5 max-w-7xl mx-auto antialiased`}
      >
        <Header />
        <main className="mt-5">
          {children}
        </main>
      </body>
    </html>
  );
}
