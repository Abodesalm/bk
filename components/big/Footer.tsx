import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="w-full min-h-[200px] mt-8 rounded-t-2xl py-6 px-8 font-[600] bg-white drop-shadow-md flex flex-col gap-3 text-lg md:text-[12px]">
      <Link
        href={`https://sabir5-1-1.com/`}
        className="hover:text-accennt transition-colors flex flex-row gap-2 w-fit"
        target="_blank"
      >
        مكتبة المعلمين <ExternalLink className="size-[16px]" />
      </Link>

      <Link
        href={`https://sabir511.com/`}
        className="hover:text-accennt transition-colors flex flex-row gap-2 w-fit"
        target="_blank"
      >
        العلوم والتقنية للجميع <ExternalLink className="size-[16px]" />
      </Link>

      <Link
        href={`https://sabir511.com/`}
        className="hover:text-accennt transition-colors flex flex-row gap-2 w-fit"
        target="_blank"
      >
        ملازم المركزي ونافس وجميع الاختبارات المحاكية لجميع المواد مع الإجابة{' '}
        <ExternalLink className="size-[16px]" />
      </Link>
    </div>
  );
}
