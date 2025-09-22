import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SuperMe UI Clone",
  description: "UI Clone of SuperMe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en ">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#F7F2E7] mt-5 max-w-7xl mx-auto antialiased`}
      >
        <Header />
        <main className="mt-5">{children}</main>
        <Link
          target="_blank"
          href="https://github.com/sahilahluwalia/superme-ui-clone"
          className="absolute top-5 right-5 p-2 bg-white rounded-full hover:scale-110 duration-300"
        >
          <FaGithub className="text-gray-700 sm:size-10 size-5" />
        </Link>
      </body>
    </html>
  );
}
