"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/i18n/context";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const TIKTOK_URL = "https://www.tiktok.com/@yosraharrabii";
const TIKTOK_HANDLE = "@yosraharrabii";

const content = {
  fr: {
    heading: "Suivez-nous sur TikTok",
    description: "Conseils de conduite, témoignages d'élèves et coulisses de votre auto-école préférée.",
    cta: "Voir notre TikTok",
    pill1: "Conseilsconduite",
    pill2: "Témoignages",
    pill3: "Permisréussi",
    pill4: "Codelaroute",
  },
  en: {
    heading: "Follow Us on TikTok",
    description: "Driving tips, student testimonials and behind the scenes of your favourite driving school.",
    cta: "See our TikTok",
    pill1: "Drivingtips",
    pill2: "Testimonials",
    pill3: "LicenseSuccess",
    pill4: "HighwayCode",
  },
  ar: {
    heading: "تابعونا على تيك توك",
    description: "نصائح قيادة، شهادات طلاب وكواليس مدرسة تعليم السياقة المفضلة لديك.",
    cta: "شاهد تيك توكنا",
    pill1: "نصائحالقيادة",
    pill2: "شهادات",
    pill3: "نجاحالرخصة",
    pill4: "قانونالمرور",
  },
};

const videos = [
  "/videos/tiktok1.mp4",
  "/videos/tiktok2.mp4",
  "/videos/tiktok3.mp4",
];

function AutoPlayVideo({ src, delay }: { src: string; delay: number }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    el.loop = true;
    el.playsInline = true;

    const tryPlay = () => {
      el.play().catch(() => {
        // If autoplay is blocked, retry on first user interaction
        const resume = () => {
          el.play().catch(() => {});
          document.removeEventListener("click", resume);
          document.removeEventListener("touchstart", resume);
        };
        document.addEventListener("click", resume, { once: true });
        document.addEventListener("touchstart", resume, { once: true });
      });
    };

    const timer = setTimeout(tryPlay, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    />
  );
}

export function Reels() {
  const locale = useLocale();
  const t = content[locale as keyof typeof content] ?? content.fr;

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Neon glow blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#fe2c55]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#25f4ee]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "30px 30px" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Left — text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white leading-tight mb-6"
            >
              Suivez-nous sur{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fe2c55] to-[#25f4ee]">
                TikTok
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/50 text-lg mb-8 max-w-md mx-auto lg:mx-0"
            >
              {t.description}
            </motion.p>

            {/* Hashtag pills */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10"
            >
              {[t.pill1, t.pill2, t.pill3, t.pill4].map((tag) => (
                <span key={tag} className="text-xs font-semibold bg-white/8 border border-white/10 text-white/60 rounded-full px-3 py-1">
                  #{tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#fe2c55] to-[#ff6b81] text-white font-bold px-7 py-4 rounded-full text-sm hover:shadow-[0_0_30px_rgba(254,44,85,0.5)] hover:scale-105 transition-all duration-300"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.54V6.78a4.85 4.85 0 0 1-1.02-.09z"/>
                </svg>
                {t.cta}
                <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <span className="text-white/30 text-sm font-mono">{TIKTOK_HANDLE}</span>
            </motion.div>
          </div>

          {/* Right — video cards */}
          <div className="flex gap-4 items-end shrink-0">
            {videos.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i, type: "spring", stiffness: 80 }}
                style={{ marginTop: i === 1 ? 0 : i === 0 ? 48 : 28 }}
                className="relative w-[130px] sm:w-[155px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
              >
                <AutoPlayVideo src={src} delay={i * 200} />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

                {/* TikTok logo watermark */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/50 flex items-center justify-center pointer-events-none">
                  <svg className="h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.54V6.78a4.85 4.85 0 0 1-1.02-.09z"/>
                  </svg>
                </div>

                {/* Neon border glow on hover */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-[#fe2c55]/0 group-hover:ring-[#fe2c55]/70 transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
