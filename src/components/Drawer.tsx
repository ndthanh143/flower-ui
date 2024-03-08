'use client';

import { useState } from 'react';

interface IDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Drawer({ onClose }: IDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex h-screen'>
      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-3/5 bg-white shadow z-50 transform transition-transform ease-in-out duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer content */}
        <ul className='p-4'>
          <li className='mb-2 hover:bg-gray-100 cursor-pointer'>Link 1</li>
          <li className='mb-2 hover:bg-gray-100 cursor-pointer'>Link 2</li>
          <li className='mb-2 hover:bg-gray-100 cursor-pointer'>Link 3</li>
          {/* Add more links as needed */}
        </ul>
      </div>

      {/* Main content area */}
      <div className='flex-1 p-4'>
        {/* Content goes here */}
        <button className='block md:hidden fixed top-4 left-4 z-50' onClick={toggleDrawer}>
          Toggle Drawer
        </button>
      </div>

      {/* Overlay for small screens */}
      {isOpen && <div className='fixed inset-0 bg-black opacity-50 z-40' onClick={toggleDrawer}></div>}
    </div>
  );
}
