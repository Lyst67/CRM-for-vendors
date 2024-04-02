'use client';

import React from 'react';
import CompanyRow from './company-row';
import { useQuery } from '@tanstack/react-query';
import { getCompanies } from '@/lib/api';

export interface CompanyTableProps {}

const headers = [
  'Category',
  'Company',
  'Status',
  'Promotion',
  'Country',
  'Joined date',
];
const colors = [
  'text-[#fb923c] border-[#fb923c]',
  'text-[#60A5FA] border-[#60A5FA]',
  'text-[#fb7185] border-[#fb7185]',
  'text-[#34D399] border-[#34D399]',
  'text-[#C084FC] border-[#C084FC]',
  'text-[#1D4ED8] border-[#1D4ED8]',
];

export default function CompanyTable({}: CompanyTableProps) {
  const { data } = useQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies(),
    staleTime: 10 * 1000,
  });

  return (
    <div className="h-full py-8 px-10 bg-grey-100">
      <table className="table-auto w-full border-separate border-spacing-y-2">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className="pb-5 w-1/6 text-sm text-start font-light text-gray-900"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((company) => (
            <CompanyRow
              key={company.id}
              color={colors[parseInt(company.id, 10) - 1]}
              company={company}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
