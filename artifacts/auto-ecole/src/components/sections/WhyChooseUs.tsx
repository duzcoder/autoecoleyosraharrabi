"use client";

import { useLocale } from "@/i18n/context";
import { motion } from "framer-motion";

export function WhyChooseUs() {
  const locale = useLocale();

  const content = {
    fr: {
      title: "Pourquoi Nous Choisir ?",
      heading: "Une formation qui fait la différence",
      stats: [
        { value: "85%", label: "Taux de réussite" },
        { value: "5+", label: "Années d'expérience" },
        { value: "500+", label: "Élèves diplômés" },
      ]
    },
    en: {
      title: "Why Choose Us?",
      heading: "Training that makes a difference",
      stats: [
        { value: "85%", label: "Success Rate" },
        { value: "5+", label: "Years of Experience" },
        { value: "500+", label: "Graduated Students" },
      ]
    },
    ar: {
      title: "لماذا تختارنا؟",
      heading: "تدريب يصنع الفارق",
      stats: [
        { value: "85%", label: "معدل النجاح" },
        { value: "+5", label: "سنوات من الخبرة" },
        { value: "+500", label: "طلاب تخرجوا" },
      ]
    }
  };

  const t = content[locale as keyof typeof content] || content.fr;

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary-foreground/80 font-bold uppercase tracking-wider text-sm mb-3">
            {t.title}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            {t.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
          {t.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-8 md:py-0 px-4"
            >
              <div className="text-5xl md:text-7xl font-extrabold mb-4">{stat.value}</div>
              <div className="text-lg md:text-xl font-medium text-primary-foreground/90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
