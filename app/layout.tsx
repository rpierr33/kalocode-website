import type { Metadata } from "next";
import { Space_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CursorGlow } from "@/components/ui/CursorGlow";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Kalocode - Building the Future, One Function at a Time",
    template: "%s | Kalocode",
  },
  description:
    "Cutting-edge software development agency specializing in AI, robotics, and VR. We build the future, one function at a time.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://kalocode.com"),
  openGraph: {
    title: "Kalocode - Building the Future, One Function at a Time",
    description:
      "Cutting-edge software development agency specializing in AI, robotics, and VR.",
    url: "/",
    siteName: "Kalocode",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalocode",
    description:
      "Cutting-edge software development agency specializing in AI, robotics, and VR.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${dmSans.variable} dark`}
    >
      <body className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-sans antialiased">
        <CursorGlow />
        <div className="noise-overlay" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
