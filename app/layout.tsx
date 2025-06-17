import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Saeed Nabih - Frontend Developer | React & Next.js Expert',
  description: 'Frontend Developer specializing in React.js and Next.js, creating exceptional digital experiences with modern web technologies. Based in Cairo, Egypt.',
  keywords: 'Frontend Developer, React, Next.js, JavaScript, TypeScript, Web Development, Cairo, Egypt',
  authors: [{ name: 'Saeed Nabih' }],
  creator: 'Saeed Nabih',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saeed-nabih.com',
    title: 'Saeed Nabih - Frontend Developer',
    description: 'Frontend Developer specializing in React.js and Next.js, creating exceptional digital experiences.',
    siteName: 'Saeed Nabih Portfolio',
    images: [
      {
        url: '/og-image.jpg',
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
    images: ['/og-image.jpg'],
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