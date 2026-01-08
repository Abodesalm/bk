'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  return (
    <main className="min-h-[70vh]">
      <h1 className="text-center text-white text-4xl md:text-3xl font-bold my-12">
        الاختبارات و المنافسات
      </h1>
      <div className="w-full h-fit bg-newbg rounded-2xl drop-shadow-xl pad flex flex-col items-center gap-6">
        <Link
          href={'/quiz/1'}
          style={{
            background: 'linear-gradient(135deg, #647DEE 0%, #4a69bd 100%)',
          }}
          className={`w-full transition-all duration-150 py-4 px-8 md:p-4 rounded-2xl m-2 font-[500] ${' text-white hover:text-[#FFF_!important] border-[0] drop-shadow-lg shadow-indigo-400'}`}
        >
          مراجعة ختامية لعلوم ثالث متوسط – الفصل الأول (إعداد صابر السيالي)
        </Link>
      </div>
    </main>
  );
}
