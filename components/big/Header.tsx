import Image from 'next/image';
import logo1 from '@/public/logo1.png';
import logo2 from '@/public/logo2.png';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex flex-col mb-12">
      <div className="flex flex-row justify-center items-center mb-8 gap-12">
        <div className="flex flex-col items-center gap-3 text-white text-xl md:text-[12px] font-[700]">
          <Image
            alt="مكتبة المعلمين"
            width={100}
            height={100}
            src={logo1}
            className="bg-white rounded-2xl p-1 md:w-[60px] md:h-[60px]"
          />
          <Link
            href={`https://sabir5-1-1.com/`}
            className="hover:text-accennt transition-colors"
            target="_blank"
          >
            مكتبة المعلمين
          </Link>
        </div>
        <div className="flex flex-col items-center gap-3 text-white text-xl md:text-[12px] font-[700]">
          <Image
            alt="مكتبة المعلمين"
            width={100}
            height={100}
            src={logo2}
            className="bg-white rounded-2xl p-1 md:w-[60px] md:h-[60px]"
          />
          <Link
            href={`https://sabir511.com/`}
            className="hover:text-accennt transition-colors"
            target="_blank"
          >
            العلوم والتقنية للجميع
          </Link>
        </div>
        {/*       <div className="flex flex-col items-center gap-3 text-white text-xl md:text-xl font-[700] justify-start w-[420px] md:w-[300px]">
        <Image
          alt="مكتبة المعلمين"
          width={100}
          height={100}
          src={logo2}
          className="bg-white rounded-2xl p-1"
        />
        <Link
          href={`https://sabir511.com/`}
          className="hover:text-accennt transition-colors"
        >
          ملازم المركزي ونافس وجميع الاختبارات المحاكية لجميع المواد مع الإجابة
        </Link>
      </div> */}
      </div>
      <h1 className="text-center text-white text-4xl md:text-3xl font-bold">
        الكتب الدراسية 1447
      </h1>
    </div>
  );
}
