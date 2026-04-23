"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle, Loader2, Mail, Clock, MapPin } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  website: z.string().optional(), // honeypot field
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = ["AI", "Robotics", "VR", "Web", "Mobile", "Other"];

function SuccessAnimation() {
  const particles = Array.from({ length: 6 }, (_, i) => ({
    x: (Math.random() - 0.5) * 200,
    y: (Math.random() - 0.5) * 200,
    delay: i * 0.05,
  }));

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 relative">
      {/* Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#00FF94] rounded-sm"
          initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          animate={{ opacity: 0, x: p.x, y: p.y, scale: 0 }}
          transition={{ duration: 0.8, delay: p.delay, ease: "easeOut" }}
        />
      ))}

      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
        >
          <CheckCircle className="w-16 h-16 text-[#00FF94] mx-auto mb-6" />
        </motion.div>
        <h2 className="font-mono text-2xl font-bold mb-4">Message Sent</h2>
        <p className="text-[#888888]">
          We&apos;ll be in touch within 24 hours.
        </p>
      </motion.div>
    </div>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { projectType: "" },
  });

  const selectedType = watch("projectType");

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    setErrorMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const body = await res.json().catch(() => null);
        setErrorMessage(
          body?.error || `Something went wrong (${res.status}). Please try again.`
        );
      }
    } catch {
      setErrorMessage(
        "Unable to reach our servers. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) return <SuccessAnimation />;

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#6C47FF] uppercase block mb-3">
            Contact
          </span>
          <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold">
            Get in <span className="text-[#888888]">Touch</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left: Info panel */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-base text-[#888888] leading-relaxed">
              Tell us about your project. We&apos;ll get back within 24 hours
              with a clear plan of action.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#00FF94] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-mono text-sm font-bold">Email</div>
                  <div className="text-sm text-[#888888]">contact@kalocode.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-[#00FF94] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-mono text-sm font-bold">Response Time</div>
                  <div className="text-sm text-[#888888]">&lt; 24 hours</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#00FF94] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-mono text-sm font-bold">Location</div>
                  <div className="text-sm text-[#888888]">Remote — Worldwide</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Name */}
            <motion.div animate={{ scale: focusedField === "name" ? 1.01 : 1 }} transition={{ duration: 0.2 }}>
              <label className="block font-mono text-sm mb-2">Name</label>
              <input
                {...register("name")}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 py-3 bg-[#111111] border border-[#1E1E1E] rounded-lg text-[#F5F5F5] placeholder-[#888888]/50 focus:outline-none focus:border-[#00FF94] transition-colors"
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
            </motion.div>

            {/* Email */}
            <motion.div animate={{ scale: focusedField === "email" ? 1.01 : 1 }} transition={{ duration: 0.2 }}>
              <label className="block font-mono text-sm mb-2">Email</label>
              <input
                {...register("email")}
                type="email"
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 py-3 bg-[#111111] border border-[#1E1E1E] rounded-lg text-[#F5F5F5] placeholder-[#888888]/50 focus:outline-none focus:border-[#00FF94] transition-colors"
                placeholder="you@company.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
            </motion.div>

            {/* Company */}
            <motion.div animate={{ scale: focusedField === "company" ? 1.01 : 1 }} transition={{ duration: 0.2 }}>
              <label className="block font-mono text-sm mb-2">
                Company <span className="text-[#888888]">(optional)</span>
              </label>
              <input
                {...register("company")}
                onFocus={() => setFocusedField("company")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 py-3 bg-[#111111] border border-[#1E1E1E] rounded-lg text-[#F5F5F5] placeholder-[#888888]/50 focus:outline-none focus:border-[#00FF94] transition-colors"
                placeholder="Your company"
              />
            </motion.div>

            {/* Project Type — Pill buttons */}
            <div>
              <label className="block font-mono text-sm mb-3">Project Type</label>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setValue("projectType", type, { shouldValidate: true })}
                    className={`px-4 py-2 rounded-full font-mono text-xs border transition-all duration-300 ${
                      selectedType === type
                        ? "bg-[#6C47FF] text-[#F5F5F5] border-[#6C47FF]"
                        : "bg-transparent text-[#888888] border-[#1E1E1E] hover:border-[#888888]"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              {errors.projectType && <p className="mt-1 text-xs text-red-400">{errors.projectType.message}</p>}
            </div>

            {/* Message */}
            <motion.div animate={{ scale: focusedField === "message" ? 1.01 : 1 }} transition={{ duration: 0.2 }}>
              <label className="block font-mono text-sm mb-2">Message</label>
              <textarea
                {...register("message")}
                rows={5}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 py-3 bg-[#111111] border border-[#1E1E1E] rounded-lg text-[#F5F5F5] placeholder-[#888888]/50 focus:outline-none focus:border-[#00FF94] transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
            </motion.div>

            {/* Honeypot — hidden from humans, bots fill it */}
            <div className="absolute opacity-0 -z-10 pointer-events-none" aria-hidden="true" tabIndex={-1}>
              <input {...register("website")} type="text" tabIndex={-1} autoComplete="off" />
            </div>

            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-sm text-red-400 font-mono"
              >
                {errorMessage}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 bg-[#6C47FF] text-[#F5F5F5] font-mono font-bold text-sm rounded-lg hover:bg-[#7B5AFF] transition-all shadow-[0_0_20px_rgba(108,71,255,0.3)] hover:shadow-[0_0_40px_rgba(108,71,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
