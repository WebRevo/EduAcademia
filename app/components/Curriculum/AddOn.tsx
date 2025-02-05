import * as React from 'react';
import { AddOnProps } from './types';

export const AddOn: React.FC<AddOnProps> = ({ text, backgroundColor }) => {
  return (
    <div
      className={`flex items-center justify-center px-4 py-2 text-sm md:text-base lg:text-lg font-medium text-black rounded-full shadow-md`}
      style={{ backgroundColor }}
    >
      {text}
    </div>
  );
};
