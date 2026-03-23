"use client";

import { motion } from "framer-motion";
import { Brain, Bot, Glasses, Globe, Smartphone, Cloud } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Custom models, RAG pipelines, AI-powered SaaS. We build intelligent systems that learn, adapt, and scale.",
    accent: "#6C47FF",
  },
  {
    icon: Bot,
    title: "Robotics & Embedded",
    description: "ROS2 systems, firmware, hardware-software integration",
    accent: "#00FF94",
  },
  {
    icon: Glasses,
    title: "VR / AR / XR",
    description: "Unity/Unreal immersive experiences, spatial computing",
    accent: "#6C47FF",
  },
  {
    icon: Globe,
    title: "Full-Stack Web",
    description: "Next.js, React, Node.js, scalable APIs",
    accent: "#00FF94",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "React Native, Expo, cross-platform",
    accent: "#6C47FF",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, GCP, Docker, CI/CD pipelines",
    accent: "#00FF94",
  },
];

const gridPositions = [
  "md:col-span-2 md:row-span-2", // AI — hero card
  "md:col-span-2 md:row-span-1", // Robotics — wide
  "md:col-span-1 md:row-span-1", // VR — square
  "md:col-span-1 md:row-span-1", // Web — square
  "md:col-span-2 md:row-span-1", // Mobile — wide
  "md:col-span-2 md:row-span-1", // Cloud — wide
];

const staggerDelays = [0, 0.15, 0.1, 0.2, 0.25, 0.3];

export function Services() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Editorial header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#6C47FF] uppercase block mb-3">
            Capabilities
          </span>
          <h2 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold">
            What We <span className="text-[#888888]">Build</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[260px]">
          {services.map((service, i) => {
            const isHero = i === 0;
            return (
              <motion.div
                key={service.title}
                className={`group relative bg-[#111111] border border-[#1E1E1E] rounded-xl overflow-hidden hover:shadow-[0_0_40px_rgba(0,255,148,0.06)] transition-all duration-500 ${gridPositions[i]}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: staggerDelays[i], duration: 0.5 }}
              >
                {/* Gradient border glow on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${service.accent}15, transparent 50%)`,
                  }}
                />

                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: service.accent }}
                />

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#1E1E1E] group-hover:border-[#00FF94]/30 transition-colors duration-300 rounded-tr-xl" />

                {/* Content */}
                <div className={`relative z-10 h-full flex flex-col justify-end ${isHero ? 'p-10' : 'p-7'}`}>
                  {isHero && (
                    <span className="font-mono text-[9px] tracking-[0.2em] text-[#00FF94]/50 uppercase mb-auto">
                      Featured
                    </span>
                  )}

                  <service.icon
                    className={`mb-4 ${isHero ? 'w-12 h-12' : 'w-8 h-8'}`}
                    style={{ color: service.accent }}
                  />

                  <h3 className={`font-mono font-bold mb-2 ${isHero ? 'text-2xl' : 'text-lg'}`}>
                    {service.title}
                  </h3>

                  <p className={`text-[#888888] ${isHero ? 'text-base max-w-md' : 'text-sm'}`}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
