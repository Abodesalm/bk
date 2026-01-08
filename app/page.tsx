import Stats from '@/components/big/Stats';
import Image from 'next/image';
import logo1 from '@/public/logo1.png';
import logo2 from '@/public/logo2.png';
import { FaTelegram } from 'react-icons/fa6';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="w-full">
      <main className="w-full h-[80vh] imgbg">
        <div className="w-[40%] md:w-full h-fit bg-newbg rounded-3xl mt-24 py-16 px-8 md:px-6 md:py-12 drop-shadow-xl">
          <h1 className="text-5xl md:text-3xl font-bold text-black">
            مرحباً بك في مكتبة المعلمين
          </h1>
          <p className="text-black mt-12 md:mt-6 text-lg">
            اكتشف مجموعة واسعة من الكتب الدراسية والاختبارات التفاعلية لتعزيز
            تعلمك بأفضل الطرق.
          </p>
        </div>
      </main>

      <main className="w-full flex flex-col items-center gap-4 bg-newbg py-12">
        <h2 className="text-3xl font-bold mb-4 text-black">إحصائيات</h2>
        <Stats />
      </main>

      <main className="w-full flex flex-col items-center gap-4 py-12">
        <h2 className="text-3xl font-bold mb-4 text-white">تواصل معنا</h2>
        <div className="w-full flex flex-row items-center justify-center gap-20 md:gap-10 h-[200px] bg-newbg/80 rounded-[16px] px-8 py-4 backdrop-blur-sm">
          <Link href="https://sabir5-1-1.com/" target="_blank">
            <Image
              src={logo1}
              width={200}
              height={200}
              alt="logo"
              className="h-auto w-[60px]"
            />
          </Link>

          <Link href="https://sabir511.com/" target="_blank">
            <Image
              src={logo2}
              width={200}
              height={200}
              alt="logo"
              className="h-auto w-[60px]"
            />
          </Link>

          <Link
            href="https://t.me/sabir51120302030"
            className="hover:text-accennt transition-colors"
            target="_blank"
          >
            <FaTelegram className="size-[140px] md:size-[60px]" />
          </Link>
        </div>
      </main>
    </div>
  );
}
