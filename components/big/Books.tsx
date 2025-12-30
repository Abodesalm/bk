import { Book, BookIcon, BookOpen, BookOpenIcon, Download } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { BiBookReader } from 'react-icons/bi';
import { FaBook } from 'react-icons/fa6';
import { IoBook } from 'react-icons/io5';
import { Separator } from '../ui/separator';
import Subject from './Subject';
import { the_data } from '@/public/data';
import { format } from '@/lib/utils';

export default function Books({ bool, ch1, ch2, ch3, ch4 }) {
  const path = format(ch1, ch2, ch3, ch4);
  const the_path = `/books/${path}/`;
  let subjects = the_data[ch1 - 1]?.content[ch2 - 1]?.content[ch3 - 1]?.content;

  if (ch4) {
    console.log(ch4);
    subjects = (subjects as any)?.[ch4 - 1]?.content;
  }

  return (
    <div
      className={` w-full min-h-[100px] flex flex-row justify-between items-stretch gap-6 mt-10 mb-20 flex-wrap`}
    >
      {subjects?.map((e) => {
        return (
          <Subject
            key={e.title}
            title={e.title}
            books={e.books}
            bool={bool}
            path={the_path}
          />
        );
      })}
    </div>
  );
}
