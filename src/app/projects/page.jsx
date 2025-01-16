"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from "@/components/Container";
import ProjectTab from "@/components/ProjectTab";
import PageTitle from "@/components/reusable/PageTitle";
import React from "react";

const ProjectPage = () => {
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
      id="projects"
      className=" pt-28"
    >
      <Container>
        <PageTitle
          smallTitle={"projects"}
          mainTitle={"Highlights of My Journey"}
        />
        <main className="flex flex-col lg:flex-row justify-between items-start gap-x-20 my-16 min-h-screen">
          <ProjectTab />
        </main>
      </Container>
    </motion.section>
  );
};

export default ProjectPage;
