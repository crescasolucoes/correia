import type { Metadata } from "next";
import { Geist, Syne } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Bold weights for headlines
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mtennis.com.br'),
  title: {
    default: "Correia Pro Tennis | Aulas de Tênis em Condomínios e Empresas",
    template: "%s | Correia Pro Tennis"
  },
  description: "Aulas de tênis personalizadas, baby tennis e treinamento de equipes em São Paulo. Metodologia exclusiva para condomínios, clubes e empresas. Agende sua aula experimental!",
  keywords: ["aulas de tênis", "correia tennis", "baby tennis", "torneio de tênis", "professor de tênis", "tênis em condomínio", "clínica de tênis", "tênis infantil", "tênis para adultos", "tênis empresarial"],
  authors: [{ name: "Correia Pro Tennis" }],
  creator: "Correia Pro Tennis",
  publisher: "Correia Pro Tennis",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Correia Tennis | Aulas de Tênis em São Paulo",
    description: "Transforme seu jogo com a metodologia Correia Tennis. Aulas para todas as idades em condomínios e empresas.",
    url: 'https://mtennis.com.br',
    siteName: 'Correia Tennis',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Correia Pro Tennis Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Correia Tennis | Aulas de Tênis em São Paulo",
    description: "Aulas de tênis personalizadas e eventos esportivos. Venha conhecer!",
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: 'verification_token', // Placeholder for Google Search Console
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Correia Tennis",
  "image": "https://mtennis.com.br/images/logo.png",
  "description": "Aulas de tênis, baby tennis e treinamento de equipes em São Paulo.",
  "url": "https://mtennis.com.br",
  "telephone": "+5511970134245",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.55052,
    "longitude": -46.633309
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "06:00",
    "closes": "22:00"
  },
  "sameAs": [
    "https://instagram.com/correia.tennis",
    "https://facebook.com/correiaprotennis"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={clsx(
          geistSans.variable,
          syne.variable,
          "antialiased bg-background text-foreground font-sans"
        )}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
