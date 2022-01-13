import React, { useState } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <HeroSection />
      <SectionTitle text={"Projects"} id={"projects"} />
      <ProjectCard />
    </>
  );
};

export default HomePage;
