import React from 'react';
import CompanyTable from '../../components/company-table';

export interface PageProps {}
export default function Page({}: PageProps) {
  return (
    <>
      <CompanyTable />
    </>
  );
}
