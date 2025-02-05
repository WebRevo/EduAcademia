import * as React from 'react';
import { UserStatProps } from './types';

export const UserStats: React.FC<UserStatProps> = ({ count, label, imageSrc }) => {
  return (
    <div className="flex gap-3 items-end self-stretch my-auto text-black min-w-[240px] dark:text-white">
      <img loading="lazy" src={imageSrc} alt="User avatars" className="object-contain shrink-0 aspect-[2.5] w-[155px]" />
      <div className="flex flex-col min-h-[64px] w-[136px]">
        <h3 className="text-3xl font-bold">{count}</h3>
        <p className="text-xl font-medium">{label}</p>
      </div>
    </div>
  );
};