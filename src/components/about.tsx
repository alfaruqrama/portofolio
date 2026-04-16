"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/lib/data";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tentang" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section header */}
          <div className="mb-12">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
              Tentang Saya
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
              Siapa Saya?
            </h2>
            <div className="mt-4 w-16 h-1 bg-blue-600 dark:bg-blue-400 rounded-full" />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto md:mx-0"
            >
              <div className="w-64 h-72 rounded-2xl bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center shadow-lg overflow-hidden">
                <div className="text-center text-zinc-500 dark:text-zinc-400">
                  <div className="text-5xl mb-2">
                    {profile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <p className="text-xs">Tambahkan foto Anda</p>
                </div>
              </div>
            </motion.div>

            {/* Bio text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-5"
            >
              {profile.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
                >
                  {paragraph}
                </p>
              ))}

              {/* Quick info */}
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50">
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <p className="text-sm font-medium text-zinc-900 dark:text-white truncate">
                    {profile.email}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50">
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-1">
                    Lokasi
                  </p>
                  <p className="text-sm font-medium text-zinc-900 dark:text-white">
                    {profile.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
