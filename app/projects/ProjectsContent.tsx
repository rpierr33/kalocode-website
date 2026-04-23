"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getAllProjects, getCategories, type ProjectCategory } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectsContent() {
  const allProjects = getAllProjects();
  const categories = getCategories();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">("All");

  const filtered =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#6C47FF] uppercase block mb-3">
            Portfolio
          </span>
          <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold">
            All <span className="text-[#888888]">Projects</span>
          </h1>
          <p className="mt-4 text-[#888888] text-sm max-w-xl">
            Production applications across AI, healthcare, fintech, e-commerce, and web development.
          </p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <button
            onClick={() => setActiveFilter("All")}
            className={`px-4 py-2 rounded-full font-mono text-xs border transition-all duration-300 ${
              activeFilter === "All"
                ? "bg-[#6C47FF] text-[#F5F5F5] border-[#6C47FF]"
                : "bg-transparent text-[#888888] border-[#1E1E1E] hover:border-[#888888]"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full font-mono text-xs border transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-[#6C47FF] text-[#F5F5F5] border-[#6C47FF]"
                  : "bg-transparent text-[#888888] border-[#1E1E1E] hover:border-[#888888]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.length > 0 ? (
              filtered.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="font-mono text-[#888888] text-sm">
                  No projects in this category yet. Check back soon.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
