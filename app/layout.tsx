import localFont from "next/font/local"

import "./globals.css";

import { Metadata } from "next";
import Head from "next/head";

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
  other: {
    "google-site-verification": "s2T0_JipF3UXFTxuUnLFWHJjuNxOcFg-L8l-X8dYwGs"
  },
  authors: [{ name: 'Massamba Kiminou Chadrack Delmard' }],
  keywords: [
    'TheLeader',
    'Comunity',
    'IEPA',
    'Congo',
    'Informatique',
    'Programmation',
    'Massamba Kiminou Chadrack Delmard',
    'chadrack',
    'chadrack massamba',
    'the leader',
    'Développement web',
    'Développement mobile',
    'Marketing digital',
    'Communauté',
  ],
  openGraph: {
    title: 'TheLeader - Massamba Kiminou Chadrack Delmard',
    description: "Rejoignez TheLeader, une communauté innovante dirigée par Massamba Kiminou Chadrack Delmard, spécialisée dans le développement et le marketing digital.",
    url: 'https://chadrack-massamba.vercel.app/',
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
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="google-site-verification" content="s2T0_JipF3UXFTxuUnLFWHJjuNxOcFg-L8l-X8dYwGs" />
      </Head>
      <body
        className={` ${geistSans.variable} ${geistMono.variable} dark  w-full h-full bg-background antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
