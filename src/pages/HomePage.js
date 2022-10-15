import React, { useState } from "react";
import "./HomePage.css";
import Navbar from "../components/Navbar/Navbar";
import { MobileNav } from "../components/MobileNav/MobileNav";
import HeroSection from "../components/HeroSection/HeroSection";
import ProjectCard from "../components/ProjectCard/ProjectCard.js";
import SkillCard from "../components/SkillCard/SkillCard.js";
import SectionTitle from "../components/SectionTitle/SectionTitle.js";
import Footer from "../components/Footer/Footer.js";
import JobCard1 from "../components/JobCard1/JobCard1.js";
import JobCard2 from "../components/JobCard2/JobCard2.js";
import { CloudDX, CodeNinjas } from "../Data.js";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileNav isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} hasSlideLinks={true} />
      <HeroSection />
      <div className="main">
      <SectionTitle id={"work"} />
        <JobCard1
          company={CloudDX.companyName}
          position={CloudDX.positionTitle}
          description={CloudDX.description}
          img1={CloudDX.img1}
          img2={CloudDX.img2}
          img3={CloudDX.img3}
        />
        <JobCard2
          company={CodeNinjas.companyName}
          position={CodeNinjas.positionTitle}
          description={CodeNinjas.description}
          img1={CodeNinjas.img1}
          img2={CodeNinjas.img2}
          img3={CodeNinjas.img3}
        />
        <SectionTitle text={"Skills"} id={"skills"} />
        <SkillCard />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
