import * as React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export const Abouttext: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="flex flex-col justify-center items-center w-full px-4 py-10">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-black text-center">
        {title}
      </h1>
      <p className="mt-4 md:mt-8 text-lg md:text-xl text-center text-neutral-500 max-w-[90%] md:max-w-[538px]">
        {subtitle}
      </p>
    </section>
  );
};
