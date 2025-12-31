import { Download } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '../ui/separator';
import { FaBook } from 'react-icons/fa6';

export default function Subject(cad: {
  title: string;
  books: Array<{ h2: string }>;
  bool: boolean;
  path;
}) {
  return (
    <div
      className={` ${cad.bool ? '' : 'hidden'} bg-white rounded-xl drop-shadow-lg w-[30%] min-h-[100px] py-6 px-8 md:w-full flex flex-col justify-start items-start`}
    >
      <h2 className="text-xl text-accennt font-bold w-full flex flex-row justify-start items-center gap-3">
        <FaBook className="text-[20px]" /> {cad.title}
      </h2>
      <Separator className="my-4" />

      {cad?.books?.map((e, index) => {
        return (
          <>
            <div
              key={e.h2}
              className="w-full flex flex-row justify-between items-center mt-3"
            >
              <h3 className="w-fit">{e.h2.replaceAll('_', ' ')}</h3>
              <a
                href={`${cad.path}${e.h2}.pdf`}
                download
                /*                 target="_blank"
                 */ className="bg-success rounded-lg p-1 hover:bg-success/80 transition-colors text-white flex justify-center items-center"
              >
                <Download className="text-[12px]" />
              </a>
            </div>
            {index === cad.books.length - 1 ? null : (
              <Separator className="mt-3 opacity-30" />
            )}
          </>
        );
      })}
    </div>
  );
}
