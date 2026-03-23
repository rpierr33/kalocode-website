"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const orbitItems = [
  { label: "AI", delay: 0, r: 140, duration: 18, color: "#6C47FF" },
  { label: "ROS2", delay: 2, r: 140, duration: 18, color: "#00FF94" },
  { label: "Unity", delay: 4, r: 140, duration: 18, color: "#6C47FF" },
  { label: "Next.js", delay: 1, r: 100, duration: 14, color: "#00FF94" },
  { label: "Python", delay: 3, r: 100, duration: 14, color: "#6C47FF" },
  { label: "React", delay: 5, r: 100, duration: 14, color: "#00FF94" },
];

function FloatingOrbit() {
  return (
    <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
      {/* Ambient blobs */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-64 h-64 bg-[#6C47FF]/[0.07] animate-blob blur-3xl" />
        <div className="absolute w-48 h-48 bg-[#00FF94]/[0.05] animate-blob blur-3xl" style={{ animationDelay: "-4s" }} />
      </div>

      {/* Orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full border border-[#1E1E1E]/50" />
        <div className="absolute w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full border border-[#1E1E1E]/30" />
      </div>

      {/* Orbiting tech labels */}
      {orbitItems.map((item) => (
        <div
          key={item.label}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            animation: `float-orbit ${item.duration}s linear infinite`,
            animationDelay: `-${item.delay}s`,
            ["--orbit-r" as string]: `${item.r}px`,
          }}
        >
          <span
            className="block px-3 py-1.5 rounded-full text-[11px] font-mono font-bold backdrop-blur-sm border"
            style={{
              color: item.color,
              borderColor: `${item.color}30`,
              backgroundColor: `${item.color}10`,
            }}
          >
            {item.label}
          </span>
        </div>
      ))}

      {/* Center: Memoji */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative animate-float"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-[#6C47FF]/40 shadow-[0_0_40px_rgba(108,71,255,0.2)]">
            <Image
              src="/images/memoji.jpg"
              alt="Kalocode founder"
              width={112}
              height={112}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          {/* Status indicator */}
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#00FF94] rounded-full border-2 border-[#0A0A0A] flex items-center justify-center">
            <div className="w-2 h-2 bg-[#0A0A0A] rounded-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function MagneticButton({ children, href, className }: { children: React.ReactNode; href: string; className: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 10 });
  const springY = useSpring(y, { stiffness: 200, damping: 10 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.08);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.08);
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

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient mesh */}
      <div className="gradient-mesh absolute inset-0 pointer-events-none" />

      {/* Scanline */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-scanline absolute left-0 right-0 h-[1px] bg-[#6C47FF]/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-32">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16 lg:gap-8">
          {/* Left: Typography */}
          <div className="lg:w-[55%]">
            <motion.span
              className="font-mono text-[10px] tracking-[0.3em] text-[#6C47FF] uppercase mb-6 block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              Software Agency // Est. 2024
            </motion.span>

            <h1 className="font-mono font-bold tracking-tight">
              <motion.span
                className="block text-[clamp(2rem,6vw,4.5rem)] text-[#F5F5F5] leading-[1.1]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                We don&apos;t just
              </motion.span>
              <motion.span
                className="block text-[clamp(2rem,6vw,4.5rem)] text-[#F5F5F5] leading-[1.1]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                write code.
              </motion.span>
              <motion.span
                className="block text-[clamp(2.5rem,8vw,6rem)] text-gradient-violet-green leading-[1.05] mt-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                We build futures.
              </motion.span>
            </h1>

            <motion.p
              className="mt-8 text-base text-[#888888] max-w-md font-sans leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              AI systems. Robotics software. Immersive VR.
              For founders who refuse to ship mediocre.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <MagneticButton
                href="/#projects"
                className="glow-green inline-flex items-center px-8 py-3.5 bg-[#6C47FF] text-[#F5F5F5] font-mono font-bold text-sm rounded-md hover:bg-[#7B5AFF] transition-all shadow-[0_0_20px_rgba(108,71,255,0.3)] hover:shadow-[0_0_40px_rgba(108,71,255,0.4)]"
              >
                See Our Work
              </MagneticButton>
              <MagneticButton
                href="/contact"
                className="inline-flex items-center px-8 py-3.5 border border-[#1E1E1E] text-[#F5F5F5] font-mono font-bold text-sm rounded-md hover:border-[#6C47FF] hover:text-[#6C47FF] transition-all"
              >
                Talk to Us
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right: Floating Orbit */}
          <motion.div
            className="lg:w-[45%] flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <FloatingOrbit />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.6 }}
      >
        <div className="w-6 h-10 rounded-full border border-[#1E1E1E] flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-[#6C47FF] animate-scroll-bounce" />
        </div>
        <span className="font-mono text-[9px] text-[#888888] tracking-[0.3em] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
