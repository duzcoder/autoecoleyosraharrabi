import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type Locale = "fr" | "en" | "ar";

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (namespace: string, key: string) => string;
}

const messages: Record<Locale, Record<string, Record<string, string>>> = {
  fr: {
    Navigation: {
      home: "Accueil",
      about: "À Propos",
      services: "Nos Services",
      gallery: "Galerie",
      reviews: "Avis",
      faq: "FAQ",
      contact: "Contact",
      language: "Langue",
    },
    Hero: {
      title: "Votre réussite au permis commence ici",
      subtitle: "Auto-école professionnelle avec un accompagnement personnalisé et des taux de réussite élevés.",
      cta_contact: "Nous contacter",
      cta_courses: "Voir nos formations",
    },
  },
  en: {
    Navigation: {
      home: "Home",
      about: "About",
      services: "Services",
      gallery: "Gallery",
      reviews: "Reviews",
      faq: "FAQ",
      contact: "Contact",
      language: "Language",
    },
    Hero: {
      title: "Your driving success starts here",
      subtitle: "Professional driving school with personalized support and high success rates.",
      cta_contact: "Contact Us",
      cta_courses: "View Our Courses",
    },
  },
  ar: {
    Navigation: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      gallery: "معرض الصور",
      reviews: "الآراء",
      faq: "أسئلة شائعة",
      contact: "اتصل بنا",
      language: "اللغة",
    },
    Hero: {
      title: "نجاحك في رخصة القيادة يبدأ هنا",
      subtitle: "مدرسة تعليم قيادة محترفة مع دعم شخصي ومعدلات نجاح عالية.",
      cta_contact: "اتصل بنا",
      cta_courses: "اكتشف دوراتنا",
    },
  },
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
  }, []);

  const t = useCallback((namespace: string, key: string): string => {
    return messages[locale]?.[namespace]?.[key] ?? key;
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLocale(): Locale {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLocale must be used within I18nProvider");
  return ctx.locale;
}

export function useTranslations(namespace: string) {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslations must be used within I18nProvider");
  return (key: string) => ctx.t(namespace, key);
}

export function useSetLocale() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useSetLocale must be used within I18nProvider");
  return ctx.setLocale;
}
