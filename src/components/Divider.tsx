import React from 'react';

interface DividerProps {
  text?: string;
  orientation?: 'horizontal' | 'vertical';
}

export function Divider({ text, orientation = 'horizontal' }: DividerProps) {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div className={`flex ${isHorizontal ? 'items-center my-8' : 'flex-col mx-8 h-full'}`}>
      <div className={`${isHorizontal ? 'flex-grow h-px' : 'w-px flex-grow'} bg-gray-300`}></div>
      {text && <span className={`${isHorizontal ? 'mx-4' : 'my-4'} text-gray-500 font-medium`}>{text}</span>}
      <div className={`${isHorizontal ? 'flex-grow h-px' : 'w-px flex-grow'} bg-gray-300`}></div>
    </div>
  );
}
