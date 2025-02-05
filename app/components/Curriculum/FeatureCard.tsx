import * as React from 'react';
import { FeatureCardProps } from './types';

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <article className="flex flex-col p-6 bg-gray-100 rounded-2xl shadow-md w-full max-w-md text-left">
      <div className="flex items-center justify-start mb-4">
        <img loading="lazy" src={icon} alt="icon" className="w-12 h-12" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl font-semibold text-black mb-2">
          {title}
        </h3>
        <p className="text-lg text-gray-600">
          {description}
        </p>
      </div>
    </article>
  );
};
