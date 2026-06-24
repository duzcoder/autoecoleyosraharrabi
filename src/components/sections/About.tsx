"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const locale = useLocale();

  const content = {
    fr: {
      title: "À propos de nous",
      heading: "Une pédagogie moderne pour votre réussite",
      description:
        "Fondée avec la conviction que chaque élève est unique, l'Auto École Yosra Harrabi s'engage à fournir un enseignement de qualité supérieure. Notre approche pédagogique moderne, combinée à une équipe de moniteurs passionnés, garantit un apprentissage dans les meilleures conditions.",
      bullets: [
        "Un accompagnement 100% personnalisé",
        "Des véhicules modernes et sécurisés",
        "Une flexibilité des horaires",
        "Une méthode axée sur la sécurité",
      ],
      years: "5+",
      yearsText: "Années d'expérience",
    },
    en: {
      title: "About Us",
      heading: "Modern teaching for your success",
      description:
        "Founded with the belief that every student is unique, Auto École Yosra Harrabi is committed to providing top-quality instruction. Our modern pedagogical approach, combined with a team of passionate instructors, ensures learning in the best conditions.",
      bullets: [
        "100% personalized support",
        "Modern and safe vehicles",
        "Flexible scheduling",
        "Safety-first method",
      ],
      years: "5+",
      yearsText: "Years of experience",
    },
    ar: {
      title: "من نحن",
      heading: "تعليم حديث من أجل نجاحك",
      description:
        "تأسست مدرسة القيادة يسرى حاربي بإيمان أن كل طالب فريد من نوعه، وهي ملتزمة بتقديم تعليم عالي الجودة. يضمن نهجنا التعليمي الحديث، إلى جانب فريق من المدربين الشغوفين، التعلم في أفضل الظروف.",
      bullets: [
        "دعم شخصي بنسبة 100%",
        "مركبات حديثة وآمنة",
        "مرونة في المواعيد",
        "طريقة تعتمد على الأمان أولاً",
      ],
      years: "5+",
      yearsText: "سنوات من الخبرة",
    },
  };

  const t = content[locale as keyof typeof content] || content.fr;

  return (
    <section id="about" className="py-24 bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-[4/5]">
              <img
                src="/images/gallery/students2.jpg"
                alt="About us driving school"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            
            {/* Experience Card */}
            <div className="absolute bottom-8 right-8 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl max-w-[200px]">
              <h3 className="text-4xl font-extrabold text-primary mb-2">{t.years}</h3>
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{t.yearsText}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">
                {t.title}
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight">
                {t.heading}
              </h2>
            </div>
            
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t.description}
            </p>

            <ul className="space-y-4 pt-4">
              {t.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
