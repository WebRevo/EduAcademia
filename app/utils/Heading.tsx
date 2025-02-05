import React, { FC } from "react";
import Head from "next/head";
import logo from "..//../public/assests/03b9fa8c34887a1cc88796688c76f1.webp"
interface HeadProps {
  title: string;
  description: string;
  keywords: string;
  favicon?: string; // Optional favicon prop
}
const toBoldText = (text: string) =>
  text
    .split("")
    .map((char) =>
      char.match(/[a-zA-Z]/) // Check if the character is a letter
        ? String.fromCharCode(char.charCodeAt(0) + 119743)
        : char // Keep non-alphabetic characters as is
    )
    .join("");
const Heading: FC<HeadProps> = ({ title, description, keywords, favicon }) => {
  const boldTitle = "EduAcademia";

  return (
  
     <>
       <title>{boldTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* ✅ Set Favicon */}
     
      
      {/* ✅ Alternative for `.png` icons */}
      <link 
        rel="icon" 
        href={favicon || "https://media-hosting.imagekit.io//966b3ce9bfa54c14/Frame 1171275501.svg?Expires=1833352111&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Hwobue3bWuhlwp45Q7y7LaX0cNE1WXWN6p6WoUkYzLcN785ARbgCfVzaFiHspXUBxueFMVjL2s23sg2dCv5~1Vj60yhM-PWQ3uQR7g67tFpOdFcEWimm5WgWXPnsgrqgF-HDcolTsV3idCOWO8DQsOilBb10XgvWagisH2DPSBdKRzW6gW4PiDybEN8Xl3P5XoDBvTgfFwQN1vS3ELCntVYwy1BoF~jkS~WHh~BQZUmoJ-C1bMCq5yxJCVAXZBOPcLdRYRncyRKEBJqo92KteqBmbTU82eNl0itkYbzp50cE~pcPw~yuvjHv98PcbbWuy42QmpJ3LVRWzirtrmI6VA__"} 
        type="image/png"
      />
     </>
 
  );
};

export default Heading;
