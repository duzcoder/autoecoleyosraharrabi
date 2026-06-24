"use client";

import { useLocale } from "@/i18n/context";
import { motion } from "framer-motion";
import { CarFront, BookOpen, Clock, ShieldAlert, GraduationCap, MapPin } from "lucide-react";

export function Services() {
  const locale = useLocale();

  const content = {
    fr: {
      title: "Nos Services",
      heading: "Des formations adaptées à vos besoins",
      services: [
        {
          title: "Permis B",
          description: "Formation complète pour l'obtention du permis voiture (boîte manuelle ou automatique).",
          icon: CarFront,
        },
        {
          title: "Code de la route",
          description: "Cours théoriques intensifs avec suivi régulier pour réussir votre examen du code.",
          icon: BookOpen,
        },
        {
          title: "Accompagnement",
          description: "Un moniteur dédié vous suit de votre inscription jusqu'à l'obtention du permis.",
          icon: GraduationCap,
        },
        {
          title: "Cours pratiques",
          description: "Apprentissage de la conduite en conditions réelles avec des véhicules récents.",
          icon: MapPin,
        },
        {
          title: "Préparation examen",
          description: "Examens blancs et mise en situation pour être prêt le jour J.",
          icon: ShieldAlert,
        },
        {
          title: "Horaires flexibles",
          description: "Des leçons de conduite adaptées à votre emploi du temps, même le week-end.",
          icon: Clock,
        },
      ]
    },
    en: {
      title: "Our Services",
      heading: "Training tailored to your needs",
      services: [
        {
          title: "B License",
          description: "Complete training for obtaining a car license (manual or automatic).",
          icon: CarFront,
        },
        {
          title: "Traffic Laws",
          description: "Intensive theoretical courses with regular monitoring to pass your exam.",
          icon: BookOpen,
        },
        {
          title: "Personalized Support",
          description: "A dedicated instructor follows you from registration to getting your license.",
          icon: GraduationCap,
        },
        {
          title: "Practical Lessons",
          description: "Learning to drive in real conditions with recent vehicles.",
          icon: MapPin,
        },
        {
          title: "Exam Preparation",
          description: "Mock exams and scenarios to be ready on the big day.",
          icon: ShieldAlert,
        },
        {
          title: "Flexible Hours",
          description: "Driving lessons adapted to your schedule, even on weekends.",
          icon: Clock,
        },
      ]
    },
    ar: {
      title: "خدماتنا",
      heading: "تدريب مصمم خصيصاً لاحتياجاتك",
      services: [
        {
          title: "رخصة من الفئة ب",
          description: "تدريب كامل للحصول على رخصة قيادة سيارة (عادي أو أوتوماتيك).",
          icon: CarFront,
        },
        {
          title: "قانون المرور",
          description: "دورات نظرية مكثفة مع متابعة مستمرة لاجتياز الامتحان.",
          icon: BookOpen,
        },
        {
          title: "دعم شخصي",
          description: "مدرب مخصص يتابعك من التسجيل حتى الحصول على الرخصة.",
          icon: GraduationCap,
        },
        {
          title: "دروس عملية",
          description: "تعلم القيادة في ظروف حقيقية باستخدام سيارات حديثة.",
          icon: MapPin,
        },
        {
          title: "التحضير للامتحان",
          description: "امتحانات تجريبية ومحاكاة لتكون مستعداً يوم الامتحان.",
          icon: ShieldAlert,
        },
        {
          title: "مواعيد مرنة",
          description: "دروس قيادة تتناسب مع جدولك الزمني، حتى في عطلات نهاية الأسبوع.",
          icon: Clock,
        },
      ]
    }
  };

  const t = content[locale as keyof typeof content] || content.fr;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-950 overflow-hidden relative">
      {/* Background glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-destructive/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
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
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {t.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group relative bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/50 dark:border-zinc-800/50 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-100 dark:border-zinc-700 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 group-hover:shadow-primary/20 group-hover:shadow-lg">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
