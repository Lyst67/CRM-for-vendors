import React, { Suspense } from 'react';
import Sidebar from '../components/sidebar';
import Loading from '../components/loader';

export interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />
      <Suspense fallback={<Loading />}>
        <div className=" ml-60 h-screen ">{children}</div>
      </Suspense>
    </>
  );
}
