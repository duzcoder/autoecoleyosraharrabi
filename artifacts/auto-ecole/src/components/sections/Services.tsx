"use client";

import { useLocale } from "@/i18n/context";
import { motion } from "framer-motion";
import { BookOpen, Car, RotateCcw, ArrowRight } from "lucide-react";

export function Services() {
  const locale = useLocale();

  const content = {
    fr: {
      title: "Nos Tarifs",
      heading: "Des formations adaptées à vos besoins",
      cta: "Découvrir nos forfaits",
      perHour: "/ heure",
      prices: [
        { label: "Heure code", price: "15", icon: BookOpen, highlight: false },
        { label: "Heure conduite", price: "30", icon: Car, highlight: true },
        { label: "Heure manœuvre", price: "35", icon: RotateCcw, highlight: false },
        { label: "Heure recyclage", price: "35", icon: Car, highlight: false },
      ],
    },
    en: {
      title: "Our Rates",
      heading: "Training tailored to your needs",
      cta: "Discover our packages",
      perHour: "/ hour",
      prices: [
        { label: "Theory lesson", price: "15", icon: BookOpen, highlight: false },
        { label: "Driving lesson", price: "30", icon: Car, highlight: true },
        { label: "Manoeuvre lesson", price: "35", icon: RotateCcw, highlight: false },
        { label: "Refresher lesson", price: "35", icon: Car, highlight: false },
      ],
    },
    ar: {
      title: "أسعارنا",
      heading: "تدريب مصمم خصيصاً لاحتياجاتك",
      cta: "اكتشف باقاتنا",
      perHour: "/ ساعة",
      prices: [
        { label: "ساعة نظرية", price: "15", icon: BookOpen, highlight: false },
        { label: "ساعة قيادة", price: "30", icon: Car, highlight: true },
        { label: "ساعة مناورة", price: "35", icon: RotateCcw, highlight: false },
        { label: "ساعة تجديد", price: "35", icon: Car, highlight: false },
      ],
    },
  };

  const t = content[locale as keyof typeof content] || content.fr;

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-950 overflow-hidden relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-destructive/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-wider text-sm mb-3"
          >
            {t.title}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white leading-tight"
          >
            {t.heading}
          </motion.h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {t.prices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className={`group relative rounded-[2rem] p-8 flex flex-col items-center text-center overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl
                  ${service.highlight
                    ? "bg-primary text-white shadow-xl shadow-primary/30"
                    : "bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xl border border-white/60 dark:border-zinc-800/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                  }`}
              >
                {service.highlight && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                )}

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3
                  ${service.highlight
                    ? "bg-white/20"
                    : "bg-white dark:bg-zinc-800 shadow-sm border border-zinc-100 dark:border-zinc-700"
                  }`}
                >
                  <Icon className={`h-7 w-7 ${service.highlight ? "text-white" : "text-primary"}`} />
                </div>

                <h3 className={`text-lg font-bold mb-5 ${service.highlight ? "text-white" : "text-zinc-800 dark:text-white"}`}>
                  {service.label}
                </h3>

                <div className="mt-auto flex items-end gap-1">
                  <span className={`text-5xl font-extrabold leading-none ${service.highlight ? "text-white" : "text-primary"}`}>
                    {service.price}
                  </span>
                  <span className={`text-lg font-bold mb-1 ${service.highlight ? "text-white/80" : "text-zinc-400"}`}>
                    DT
                  </span>
                </div>
                <span className={`text-sm mt-1 ${service.highlight ? "text-white/60" : "text-zinc-400"}`}>
                  {t.perHour}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
          >
            {t.cta}
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
