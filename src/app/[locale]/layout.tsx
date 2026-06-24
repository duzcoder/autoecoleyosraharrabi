import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import {Navbar} from '@/components/shared/Navbar';
import {Footer} from '@/components/shared/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auto École Yosra Harrabi",
  description: "Votre réussite au permis commence ici. Auto-école professionnelle à Mourouj avec des moniteurs agréés et des taux de réussite élevés.",
  keywords: "Auto école en Tunisie, Auto école à Mourouj, Permis de conduire Tunisie, Formation conduite Tunisie, Auto École Yosra Harrabi",
  openGraph: {
    title: "Auto École Yosra Harrabi",
    description: "Votre réussite au permis commence ici. Auto-école professionnelle à Mourouj.",
    url: "https://auto-ecole-yosraharrabi.tn",
    siteName: "Auto École Yosra Harrabi",
    images: [
      {
        url: "https://auto-ecole-yosraharrabi.tn/images/gallery/students1.jpg",
        width: 1200,
        height: 630,
        alt: "Auto École Yosra Harrabi - Élève avec son permis",
      },
    ],
    locale: "fr_TN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto École Yosra Harrabi",
    description: "Votre réussite au permis commence ici. Auto-école professionnelle à Mourouj.",
    images: ["https://auto-ecole-yosraharrabi.tn/images/gallery/students1.jpg"],
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    additionalType: 'http://schema.org/DrivingSchool',
    name: 'Auto École Yosra Harrabi',
    image: 'https://auto-ecole-yosraharrabi.tn/images/gallery/students1.jpg',
    '@id': 'https://auto-ecole-yosraharrabi.tn',
    url: 'https://auto-ecole-yosraharrabi.tn',
    telephone: '+21622300220',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'El Mourouj',
      addressLocality: 'Ben Arous',
      addressCountry: 'TN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.73887,
      longitude: 10.201889
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '08:00',
      closes: '18:00'
    }
  };

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
