"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const testimonials = [
  {
    quote: "Kalocode delivered our AI pipeline 3 weeks ahead of schedule. Their technical depth is unmatched.",
    author: "CTO",
    company: "Series A Startup",
    rating: 5,
  },
  {
    quote: "The VR training platform they built reduced our onboarding time by 60%. Incredible team.",
    author: "VP Engineering",
    company: "Enterprise Co.",
    rating: 5,
  },
  {
    quote: "Working with Kalocode felt like having a senior engineering team on demand. They don't just code — they think.",
    author: "Founder",
    company: "HealthTech",
    rating: 5,
  },
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 420, behavior: "smooth" });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#6C47FF] uppercase block mb-3">
            Testimonials
          </span>
          <h2 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold">
            What Clients <span className="text-[#888888]">Say</span>
          </h2>
        </motion.div>

        {/* Scrollable testimonials */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="scroll-x-snap flex gap-6 pb-4 -mx-6 px-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="w-[340px] md:w-[400px] flex-shrink-0 bg-[#111111] border border-[#1E1E1E] rounded-xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Large quote mark */}
                <span className="font-mono text-[72px] text-[#00FF94]/15 leading-none block -mb-8">
                  &ldquo;
                </span>

                <p className="text-base text-[#F5F5F5]/80 italic leading-relaxed mb-6">
                  {t.quote}
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j} className="text-[#00FF94] text-sm">&#9733;</span>
                  ))}
                </div>

                <div>
                  <div className="font-mono text-sm font-bold">{t.author}</div>
                  <div className="text-xs text-[#888888]">{t.company}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fade hint */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
