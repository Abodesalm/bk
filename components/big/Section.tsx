import React from 'react';
import { the_data } from '@/public/data';

export default function Section({
  title,
  number,
  cur,
  ch,
  ch1,
  ch2,
  ch3,
  ch4,
  wanted,
  set_ch,
  set_cur,
}) {
  return (
    <div
      className={`w-full flex flex-col justify-center items-center gap-5 transition-all duration-150 ${cur < wanted ? 'hidden' : ''}`}
    >
      <div className="flex flex-row gap-4 justify-center items-center">
        <span className="w-[30px] h-[30px] flex justify-center items-center text-md font-bold rounded-full bg-green-600 text-white m-1">
          {number}
        </span>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="flex flex-row flex-nowrap justify-around">
        {the_data.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              set_ch(item.id);
              set_cur(cur + 1);
            }}
            className={`border-2 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-lg m-2 ${ch === item.id ? 'bg-cyan-500' : ''}`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
