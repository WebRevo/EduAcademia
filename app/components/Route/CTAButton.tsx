import * as React from 'react';
import { CTAButtonProps } from './types';

export const CTAButton: React.FC<CTAButtonProps> = ({ text, iconSrc, variant }) => {
  const baseStyles = "flex gap-5 justify-center items-center self-stretch py-3";
  const variantStyles = variant === 'outline' 
    ? "pr-5 pl-8 border border-solid border-neutral-500 rounded-[70px]"
    : "pr-4 pl-5 bg-black rounded-[70px]";
  
  const textStyles = variant === 'outline'
    ? "text-xl tracking-wide text-neutral-500"
    : "text-xl font-medium leading-none text-white";
    
  const iconContainerStyles = variant === 'outline'
    ? "flex gap-2.5 justify-center items-center self-stretch px-2 my-auto w-11 h-11 bg-sky-500 rounded-3xl min-h-[44px]"
    : "flex gap-2.5 justify-center items-center self-stretch pr-2 pl-2.5 my-auto bg-white rounded-3xl h-[41px] min-h-[41px] w-[41px]";

  return (
    <button className={`${baseStyles} ${variantStyles}`}>
      <span className={textStyles}>{text}</span>
      <div className={iconContainerStyles}>
        <img loading="lazy" src={iconSrc} alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
      </div>
    </button>
  );
};