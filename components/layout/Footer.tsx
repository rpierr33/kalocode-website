"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const services = [
  "AI & Machine Learning",
  "Robotics & Embedded",
  "VR / AR / XR",
  "Full-Stack Web",
  "Mobile Apps",
  "Cloud & DevOps",
];

export function Footer() {
  return (
    <footer className="border-t border-[#1E1E1E] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Large CTA */}
        <div className="mb-16 pb-16 border-b border-[#1E1E1E]">
          <h3 className="font-mono text-3xl md:text-4xl font-bold">
            Let&apos;s build{" "}
            <span className="text-[#6C47FF]">together</span>.
          </h3>
          <Link
            href="/contact"
            className="mt-4 inline-block font-mono text-sm text-[#00FF94] hover:text-[#00FF94]/80 transition-colors"
          >
            Get in touch &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div>
            <Link href="/" className="font-mono text-xl font-bold text-[#F5F5F5]">
              KALOCODE<span className="text-[#6C47FF]">_</span>
            </Link>
            <p className="mt-4 text-sm text-[#888888] max-w-xs">
              Building the future, one function at a time.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-[#888888] uppercase mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-[#888888] hover:text-[#00FF94] transition-colors">Home</Link>
              <Link href="/projects" className="text-sm text-[#888888] hover:text-[#00FF94] transition-colors">Projects</Link>
              <Link href="/about" className="text-sm text-[#888888] hover:text-[#00FF94] transition-colors">About</Link>
              <Link href="/contact" className="text-sm text-[#888888] hover:text-[#00FF94] transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-[#888888] uppercase mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s} className="text-sm text-[#888888]">{s}</li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-[#888888] uppercase mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/kalocode", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/company/kalocode", label: "LinkedIn" },
                { icon: Twitter, href: "https://x.com/kalocode", label: "X / Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888888] hover:text-[#00FF94] transition-colors"
                  aria-label={label}
                  whileHover={{ scale: 1.15 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#1E1E1E] flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <p className="text-xs text-[#888888]">
              &copy; {new Date().getFullYear()} Kalocode. All rights reserved.
            </p>
            <Link href="/privacy" className="text-xs text-[#888888] hover:text-[#00FF94] transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-[#888888] hover:text-[#00FF94] transition-colors">Terms</Link>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-xs text-[#888888]">
              Built by Kalocode with{" "}
              <span className="text-[#00FF94]">&hearts;</span>
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-mono text-[10px] text-[#888888] hover:text-[#00FF94] tracking-[0.15em] uppercase transition-colors"
            >
              Back to Top &uarr;
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
