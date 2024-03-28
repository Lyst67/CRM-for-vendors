import React from 'react';

export interface SummaryTableProps {
  headers: React.ReactNode;
  children?: React.ReactNode;
}

export default function SummaryTable({ headers, children }: SummaryTableProps) {
  return (
    <div className="max-h-[280px] overflow-y-auto">
      <table className="max-h-[280px] overflow-y-hidden table-auto w-full border-separate border-spacing-0">
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody className=" w-full [&>tr:nth-child(2n)]:bg-gray-100 [&>tr:nth-child(2n+1)]:bg-white overflow-auto">
          {children}
        </tbody>
      </table>
    </div>
  );
}
