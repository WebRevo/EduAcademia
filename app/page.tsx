"use client";
import React, { FC, useEffect, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import Courses from "./components/Route/Courses";
// import Reviews from "./components/Route/Reviews";
// import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer";
import { ReviewMain } from "./components/comments/RemoveMain";



import { CurriculumSection } from "./components/Curriculum/CurriculumSection";
import { HeroSection } from "./components/Hero/HeroSection";
import { HeroTitle } from "./components/comments/HeroTitle";
import logo from "../public/assests/Frame 1171275501.svg"
interface Props { }

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div className="overflow-hidden">
      <Heading
        title="Elevate"
        description="Elevate is a platform for students to learn and get help from teachers"
        keywords="Prograaming,MERN,Redux,Machine Learning"
        favicon="https://media-hosting.imagekit.io//966b3ce9bfa54c14/Frame 1171275501.svg?Expires=1833352111&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Hwobue3bWuhlwp45Q7y7LaX0cNE1WXWN6p6WoUkYzLcN785ARbgCfVzaFiHspXUBxueFMVjL2s23sg2dCv5~1Vj60yhM-PWQ3uQR7g67tFpOdFcEWimm5WgWXPnsgrqgF-HDcolTsV3idCOWO8DQsOilBb10XgvWagisH2DPSBdKRzW6gW4PiDybEN8Xl3P5XoDBvTgfFwQN1vS3ELCntVYwy1BoF~jkS~WHh~BQZUmoJ-C1bMCq5yxJCVAXZBOPcLdRYRncyRKEBJqo92KteqBmbTU82eNl0itkYbzp50cE~pcPw~yuvjHv98PcbbWuy42QmpJ3LVRWzirtrmI6VA__"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Hero />
      <CurriculumSection />
      <Courses />
      <HeroSection
        title="Discover the best features needed for you"
        subtitle="productivity on hands from eduacademia code"
        backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/b0a5ddac777b0bdc5b088c678d8cf6a8510cdb24abe3ea7f879468b9f5c40dc0?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e"
       
      />
      <HeroTitle
         titleLine1="A Skill - Building Journey"
         titleLine2="With Elevate"
         subtitle="In our basic exploration UI/UX design course, you'll learn the fundamentals of"
      />
     
      <ReviewMain />
      {/* <FAQ /> */}
      <Footer />
    </div>
  );
};

export default Page;