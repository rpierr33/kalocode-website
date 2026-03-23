"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Ship Fast",
    description: "Speed is a feature. We move quickly without cutting corners, delivering working software in weeks, not months.",
    span: "md:col-span-2",
  },
  {
    icon: Shield,
    title: "Build Right",
    description: "Quality is non-negotiable. Clean architecture, tested code, and thoughtful design decisions that scale.",
    span: "md:col-span-1",
  },
  {
    icon: Lightbulb,
    title: "Think Big",
    description: "We tackle problems others avoid. AI, robotics, VR — the frontier tech that defines the next decade.",
    span: "md:col-span-1",
  },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Python", "Node.js",
  "Unity", "ROS2", "PostgreSQL", "MongoDB", "Docker",
  "AWS", "GCP", "TailwindCSS", "Prisma", "Stripe",
  "WebSockets", "Firebase", "C#", "WebXR", "Expo",
];

const team = [
  { role: "Founder & Lead Engineer", bio: "Full-stack architect with a passion for AI systems", gradient: "from-[#00FF94] to-[#6C47FF]" },
  { role: "AI / ML Engineer", bio: "Building intelligent systems that learn and adapt", gradient: "from-[#6C47FF] to-[#FF5F56]" },
  { role: "Full-Stack Developer", bio: "Crafting scalable web and mobile applications", gradient: "from-[#FFBD2E] to-[#00FF94]" },
  { role: "UX / Design Lead", bio: "Translating complex ideas into intuitive interfaces", gradient: "from-[#FF5F56] to-[#FFBD2E]" },
];

export function AboutContent() {
  return (
    <div className="pt-32 pb-24">
      {/* Story — split layout */}
      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#6C47FF] uppercase block mb-3">
              Our Story
            </span>
            <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold">
              About <span className="text-[#888888]">Kalocode</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Pull quote */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00FF94] to-[#6C47FF] rounded-full" />
              <blockquote className="pl-8 font-mono text-2xl md:text-3xl font-bold leading-snug text-[#F5F5F5]/90">
                Great software changes the world. Not incrementally. Not eventually. Right now.
              </blockquote>
            </motion.div>

            {/* Detail text */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-base text-[#888888] leading-relaxed">
                We started Kalocode with one belief — the right team, with the right
                tools, can build anything. We&apos;re not a body shop. We&apos;re a
                team of engineers who care deeply about the craft.
              </p>
              <p className="text-base text-[#888888] leading-relaxed">
                We specialize in the technologies shaping the next decade: artificial
                intelligence, robotics, and immersive reality. We don&apos;t just write
                code — we build products that move industries forward.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values — bento */}
      <section className="px-6 py-28 bg-[#111111]/50 border-y border-[#1E1E1E]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#6C47FF] uppercase block mb-3">
              Principles
            </span>
            <h2 className="font-mono text-3xl sm:text-4xl font-bold">
              Our <span className="text-[#888888]">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className={`group p-8 bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl hover:shadow-[0_0_40px_rgba(0,255,148,0.06)] transition-all duration-500 ${value.span}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <value.icon className="w-8 h-8 text-[#00FF94] mb-4" />
                <h3 className="font-mono text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-sm text-[#888888] max-w-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#6C47FF] uppercase block mb-3">
              People
            </span>
            <h2 className="font-mono text-3xl sm:text-4xl font-bold">
              The <span className="text-[#888888]">Team</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.role}
                className="group bg-[#111111] border border-[#1E1E1E] rounded-xl p-6 hover:shadow-[0_0_30px_rgba(0,255,148,0.06)] transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300 mb-4`}
                />
                <h3 className="font-mono text-base font-bold mb-1">{member.role}</h3>
                <p className="text-xs text-[#888888]">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-28 bg-[#111111]/50 border-y border-[#1E1E1E]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#6C47FF] uppercase block mb-3">
              Technology
            </span>
            <h2 className="font-mono text-3xl sm:text-4xl font-bold">
              Tech <span className="text-[#888888]">Stack</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                className="px-4 py-2.5 bg-[#0A0A0A] border border-[#1E1E1E] rounded-lg font-mono text-sm text-[#888888] hover:text-[#00FF94] hover:border-[#00FF94]/30 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
