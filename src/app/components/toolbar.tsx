import React from 'react';

// export interface ToolBarProps {}
export default function Toolbar({
  children,
  action,
}: {
  children: React.ReactNode;
  action: React.ReactNode;
}) {
  return (
    <>
      <div className="h-[92px] flex mx-10 justify-between items-center">
        {children}
        {action}
      </div>
    </>
  );
}
