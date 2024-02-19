import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export interface SidebarItemProps {
  children: React.ReactNode;
  src: string;
  pathname: string;
  alt: string;
  current?: boolean;
}
export default function SidebarItem({
  children,
  src,
  pathname,
  alt,
  current,
}: SidebarItemProps) {
  return (
    <li>
      <Link
        href={pathname}
        className={clsx(
          'flex items-center gap-3.5 mb-7 after:w-1',
          current &&
            'after:h-9 after:bg-[#E9D5FF] after:rounded-sm after:ml-auto'
        )}
        // className={`flex items-center gap-3.5 mb-7 after:w-1 ${
        //   current &&
        //   'after:h-9 after:bg-[#E9D5FF] after:rounded-sm after:ml-auto'
        // }`}
      >
        <Image src={src} width={18} height={18} alt={alt} />
        <span className="font-medium">{children}</span>
      </Link>
    </li>
  );
}
