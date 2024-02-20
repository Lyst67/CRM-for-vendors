import React from 'react';
import CompanyTable from '../../components/company-table';
import CompanyRow from '../../components/company-row';
import { Status } from '../../components/ststus-label';

export interface PageProps {}
export default function Page({}: PageProps) {
  return (
    <>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={'Products'}
          company={'Castco'}
          status={Status.Pending}
          promotion={true}
          country={'USA'}
          joinedData={'02.09.23'}
        />
      </CompanyTable>
    </>
  );
}
