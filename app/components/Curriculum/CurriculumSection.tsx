import * as React from 'react';
import { FeatureCard } from './FeatureCard';
import { AddOn } from './AddOn';
import Link from 'next/link';

const featureCards = [
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/592a6d6456c650a656f59efdaa6645db49b048ec66becb34ac6c1c5ca85597be?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e",
        title: "Learn at your own pace with hands-on creative classes.",
        description: "Looking to expand your skills and explore your creativity? Our hands-on creative classes are the perfect way to learn at your pace.",
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/eeaeaafbae0fb141cd306ca3143b6c5855668ea935c74e54142420fe0d6a716c?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e",
        title: "CourseCo teachers are everyday creatives and professionals who want to share their passion.",
        description: "At CourseCo, we believe that everyone has something to teach and share with the world. Our teachers are not just experts in their field.",
    }
];

const addOns = [
    { text: "Get Certificate", backgroundColor: "#FFD3D7" },
    { text: "Amazing Instructor", backgroundColor: "#FFEDBF" },
    { text: "Video lessons", backgroundColor: "#B5F5C8" },
    { text: "Lifetime Support", backgroundColor: "#ABE1EF" }
];

export const CurriculumSection: React.FC = () => {
    return (
        <section className="flex flex-col items-center px-6 md:px-12 lg:px-20 py-16 w-full">
            <div className="w-full max-w-[1275px]">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-12 md:mb-16">
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black dark:text-white">
                            New Skills with SuperCode <br className="hidden md:block" />
                            A Detailed Look at Our Curriculum
                        </h1>
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-3 md:ml-10 mt-6 md:mt-0">
                        <p className="text-gray-500 text-base">
                            with real world projects to <br className="hidden md:block" />
                            create online classes
                        </p>
                        <Link href="/courses">
                            <button className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                                Get Started
                                <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">
                                    <img 
                                        loading="lazy" 
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2da99648aa9068cf2b4fb5e64fa1ef895ce66079b28bee8d8ac8253e8c1f7046?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e" 
                                        alt="arrow" 
                                        className="w-4 h-4" 
                                    />
                                </div>
                            </button>
                        </Link>
                    </div>
                </header>

                {/* Feature Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
                    {featureCards.map((card, index) => (
                        <FeatureCard key={index} {...card} />
                    ))}
                </div>

                {/* Add-on Section */}
                <div className="flex flex-col items-center text-center mt-16">
                    <h2 className="text-3xl font-bold mb-6">
                        Our Features <br className="hidden md:block" /> Special For You
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {addOns.map((addon, index) => (
                            <AddOn key={index} {...addon} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
