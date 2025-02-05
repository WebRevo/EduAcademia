import * as React from 'react';
import { ReviewSetProps } from './types';
import { ReviewCard } from './ReviewCard';

export const ReviewSet: React.FC<ReviewSetProps> = ({ reviews }) => {
  return (
    <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[323px]">
      {reviews.map((review, index) => (
        <div key={index} className={index > 0 ? "mt-14 max-md:mt-10" : ""}>
          <ReviewCard {...review} />
        </div>
      ))}
    </div>
  );
};