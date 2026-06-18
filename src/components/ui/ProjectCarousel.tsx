"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  photos: string[];
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir >= 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir >= 0 ? "-100%" : "100%", opacity: 0 }),
};

export default function ProjectCarousel({ photos }: Props) {
  const [[idx, dir], setSlide] = useState<[number, number]>([0, 0]);

  if (photos.length === 0) return null;

  const go = (newDir: number) => {
    setSlide(([prev]) => [(prev + newDir + photos.length) % photos.length, newDir]);
  };

  return (
    <div className="group relative aspect-4/3 overflow-hidden bg-brand-dark">
      <AnimatePresence custom={dir} initial={false}>
        <motion.div
          key={idx}
          custom={dir}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.32, ease: [0.25, 0, 0.35, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={photos[idx]}
            alt={`Foto ${idx + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Counter */}
      {photos.length > 1 && (
        <span className="absolute top-3 right-3 z-10 bg-black/60 text-white text-[11px] font-body px-2 py-0.5 tracking-wider pointer-events-none">
          {idx + 1} / {photos.length}
        </span>
      )}

      {/* Arrows */}
      {photos.length > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-brand-green"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Siguiente foto"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-brand-green"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </>
      )}

      {/* Dot indicators */}
      {photos.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-1.5 pointer-events-none">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide([i, i >= idx ? 1 : -1])}
              aria-label={`Ir a foto ${i + 1}`}
              className={`h-1.5 transition-all duration-300 pointer-events-auto ${
                i === idx
                  ? "w-5 bg-brand-green"
                  : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
