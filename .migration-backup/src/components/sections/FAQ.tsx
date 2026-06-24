"use client";

import { useLocale } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const locale = useLocale();

  const content = {
    fr: {
      title: "FAQ",
      heading: "Questions Fréquentes",
      faqs: [
        {
          q: "Comment obtenir son permis ?",
          a: "Pour obtenir votre permis, vous devez d'abord réussir l'examen théorique (code de la route), puis suivre une formation pratique avant de passer l'examen de conduite."
        },
        {
          q: "Quels sont les documents nécessaires ?",
          a: "Il vous faudra : une copie de votre carte d'identité, 4 photos d'identité récentes, un certificat médical d'aptitude, et les formulaires d'inscription dûment remplis."
        },
        {
          q: "Combien dure la formation ?",
          a: "La durée dépend de votre disponibilité et de votre rythme d'apprentissage. En moyenne, une formation complète prend entre 1 et 3 mois."
        },
        {
          q: "Quels sont les tarifs ?",
          a: "Nos tarifs sont très compétitifs et adaptés à vos besoins. Nous proposons plusieurs forfaits. Veuillez nous contacter pour un devis personnalisé."
        },
        {
          q: "Peut-on choisir ses horaires ?",
          a: "Oui, nous offrons une grande flexibilité. Vous pouvez planifier vos cours selon vos disponibilités, y compris le week-end."
        }
      ]
    },
    en: {
      title: "FAQ",
      heading: "Frequently Asked Questions",
      faqs: [
        {
          q: "How to get a driver's license?",
          a: "To get your license, you must first pass the theoretical exam (traffic laws), then take practical training before taking the driving test."
        },
        {
          q: "What documents are required?",
          a: "You will need: a copy of your ID, 4 recent passport photos, a medical fitness certificate, and completed registration forms."
        },
        {
          q: "How long does the training take?",
          a: "The duration depends on your availability and learning pace. On average, complete training takes between 1 and 3 months."
        },
        {
          q: "What are the rates?",
          a: "Our rates are highly competitive and tailored to your needs. We offer several packages. Please contact us for a personalized quote."
        },
        {
          q: "Can I choose my schedule?",
          a: "Yes, we offer great flexibility. You can schedule your classes according to your availability, including weekends."
        }
      ]
    },
    ar: {
      title: "الأسئلة الشائعة",
      heading: "أسئلة يتكرر طرحها",
      faqs: [
        {
          q: "كيف يمكنني الحصول على رخصة القيادة؟",
          a: "للحصول على رخصتك، يجب عليك أولاً اجتياز الامتحان النظري (قانون المرور)، ثم متابعة تدريب عملي قبل اجتياز اختبار القيادة."
        },
        {
          q: "ما هي المستندات المطلوبة؟",
          a: "ستحتاج إلى: نسخة من بطاقة الهوية، 4 صور شخصية حديثة، شهادة طبية تثبت اللياقة، واستمارات التسجيل معبأة."
        },
        {
          q: "كم تستغرق مدة التدريب؟",
          a: "تعتمد المدة على مدى توفرك وسرعة تعلمك. في المتوسط، يستغرق التدريب الكامل ما بين شهر إلى 3 أشهر."
        },
        {
          q: "ما هي الأسعار؟",
          a: "أسعارنا تنافسية للغاية ومصممة حسب احتياجاتك. نقدم عدة باقات. يرجى الاتصال بنا للحصول على عرض سعر مخصص."
        },
        {
          q: "هل يمكنني اختيار مواعيد الدروس؟",
          a: "نعم، نحن نقدم مرونة كبيرة. يمكنك جدولة دروسك وفقًا لتوفرك، بما في ذلك عطلات نهاية الأسبوع."
        }
      ]
    }
  };

  const t = content[locale as keyof typeof content] || content.fr;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">
            {t.title}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight">
            {t.heading}
          </h2>
        </div>

        <div className="space-y-4">
          {t.faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'border-primary bg-primary/5 dark:bg-primary/10' : 'border-zinc-200 dark:border-zinc-800'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-lg text-zinc-900 dark:text-white pr-4">{faq.q}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-zinc-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
