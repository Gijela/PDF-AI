'use client';
import { useState } from 'react';
import Logo from '../ui/Logo';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* 设备尺寸大于 sm */}
      <div className="hidden sm:flex justify-between items-center px-4 h-16 bg-white w-full border-b border-b-slate-200 shadow-sm">
        <Logo />
        <div className="sm:flex gap-4 items-center">
          <Link href="/dashboard" className="">
            登录/注册
          </Link>
        </div>
      </div>

      {/* 设备尺寸小于 sm */}
      <div className="sm:hidden h-[54px] w-full bg-white border-b border-b-slate-200 shadow-sm flex justify-between items-center px-6">
        <Logo isMobile={true} />
        <div className="flex justify-center items-baseline">
          <Image
            src="/align-justify.svg"
            onClick={() => setOpen((i) => !i)}
            alt="Menu"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      {open ? (
        <div className="sm:hidden absolute top-[54px] right-0 flex flex-col items-center bg-white shadow">
          <div className="border-b border-b-slate-200 p-3">
            <Link href="/dashboard" className="">
              登录/注册2
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
