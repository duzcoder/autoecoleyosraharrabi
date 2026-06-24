"use client";

import { useState, useRef } from "react";
import { useLocale } from "@/i18n/context";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function Gallery() {
  const locale = useLocale();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = Array.from({ length: 13 }, (_, i) => `/images/gallery/students${i + 1}.jpg`);

  const content = {
    fr: {
      title: "Nos élèves diplômés",
      heading: "Ils nous ont fait confiance",
      description: "Découvrez les sourires de nos élèves après l'obtention de leur permis de conduire."
    },
    en: {
      title: "Our Graduates",
      heading: "They trusted us",
      description: "Discover the smiles of our students after getting their driver's license."
    },
    ar: {
      title: "طلابنا الخريجون",
      heading: "لقد وثقوا بنا",
      description: "اكتشف ابتسامات طلابنا بعد حصولهم على رخصة القيادة."
    }
  };

  const t = content[locale as keyof typeof content] || content.fr;

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 420 : -420, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">
            {t.title}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight mb-4">
            {t.heading}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            {t.description}
          </p>
        </div>

        {/* Slider */}
        <div className="relative w-full">
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
                className="shrink-0 snap-center first:pl-4 last:pr-4"
              >
                <div
                  className="relative w-[300px] sm:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-300"
                  onClick={() => setSelectedImage(src)}
                >
                  <img
                    src={src}
                    alt={`Élève diplômé ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Arrow buttons — desktop only */}
        <div className="hidden md:flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => scroll("left")}
            aria-label="Précédent"
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:border-primary hover:text-primary hover:shadow-md transition-all duration-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Suivant"
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:border-primary hover:text-primary hover:shadow-md transition-all duration-200"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        #gallery div[style*="scrollbar-width"] ::-webkit-scrollbar { display: none; }
      `}} />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 p-2 rounded-full backdrop-blur-sm transition-colors z-50"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Élève diplômé (Agrandissement)"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
