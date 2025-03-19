import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Ratings from "@/app/utils/Ratings";

// Props for the CourseCard
interface CourseCardProps {
  item: any;
  isProfile?: boolean;
}

const CourseCard: FC<CourseCardProps> = ({ item, isProfile }) => {
  return (

    <div className="w-full min-h-[35vh] dark:bg-slate-500 dark:bg-opacity-20 backdrop-blur border dark:border-[#ffffff1d] border-[#00000015] dark:shadow-[bg-slate-700] rounded-lg p-3 shadow-sm dark:shadow-inner cursor-pointer hover:shadow-lg transition-transform transform hover:scale-105">
      {/* Thumbnail Image */}
      <Image
        src={item?.thumbnail?.url}
        alt="Course Thumbnail"
        width={500}
        height={300}
        objectFit="contain"
        className="rounded w-full"
      />

      {/* Course Title */}
      <h1 className="font-Poppins text-[16px] text-black dark:text-[#fff] mt-3">
        {item.name}
      </h1>

      {/* Ratings and Students Count */}
      <div className="w-full flex items-center justify-between pt-2">
        <Ratings rating={item.ratings} />
        {!isProfile && (
          <h5 className="text-black dark:text-[#fff] hidden 800px:inline">
            {item.purchased} Students
          </h5>
        )}
      </div>

      {/* Price and Lecture Count */}
      <div className="w-full flex items-center justify-between pt-3">
        {/* Price Section */}
        <div className="flex">
          <h3 className="text-black dark:text-[#fff]">
            {item.price === 0 ? "Free" : `${item.price}$`}
          </h3>
          {item.estimatedPrice && (
            <h5 className="pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-black dark:text-[#fff]">
              {item.estimatedPrice}$
            </h5>
          )}
        </div>

        {/* Lecture Count Section */}
        <div className="flex items-center">
          <AiOutlineUnorderedList size={20} fill="#fff" />
          <h5 className="pl-2 text-black dark:text-[#fff]">
            {item.courseData?.length || 0} Lectures
          </h5>
        </div>
      </div>
      <Link
        href={!isProfile ? `/course/${item._id}` : `/course-access/${item._id}`}
        passHref
      >
        <div className="w-full flex justify-center mt-4">
          <button className="flex items-center justify-center gap-2 bg-black text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-900 transition">
            <span>Join Now</span>
            <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="black"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16l8-8m0 0H8m8 0v8" />
              </svg>
            </div>
          </button>
        </div>
      </Link >
    </div>



  );
};

export default CourseCard;
