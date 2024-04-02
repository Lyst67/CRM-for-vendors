'use client';

import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';

export interface ModalProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

export default function Modal({ show, children, onClose }: ModalProps) {
  return (
    <Transition.Root as={Fragment} show={show}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex items-center"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all  mx-auto sm:my-10 sm:w-full sm:max-w-2xl">
          <div className="absolute ml-auto top-3 right-3">
            <button type="button" onClick={onClose}>
              <Image
                width={24}
                height={24}
                src="/images/x-mark.svg"
                alt="x-mark"
              />
            </button>
          </div>
          {children}
        </Dialog.Panel>
      </Dialog>
    </Transition.Root>
  );
}
