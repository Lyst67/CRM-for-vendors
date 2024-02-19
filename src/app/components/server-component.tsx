import React from 'react';

export interface ServerComponentProps {
  children?: React.ReactNode;
}
export default function ServerComponent({ children }: ServerComponentProps) {
  console.log('Server Coomponent');
  return (
    <div>
      <span>Server Coomponent</span>
      {children}
    </div>
  );
}
