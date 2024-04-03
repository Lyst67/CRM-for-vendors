'use client';

import React from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { deleteCompany, getCompany } from '@/lib/api';
import StatusLabel from '@/app/components/status-label';
import Button from './button';
import { useRouter } from 'next/navigation';

export interface CompanyInfoProps {
  companyId: string;
}

export default function CompanyInfo({ companyId }: CompanyInfoProps) {
  const router = useRouter();

  const { data: company } = useQuery({
    queryKey: ['companies', companyId],
    queryFn: () => getCompany(companyId),
    staleTime: 10 * 1000,
  });
  if (!company) return null;

  const {
    id,
    avatar,
    title,
    categoryTitle,
    countryTitle,
    description,
    status,
    joinedDate,
  } = company;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center p-7 gap-5 bg-gray-900 rounded">
        <div className="flex justify-center items-center w-28 h-28 rounded-full bg-blue-500">
          {avatar && (
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="w-20 h-auto"
              src={avatar}
              alt="company avatar"
            />
          )}
        </div>
        <p className="pb text-base font-semibold text-white">{title}</p>
        <StatusLabel status={status} />
      </div>
      <div className="p-7 text-base text-gray-900 bg-gray-100 rounded">
        <p className="pb-5 text-xl font-semibold">About company</p>
        <p className="pb-3">{`Category: ${categoryTitle}`}</p>
        <p className="pb-3">{`Country: ${countryTitle}`}</p>
        <p className="pb-3">{`Joined date: ${new Date(
          joinedDate
        ).toLocaleDateString('uk')}`}</p>
        <div className="w-full h-px my-8 bg-gray-300" />
        <p className="mb-3">{description}</p>
        <Button
          onClick={async () => {
            await deleteCompany(id);
            alert('Company has been deleted');
            router.push(`/companies`);
          }}
        >
          Delete Company
        </Button>
      </div>
    </div>
  );
}
