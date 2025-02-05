import React from "react";
import { styles } from "../styles/style";
import { LearningSection } from '../components/AboutUs/features/LearningSection';
import AboutUs from '../components/AboutUs/AbouUs';
import AboutHero from '../components/AboutUs/AboutHero';
import { Abouttext } from '../components/AboutUs/features/Abouttext';
const About = () => {
  return (
    <div >
      <AboutHero />
      <AboutUs />
      <Abouttext
        title="Skills are the key to unlocking potential"
        subtitle="Supercode offers expert-led online courses designed to upskill learners."
      />
      <LearningSection />
    </div>
  );
};

export default About;