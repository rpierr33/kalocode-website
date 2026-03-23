"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description: "We dig into your problem space, users, and market. No assumptions — just data and conversation.",
    duration: "1 week",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description: "Architecture, prototypes, and user flows. We design systems that scale before writing a line of code.",
    duration: "1-2 weeks",
  },
  {
    icon: Code2,
    number: "03",
    title: "Build",
    description: "Iterative sprints with weekly demos. Clean code, tested features, continuous deployment.",
    duration: "4-8 weeks",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    description: "Production deployment, monitoring, and handoff. We stay on for support and iteration.",
    duration: "1 week",
  },
];

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.6"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#6C47FF] uppercase block mb-3">
            Our Process
          </span>
          <h2 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold">
            How We <span className="text-[#888888]">Work</span>
          </h2>
        </motion.div>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden md:block">
          {/* Progress line */}
          <div className="relative h-[2px] bg-[#1E1E1E] mb-16">
            <motion.div
              className="absolute inset-y-0 left-0 bg-[#00FF94]"
              style={{ width: lineWidth }}
            />
          </div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                {/* Step circle */}
                <motion.div
                  className="w-6 h-6 rounded-full border-2 border-[#1E1E1E] absolute -top-[calc(1rem+19px)] left-0"
                  whileInView={{ borderColor: "#00FF94", backgroundColor: "#00FF94" }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.25, duration: 0.4 }}
                />

                {/* Watermark number */}
                <span className="font-mono text-[64px] font-bold text-[#F5F5F5]/[0.03] leading-none absolute -top-4 -left-2 select-none pointer-events-none">
                  {step.number}
                </span>

                <step.icon className="w-6 h-6 text-[#00FF94] mb-4" />
                <h3 className="font-mono text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-[#888888] mb-4">{step.description}</p>
                <span className="font-mono text-[10px] px-2.5 py-1 bg-[#1E1E1E] rounded text-[#888888]">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative pl-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Vertical line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-[-48px] w-[2px] bg-[#1E1E1E]" />
              )}

              {/* Circle */}
              <motion.div
                className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-[#1E1E1E]"
                whileInView={{ borderColor: "#00FF94", backgroundColor: "#00FF94" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              />

              <step.icon className="w-5 h-5 text-[#00FF94] mb-2" />
              <h3 className="font-mono text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-[#888888] mb-3">{step.description}</p>
              <span className="font-mono text-[10px] px-2 py-1 bg-[#1E1E1E] rounded text-[#888888]">
                {step.duration}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
