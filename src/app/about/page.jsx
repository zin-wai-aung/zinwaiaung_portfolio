"use client"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from "@/components/Container";
import PageTitle from "@/components/reusable/PageTitle";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
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
      id="about"
      className="py-28"
    >
      <Container>
        <PageTitle smallTitle={"about"} mainTitle={"Who I am?"} />
        <main className="flex flex-col lg:flex-row justify-between items-start gap-x-10 mt-5">
          <div className="w-full lg:w-2/3 order-2 lg:order-1 mt-10 lg:mt-0">
            <div className="space-y-4 order-2 lg:order-1 dark:text-Darksecondary-paragraph text-[1.1rem]">
              <p>
                Hi, I'm Zin Wai Aung, a passionate{" "}
                <strong className=" dark:text-Darksecondary">
                  Web Developer
                </strong>{" "}
                and freelance{" "}
                <strong className=" dark:text-Darksecondary">
                  Logo Designer
                </strong>
                .
                <br />I combine creative design with technical expertise to
                deliver stunning, user-friendly websites and memorable brand
                identities.
              </p>
              <p>
                In 2021, I founded{" "}
                <a
                  href="https://itcreation.netlify.app/"
                  target="_blank"
                  className="dark:text-green-400 font-semibold underline"
                >
                  IT Creation
                </a>{" "}
                to deliver innovative design solutions, completing{" "}
                <strong className=" dark:text-Darksecondary">
                  300+ logo projects
                </strong>{" "}
                and specializing in brand identity with over 3 years of graphic
                design experience.
              </p>

              <p>
                Since 2023, I've shifted my focus to web development, honing my
                skills in creating high-quality websites, while still offering
                logo and graphic design services.
              </p>

              <p>
                I'm open to collaboration and enjoy connecting with developers
                to share ideas and create together..
              </p>
            </div>
            <p className=" dark:text-Darksecondary-paragraph mt-3 mb-1">
              Here are a few of the other activities that I love to do:
            </p>
            <div className="dark:text-Darksecondary flex items-center gap-x-20">
              <ul className=" space-y-2">
                <li className="">👩‍💻 Coding</li>
                <li className="">💡 Problem Solving</li>
              </ul>
              <ul className=" space-y-2">
                <li className="">💻 Studying</li>
                <li className="">📖 Reading</li>
              </ul>
            </div>
          </div>
          <div className=" w-full lg:w-1/3 flex justify-center order-1 lg:order-2 mt-10 md:mt-0">
            <Image
              src={"/images/Profile.png"}
              alt="profile photo"
              width={300}
              height={300}
            />
          </div>
        </main>
      </Container>
    </motion.section>
  );
};

export default AboutPage;
