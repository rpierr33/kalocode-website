"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function MagneticNav({ children, href, className }: { children: React.ReactNode; href: string; className: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 12 });
  const springY = useSpring(y, { stiffness: 200, damping: 12 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.1);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.1);
  };

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      <Link href={href} className={className}>{children}</Link>
    </motion.div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#1E1E1E] backdrop-blur-md ${
          scrolled ? "py-3 bg-[#0A0A0A]/90" : "py-5 bg-[#0A0A0A]/70"
        }`}
      >
        {/* Scroll progress bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-[#6C47FF] origin-left"
          style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="font-mono text-xl font-bold tracking-tight text-[#F5F5F5]">
            <motion.span
              animate={{ scale: scrolled ? 0.95 : 1 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              KALOCODE<span className="text-[#6C47FF] animate-blink">_</span>
            </motion.span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-sans transition-colors ${
                  isActive(link.href) ? "text-[#F5F5F5]" : "text-[#888888] hover:text-[#F5F5F5]"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#6C47FF]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <MagneticNav
              href="/contact"
              className="text-sm font-medium border border-[#6C47FF] text-[#6C47FF] px-5 py-2 rounded-md hover:bg-[#6C47FF] hover:text-[#F5F5F5] transition-all duration-300"
            >
              Start a Project
            </MagneticNav>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#F5F5F5] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-2xl font-mono text-[#F5F5F5] hover:text-[#00FF94] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="text-lg font-medium border border-[#6C47FF] text-[#6C47FF] px-8 py-3 rounded-md hover:bg-[#6C47FF] hover:text-[#F5F5F5] transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
