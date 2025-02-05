import * as React from 'react';
import { ReviewCardProps } from './types';

export const ReviewCard: React.FC<ReviewCardProps> = ({
  avatarSrc,
  name,
  grade,
  ratingImageSrc,
  description,
  tags
}) => {
  return (
    <article className="flex gap-7 justify-center items-center p-8 w-full border-2 border-gray-200 border-solid rounded-[40px] max-md:px-5">
      <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto w-full basis-0 min-w-[240px]">
        <header className="flex gap-6 items-center w-full text-3xl font-bold leading-8">
          <img 
            loading="lazy" 
            src={avatarSrc} 
            alt={`Profile picture of ${name}`}
            className="object-contain shrink-0 self-stretch my-auto rounded-full aspect-square w-[57px]" 
          />
          <div className="self-stretch my-auto">
            <span className="text-xl">{name}</span>
            <br />
            <span className="text-base leading-5">{grade}</span>
          </div>
        </header>
        
        <section className="flex flex-col justify-center mt-8 max-w-full text-lg w-[263px]">
          <img 
            loading="lazy" 
            src={ratingImageSrc} 
            alt="Rating stars"
            className="object-contain w-24 rounded-sm aspect-[4.81]" 
          />
          <p className="mt-4">{description}</p>
        </section>

        {tags && tags.length > 0 && (
          <div className="flex gap-10 items-center mt-8 max-w-full text-base text-right whitespace-nowrap text-neutral-600 w-[197px]">
            <div className="flex flex-col items-start self-stretch my-auto w-[197px]">
              {tags.map((tag, index) => (
                <div key={index} className="flex flex-col w-[58px]">
                  <div className="gap-2.5 self-stretch py-1 px-2 w-full bg-rose-200 rounded-lg min-h-[28px]">
                    {tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};