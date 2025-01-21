"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import Container from "@/components/Container";
import PageTitle from "@/components/reusable/PageTitle";
import WorkTimelineUI from "@/components/WorkTimeline";
import EducationTimelineUI from "@/components/EducationTimeline";

const ExperiencePage = () => {

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
      id="experience"
      className=" pt-28"
    >
      <Container>
        <PageTitle smallTitle={"experience"} mainTitle={"Where I've worked"} />
        <main className="flex flex-col lg:flex-row justify-between items-start gap-x-20 my-16 min-h-screen">
          <div className="lg:w-1/2">
            <WorkTimelineUI />
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <EducationTimelineUI />
          </div>
        </main>
      </Container>
    </motion.section>
  );
};

export default ExperiencePage;
