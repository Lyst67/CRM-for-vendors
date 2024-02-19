'use client';

import React from 'react';
import Image from 'next/image';
import uploadImg from '../../../public/images/upload.svg';

export interface LogoUploaderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  square?: boolean;
}

export default function LogoUploader({
  label,
  placeholder,
  id,
  ...rest
}: LogoUploaderProps) {
  return (
    <div className="flex mb-3 gap-10">
      {label && <p className="text-base color-gray-900">{label}</p>}
      <label
        htmlFor={id}
        className="flex flex-col items-center justify-center w-40 h-40 bg-white border border-slate-900 border-dashed rounded-full cursor-pointer"
      >
        <Image
          className="mb-1"
          width={48}
          height={48}
          src={uploadImg}
          alt="upload"
        />
        {placeholder && (
          <p className="text-base text-gray-500">{placeholder}</p>
        )}
        <input
          {...rest}
          id={id}
          type="file"
          accept="image/*"
          className="hidden"
        />
      </label>
    </div>
  );
}
