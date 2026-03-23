"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "featured" | "compact";
  index?: number;
}

export function ProjectCard({ project, variant = "default", index = 0 }: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.04);
    y.set((e.clientY - centerY) * 0.04);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const href = `/projects/${project.slug}`;
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";
  const demoHeight = isFeatured ? "h-[400px] md:h-[500px]" : isCompact ? "h-56" : "h-72";

  return (
    <motion.div
      className={`group relative bg-[#111111] border border-[#1E1E1E] rounded-xl overflow-hidden transition-all duration-500 ${
        isCompact ? "w-[360px] md:w-[440px]" : "w-full"
      }`}
      style={variant !== "featured" ? { x: springX, y: springY } : undefined}
      onMouseMove={variant !== "featured" ? handleMouseMove : undefined}
      onMouseLeave={variant !== "featured" ? handleMouseLeave : undefined}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Hover gradient border */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20 bg-gradient-to-br from-[#00FF94]/10 via-transparent to-[#6C47FF]/10" />

      {/* Watermark number */}
      <span className="absolute top-4 right-6 font-mono text-[72px] font-bold text-[#F5F5F5]/[0.02] leading-none z-0 select-none pointer-events-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Scrollable Demo Window */}
      <div className={`relative w-full ${demoHeight} bg-[#0A0A0A] overflow-hidden`}>
        {/* Browser chrome */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-2 px-4 py-2.5 bg-[#1E1E1E] border-b border-[#2a2a2a]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          </div>
          <div className="flex-1 mx-4 px-3 py-1 bg-[#0A0A0A] rounded text-[10px] font-mono text-[#888888] truncate">
            {project.demoUrl || `kalocode.com/projects/${project.slug}`}
          </div>
        </div>

        {/* Scrollable content area */}
        <div className="absolute inset-0 pt-9 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={800}
              height={1200}
              className="w-full h-auto object-cover object-top"
            />
          ) : (
            <div className="w-full min-h-[600px] bg-gradient-to-b from-[#6C47FF]/20 via-[#00FF94]/10 to-[#0A0A0A] flex items-start justify-center pt-20">
              <div className="text-center px-8">
                <div className="font-mono text-3xl font-bold text-[#F5F5F5]/[0.06] mb-4">
                  {project.title}
                </div>
                <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto mt-8">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-14 rounded-lg bg-[#1E1E1E]/40" />
                  ))}
                </div>
                <div className="mt-8 space-y-2.5 max-w-xs mx-auto">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-2.5 rounded bg-[#1E1E1E]/25" style={{ width: `${85 - i * 15}%` }} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Fade overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#111111] to-transparent z-10 pointer-events-none" />
      </div>

      {/* Card content */}
      <div className={`relative z-10 ${isFeatured ? "p-8" : "p-6"}`}>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[10px] font-mono bg-[#1E1E1E] text-[#00FF94] rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className={`font-mono font-bold mb-2 ${isFeatured ? "text-2xl" : "text-xl"}`}>
          {project.title}
        </h3>
        <p className={`text-[#888888] mb-4 line-clamp-2 ${isFeatured ? "text-base" : "text-sm"}`}>
          {project.description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center text-sm font-mono text-[#00FF94] hover:text-[#00FF94]/80 transition-colors group/link"
        >
          View Project
          <motion.span
            className="ml-2 inline-block"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            &rarr;
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
}
