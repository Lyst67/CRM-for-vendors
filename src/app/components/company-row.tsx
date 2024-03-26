import React, { ReactNode } from 'react';
import StatusLabel, { Status } from './status-label';
import Image from 'next/image';
import clsx from 'clsx';

export interface CompanyRowProps {
  id: number;
  category: string;
  company: string;
  status: Status;
  promotion: boolean;
  country: string;
  joinedData: string;
}
export default function CompanyRow({
  id,
  category,
  company,
  status,
  promotion,
  country,
  joinedData,
}: CompanyRowProps) {
  return (
    <div className="grid h-[56px] bg-[#FAFAFA] mx-10 grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] rounded justify-items-center items-center ">
      <div>{category}</div>
      <div>{company}</div>
      <div>
        <StatusLabel status={status}>{status}</StatusLabel>
      </div>
      <div className="flex gap-1">
        <Image
          width={20}
          height={20}
          src={`/images/${promotion ? 'check' : 'x-mark'}.svg`}
          alt="promotion icon"
        />
        <span
          className={clsx(
            'text-sm font-medium',
            promotion ? 'text-green-700' : 'text-red-700'
          )}
        >
          {promotion ? 'Yes' : 'No'}
        </span>
      </div>
      <div>{country}</div>
      <div>{joinedData}</div>
    </div>
  );
}
