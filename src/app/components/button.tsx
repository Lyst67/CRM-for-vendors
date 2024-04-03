'use client';
import React from 'react';
import clsx from 'clsx';

export interface ButtonProps
  extends React.BaseHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export default function Button({ disabled, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded',
        !disabled &&
          'hover:bg-gray-700 hover:text-blue-200 duration-300 active:bg-gray-950',
        disabled && 'text-zinc-100'
      )}
    />
  );
}
