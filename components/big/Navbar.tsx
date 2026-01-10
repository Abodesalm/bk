'use client';
import React from 'react';
import Image from 'next/image';
import logo from '@/public/logo1.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import Link from 'next/link';
import Clock from './Clock';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="bg-newbg pad py-4 z-20">
      <div className="nav-logo me-12 -mt-2">
        <Image
          src={logo}
          alt="logo"
          width={50}
          height={50}
          className="scale-[240%]"
        />
      </div>
      <ul className="nav-links">
        <li className="hover:text-accennt">
          <Link href="/">الصفحة الرئيسية</Link>
        </li>
        <li className="hover:text-accennt">
          <Link href="/books">الكتب الدراسية</Link>
        </li>
        <li className="hover:text-accennt">
          <Link href="/quiz">الاختبارات</Link>
        </li>
      </ul>
      <div>
        <Clock />
      </div>

      <div className="nav-ss">
        <GiHamburgerMenu
          color="#bbb"
          className="menuu"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="nav-overlay flex__center slide-bottom w-full h-full bg-newbg z-30">
            <IoClose
              fontSize={27}
              className="overlay-close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="nav-links-ss mt-40">
              <li className="hover:text-accennt">
                <Link href="/" onClick={() => setToggleMenu(false)}>
                  الصفحة الرئيسية
                </Link>
              </li>
              <li className="hover:text-accennt">
                <Link href="/books" onClick={() => setToggleMenu(false)}>
                  الكتب الدراسية
                </Link>
              </li>
              <li className="hover:text-accennt">
                <Link href="/quiz" onClick={() => setToggleMenu(false)}>
                  الاختبارات
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

/* import Image from 'next/image';
import logo from '@/public/logo1.png';
import { ThemeSwitch } from '../layout/ThemeSwitch';

export default async function Navbar() {
  return (
    <nav className="navbar py-[1rem_!important]">
      <div className="text-size-4 font-medium">
        <Image src={logo} alt="logo" width={50} height={50} className="" />
      </div>
      <div className="flex gap-10 sm:gap-6 items-center">
        <ThemeSwitch />
      </div>
    </nav>
  );
}*/
