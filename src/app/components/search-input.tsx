import React from 'react';
import Image from 'next/image';
import searchPic from '../../../public/images/magnifying-glass.svg';

export interface SearchInputProps {}
export default function SearchInput({}: SearchInputProps) {
  return (
    <form className="flex">
      <input
        className="h-[44px] w-[445px] px-3 bg-[#F9FAFB] rounded border border-solid border-{#D1D5DB}"
        type="text"
        name="searchQuery"
        placeholder="Search..."
      />
      <button className="-ml-10" type="submit">
        <Image src={searchPic} width={20} height={20} alt="magnifying-glass" />
      </button>
    </form>
  );
}
