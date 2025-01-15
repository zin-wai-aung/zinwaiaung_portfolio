"use client"
import React from "react";
import Container from "../components/Container";
import Typewriter from "typewriter-effect";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex justify-center items-center min-h-[90vh]">
      <Container>
        <main className=" mt-20 flex flex-col lg:flex-row justify-between lg:items-center gap-y-10 lg:gap-y-0 gap-x-0 lg:gap-x-20">
          {/* Info side */}
          <div className=" w-full lg:w-3/5 flex flex-col gap-y-3 lg:gap-y-5 order-2 lg:order-1">
            <p className=" text-primary font-grotesk font-bold text-xl">
              {" "}
              <span className="animate-pulse text-2xl">✌🏻</span> Hello , I'm
            </p>
            <h1 className=" text-[3rem] md:text-7xl text-nowrap dark:text-Darksecondary font-bold leading-tight uppercase tracking-wider">
              ZinWai &nbsp;Aung
            </h1>
            <div className=" text-[1rem] md:text-3xl font-grotesk font-bold tracking-widest uppercase">
              <Typewriter
                options={{
                  strings: ["Web Developer", "Logo & Graphic Designer"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </div>
            <p className=" w-full mt-8 text-[1.1rem] md:text-xl dark:text-Darksecondary-paragraph">
              I design and develop
              <strong className=" dark:text-Darksecondary">
                {" "}
                websites
              </strong>{" "}
              using modern tools and frameworks. <br /> I also specialize in
              creating{" "}
              <strong className="dark:text-Darksecondary">unique logo </strong>
              designs and brand identities that make businesses stand out.
            </p>
          </div>

          {/* image side */}
          <div className="lg:w-2/5 order-1 lg:order-2">
            <Image
              src={"/svg/girl.svg"}
              alt="cartoon girl"
              width={450}
              height={300}
            />{" "}
          </div>
        </main>
      </Container>
    </section>
  );
};

export default HeroSection;
