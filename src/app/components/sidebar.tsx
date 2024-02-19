'use client';
import React from 'react';
import SidebarItem from './sidebar-item';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export interface SidebarProps {}
export default function Sidebar({}: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const handleExitClick = () => {
    router.push('/');
  };

  return (
    <aside className="fixed top-0 left-0 w-60 h-screen">
      <div className="flex flex-col justify-between h-full overflow-y-auto bg-[#111827] text-[#FAFAFA]">
        <div>
          <Image
            className="mx-auto mt-8 mb-[77px] "
            src="/images/logo/logo.svg"
            width={122}
            height={24}
            alt="logo"
          />
          <ul className="ml-6 mr-1">
            <SidebarItem
              current={pathname === '/dashboard'}
              src="/images/squares-2x2.svg"
              pathname="/dashboard"
              alt="squares"
            >
              Dashboard
            </SidebarItem>
            <SidebarItem
              current={pathname === '/companies'}
              src="/images/briefcase.svg"
              pathname="/companies"
              alt="case"
            >
              Companies
            </SidebarItem>
          </ul>
        </div>

        <button
          className="flex gap-2 min-w-[55px] mx-auto mb-10"
          onClick={handleExitClick}
        >
          <Image
            src="images/arrow-left-on.svg"
            width={18}
            height={18}
            alt="arrow left on rectangle"
          />
          <span className="text-base font-medium">Exit</span>
        </button>
      </div>
    </aside>
  );
}
