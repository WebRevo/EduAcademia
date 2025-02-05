import * as React from "react";

type HeroTitleProps = {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
};

export const HeroTitle: React.FC<HeroTitleProps> = ({ titleLine1, titleLine2, subtitle }) => {
  return (
    <section className="relative w-full h-[100px] flex items-center justify-center">
      {/* Title and Subtitle */}
      <div className="absolute top-[-80px] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
          {titleLine1}
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
          {titleLine2}
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-2">
          {subtitle}
        </p>
      </div>
    </section>
  );
};
