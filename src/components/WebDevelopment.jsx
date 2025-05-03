import React from "react";
import Image from "next/image";
import ListUI from "./reusable/ListUI";


const WebDevelopment = () => {
  const webInfo = {
    title: "Web Development",
    details: [
      `Experienced frontend developer skilled in crafting responsive, user-focused web applications using React, Next.js, Typescript and Tailwind CSS.`,
      `Proficient in the MERN stack, REST APIs, and UI libraries like Shadcn UI, Framer Motion, and React Hook Form.`,
      `Strong expertise in state management with Zustand and Redux, plus integration of Cloudinary and modern deployment tools.`,
      `Dedicated to building scalable solutions with clean code, smooth UX, and efficient performance.`,
    ],
    logoIcons: [
      {
        title: "React",
        iconUrl: `/svg/icons/web/react.svg`,
      },
      {
        title: "Next.js",
        iconUrl: `/svg/icons/web/next.svg`,
      },
      {
        title: "Node.js",
        iconUrl: `/svg/icons/web/nodejs.svg`,
      },
      {
        title: "TypeScript",
        iconUrl: `/svg/icons/web/typescript.svg`,
      },
      {
        title: "Tailwind",
        iconUrl: `/svg/icons/web/tailwind.svg`,
      },
      {
        title: "Mongo DB",
        iconUrl: `/svg/icons/web/mongodb.svg`,
      },
      {
        title: "Git",
        iconUrl: `/svg/icons/web/git.svg`,
      },
    ],
  };

  return (
    <section
      
      className=" flex flex-col lg:flex-row justify-between items-center gap-x-5"
    >
      <div className=" lg:w-1/2 flex justify-start items-center">
        <Image
          src={"/svg/animation/developer.svg"}
          alt="developer photo"
          width={500}
          height={500}
        />
      </div>
      <div className=" lg:w-1/2">
        <h1 className=" font-bold text-3xl md:text-4xl font-tangerine mb-5 dark:text-Darksecondary">
          {webInfo.title}
        </h1>
        <ul className="space-y-5 dark:text-Darksecondary-paragraph text-[1rem] md:text-[1.1rem]">
          {webInfo.details.map((detail, index) => (
            <ListUI key={index} listDetail={detail} />
          ))}
        </ul>
        <div className=" flex flex-row items-center flex-wrap gap-3 lg:gap-5 mt-5">
          {webInfo.logoIcons.map((item) => (
            <div
              key={item.title}
              className=" w-14 h-14 rounded-lg bg-Darksecondary/30 p-2 flex justify-center items-center"
            >
              <Image
                src={item.iconUrl}
                alt={item.title}
                width={70}
                height={70}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;
