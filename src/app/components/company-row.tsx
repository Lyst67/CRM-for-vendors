import React, { ReactNode } from 'react';
import StatusLabel from './status-label';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import { Company } from '@/lib/api';

export interface CompanyRowProps {
  company: Company;
}

export default function CompanyRow({ company }: CompanyRowProps) {
  return (
    <tr className="h-14 text-center text-gray-900 bg-white">
      <td className="text-xs font-medium text-blue-700 rounded-l border-l-4 border-blue-700">
        {company.categoryTitle}
      </td>
      <td>
        <div className="flex gap-4 items-center">
          <Image
            width={32}
            height={32}
            src={'/images/costco.png'}
            alt="company label"
          />
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

// export default function CompanyRow({}: CompanyRowProps) {
//   return (
//     <div className="grid h-[56px] bg-[#FAFAFA] mx-10 grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] rounded justify-start items-center ">
//       <div className="flex items-center before:w-1 before:h-[56px] before:bg-[#FB923C] before:mr-3 before:rounded-l">
//         <span className="text-xs text-[#FB923C] font-medium">{category}</span>
//       </div>
//       <div>
//         <div className="flex gap-4 items-center">
//           <Image
//             width={32}
//             height={32}
//             src={'/images/costco.png'}
//             alt="company label"
//           />
//           <span className="text-sm font-medium">{company}</span>
//         </div>
//       </div>
//       <div>
//         <StatusLabel status={status}>{status}</StatusLabel>
//       </div>
//       <div className="flex gap-1">
//         <Image
//           width={20}
//           height={20}
//           src={`/images/${promotion ? 'check' : 'x-mark'}.svg`}
//           alt="promotion icon"
//         />
//         <span
//           className={clsx(
//             'text-sm font-medium',
//             promotion ? 'text-green-700' : 'text-red-700'
//           )}
//         >
//           {promotion ? 'Yes' : 'No'}
//         </span>
//       </div>
//       <div>{country}</div>
//       <div>{joinedData}</div>
//     </div>
//   );
// }
