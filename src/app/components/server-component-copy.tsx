import React from 'react';
import { headers } from 'next/headers';
export interface ServerComponentCopyProps {
  children?: React.ReactNode;
}
export default function ServerComponentCopy({
  children,
}: ServerComponentCopyProps) {
  console.log('Server Coomponent Copy');
  console.log(headers());
  return (
    <div>
      <span>Server Coomponent Copy</span>
      {children}
    </div>
  );
}
