"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { profile } from "@/lib/data";

const photos = [
  "/images/photo-1.jpg",
  "/images/photo-2.jpg",
  "/images/photo-3.jpg",
  "/images/photo-4.jpg",
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % photos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + photos.length) % photos.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % photos.length);
  };

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
            {/* Photo carousel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto md:mx-0"
            >
              <div className="relative w-64 h-72 rounded-2xl shadow-lg overflow-hidden group">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={current}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -40 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={photos[current]}
                      alt={`${profile.name} - foto ${current + 1}`}
                      fill
                      className="object-cover object-top"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Arrow buttons */}
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
                  aria-label="Next photo"
                >
                  <ChevronRight size={16} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                  {photos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        i === current
                          ? "bg-white w-4"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Go to photo ${i + 1}`}
                    />
                  ))}
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
