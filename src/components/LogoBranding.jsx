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
    ],
    logoIcons: [
      {
        title: "Illustrator",
        iconUrl: `/svg/icons/logo-graphic/illustrator.svg`,
      },
      {
        title: "Photoshop",
        iconUrl: `/svg/icons/logo-graphic/photoshop.svg`,
      },
      {
        title: "Mila",
        iconUrl: `/svg/icons/logo-graphic/milanote.png`,
      },
      {
        title: "Behance",
        iconUrl: `/svg/icons/logo-graphic/behance.svg`,
      },
    ],
  };

  return (
    <section className="flex flex-col lg:flex-row justify-between items-center gap-x-5 mb-5 my-20 lg:my-10">
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
        <div className=" flex flex-row items-center flex-wrap gap-3 lg:gap-5 mt-5">
          {brandingInfo.logoIcons.map((item) => (
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

export default LogoBranding;
