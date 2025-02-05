import * as React from 'react';

interface VideoCardProps {
  title: string;
  description: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description
}) => {
  return (
    <article className="flex flex-col justify-center p-6 md:p-12 bg-white rounded-[37px] shadow-md w-full md:w-[900px]">
      <div className="flex justify-center items-center px-6 md:px-20 py-16 md:py-28 bg-stone-50 rounded-2xl">
        <button 
          className="flex justify-center items-center border-solid shadow-lg bg-gray-300 border-4 md:border-[12px] border-gray-100 h-20 md:h-[129px] w-20 md:w-[130px] rounded-full" 
          aria-label="Play video"
        >
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e73a8840a6c63cc4ce66028008447ddba44b2db9732d6861f9d290498fabc07e" 
            alt="Play button" 
            className="object-contain w-5 md:w-6" 
          />
        </button>
      </div>
      <div className="flex flex-col mt-6 md:mt-8">
        <h2 className="text-xl md:text-3xl font-bold text-black">{title}</h2>
        <p className="mt-4 md:mt-6 text-lg md:text-2xl text-neutral-500">{description}</p>
      </div>
    </article>
  );
};
