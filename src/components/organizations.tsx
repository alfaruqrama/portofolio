"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Calendar } from "lucide-react";
import { organizations } from "@/lib/data";

export function Organizations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="organisasi"
      className="py-24 sm:py-32 bg-zinc-50/50 dark:bg-zinc-900/30"
    >
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
              Organisasi
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
              Pengalaman Organisasi
            </h2>
            <div className="mt-4 w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto" />
          </div>

          {/* Organization cards */}
          <div className="space-y-6">
            {organizations.map((org, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * (i + 1) }}
                className="group flex gap-5 p-6 rounded-2xl bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
              >
                {/* Icon */}
                <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <Users size={22} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {org.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-500">
                      <Calendar size={12} />
                      <span>{org.period}</span>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                    {org.position}
                  </p>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {org.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
