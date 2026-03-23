"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatCardProps {
  target: number;
  suffix: string;
  label: string;
  visualization: "gauge" | "bar" | "pips" | "ring";
  fillPercent: number;
}

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const controls = animate(0, target, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (v) => setCount(Math.round(v)),
      });
      return () => controls.stop();
    }
  }, [inView, target]);

  return count;
}

function RadialGauge({ percent, inView }: { percent: number; inView: boolean }) {
  const r = 44;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r={r} fill="none" stroke="#1E1E1E" strokeWidth="6" />
      <motion.circle
        cx="50" cy="50" r={r} fill="none" stroke="#00FF94" strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={inView ? { strokeDashoffset: offset } : {}}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

function ProgressBar({ percent, inView }: { percent: number; inView: boolean }) {
  return (
    <div className="w-full h-2 bg-[#1E1E1E] rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-[#00FF94] rounded-full"
        initial={{ width: 0 }}
        animate={inView ? { width: `${percent}%` } : {}}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

function Pips({ count, inView }: { count: number; inView: boolean }) {
  return (
    <div className="flex gap-2">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="w-4 h-4 rounded-full"
          initial={{ backgroundColor: "#1E1E1E" }}
          animate={inView ? { backgroundColor: "#00FF94" } : {}}
          transition={{ delay: i * 0.3, duration: 0.4 }}
        />
      ))}
    </div>
  );
}

function StatCard({ target, suffix, label, visualization, fillPercent }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCountUp(target, inView);

  return (
    <div
      ref={ref}
      className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-8 flex flex-col items-center text-center"
    >
      <span className="font-mono text-[9px] tracking-[0.2em] text-[#888888] uppercase mb-4">
        Metric
      </span>

      {/* Visualization */}
      <div className="mb-4 flex items-center justify-center">
        {visualization === "gauge" && (
          <div className="relative">
            <RadialGauge percent={fillPercent} inView={inView} />
            <div className="absolute inset-0 flex items-center justify-center rotate-0">
              <span className="font-mono text-2xl font-bold text-[#00FF94]">
                {count}{suffix}
              </span>
            </div>
          </div>
        )}
        {visualization === "bar" && (
          <div className="w-full space-y-3">
            <span className="font-mono text-4xl font-bold text-[#00FF94]">
              {count}{suffix}
            </span>
            <ProgressBar percent={fillPercent} inView={inView} />
          </div>
        )}
        {visualization === "pips" && (
          <div className="space-y-3 flex flex-col items-center">
            <span className="font-mono text-4xl font-bold text-[#00FF94]">
              {count}{suffix}
            </span>
            <Pips count={target} inView={inView} />
          </div>
        )}
        {visualization === "ring" && (
          <div className="relative">
            <RadialGauge percent={fillPercent} inView={inView} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-2xl font-bold text-[#00FF94]">
                {count}{suffix}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="text-sm text-[#888888]">{label}</div>
    </div>
  );
}

const stats: StatCardProps[] = [
  { target: 50, suffix: "+", label: "Projects Shipped", visualization: "gauge", fillPercent: 65 },
  { target: 12, suffix: "", label: "Countries Served", visualization: "bar", fillPercent: 80 },
  { target: 3, suffix: "", label: "Core Specializations", visualization: "pips", fillPercent: 100 },
  { target: 100, suffix: "%", label: "Client Retention", visualization: "ring", fillPercent: 100 },
];

export function Stats() {
  return (
    <section className="py-24 px-6 bg-[#111111]/50 border-y border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#6C47FF] uppercase block mb-3">
            By the Numbers
          </span>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold">
            Track <span className="text-[#888888]">Record</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
