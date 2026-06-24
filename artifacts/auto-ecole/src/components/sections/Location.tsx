"use client";

import { useLocale } from "@/i18n/context";
import { MapPin, Navigation } from "lucide-react";

export function Location() {
  const locale = useLocale();

  const content = {
    fr: {
      title: "Notre Emplacement",
      heading: "Où nous trouver ?",
      directions: "Itinéraire",
      openInMaps: "Ouvrir dans Google Maps"
    },
    en: {
      title: "Our Location",
      heading: "Where to find us?",
      directions: "Directions",
      openInMaps: "Open in Google Maps"
    },
    ar: {
      title: "موقعنا",
      heading: "أين تجدنا؟",
      directions: "الاتجاهات",
      openInMaps: "افتح في خرائط جوجل"
    }
  };

  const t = content[locale as keyof typeof content] || content.fr;

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-1/3 space-y-8 text-center lg:text-left">
            <div>
              <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">
                {t.title}
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight">
                {t.heading}
              </h2>
            </div>
            
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              Auto École Yosra Harrabi, El Mourouj, Ben Arous, Tunisie
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 pt-4">
              <a
                href="https://maps.app.goo.gl/Z7zDGKaLa2z5CXcb8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-all shadow-md"
              >
                <Navigation className="h-5 w-5" />
                {t.directions}
              </a>
              <a
                href="https://maps.app.goo.gl/Z7zDGKaLa2z5CXcb8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 px-6 py-3 rounded-full font-medium hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all"
              >
                <MapPin className="h-5 w-5 text-destructive" />
                {t.openInMaps}
              </a>
            </div>
          </div>

          <div className="w-full lg:w-2/3 h-[500px] rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-zinc-200 dark:border-zinc-800 relative group">
            {/* Embedded Google Map with tighter zoom on El Mourouj */}
            <iframe
              src="https://maps.google.com/maps?q=36.7062988,10.2111222&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-0 transition-all duration-700 hover:scale-[1.02]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
