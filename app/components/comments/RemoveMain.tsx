import * as React from 'react';
import { ReviewSet } from './ReviewSet';
import { ReviewCardProps } from './types';

const reviewData: ReviewCardProps[][] = [
  [
    {
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a0486d147e5ef5bcd61521d9a87ed156e32f4b145ff790f9710032a0edcdb485?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e",
      name: "SHESHANTH r S",
      grade: "grade 1 student",
      ratingImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7536e0271cd39213f0a5a2d6324e27e76be683d2a252a1b2a38dfe4fe9e3b018?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e",
      description: "In our basic exploration UI/UX design course, you'll learn the fundamentals of UI and UX and some random contents here.",
      tags: ["UI/UX"]
    },
    {
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a0486d147e5ef5bcd61521d9a87ed156e32f4b145ff790f9710032a0edcdb485?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e",
      name: "SHESHANTH r S",
      grade: "grade 1 student",
      ratingImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7536e0271cd39213f0a5a2d6324e27e76be683d2a252a1b2a38dfe4fe9e3b018?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e",
      description: "In our basic exploration UI/UX design course, you'll learn the fundamentals of UI and UX and some random contents here."
    }
  ],
  [
    {
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a0486d147e5ef5bcd61521d9a87ed156e32f4b145ff790f9710032a0edcdb485?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e",
      name: "SHESHANTH r S",
      grade: "grade 1 student",
      ratingImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7536e0271cd39213f0a5a2d6324e27e76be683d2a252a1b2a38dfe4fe9e3b018?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e",
      description: "In our basic exploration UI/UX design course, you'll learn the fundamentals of UI and UX and some random contents here."
    },
    {
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a0486d147e5ef5bcd61521d9a87ed156e32f4b145ff790f9710032a0edcdb485?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e",
      name: "SHESHANTH r S",
      grade: "grade 1 student",
      ratingImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7536e0271cd39213f0a5a2d6324e27e76be683d2a252a1b2a38dfe4fe9e3b018?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e",
      description: "In our basic exploration UI/UX design course, you'll learn the fundamentals of UI and UX and some random contents here.",
      tags: ["UI/UX"]
    }
  ],
  [
    {
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a0486d147e5ef5bcd61521d9a87ed156e32f4b145ff790f9710032a0edcdb485?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e",
      name: "SHESHANTH r S",
      grade: "grade 1 student",
      ratingImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7536e0271cd39213f0a5a2d6324e27e76be683d2a252a1b2a38dfe4fe9e3b018?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e",
      description: "In our basic exploration UI/UX design course, you'll learn the fundamentals of UI and UX and some random contents here.",
      tags: ["UI/UX"]
    },
    {
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a0486d147e5ef5bcd61521d9a87ed156e32f4b145ff790f9710032a0edcdb485?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e",
      name: "SHESHANTH r S",
      grade: "grade 1 student",
      ratingImageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7536e0271cd39213f0a5a2d6324e27e76be683d2a252a1b2a38dfe4fe9e3b018?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e",
      description: "In our basic exploration UI/UX design course, you'll learn the fundamentals of UI and UX and some random contents here."
    }
  ]
];

export const ReviewMain: React.FC = () => {
  return (
    <main className="flex flex-wrap justify-center gap-6 items-start mt-12 max-md:mt-10 max-md:max-w-full">
      {reviewData.map((reviews, index) => (
        <ReviewSet key={index} reviews={reviews} />
      ))}
    </main>
  );
};
