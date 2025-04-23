import localFont from "next/font/local"

import "./globals.css";

import { Metadata } from "next";

const geistSans = localFont({
  src: "./fonts/slick.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/slick.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'TheLeader - Massamba Kiminou Chadrack Delmard',
  description: "Découvrez TheLeader, dirigé par Massamba Kiminou Chadrack Delmard, une communauté dédiée à l'innovation, au développement web et mobile, et au marketing digital.",
  authors: [{ name: 'Massamba Kiminou Chadrack Delmard' }],
  keywords: [
    'TheLeader',
    'Comunity',
    'IEPA',
    'Congo',
    'Informatique',
    'Programmation',
    'Massamba Kiminou Chadrack Delmard',
    'Développement web',
    'Développement mobile',
    'Marketing digital',
    'Communauté',
  ],
  openGraph: {
    title: 'TheLeader - Massamba Kiminou Chadrack Delmard',
    description: "Rejoignez TheLeader, une communauté innovante dirigée par Massamba Kiminou Chadrack Delmard, spécialisée dans le développement et le marketing digital.",
    url: 'https://theleader.com',
    type: 'website',
    images: [
      {
        url: '/icons/logo.png',
        alt: 'Logo TheLeader',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr">
      <link rel="manifest" href="/manifest.json" />
      <body
        className={` ${geistSans.variable} ${geistMono.variable}  w-full h-full bg-background antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
