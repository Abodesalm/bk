import { Noto_Sans_Arabic } from 'next/font/google';
import '@/public/css/globals.css';
import './index.css';
import ToUp from '@/components/layout/ToUp';
import Providers from './Providers';
import type { Metadata } from 'next';

import process from 'process';
import { Toaster } from '@/components/ui/sonner';

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
      className={notoArabic.variable}
    >
      <body>
        {/* <Providers> */}
        <div className="min-h-screen relative">
          {/* الخلفية الثابتة */}
          <div className="fixed inset-0 z-0">
            {/* الخلفية البيضاء */}
            <div className="absolute inset-0 bg-[#f5f9ff]"></div>

            {/* الجزء المنحني العلوي مع التدرج */}
            <div
              className="absolute top-0 left-0 w-full h-[50vh] min-h-[400px]"
              style={{
                background: 'linear-gradient(135deg, #50e0c2 0%, #3b82f6 100%)',
                clipPath: 'ellipse(100% 70% at 50% 20%)',
              }}
            ></div>
          </div>

          {/* الـ div الفارغ في المنتصف - تستطيع التحكم به */}
          <div className="relative z-10 flex justify-center min-h-screen mx-[6rem] md:mx-[2rem] mt-[2rem]">
            {/* هذا الـ div فارغ - أضف محتواك هنا */}
            {children}
          </div>
        </div>
        {/* </Providers> */}
      </body>
    </html>
  );
}
