import React from 'react';
import clsx from 'clsx';

export enum StatCardType {
  Dark = 'dark',
  Gradient = 'gradient',
}

export interface StatCardProps {
  type: StatCardType;
  label: string;
  counter: number;
}

export default function StatCard({ type, label, counter }: StatCardProps) {
  return (
    <div
      className={clsx(
        'rounded',
        type === StatCardType.Dark && 'pt-3 px-3 bg-gray-900 text-right',
        type === StatCardType.Gradient && 'p-7 text-gray-900 text-left'
      )}
    >
      <p
        className={clsx(
          'text-left before:w-4 before:h-0.5 before:rounded',
          type === StatCardType.Dark &&
            'text-sm mb-1 text-zinc-50 before:block before:mb-2 before:bg-zinc-50',
          type === StatCardType.Gradient &&
            'text-xs mb-5 before:inline-block before:mr-2 before:align-middle before:bg-gray-900'
        )}
      >
        {label}
      </p>
      <p className="text-6xl font-semibold">{counter}</p>
    </div>
  );
}
