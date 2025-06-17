// app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  // --- ✅ السطر الجديد والمهم هنا ---
  metadataBase: new URL('https://saeed-nabih.com'),
  // --- نهاية السطر المضاف ---

  title: 'Saeed Nabih - Frontend Developer | React & Next.js Expert',
  description: 'Frontend Developer specializing in React.js and Next.js, creating exceptional digital experiences with modern web technologies. Based in Cairo, Egypt.',
  keywords: 'Frontend Developer, React, Next.js, JavaScript, TypeScript, Web Development, Cairo, Egypt',
  authors: [{ name: 'Saeed Nabih' }],
  creator: 'Saeed Nabih',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saeed-nabih.com', // هذا ممتاز، لكن metadataBase يجعله أكثر قوة
    title: 'Saeed Nabih - Frontend Developer',
    description: 'Frontend Developer specializing in React.js and Next.js, creating exceptional digital experiences.',
    siteName: 'Saeed Nabih Portfolio',
    images: [
      {
        url: '/og-image.jpg', // الآن Next.js سيفهم تلقائياً أن هذا يعني: https://saeed-nabih.com/og-image.jpg
        width: 1200,
        height: 630,
        alt: 'Saeed Nabih - Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saeed Nabih - Frontend Developer',
    description: 'Frontend Developer specializing in React.js and Next.js',
    creator: '@saeed_nabih',
    images: ['/og-image.jpg'], // وهذا أيضاً سيصبح رابطاً كاملاً تلقائياً
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}