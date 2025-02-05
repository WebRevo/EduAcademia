import * as React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export function HeroSection({ title, subtitle, backgroundImage }: HeroSectionProps) {
  return (
    <section className="flex relative z-10 flex-col items-center px-20 pt-5 mb-0 w-full rounded-none min-h-[1146px] pb-[894px] max-md:px-5 max-md:pb-24 max-md:mr-0 max-md:mb-2.5 max-md:max-w-full">
      <img 
        loading="lazy" 
        src={backgroundImage} 
        alt="" 
        className="object-cover w-screen h-[1000px] absolute inset-0" 
      />
      <header className="flex relative flex-col justify-center items-center p-8 mb-0 max-w-full rounded-[100px] w-[906px] max-md:px-5 max-md:mb-2.5">
        <h1 className="text-6xl text-center font-bold leading-[66px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
          {title}
        </h1>
        <p className="mt-5 text-xl leading-none">
          {subtitle}
        </p>
      </header>
    </section>
  );
}