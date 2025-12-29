import React from 'react';
import { the_data } from '@/public/data';

export default function Sec2({
  title = 'اختر الصف الدراسي',
  number = 2,
  cur,
  ch1,
  ch2,
  sch3,
  sch4,
  wanted = 2,
  set_ch,
  set_cur,
  sb,
}) {
  const data = the_data.find((item) => item.id === ch1)?.content;
  return (
    <div
      className={`w-full flex flex-col justify-center items-center gap-5 transition-all duration-150 ${cur < wanted ? 'hidden' : ''}`}
    >
      <div className="flex flex-row gap-4 justify-center items-center">
        <span className="w-[30px] h-[30px] flex justify-center items-center text-md font-bold rounded-full bg-green-600 text-white m-1">
          {number}
        </span>
        <h1 className="text-xl font-bold">
          {ch1 === 3 ? 'اختر المسار' : title}
        </h1>
      </div>
      <div className="flex flex-row md:flex-col flex-nowrap justify-around">
        {data?.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              set_ch(item.id);
              set_cur(cur + 1);
              sch3(null);
              sch4(null);
              sb(false);
            }}
            style={
              ch2 === item.id
                ? {
                    background:
                      'linear-gradient(135deg, #647DEE 0%, #4a69bd 100%)',
                  }
                : {}
            }
            className={`border-2 hover:text-indigo-600 hover:border-indigo-600 hover:-translate-y-1 transition-all duration-150 py-4 px-8 rounded-2xl m-2 font-[500] ${ch2 === item.id ? ' text-white -translate-y-1 hover:text-[#FFF_!important] border-[0] drop-shadow-lg shadow-indigo-400' : ''}`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
