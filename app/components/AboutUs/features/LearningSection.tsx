import * as React from 'react';
import { LearningCard } from './LearningCard';
import { VideoCard } from './VideoCard';

const cardData = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4065976c8f9fb6983a32f5b777cf6afa9af53103b7cfdfa74cd5f90a8a682954",
    imageAlt: "Learning illustration",
    title: "Learning and leading through change",
    description: "At Supercode, we specialize in creating high-quality, accessible, and industry-relevant learning experiences to help learners succeed."
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ec5bcdca2febc3ae3c9fc85674f1dfacbdf010e3146017cffead00510539b62",
    imageAlt: "Another learning illustration",
    title: "Skill Enhancement for Career Growth",
    description: "Our online courses provide expert-led training to boost career prospects and keep learners up-to-date with industry trends."
  }
];

export const LearningSection: React.FC = () => {
  return (
    <section className="flex flex-wrap justify-center gap-5 py-10 w-full px-6">
      <LearningCard {...cardData[0]} />
      <VideoCard 
        title="Interactive Learning Experiences"
        description="Our video-based courses provide hands-on learning opportunities to help individuals gain practical knowledge efficiently."
      />
      <LearningCard {...cardData[1]} />
    </section>
  );
};
