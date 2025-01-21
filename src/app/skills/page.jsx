"use client"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import Container from "@/components/Container";
import PageTitle from "@/components/reusable/PageTitle";
import GraphicDesign from "@/components/GraphicDesign";
import LogoBranding from "@/components/LogoBranding";
import WebDevelopment from "@/components/WebDevelopment";

const SkillPage = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }} // Start from below with 0 opacity
      animate={{
        opacity: inView ? 1 : 0, // Fade in
        y: inView ? 0 : 100, // Slide up to the original position
        transition: { duration: 1 }, // Adjust duration for smoothness
      }}
      id="skills"
      className=" pt-28"
    >
      <Container>
        <PageTitle
          smallTitle={"expertise"}
          mainTitle={"Fields of Proficiency"}
        />
        <div className="flex justify-center items-center my-14">
          <WebDevelopment />
        </div>

        <div className="flex justify-center items-center my-20">
          <LogoBranding />
        </div>
        <div className="flex justify-center items-center my-20">
          <GraphicDesign />
        </div>
      </Container>
    </motion.section>
  );
};

export default SkillPage;
