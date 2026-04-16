"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar, Building2 } from "lucide-react";
import { trainings } from "@/lib/data";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categoryColors: Record<string, string> = {
    Struktural:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    Geoteknik:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    Manajemen:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    Hidrologi:
      "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
    Transportasi:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  };

  return (
    <section
      id="pelatihan"
      className="py-24 sm:py-32 bg-zinc-50/50 dark:bg-zinc-900/30"
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section header */}
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
              Pelatihan & Sertifikasi
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
              Skill Teknik Sipil
            </h2>
            <div className="mt-4 w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded-full mx-auto" />
          </div>

          {/* Training cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainings.map((training, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                className="group relative p-6 rounded-2xl bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
              >
                {/* Category badge */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                    categoryColors[training.category] ||
                    "bg-zinc-100 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  {training.category}
                </span>

                {/* Icon */}
                <div className="mb-3 w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Award size={20} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {training.title}
                </h3>

                {/* Organizer */}
                <div className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-500 mb-1">
                  <Building2 size={14} />
                  <span>{training.organizer}</span>
                </div>

                {/* Year */}
                <div className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-500 mb-3">
                  <Calendar size={14} />
                  <span>{training.year}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {training.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
