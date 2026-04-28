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
  icons: {
    icon: [
      { url: "/32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/128x128@2x.png", sizes: "256x256", type: "image/png" },
    ],
    apple: "/128x128.png",
    other: [{ rel: "icon", url: "/icon.ico" }],
  },
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
