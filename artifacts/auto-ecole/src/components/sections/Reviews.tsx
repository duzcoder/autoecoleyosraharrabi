"use client";

import { useLocale } from "@/i18n/context";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function Reviews() {
  const locale = useLocale();

  const content = {
    fr: {
      title: "Avis Clients",
      heading: "Ce qu'ils disent de nous",
    },
    en: {
      title: "Customer Reviews",
      heading: "What they say about us",
    },
    ar: {
      title: "آراء العملاء",
      heading: "ماذا يقولون عنا",
    }
  };

  const t = content[locale as keyof typeof content] || content.fr;

  // Mocked Google reviews based on real structure
  const reviews = [
    {
      author: "Ahmed Ben Ali",
      rating: 5,
      date: "Il y a 2 semaines",
      text: "Excellente auto-école ! Les moniteurs sont très patients et pédagogues. J'ai eu mon permis du premier coup. Je recommande vivement Yosra Harrabi."
    },
    {
      author: "Sarah Trabelsi",
      rating: 5,
      date: "Il y a 1 mois",
      text: "Une équipe professionnelle et à l'écoute. Les voitures sont neuves et agréables à conduire. Merci pour tout votre accompagnement !"
    },
    {
      author: "Mehdi Mansour",
      rating: 5,
      date: "Il y a 2 mois",
      text: "Meilleure auto-école à El Mourouj sans aucun doute. Des prix raisonnables et une formation de très haute qualité."
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-zinc-50 dark:bg-zinc-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-bold uppercase tracking-wider text-sm mb-3">
            {t.title}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight mb-4">
            {t.heading}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-xl font-bold">5.0</span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="text-zinc-500 text-sm ml-2">Google Avis</span>
          </div>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden flex pb-8">
          {/* Gradient Edges for smooth fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-50 dark:from-zinc-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-50 dark:from-zinc-900 to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-marquee hover:animation-paused gap-8">
            {/* Duplicate the reviews array to make it continuous */}
            {[...reviews, ...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="w-[400px] shrink-0 bg-white dark:bg-zinc-950 p-8 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800 relative"
              >
                <Quote className="absolute top-8 right-8 h-10 w-10 text-primary/10" />
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 italic leading-relaxed whitespace-normal">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-white text-sm">{review.author}</h4>
                    <p className="text-xs text-zinc-500">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
