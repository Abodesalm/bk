'use client';
import Books from '@/components/big/Books';
import Clock from '@/components/big/Clock';
import Footer from '@/components/big/Footer';
import Header from '@/components/big/Header';
import Sec1 from '@/components/big/Sec1';
import Sec2 from '@/components/big/Sec2';
import Sec3 from '@/components/big/Sec3';
import Sec4 from '@/components/big/Sec4';
import Section from '@/components/big/Section';
import { useState } from 'react';

export default function Page() {
  const [cur_level, setCurLevel] = useState<number>(1);
  const [first_choice, setFirstChoice] = useState<number | null>(null);
  const [second_choice, setSecondChoice] = useState<number | null>(null);
  const [third_choice, setThirdChoice] = useState<number | null>(null);
  const [fourth_choice, setFourthChoice] = useState<number | null>(null);
  const [books, setBooks] = useState(false);

  return (
    <main className="w-full">
      <h1 className="text-center text-white text-4xl md:text-3xl font-bold my-12">
        الكتب الدراسية 1447
      </h1>
      <div className="w-full h-fit bg-newbg rounded-2xl drop-shadow-xl pad flex flex-col gap-6">
        <Sec1
          ch1={first_choice}
          sch2={setSecondChoice}
          sch3={setThirdChoice}
          sch4={setFourthChoice}
          cur={cur_level}
          set_ch={setFirstChoice}
          set_cur={setCurLevel}
          sb={setBooks}
        />
        <Sec2
          ch1={first_choice}
          ch2={second_choice}
          sch3={setThirdChoice}
          sch4={setFourthChoice}
          cur={cur_level}
          set_ch={setSecondChoice}
          set_cur={setCurLevel}
          sb={setBooks}
        />
        <Sec3
          ch1={first_choice}
          ch2={second_choice}
          ch3={third_choice}
          sch4={setFourthChoice}
          cur={cur_level}
          set_ch={setThirdChoice}
          set_cur={setCurLevel}
          sb={setBooks}
        />
        <Sec4
          ch1={first_choice}
          ch2={second_choice}
          ch3={third_choice}
          ch4={fourth_choice}
          cur={cur_level}
          set_ch={setFourthChoice}
          set_cur={setCurLevel}
          set_books={setBooks}
          bk={books}
        />
      </div>

      <Books
        bool={books}
        ch1={first_choice}
        ch2={second_choice}
        ch3={third_choice}
        ch4={fourth_choice}
      />
    </main>
  );
}
