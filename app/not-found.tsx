"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <motion.div
        className="text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="font-mono text-[120px] sm:text-[160px] font-bold leading-none text-gradient-green-violet select-none"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          404
        </motion.div>

        <h1 className="font-mono text-2xl font-bold mt-4 mb-3">
          Page Not <span className="text-[#888888]">Found</span>
        </h1>
        <p className="text-[#888888] text-sm mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="glow-green px-6 py-3 bg-[#00FF94] text-[#0A0A0A] font-mono font-bold text-sm rounded-md hover:bg-[#00FF94]/90 transition-all"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-[#1E1E1E] text-[#888888] font-mono text-sm rounded-md hover:border-[#6C47FF] hover:text-[#6C47FF] transition-all"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
