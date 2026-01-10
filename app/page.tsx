import Stats from '@/components/big/Stats';
import Image from 'next/image';
import logo1 from '@/public/logo1.png';
import logo2 from '@/public/logo2.png';
import { FaTelegram } from 'react-icons/fa6';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="w-full">
      <main className="w-full h-[550px] md:h-[80vh] imgbg flex-center text-center">
        <div className="w-[40%] md:w-full h-fit rounded-3xl mab-40 py-16 px-8 md:px-6 md:py-12 drop-shadow-xl flex flex-col items-center gap-2">
          <Image
            src={logo1}
            alt="logo"
            width={200}
            height={200}
            className="w-[200px] scale-[200%] h-auto md:w-[160px]"
          />
          <h1 className="text-3xl md:text-2xl font-bold text-black">
            مرحباً بكم في مكتبة المعلمين
          </h1>
          <p className="text-white drop-shadow-md mt-2 md:mt-6 text-2xl/10 md:text-xl/10">
            لأن التعليم رسالة ... نحن نوفر أدواتها
          </p>
          <p className="text-black bg-newbg/90 p-2 rounded-lg mt-2 md:mt-6 text-2xl/10 md:text-xl/10">
            طريقك للتفوق يبدأ من هنا
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
              className="h-auto md:w-[60px]"
            />
          </Link>

          <Link href="https://sabir511.com/" target="_blank">
            <Image
              src={logo2}
              width={200}
              height={200}
              alt="logo"
              className="h-auto md:w-[60px]"
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
