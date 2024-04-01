import React from 'react';
import { getSummaryStats, SummaryStats } from '@/lib/api';
import StatCard, { StatCardType } from '@/app/components/stat-card';

// function getBackgroundClass(index: number) {
//   return index === 0
//     ? 'bg-first-child'
//     : index === 1
//     ? 'bg-second-child'
//     : index === 2
//     ? 'bg-third-child'
//     : index === 3
//     ? 'bg-fourth-child'
//     : '';
// }
const childBackgroundClass =
  '[&:nth-child(4n+1)]:bg-first-child [&:nth-child(4n+2)]:bg-second-child [&:nth-child(4n+3)]:bg-third-child [&:nth-child(4n+4)]:bg-fourth-child';

export interface PageProps {}

const labelByStat: Record<keyof SummaryStats, string> = {
  promotions: 'Total promotions',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};

export default async function Page({}: PageProps) {
  const data = await getSummaryStats();

  return (
    <ul className="grid grid-cols-12 gap-5">
      {(Object.keys(labelByStat) as (keyof SummaryStats)[]).map((key) => (
        <li
          key={key}
          className={`col-span-3 bg-cover bg-center ${childBackgroundClass}`}
        >
          <StatCard
            type={StatCardType.Gradient}
            label={labelByStat[key]}
            counter={data[key]}
          />
        </li>
      ))}
    </ul>
  );
}
