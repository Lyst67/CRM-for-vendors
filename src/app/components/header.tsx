import React from 'react';
import Image from 'next/image';
import profilePic from '../../../public/images/avatar.svg';

// export interface HeaderProps {
//   children: string;
// }
export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="h-[92px] flex mx-10 justify-between items-center">
        <h1 className="text-3xl text-[#111827] font-semibold">{children}</h1>
        <div className="flex items-center gap-x-3">
          <Image src={profilePic} width={44} height={44} alt="Adam Smith" />
          <div>
            <p className="text-[15px] text-[#111827] font-semibold">
              Adam Smith
            </p>
            <a
              className="text-sm font-light text-[#111827]"
              href={'mailto:adamsmith@gmail.com'}
            >
              adamsmith@gmail.com
            </a>
          </div>
        </div>
      </header>
      <hr className="h-[1px] bg-[#D1D5DB]" />
    </>
  );
}
