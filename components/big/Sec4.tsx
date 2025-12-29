import React, { useEffect, useState } from 'react';
import { the_data } from '@/public/data';

type A = { title: string; books: { h2: string; url: string }[] };
type B = { name: string; label: string; id: number; content: A[] };

type Props = { data: A | B };

export default function Sec4({
  title = 'اختر الفصل الدراسي',
  number = 4,
  cur,
  ch1,
  ch2,
  ch3,
  ch4,
  wanted = 4,
  set_ch,
  set_cur,
  set_books,
  bk,
}) {
  const [bool, setBool] = useState(false);
  const data = the_data
    .find((item) => item.id === ch1)
    ?.content.find((sub) => sub?.id === ch2)
    ?.content.find((sub2) => sub2?.id === ch3)?.content;
  console.log((data as any)?.[0]?.title);
  useEffect(() => {
    if ((data as any)?.[0]?.title) {
      setBool(true);
      set_books(true);
    } else if ((data as any)?.[0]?.name) {
      setBool(false);
    }
    if (!ch3) {
      setBool(true);
    }
    console.log('books: ', bk);
  }, [ch3, ch4]);
  return (
    <div
      className={`w-full flex flex-col justify-center items-center gap-5 transition-all duration-150 ${bool ? 'hidden' : ''} ${cur < wanted ? 'hidden' : ''}`}
    >
      <div className="flex flex-row gap-4 justify-center items-center">
        <span className="w-[30px] h-[30px] flex justify-center items-center text-md font-bold rounded-full bg-green-600 text-white m-1">
          {number}
        </span>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="flex flex-row md:flex-col flex-nowrap justify-around">
        {data?.map((item) => (
          <button
            key={item?.id}
            onClick={() => {
              set_ch(item?.id);
              set_cur(cur + 1);
              set_books(true);
            }}
            style={
              ch4 === item.id
                ? {
                    background:
                      'linear-gradient(135deg, #647DEE 0%, #4a69bd 100%)',
                  }
                : {}
            }
            className={`border-2 hover:text-indigo-600 hover:border-indigo-600 hover:-translate-y-1 transition-all duration-150 font-[500] py-4 px-8 rounded-2xl m-2 ${ch4 === item.id ? ' text-white -translate-y-1 hover:text-[#FFF_!important] border-[0] drop-shadow-lg shadow-indigo-400' : ''}`}
          >
            {item?.name}
          </button>
        ))}
      </div>
    </div>
  );
}
