"use client"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import Image from "next/image";
import ListUI from "./reusable/ListUI";

const LogoBranding = () => {
  const brandingInfo = {
    title: "Logo & Brand Identity",
    details: [
      `Expertise in creating unique and memorable logo designs tailored to a brand’s identity and values.`,
      `Proficiency in developing logo guidelines, mockups, and presentation concepts for a cohesive brand identity.`,
      `Strong understanding of visual storytelling, using Adobe Illustrator and Photoshop to bring creative concepts to life.`,
    ]
  };

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
      className="flex flex-col lg:flex-row justify-between items-center gap-x-5 mb-5 my-20 lg:my-10"
    >
      <div className=" lg:w-1/2 flex justify-center items-center lg:order-2">
        <Image
          src={"/svg/animation/branding.svg"}
          alt="logo branding photo"
          width={500}
          height={500}
        />
      </div>
      <div className=" lg:w-1/2 lg:order-1">
        <h1 className=" font-bold text-3xl md:text-4xl font-tangerine mb-5 dark:text-Darksecondary">
          {brandingInfo.title}
        </h1>
        <ul className=" list-disc space-y-5 dark:text-Darksecondary-paragraph text-[1rem] md:text-[1.1rem]">
          {brandingInfo.details.map((detail, index) => (
            <ListUI key={index} listDetail={detail} />
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default LogoBranding;
