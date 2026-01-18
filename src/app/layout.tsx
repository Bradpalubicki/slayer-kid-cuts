import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://littleroots.studio'),
  title: 'Little Roots Studio | Coming Soon | Sensory-Friendly Kids Hair Salon Henderson NV',
  description: 'Henderson\'s first sensory-friendly, judgment-free hair studio designed for children. Specialized in autism-friendly haircuts, neurodivergent care, and kids who need extra patience. One family at a time. Coming Spring 2025.',
  keywords: [
    'sensory-friendly haircuts Henderson NV',
    'autism-friendly hair salon Las Vegas',
    'kids haircuts Henderson',
    'neurodivergent haircuts',
    'sensory processing disorder haircuts',
    'childrens hair salon Henderson Nevada',
    'first haircut Henderson',
    'anxious child haircut',
    'calm kids salon',
    'private kids haircuts',
    'Little Roots Studio',
    'Carla hair stylist Henderson',
  ].join(', '),
  authors: [{ name: 'Carla', url: 'https://littleroots.studio' }],
  creator: 'Little Roots Studio',
  publisher: 'Little Roots Studio',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://littleroots.studio',
    siteName: 'Little Roots Studio',
    title: 'Little Roots Studio | Sensory-Friendly Kids Hair Salon | Henderson NV',
    description: 'The first sensory-friendly, judgment-free kids hair studio in Las Vegas. Autism-trained, trauma-informed, endlessly patient. One family at a time.',
    images: [
      {
        url: '/images/little-roots-og.png',
        width: 1200,
        height: 630,
        alt: 'Little Roots Studio - Sensory-Friendly Kids Hair Salon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Little Roots Studio | Coming Soon to Henderson NV',
    description: 'The first sensory-friendly kids hair studio in Las Vegas. Where every child is met exactly where they are. 🌱',
    images: ['/images/little-roots-og.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#5B8A8A',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
