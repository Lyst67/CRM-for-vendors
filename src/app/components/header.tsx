import React from 'react';
import Image from 'next/image';
import profilePic from '../../../public/images/My_crop.webp';

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="h-[92px] flex mx-10 justify-between items-center">
        <h1 className="text-3xl text-[#111827] font-semibold">{children}</h1>
        <div className="flex items-center gap-x-3">
          <hr className="w-[1px] h-11 mr-6 bg-[#d1d5db]" />
          <div className="flex  justify-center items-center w-11 h-11 rounded-full overflow-hidden">
            <Image
              src={profilePic}
              width="0"
              height="0"
              sizes="100vw"
              className="w-11 h-auto"
              alt="Pavlo Lystopad"
            />
          </div>
          <div>
            <p className="text-[15px] text-[#111827] font-semibold">
              Pavlo Lystopad
            </p>
            <a
              className="text-sm font-light text-[#111827]"
              href={'mailto:p_listopad@ukr.net'}
            >
              p_listopad@ukr.net
            </a>
          </div>
        </div>
      </header>
      <hr className="h-[1px] bg-[#D1D5DB]" />
    </>
  );
}
