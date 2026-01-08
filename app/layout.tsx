import { Noto_Sans_Arabic } from 'next/font/google';
import '@/public/css/globals.css';
import './index.css';
import ToUp from '@/components/layout/ToUp';
import Providers from './Providers';
import type { Metadata } from 'next';

import process from 'process';
import { Toaster } from '@/components/ui/sonner';
import BackgroundDoodles from '@/components/big/BackgroundDoodles';
import Footer from '@/components/big/Footer';
import Navbar from '@/components/big/Navbar';

//env.config({ path: "./config.env" });

const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-arabic',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'الكتب الدراسية 1447',
  description: '',
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={`ar`}
      dir="rtl"
      suppressHydrationWarning
      className={`${notoArabic.variable} antialiased `}
    >
      <body className="bg-gradient-to-tl from-amber-900 to-yellow-700">
        <Navbar />
        <div className="relative z-10 flex justify-center min-h-[60vh]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
