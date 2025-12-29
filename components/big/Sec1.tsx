import React from 'react';
import { the_data } from '@/public/data';

export default function Sec1({
  title = 'اختر المرحلة الدراسية',
  number = 1,
  cur,
  ch1,
  sch2,
  sch3,
  sch4,
  set_ch,
  set_cur,
  sb,
}) {
  return (
    <div
      className={`w-full flex flex-col justify-center items-center gap-5 transition-all duration-150`}
    >
      <div className="flex flex-row gap-4 justify-center items-center">
        <span className="w-[30px] h-[30px] flex justify-center items-center text-md font-bold rounded-full bg-green-600 text-white m-1">
          {number}
        </span>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="flex flex-row md:flex-col flex-nowrap justify-around">
        {the_data.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              set_ch(item.id);
              set_cur(2);
              sch2(null);
              sch3(null);
              sch4(null);
              sb(false);
            }}
            style={
              ch1 === item.id
                ? {
                    background:
                      'linear-gradient(135deg, #647DEE 0%, #4a69bd 100%)',
                  }
                : {}
            }
            className={`w-[220px] border-2 hover:text-indigo-600 hover:border-indigo-600 hover:-translate-y-1 transition-all duration-150 py-4 px-8 rounded-2xl m-2 font-[500] ${ch1 === item.id ? ' text-white -translate-y-1 hover:text-[#FFF_!important] border-[0] drop-shadow-lg shadow-indigo-400' : ''}`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
