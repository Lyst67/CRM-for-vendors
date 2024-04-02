import React from 'react';
import StatusLabel from './status-label';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import { Company } from '@/lib/api';

export interface CompanyRowProps {
  company: Company;
  color: string;
}

export default function CompanyRow({ company, color }: CompanyRowProps) {
  return (
    <tr className="h-14 text-left text-gray-900 bg-white">
      <td
        className={`pl-3 text-xs font-medium  rounded-l border-l-4 text-blue-700 border-blue-700 ${color}`}
      >
        {company.categoryTitle}
      </td>
      <td className="w-2/6">
        <div className="flex gap-4 items-center">
          <div className="flex  justify-center items-center w-8 h-8 rounded-full bg-blue-500">
            {company.avatar && (
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="w-6 h-auto"
                src={company.avatar}
                alt="company avatar"
              />
            )}
          </div>
          <Link href={`/companies/${company.id}`}>{company.title}</Link>
        </div>
      </td>
      <td>
        <StatusLabel status={company.status} />
      </td>
      <td>
        <div className="inline-flex items-center gap-1">
          <Image
            width={16}
            height={16}
            src={`/images/${company.hasPromotions ? 'check' : 'x-mark'}.svg`}
            alt="promotion icon"
          />
          <span
            className={clsx(
              'text-sm font-medium',
              company.hasPromotions ? 'text-green-700' : 'text-red-700'
            )}
          >
            {company.hasPromotions ? 'Yes' : 'No'}
          </span>
        </div>
      </td>
      <td>{company.countryTitle}</td>
      <td className="rounded-r">
        {new Date(company.joinedDate).toLocaleDateString('uk-UA')}
      </td>
    </tr>
  );
}
