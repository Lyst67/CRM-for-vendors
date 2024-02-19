import React from 'react';
import Sidebar from '../components/sidebar';

export interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />
      <div className=" ml-60 h-screen ">{children}</div>
    </>
  );
}
