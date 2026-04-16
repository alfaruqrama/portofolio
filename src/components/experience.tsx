"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { experiences } from "@/lib/data";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pengalaman" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section header */}
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
              Pengalaman
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
              Kerja & Internship
            </h2>
            <div className="mt-4 w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-700 sm:left-1/2 sm:-translate-x-px" />

            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 * (i + 1) }}
                  className={`relative flex items-start gap-6 mb-12 last:mb-0 sm:gap-0 ${
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-zinc-900 z-10 mt-6" />

                  {/* Spacer for mobile */}
                  <div className="w-12 shrink-0 sm:hidden" />

                  {/* Content card */}
                  <div
                    className={`flex-1 sm:w-[calc(50%-2rem)] ${
                      isLeft ? "sm:pr-12" : "sm:pl-12"
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 shadow-sm hover:shadow-md transition-shadow">
                      {/* Type badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                            exp.type === "Kerja"
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                              : "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300"
                          }`}
                        >
                          {exp.type === "Kerja" ? (
                            <Briefcase size={12} />
                          ) : (
                            <GraduationCap size={12} />
                          )}
                          {exp.type}
                        </span>
                      </div>

                      {/* Position & Company */}
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                        {exp.company}
                      </p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
                        {exp.period}
                      </p>

                      {/* Description */}
                      <ul className="mt-4 space-y-2">
                        {exp.description.map((desc, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 shrink-0" />
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
