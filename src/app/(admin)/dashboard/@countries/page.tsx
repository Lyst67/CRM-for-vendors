import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { getCompanies, getCountries } from '@/lib/api';
import DashboardCard from '@/app/components/dashboard-card';
import getCountById from '@/lib/utils/getCountById';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const countries = await getCountries();
  const companies = await getCompanies();

  const counts = getCountById(companies, 'countryId');

  return (
    <DashboardCard label="Countries of companies">
      <div className="flex items-end pb-5 px-5 gap-2">
        <div className="max-w-28 whitespace-pre">
          {countries.map(({ id, title }) => (
            <p
              key={id}
              className={clsx(
                'text-sm text-gray-900 font-medium',
                'before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200'
              )}
            >{`${title} - ${counts[id] || 0}`}</p>
          ))}
        </div>
        <div className="max-w-[395px]">
          <Image
            width={0}
            height={0}
            src="/images/world.svg"
            alt="world"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </DashboardCard>
  );
}
