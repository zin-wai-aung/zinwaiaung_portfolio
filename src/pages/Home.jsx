import React from "react";
import HeroSection from "@/pages/HeroSection";
import AboutPage from "@/app/about/page";
import SkillPage from "../app/skills/page";
import ExperiencePage from "@/app/experience/page";
import ProjectPage from "@/app/projects/page";
import ContactPage from "@/app/contact/page";

const Home = () => {
  return (
    <main className=" relative">
      <HeroSection />
      <AboutPage />
      <SkillPage />
      <ExperiencePage/>
      <ProjectPage />
      <ContactPage/>
    </main>
  );
};

export default Home;
