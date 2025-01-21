import Container from '@/components/Container';
import Image from 'next/image';
import React from 'react'
import portfolioProjects from '../../../../_data/projects';
import BreadCrumbTab from '@/components/reusable/Breadcrumb';
import { FaGithub, FaLocationArrow } from "react-icons/fa";
import ContactPage from '@/app/contact/page';

// Function to generate static parameters for this dynamic route
export async function generateStaticParams() {
  const allProjects = portfolioProjects.flatMap((category) => category.projects);

  return allProjects.map((project) => ({
    slug: project.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}

const ProjectDetailPage = ({params}) => {
  const { slug } = params;

const currentProject = portfolioProjects
  .flatMap((category) => category.projects) 
  .find((project) => project.title.toLowerCase().replace(/\s+/g, "-") === slug);

if (!currentProject) {
  return <p>Project not found</p>;
  }
  const { title, description, tools, image, detailImages, codeLink, demoLink } = currentProject;
    
  return (
    <section id="projects" className=" pt-28">
      {/* Detail Header Section */}
      <header className=" bg-cover bg-no-repeat bg-primaryLight bg-center h-[20rem] relative mx-auto">
        <Container>
          <BreadCrumbTab
            routeLink={`/projects`}
            frontTab={"Projects"}
            backTab={title}
          />
          <p className=" text-[1.25rem] md:text-4xl lg:text-5xl font-bold pt-2 md:pt-10 dark:text-Darksecondary uppercase font-grotesk">
            {title}
          </p>

          {/* links seciton */}
          <div className=" mt-3 lg:mt-20 w-full mx-auto">
            <ul className="flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0">
              <li className=" w-full lg:w-[70%] flex md:flex-col gap-x-3">
                <h2 className=" mb-2 text-nowrap">Technologies used:</h2>
                <ul className="flex flex-wrap gap-2 mb-6">
                  {tools.map((tool, index) => (
                    <li
                      key={index}
                      className=" px-2 md:px-3 py-1 text-sm md:text-[1rem] bg-Lightsecondary/20 dark:bg-Darksecondary/20 dark:text-Darksecondary rounded-full"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </li>

              <li className=" w-full lg:w-[30%] flex items-center justify-between">
                <div className="flex items-center gap-x-2 bg-Darksecondary-muted/10 rounded-xl hover:bg-Darksecondary/20 px-3 py-2">
                  {codeLink && (
                    <a
                      href={codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" flex items-center gap-x-2  text-Darksecondary-muted"
                    >
                      <FaGithub className=" text-xl" />
                      <span className=" text-nowrap text-[1rem]">
                        Source Code
                      </span>
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-x-2 bg-Darksecondary-muted/10 rounded-xl hover:bg-Darksecondary/20 px-3 py-2">
                  {demoLink && (
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" flex items-center gap-x-2  text-Darksecondary-muted"
                    >
                      <FaLocationArrow className=" text-lg p" />
                      <span className=" text-nowrap text-[1rem]">
                        View Demo
                      </span>
                    </a>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </header>
      <Container>
        <div className=" mt-10 flex flex-col items-center">
          <Image
            src={image}
            alt={title}
            width={800}
            height={400}
            className="mb-6"
          />
          <p className="mb-32 lg:w-2/3">{description}</p>

          {detailImages &&
            detailImages.map((detImage, index) => (
              <Image
                key={index}
                src={detImage}
                alt={title}
                width={800}
                height={400}
                className="mb-6"
              />
            ))}

          <hr className=" w-full opacity-20 lg:my-20" />

          <div className=" flex justify-center items-center">
            <ContactPage />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProjectDetailPage