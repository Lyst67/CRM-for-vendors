import React from 'react';
import { getCategories, getCompanies } from '@/lib/api';
import getCountById from '@/lib/utils/getCountById';
import StatCard, { StatCardType } from '@/app/components/stat-card.tsx';
import DashboardCard from '@/app/components/dashboard-card';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const categories = await getCategories();
  const companies = await getCompanies();

  const counts = getCountById(companies, 'categoryId');

  return (
    <DashboardCard label="Categories of companies">
      <ul className="grid grid-cols-12 gap-3 pb-5 px-5">
        {categories.map(({ id, title }, index) => (
          <li
            key={id}
            className={`col-span-3 ${
              index < 4
                ? 'odd:text-purple-200 even:text-lime-200'
                : 'odd:text-lime-200 even:text-purple-200'
            }`}
          >
            <StatCard
              type={StatCardType.Dark}
              label={title}
              counter={counts[id] || 0}
            />
          </li>
        ))}
      </ul>
    </DashboardCard>
  );
}
