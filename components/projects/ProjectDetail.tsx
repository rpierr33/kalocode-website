"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

interface ProjectDetailProps {
  project: Project;
  relatedProjects: Project[];
}

export function ProjectDetail({ project, relatedProjects }: ProjectDetailProps) {
  return (
    <div className="pt-32 pb-24">
      {/* Back nav */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-[#00FF94] transition-colors font-mono"
        >
          <ArrowLeft size={16} />
          All Projects
        </Link>
      </div>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="relative w-full h-[400px] sm:h-[500px] rounded-lg overflow-hidden bg-[#111111] border border-[#1E1E1E]">
          {/* Browser chrome */}
          <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-2 px-4 py-3 bg-[#1E1E1E] border-b border-[#2a2a2a]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="flex-1 mx-4 px-4 py-1.5 bg-[#0A0A0A] rounded text-xs font-mono text-[#888888] truncate">
              {project.demoUrl || `kalocode.com/projects/${project.slug}`}
            </div>
          </div>

          {/* Scrollable content */}
          <div className="absolute inset-0 pt-11 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {project.imageUrl ? (
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={1200}
                height={1800}
                className="w-full h-auto object-cover object-top"
              />
            ) : (
              <div className="w-full min-h-[800px] bg-gradient-to-b from-[#6C47FF]/20 via-[#00FF94]/10 to-[#0A0A0A] flex flex-col items-center pt-24">
                <div className="font-mono text-5xl font-bold text-[#F5F5F5]/10 mb-8">
                  {project.title}
                </div>
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-8 px-8">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="h-20 rounded bg-[#1E1E1E]/40" />
                  ))}
                </div>
                <div className="mt-12 space-y-3 max-w-sm mx-auto px-8 w-full">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="h-3 rounded bg-[#1E1E1E]/25"
                      style={{ width: `${90 - i * 10}%` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-mono bg-[#1E1E1E] text-[#00FF94] rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-mono text-4xl sm:text-5xl font-bold mb-6">
            {project.title}
          </h1>

          {/* Overview */}
          <div className="mb-12">
            <h2 className="font-mono text-xl font-bold mb-4 text-[#888888]">
              Overview
            </h2>
            <p className="text-lg text-[#F5F5F5]/80 leading-relaxed">
              {project.longDesc || project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="font-mono text-xl font-bold mb-4 text-[#888888]">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-[#111111] border border-[#1E1E1E] rounded-md font-mono text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-green inline-flex items-center gap-2 px-6 py-3 bg-[#00FF94] text-[#0A0A0A] font-mono font-bold text-sm rounded-md hover:bg-[#00FF94]/90 transition-all"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#1E1E1E] text-[#F5F5F5] font-mono font-bold text-sm rounded-md hover:border-[#00FF94] hover:text-[#00FF94] transition-all"
              >
                <Github size={16} />
                Source Code
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 mt-24">
          <h2 className="font-mono text-2xl font-bold mb-8">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
