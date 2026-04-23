import type { Metadata } from "next";
import { Space_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { Analytics } from "@vercel/analytics/next";

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
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Kalocode",
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
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kalocode",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://kalocode.com",
              logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://kalocode.com"}/icons/icon-512.svg`,
              description:
                "Cutting-edge software development agency specializing in AI, robotics, and VR/AR/XR.",
              sameAs: [
                "https://github.com/kalocode",
                "https://linkedin.com/company/kalocode",
                "https://x.com/kalocode",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "contact@kalocode.com",
                contactType: "customer service",
              },
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js').catch(() => {});
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
