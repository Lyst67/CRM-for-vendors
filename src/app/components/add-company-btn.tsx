'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from './button';
// import dynamic from 'next/dynamic';
// import CompanyFormModal from './company-form-modal';
// const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
//   ssr: false,
// });

export default function AddCompanyButton() {
  const router = useRouter();
  // const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => router.push('/companies/new', { scroll: false })}>
        Add company
      </Button>
      {/* <Button onClick={() => setShow(true)}>Add Company</Button>
      <CompanyFormModal show={show} onClose={() => setShow(false)} /> */}
    </>
  );
}
