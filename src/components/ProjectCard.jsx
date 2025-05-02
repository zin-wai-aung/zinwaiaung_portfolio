import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { TbArrowUpRight } from 'react-icons/tb';

const ProjectCard = ({
  title,
  tools,
  image,
  codeLink,
  demoLink,
  isDetail
}) => {

  const slug = title.replace(/\s+/g, "-").toLowerCase();
  
  return (
    <div
      className={`relative w-full ${
        tools ? "h-[30rem]" : "h-[25rem]"
      } group mx-auto rounded-xl shadow-lg overflow-hidden bg-Lightsecondary/20 dark:bg-Darksecondary-muted/20`}
    >
      {/* card image */}
      <div className=" relative">
        {isDetail ? (
          <Link href={`/projects/${slug}`}>
            <Image
              src={image}
              alt={title}
              width={400}
              height={100}
              className="w-full h-[18rem] object-cover transition-transform duration-300 hover:scale-105"
            />
          </Link>
        ) : (
          <Link href={demoLink} target="_blank">
            <Image
              src={image}
              alt={title}
              width={400}
              height={100}
              className="w-full h-[18rem] bg-purple-500 object-cover transition-transform duration-300 hover:scale-105"
            />
          </Link>
        )}
        {/* links */}
        <section className=" absolute translate-x-20 group-hover:translate-x-0 bottom-2 right-2 bg-Lightsecondary p-2 rounded-lg duration-300">
          <div className=" flex gap-x-2 justify-center items-center  text-white">
            {codeLink && (
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-2xl hover:text-Darksecondary"
              >
                <FaGithub />
              </a>
            )}
            <span className="text-2xl hover:text-Darksecondary">
              <a href={demoLink} target="_blank">
                <TbArrowUpRight />
              </a>
            </span>
          </div>
        </section>
      </div>

      {/* card body */}
      <div className="p-5">
        {/* title */}
        {isDetail ? (
          <Link href={`/projects/${slug}`}>
            <h2 className="text-2xl font-semibold font-grotesk dark:text-Darksecondary group-hover:underline">
              {title}
            </h2>
          </Link>
        ) : (
          <Link href={demoLink} target="_blank">
            <h2 className="text-2xl font-semibold font-grotesk dark:text-Darksecondary group-hover:underline">
              {title}
            </h2>
          </Link>
        )}

        {/* technology */}
          <div className=" absolute top-[24rem] flex flex-wrap gap-1">
            {tools?.map((tool, index) => (
              <span
                key={index}
                className="px-2 py-[.1rem] overflow-x-scroll text-[.8rem] font-medium text-gray-800 bg-Lightsecondary/30 rounded-full dark:bg-Darksecondary/20 dark:text-Darksecondary-paragraph"
              >
                {tool}
              </span>
            ))}
          </div>
      </div>
    </div>
  );
};

export default ProjectCard