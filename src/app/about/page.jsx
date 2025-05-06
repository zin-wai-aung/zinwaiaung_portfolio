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
            <div className="space-y-4 order-2 lg:order-1 dark:text-Darksecondary-paragraph text-[1rem] md:text-[1.1rem]">
              <p>
                Hi, I'm Zin Wai Aung — a passionate{" "}
                <strong className="dark:text-Darksecondary">
                  Web Developer
                </strong>{" "}
                and experienced{" "}
                <strong className="dark:text-Darksecondary">
                  Logo Designer
                </strong>{" "}
                with a background in graphic design and a strong focus on modern
                web technologies.
              </p>
              <p>
                With over 2 years of experience in web development and deep
                expertise in{" "}
                <strong className="dark:text-Darksecondary">React</strong>, I'm
                currently focused on building scalable and dynamic applications
                using the{" "}
                <strong className="dark:text-Darksecondary">MERN stack</strong>{" "}
                (MongoDB, Express, React, Node.js), alongside tools like
                Tailwind CSS and Next.js.
              </p>
              <p>
                In 2021, I founded{" "}
                <a
                  href="https://itcreation.netlify.app/"
                  target="_blank"
                  className="dark:text-green-400 font-semibold underline"
                >
                  IT Creation
                </a>
                , where I offer professional branding services. With 4+ years of
                design experience and over{" "}
                <strong className="dark:text-Darksecondary">
                  300 completed logo projects
                </strong>
                , I've helped businesses build impactful and memorable brand
                identities.
              </p>
              <p>
                Recently, I launched{" "}
                <a
                  href="https://cre8tionnet.up.railway.app"
                  target="_blank"
                  className="dark:text-green-400 font-semibold underline"
                >
                  Cre8tionNet
                </a>{" "}
                — a digital platform where creators can upload, download, and
                monetize quality design and development assets. I’m actively
                enhancing the platform by adding{" "}
                <strong className="dark:text-Darksecondary">
                  contributor features
                </strong>{" "}
                and{" "}
                <strong className="dark:text-Darksecondary">
                  premium product options
                </strong>
                , while continuing to improve frontend performance, backend
                integration, and overall UI/UX experience.
              </p>

              <p>
                I'm always open to collaboration — whether you're a developer,
                designer, or entrepreneur, let's build something meaningful
                together.
              </p>
            </div>

            <p className="dark:text-Darksecondary-paragraph mt-3 mb-1">
              Here are a few of the other activities that I love to do:
            </p>
            <div className="dark:text-Darksecondary flex items-center gap-x-10 md:gap-x-20">
              <ul className="space-y-2">
                <li>👨‍💻 Coding</li>
                <li>🧠 Problem Solving</li>
              </ul>
              <ul className="space-y-2">
                <li>📚 Exploring New Technologies</li>
                <li>📖 Reading & Personal Growth</li>
              </ul>
            </div>
          </div>

          <div className=" w-full lg:w-1/3 flex justify-center order-1 lg:order-2 mt-10 md:mt-0">
            <Image
              src="https://res.cloudinary.com/da7vqcwkp/image/upload/profile_pmxxyt.png"
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
