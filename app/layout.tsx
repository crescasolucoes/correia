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
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
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
    "streetAddress": "Rua Tunísia",
    "addressLocality": "Taboão da Serra",
    "addressRegion": "SP",
    "postalCode": "06756-110",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.60911, // Coordinates for Rua Tunísia, Taboão da Serra (approx)
    "longitude": -46.75618
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
