import * as React from 'react';

interface LearningCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export const LearningCard: React.FC<LearningCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description
}) => {
  return (
    <article className="flex flex-col justify-center p-6 md:p-12 text-black bg-white rounded-[37px] shadow-md w-full md:w-[658px]">
      <img 
        loading="lazy" 
        src={imageSrc} 
        alt={imageAlt} 
        className="object-contain rounded-2xl w-full md:w-[558px]" 
      />
      <div className="flex flex-col mt-4 md:mt-6">
        <h2 className="text-lg md:text-xl font-bold">{title}</h2>
        <p className="mt-2 md:mt-6 text-base">{description}</p>
      </div>
    </article>
  );
};
