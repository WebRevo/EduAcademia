import * as React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageSrc, imageAlt }) => (
  <div className="flex flex-col justify-center p-6 md:p-12 text-black bg-white rounded-[37px] shadow-md w-full md:w-[658px]">
    <img 
      loading="lazy" 
      src={imageSrc} 
      alt={imageAlt} 
      className="object-contain rounded-2xl w-full md:w-[558px]" 
    />
    <div className="flex flex-col mt-6">
      <h3 className="text-lg md:text-xl font-bold">{title}</h3>
      <p className="mt-4 md:mt-6 text-base">{description}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      title: "Learning and leading through change",
      description: "At Supercode, we are passionate about empowering individuals and businesses through education. We specialize in creating high-quality, accessible, and industry-relevant learning experiences.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4065976c8f9fb6983a32f5b777cf6afa9af53103b7cfdfa74cd5f90a8a682954?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e",
      imageAlt: "Learning feature illustration"
    }
  ];

  return (
    <section className="flex flex-col py-12 md:py-24 w-full">
      <div className="flex flex-col justify-center items-center w-full max-w-[1079px] text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold leading-none text-black dark:text-white">
          Skills are the key to unlocking potential
        </h2>
        <p className="mt-4 md:mt-8 text-lg md:text-xl font-medium text-neutral-500">
          Supercode offers expert-led online courses designed to upskill learners.
        </p>
      </div>
      <div className="flex flex-wrap gap-5 justify-center items-center mt-10 md:mt-16 px-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;