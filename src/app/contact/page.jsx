"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from "@/components/Container";
import PageTitle from "@/components/reusable/PageTitle";
import { SocialIcons } from "@/components/reusable/SocialIcons";
import React from "react";
import { FaEnvelope } from "react-icons/fa";

const ContactPage = () => {

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
      id="contact"
      className="py-28"
    >
      <Container>
        <PageTitle smallTitle={"contact"} mainTitle={"Get In Touch"} />
        <main className=" flex flex-col justify-center mt-20">
          <p className=" dark:text-Darksecondary-paragraph text-center">
            I'm actively seeking remote job opportunities and exciting new
            challenges to contribute to. <br /> If you have a project in mind,
            need assistance, or just want to connect, feel free to drop me a
            message. <br /> I'd love to hear from you!
          </p>

          <button className=" my-10">
            <a
              href="mailto:zinwaiaung156@gmail.com"
              className="border-[1.5px] border-primary text-primary px-3 py-2 rounded-md hover:bg-primary/10"
            >
              Email Me
            </a>
          </button>

          <div className=" flex justify-center items-center gap-x-2">
            <FaEnvelope className=" text-xl" />

            <a
              href="mailto:zinwaiaung156@gmail.com"
              className=" hover:underline text-xl"
            >
              zinwaiaung156@gmail.com
            </a>
          </div>

          <div className=" mt-10">
            <h1 className=" text-lg dark:text-Darksecondary-paragraph text-center mb-3">
              Stay connected and see my latest projects and updates:
            </h1>

            {/* icons */}
            <SocialIcons />
          </div>
        </main>
      </Container>
    </motion.section>
  );
};

export default ContactPage;
