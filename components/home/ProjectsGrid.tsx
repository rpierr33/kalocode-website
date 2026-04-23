"use client";

import { motion } from "framer-motion";
import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectsGrid() {
  const projects = getAllProjects();
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-28 px-6">
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
            Portfolio
          </span>
          <h2 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold">
            Selected <span className="text-[#888888]">Work</span>
          </h2>
        </motion.div>

        {/* Featured project — full width */}
        <ProjectCard project={featured} variant="featured" index={0} />

        {/* Horizontal scroll for remaining projects */}
        <div className="relative mt-12">
          <div className="scroll-x-snap flex gap-6 pb-4 -mx-6 px-6">
            {rest.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                variant="compact"
                index={i + 1}
              />
            ))}
          </div>

          {/* Right fade hint */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none z-10" />
        </div>

        {/* View all link */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a href="/projects" className="font-mono text-sm text-[#888888] hover:text-[#00FF94] transition-colors">
            View all projects &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
