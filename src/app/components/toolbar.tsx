import React from 'react';

export interface ToolbarProps {
  children: React.ReactNode;
  action?: React.ReactNode;
}
export default function Toolbar({ children, action }: ToolbarProps) {
  return (
    <>
      <div className="h-[92px] flex mx-10 justify-between items-center">
        {children}
        {action}
      </div>
    </>
  );
}
