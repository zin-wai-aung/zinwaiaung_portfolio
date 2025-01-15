import React from "react";
import Image from "next/image";
import ListUI from "./reusable/ListUI";

const GraphicDesign = () => {
  const graphicInfo = {
    title: "Graphic  Design",
    details: [
      `Expertise in advertising design for social media platforms, ensuring visually appealing and effective campaigns.`,
      `Skilled in designing banners, posters, flyers, and packaging that effectively communicate messages and enhance brand visibility.`,
      `Proficient with tools like Adobe Photoshop, Illustrator, Figma, and Premiere Pro for diverse design projects.`,
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
        title: "Premiere Pro",
        iconUrl: `/svg/icons/logo-graphic/premiere.svg`,
      },
      {
        title: "Figma",
        iconUrl: `/svg/icons/logo-graphic/figma.svg`,
      },
    ],
  };

  return (
    <section className="flex flex-col lg:flex-row justify-between items-center gap-x-5">
      <div className=" lg:w-1/2">
        <Image
          src={"/svg/animation/designer.svg"}
          alt="designer photo"
          width={500}
          height={500}
        />
      </div>
      <div className=" lg:w-1/2">
        <h1 className=" font-tangerine font-bold text-3xl md:text-4xl mb-5 dark:text-Darksecondary">
          {graphicInfo.title}
        </h1>
        <ul className=" list-disc space-y-5 dark:text-Darksecondary-paragraph text-[1rem] md:text-[1.1rem]">
          {graphicInfo.details.map((detail, index) => (
            <ListUI key={index} listDetail={detail} />
          ))}
        </ul>
        <div className=" flex flex-row items-center flex-wrap gap-3 lg:gap-5 mt-5">
          {graphicInfo.logoIcons.map((item) => (
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

export default GraphicDesign;
