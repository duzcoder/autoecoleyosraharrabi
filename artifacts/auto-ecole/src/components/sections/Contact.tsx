"use client";

import { useLocale } from "@/i18n/context";
import { Phone, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const locale = useLocale();

  const content = {
    fr: {
      title: "Contact",
      heading: "Contactez-nous dès aujourd'hui",
      description: "Prêt à commencer votre formation ? Laissez-nous un message et nous vous recontacterons très vite.",
      nameLabel: "Nom complet",
      emailLabel: "Adresse email",
      phoneLabel: "Numéro de téléphone",
      messageLabel: "Votre message",
      submitButton: "Envoyer le message",
    },
    en: {
      title: "Contact",
      heading: "Contact us today",
      description: "Ready to start your training? Leave us a message and we'll get back to you shortly.",
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      phoneLabel: "Phone Number",
      messageLabel: "Your Message",
      submitButton: "Send Message",
    },
    ar: {
      title: "اتصل بنا",
      heading: "اتصل بنا اليوم",
      description: "هل أنت مستعد لبدء تدريبك؟ اترك لنا رسالة وسنعاود الاتصال بك قريبًا.",
      nameLabel: "الاسم الكامل",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "رقم الهاتف",
      messageLabel: "رسالتك",
      submitButton: "إرسال الرسالة",
    }
  };

  const t = content[locale as keyof typeof content] || content.fr;

  return (
    <section id="contact" className="py-24 bg-white dark:bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Contact Info Side */}
          <div className="w-full lg:w-2/5 bg-zinc-900 text-white p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-destructive rounded-full blur-3xl opacity-20" />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Informations</h3>
              <p className="text-zinc-400 mb-12">
                N'hésitez pas à nous contacter pour toute question concernant nos forfaits et nos disponibilités.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-4 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">Téléphone</p>
                    <a href="tel:+21622300220" className="text-xl font-semibold hover:text-primary transition-colors">
                      +216 22 300 220
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-4 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">Email</p>
                    <a href="mailto:yosraharrabi@icloud.com" className="text-lg font-semibold hover:text-primary transition-colors">
                      yosraharrabi@icloud.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-3/5 p-12 lg:p-16 bg-white dark:bg-zinc-900">
            <div className="mb-8">
              <p className="text-primary font-bold uppercase tracking-wider text-sm mb-2">
                {t.title}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
                {t.heading}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                {t.description}
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t.nameLabel}</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t.phoneLabel}</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+216 00 000 000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t.emailLabel}</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{t.messageLabel}</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Je souhaite m'inscrire pour..."
                />
              </div>

              <button 
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all"
              >
                {t.submitButton}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
