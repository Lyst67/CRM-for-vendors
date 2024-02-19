import React from 'react';

export default function CompanyTable({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full bg-[#F3F4F6]">
      <div className="grid h-[72px] pt-8 pb-5 mx-10 grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] justify-items-center gy-[8px] ">
        <div>Category</div>
        <div>Company</div>
        <div>Status</div>
        <div>Promotion</div>
        <div>Country</div>
        <div>Joined data</div>
      </div>
      <div>{children}</div>
    </div>
  );
}
