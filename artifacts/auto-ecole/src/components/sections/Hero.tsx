"use client";

import { useTranslations } from "@/i18n/context";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";

export function Hero() {
  const t = useTranslations("Hero");
  const [showReg, setShowReg] = useState(false);

  return (
    <section
      className="relative min-h-[88vh] flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(115deg, #051e52 0%, #0a2e7a 25%, #2d1066 55%, #b01030 80%, #E63946 100%)",
      }}
    >
      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-10 py-28 lg:py-0 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-0 w-full">

          {/* ── LEFT: Text ── */}
          <div className="w-full lg:w-[48%] space-y-7 text-center lg:text-left z-20 shrink-0">

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold text-white leading-[1.08] tracking-tight"
            >
              {t("title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.13 }}
              className="text-sm sm:text-base text-white/65 max-w-sm mx-auto lg:mx-0 leading-relaxed"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.23 }}
              className="flex flex-col items-center lg:items-start gap-4"
            >
              <Button
                onClick={() => setShowReg((prev) => !prev)}
                className="cta-button bg-[#E63946] hover:bg-[#c8303c] text-white"
              >
                Dossier d'inscription :
              </Button>
              {showReg && (
                <div className="registration-panel mt-4 p-4 bg-white/10 backdrop-blur rounded text-left">
                  <h3 className="text-lg font-semibold mb-2 text-white">Dossier d'inscription</h3>
                  <ul className="list-disc list-inside space-y-1 text-white/80">
                    <li><a href="/files/inscription-form.pdf" target="_blank" rel="noopener">Formulaire d'inscription (PDF)</a></li>
                    <li><a href="/files/conditions.pdf" target="_blank" rel="noopener">Conditions Générales</a></li>
                    <li><a href="/files/paiement.pdf" target="_blank" rel="noopener">Modalités de paiement</a></li>
                  </ul>
                </div>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.42 }}
              className="flex items-start justify-center lg:justify-start gap-10 pt-6 border-t border-white/15"
            >
              {[
                { value: "85%", label: "Taux de réussite" },
                { value: "5+", label: "Années d'expérience" },
                { value: "500+", label: "Élèves diplômés" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-[10px] font-semibold text-white/50 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

      {/* ── CAR: Absolutely positioned, fills the right half ── */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
        className="absolute right-[-2%] bottom-[-14%] w-[62%] z-10 hidden lg:flex items-end justify-end"
      >
        <img
          src="/images/carauto.png"
          alt="Voiture Auto-École Yosra Harrabi"
          className="w-full h-auto object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
        />
      </motion.div>

        </div>
      </div>

      {/* Bottom white wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full h-[70px] lg:h-[90px]"
        >
          <path fill="#f9fafb" d="M0,50 C400,90 1040,10 1440,50 L1440,90 L0,90 Z" />
        </svg>
      </div>
    </section>
  );
}
