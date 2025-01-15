import React from "react";
import Image from "next/image";
import ListUI from "./reusable/ListUI";

const WebDevelopment = () => {
  const webInfo = {
    title: "Web Development",
    details: [
      `Experienced in building dynamic and user-friendly websites using
      modern technologies like React, Next.js and Tailwind.`,
      ` Proficient in frontend development, leveraging libraries like Shadcn UI, Lottie, Framer Motion, Zustand, React-Redux, and
        React Hook Form.`,
      ` Skilled in cloud services integration and deployment (e.g, Cloudinary, GitHub) for optimized performance.`,
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
    <section className=" flex flex-col lg:flex-row justify-between items-center gap-x-5">
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
            <div key={item.title} className=" w-14 h-14 rounded-lg bg-Darksecondary/30 p-2 flex justify-center items-center">
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
