import { useTranslations } from "@/i18n/context";
import { Mail, MapPin, Phone } from "lucide-react";

const FacebookIcon = () => (
  <svg xmlns="http://www.svg.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.svg.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export function Footer() {
  const t = useTranslations("Navigation");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#E63946] text-red-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Auto École <span className="text-destructive">Yosra Harrabi</span>
            </h3>
            <p className="text-red-100 text-sm leading-relaxed">
              Votre réussite est notre priorité. Profitez d'un accompagnement personnalisé pour obtenir votre permis de conduire en toute sérénité.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Liens Rapides</h4>
            <ul className="space-y-3">
              {["about", "services", "gallery", "faq"].map((key) => (
                <li key={key}>
                  <a href={`#${key}`} className="text-sm hover:text-white transition-colors">
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm">El Mourouj, Ben Arous, Tunisie</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+21622300220" className="text-sm hover:text-white transition-colors">
                  +216 22 300 220
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:yosraharrabi@icloud.com" className="text-sm hover:text-white transition-colors">
                  yosraharrabi@icloud.com
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/p/auto-%25C3%25A9cole-yosra-Harrabi-100094160687636/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-800 p-3 rounded-full hover:bg-white hover:text-[#E63946] transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/auto_ecole_yosra.harrabi.31/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-800 p-3 rounded-full hover:bg-white hover:text-[#E63946] transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-red-200">
          <p>© {currentYear} Auto École Yosra Harrabi. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
