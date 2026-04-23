"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <motion.div
        className="text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
          <span className="font-mono text-2xl text-red-400">!</span>
        </div>

        <h1 className="font-mono text-2xl font-bold mb-3">
          Something Went <span className="text-[#888888]">Wrong</span>
        </h1>
        <p className="text-[#888888] text-sm mb-8 leading-relaxed">
          An unexpected error occurred. Our team has been notified.
        </p>

        <button
          onClick={unstable_retry}
          className="px-6 py-3 bg-[#6C47FF] text-[#F5F5F5] font-mono font-bold text-sm rounded-md hover:bg-[#7B5AFF] transition-all shadow-[0_0_20px_rgba(108,71,255,0.3)]"
        >
          Try Again
        </button>
      </motion.div>
    </div>
  );
}
