"use client";

import { useEffect, useState, useRef } from "react";
import { useLocale } from "@/i18n/context";
import { motion } from "framer-motion";
import { Play, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface Reel {
  id: string;
  title: string;
  description: string;
  permalink_url: string;
  thumbnail: string | null;
  duration: number;
  embed_url: string;
}

const content = {
  fr: {
    title: "Nos Reels",
    heading: "Suivez-nous sur Facebook",
    description: "Découvrez nos dernières vidéos et moments partagés avec nos élèves.",
    loading: "Chargement des vidéos...",
    error: "Impossible de charger les vidéos pour le moment.",
    watchOn: "Voir sur Facebook",
    noToken: "Les vidéos seront disponibles dès la configuration du compte Facebook.",
  },
  en: {
    title: "Our Reels",
    heading: "Follow Us on Facebook",
    description: "Discover our latest videos and moments shared with our students.",
    loading: "Loading videos...",
    error: "Unable to load videos at this time.",
    watchOn: "Watch on Facebook",
    noToken: "Videos will be available once the Facebook account is configured.",
  },
  ar: {
    title: "مقاطعنا",
    heading: "تابعونا على فيسبوك",
    description: "اكتشف آخر مقاطعنا واللحظات التي نشاركها مع طلابنا.",
    loading: "جارٍ تحميل الفيديوهات...",
    error: "تعذر تحميل الفيديوهات في الوقت الحالي.",
    watchOn: "شاهد على فيسبوك",
    noToken: "ستتوفر الفيديوهات بمجرد إعداد حساب فيسبوك.",
  },
};

function ReelCard({ reel, onClick }: { reel: Reel; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative shrink-0 w-[260px] sm:w-[300px] cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-zinc-800 shadow-xl">
        {reel.thumbnail ? (
          <img
            src={reel.thumbnail}
            alt={reel.title || "Reel"}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/30 to-destructive/20">
            <Play className="h-16 w-16 text-white/40" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
            <Play className="h-6 w-6 text-white fill-white ml-0.5" />
          </div>
        </div>

        {reel.title && (
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-white text-sm font-medium line-clamp-2 leading-snug">
              {reel.title}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function VideoModal({
  reel,
  onClose,
  t,
}: {
  reel: Reel;
  onClose: () => void;
  t: (typeof content)["fr"];
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-xl bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-video">
          <iframe
            src={reel.embed_url}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            className="block"
          />
        </div>
        <div className="p-4 flex items-center justify-between gap-4">
          {reel.title && (
            <p className="text-white text-sm font-medium truncate">{reel.title}</p>
          )}
          <a
            href={reel.permalink_url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {t.watchOn}
          </a>
        </div>
        <button
          className="absolute top-3 right-3 text-white/70 hover:text-white bg-black/50 p-1.5 rounded-full backdrop-blur-sm"
          onClick={onClose}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

export function Reels() {
  const locale = useLocale();
  const t = content[locale as keyof typeof content] ?? content.fr;

  const [reels, setReels] = useState<Reel[]>([]);
  const [status, setStatus] = useState<"loading" | "ok" | "error" | "no-token">("loading");
  const [selected, setSelected] = useState<Reel | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/facebook/reels")
      .then((r) => r.json())
      .then((data) => {
        if (data.error?.includes("FACEBOOK_ACCESS_TOKEN")) {
          setStatus("no-token");
        } else if (data.reels?.length) {
          setReels(data.reels);
          setStatus("ok");
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-[#051e52] overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-destructive font-bold uppercase tracking-wider text-sm mb-2">
              {t.title}
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              {t.heading}
            </h2>
            <p className="text-white/50 mt-3 max-w-md text-sm">{t.description}</p>
          </div>

          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {status === "loading" && (
          <div className="flex gap-4 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="shrink-0 w-[260px] sm:w-[300px] aspect-[9/16] rounded-2xl bg-white/5 animate-pulse" />
            ))}
          </div>
        )}

        {(status === "error" || status === "no-token") && (
          <div className="text-center py-16">
            <p className="text-white/40 text-sm">
              {status === "no-token" ? t.noToken : t.error}
            </p>
            <a
              href="https://www.facebook.com/p/auto-%C3%A9cole-yosra-Harrabi-100094160687636/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all border border-white/20"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Voir nos Reels sur Facebook
            </a>
          </div>
        )}

        {status === "ok" && (
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reels.map((reel) => (
              <ReelCard key={reel.id} reel={reel} onClick={() => setSelected(reel)} />
            ))}
          </div>
        )}
      </div>

      {selected && (
        <VideoModal reel={selected} onClose={() => setSelected(null)} t={t} />
      )}
    </section>
  );
}
