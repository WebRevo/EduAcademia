import Link from "next/link";
import React, { useState } from "react";
import './n.css';
import Image from "next/image";
type Props = {
  activeItem: number;
  isMobile: boolean;
};
import logo from "..//../public/assests/Frame 1171275501.svg"
export const navItemsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Courses",
    url: "/courses",
  },
  {
    name: "Products",
    url: "#", // Products will have a dropdown, so no direct link
    subItems: [
      {
        name: "Quiz",
        url: "https://eduacademiaquiz.netlify.app",
      },
      {
        name: "Compiler",
        url: "https://elevatecompiler.netlify.app",
      },
    ],
  },
  {
    name: "Meet",
    url: "https://eduacademiameet.netlify.app/",
  },
  {
    name: "About",
    url: "/about",
  },
];

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  return (
    <>
      <div className="hidden 800px:flex">
        {navItemsData.map((item, index) => (
         <div
         key={index}
         className="relative group"
         onMouseEnter={() => item.subItems && setDropdownOpen(index)} // Pass the index to open the dropdown
         onMouseLeave={() => item.subItems && setDropdownOpen(null)}
          >
            {item.name === "Meet" ? (
              <Link href={item.url} passHref>
                <div className="relative flex items-center">
                  <div className="inline-flex items-center justify-center px-5 h-[38px] bg-black rounded-full">
                    <span
                      className="text-[18px] font-Poppins font-bold text-transparent bg-gradient-to-r from-[#EDC850] via-[#6DCE8B] to-[#EDC850] bg-clip-text animate-gradient"
                    >
                      MEET
                    </span>
                  </div>
                </div>


              </Link>
            ) : (
              <Link href={item.url} passHref>
                <div className="relative flex items-center">
                  <div className="inline-flex items-center justify-center h-[38px] bg-transparent rounded-full">
                    <span
                      className={`${activeItem === index
                        ? "dark:text-[#37a39a] text-[crimson]"
                        : "dark:text-white text-black"
                        } text-[18px] px-6 font-Poppins font-[400] cursor-pointer`}
                    >
                      {item.name}
                    </span>
                  </div>
                </div>

              </Link>
            )}



            {/* Dropdown Menu */}
            {item.subItems && dropdownOpen && (
              <div className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-md rounded-md w-48 z-10">
                {item.subItems.map((subItem, subIndex) => (
                  <Link href={subItem.url} key={subIndex} legacyBehavior passHref>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white text-black"
                    >
                      {subItem.name}
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Navigation */}
      {isMobile && (
  <div className="800px:hidden mt-5">
    <div className="w-full text-center py-6">
      <Link href={"/"} passHref>
        <Image
          loading="lazy"
          src={logo}
          alt="EduAcadmia logo"
          width={87} // Set appropriate width
          height={67} // Set appropriate height
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.3]"
        />
      </Link>
    </div>
    {navItemsData.map((item, index) => (
      <div key={index} className="relative">
        {item.subItems ? (
          <>
            <div
              onClick={() => setDropdownOpen((prev) => (prev === index ? null : index))}
              className="flex justify-between items-center cursor-pointer py-5 text-[18px] px-6 font-Poppins font-[400] dark:text-white text-black"
            >
              <span
                className={`${activeItem === index ? "text-[crimson]" : ""}`}
              >
                {item.name}
              </span>
              <span>
                {dropdownOpen === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </span>
            </div>
            {dropdownOpen === index && (
              <div className="ml-6">
                {item.subItems.map((subItem, subIndex) => (
                  <Link href={subItem.url} key={subIndex} passHref>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 text-[16px] dark:text-white text-black"
                    >
                      {subItem.name}
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <Link href={item.url} passHref>
            <span
              className={`${activeItem === index ? "text-[crimson]" : ""} block py-5 text-[18px] px-6 font-Poppins font-[400] dark:text-white text-black`}
            >
              {item.name}
            </span>
          </Link>
        )}
      </div>
    ))}
  </div>
)}

    </>
  );
};

export default NavItems;
