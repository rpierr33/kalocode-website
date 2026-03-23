"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

function MagneticCTA() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 10 });
  const springY = useSpring(y, { stiffness: 200, damping: 10 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.08);
    y.set((e.clientY - centerY) * 0.08);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="/contact"
        className="inline-flex items-center px-12 py-5 bg-[#6C47FF] text-[#F5F5F5] font-mono font-bold text-base rounded-md hover:bg-[#7B5AFF] transition-all shadow-[0_0_30px_rgba(108,71,255,0.3)] hover:shadow-[0_0_50px_rgba(108,71,255,0.4)]"
      >
        Start a Conversation
      </Link>
    </motion.div>
  );
}

export function CTA() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      {/* Gradient mesh background */}
      <div className="gradient-mesh absolute inset-0 pointer-events-none opacity-50" />

      {/* Floating decorative circles */}
      <motion.div
        className="absolute top-20 left-[10%] w-[300px] h-[300px] rounded-full bg-[#00FF94]/[0.02] blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-[10%] w-[300px] h-[300px] rounded-full bg-[#6C47FF]/[0.03] blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          className="font-mono font-bold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="block text-3xl md:text-4xl mb-2">Ready to build something</span>
          <span className="block text-5xl md:text-7xl text-gradient-green-violet">
            that matters?
          </span>
        </motion.h2>

        <motion.p
          className="mt-8 text-lg text-[#888888]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Tell us about your project. We&apos;ll get back within 24 hours.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <MagneticCTA />
        </motion.div>

        <motion.p
          className="mt-6 font-mono text-[10px] text-[#888888] tracking-[0.2em] uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          No commitment &mdash; free 30-min consultation
        </motion.p>
      </div>
    </section>
  );
}
