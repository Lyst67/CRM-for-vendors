import React from 'react';
import { Status } from './ststus-label';

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
      <div>{status}</div>
      <div>{promotion}</div>
      <div>{country}</div>
      <div>{joinedData}</div>
    </div>
  );
}
