'use client';

import Link from 'next/link';
import { quizzes } from '@/public/data';
import { MdLeaderboard } from 'react-icons/md';

export default function Page() {
  return (
    <main className="min-h-[70vh]">
      <h1 className="text-center text-white text-4xl md:text-3xl font-bold my-12">
        الاختبارات و المنافسات
      </h1>
      <div className="w-full h-fit bg-newbg rounded-2xl drop-shadow-xl pad flex flex-col items-center gap-6">
        {quizzes.map((quiz) => {
          return (
            <div
              key={quiz.id}
              className="w-full flex flex-row gap-4 justify-between items-center"
            >
              <Link
                href={`/quiz/${quiz.id}`}
                style={{
                  background:
                    'linear-gradient(135deg, #647DEE 0%, #4a69bd 100%)',
                }}
                className={`w-[90%] transition-all duration-150 py-4 px-8 md:p-4 rounded-2xl m-2 font-[500] ${' text-white hover:text-[#FFF_!important] border-[0] drop-shadow-lg shadow-indigo-400'}`}
              >
                {quiz.title}
              </Link>
              <Link
                href={`/quiz/${quiz.id}/top`}
                /* style={{
                  background:
                    'linear-gradient(135deg, #647DEE 0%, #4a69bd 100%)',
                }} */
                className={` transition-all duration-150 p-4 border border-accennt hover:bg-accennt flex items-center justify-center rounded-2xl m-2 font-[500] ${' text-accennt hover:text-[#FFF_!important] hover:border-[0] hover:drop-shadow-lg hover:shadow-indigo-400'}`}
              >
                <MdLeaderboard className="text-[20px]" />
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
