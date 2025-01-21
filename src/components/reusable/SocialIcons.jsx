import React from "react";
import socialIcons from "../../_data/socialIcons";

const FixedSocialIcons = () => {
  return (
    <div className="fixed top-1/2 md:top-1/3 left-4 md:left-8 flex flex-col items-center space-y-5 z-50">
      {socialIcons.map((socialLink, index) => (
        <a
          key={index}
          href={socialLink.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className=" text-xl hover:text-Darksecondary hover:scale-125 duration-300 transition-all">
            {socialLink.icon}
          </p>
        </a>
      ))}
      <div className=" w-[.15rem] h-10 bg-gray-400"></div>
      <p
        className=" bg-Darksecondary-muted/30 px-1 py-3 rounded-md"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        Follow Me
      </p>
    </div>
  );
};
const SocialIcons = () => {
  return (
    <div className=" flex justify-center items-center space-x-5">
      {socialIcons.map((socialLink, index) => (
        <a
          key={index}
          href={socialLink.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className=" text-2xl text-primary hover:text-Darksecondary hover:scale-110 duration-300 transition-all">
            {socialLink.icon}
          </p>
        </a>
      ))}
    </div>
  );
};

export { SocialIcons, FixedSocialIcons };
