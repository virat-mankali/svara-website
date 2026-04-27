import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Svara - Free macOS Voice Dictation",
  description:
    "Svara is a free macOS voice dictation app that turns speech into clean pasted text with Groq or Local Whisper.",
  metadataBase: new URL("https://svara.app"),
  openGraph: {
    title: "Svara - Free macOS Voice Dictation",
    description:
      "A calm, open-source alternative for turning voice into polished text on macOS.",
    images: ["/svara-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
