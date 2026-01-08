'use client';

import { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState(<></>);
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const period = hours >= 12 ? 'مساءً' : 'صباحاً';
      hours = hours % 12 || 12;

      setTime(
        <>
          {hours}:{minutes} <span className="text-[10px]">{period}</span>
        </>,
      );

      const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      setDate(new Intl.DateTimeFormat('ar-SA', dateOptions).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // تحديث كل دقيقة

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex flex-col items-center">
      <div className="text-xl font-bold text-gray-800 dark:text-white">
        {time}
      </div>
      <div className="text-[10px] font-bold text-gray-800">{date}</div>
    </div>
  );
}

/* 

<div className="inline-flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
      <div className="text-3xl font-bold text-gray-800 dark:text-white">
        {time}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
        {date}
      </div>
    </div>

*/
