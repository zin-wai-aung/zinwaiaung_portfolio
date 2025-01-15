import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import React from "react";
import ProjectCard from "./ProjectCard";
import portfolioProjects from "../../_data/projects";

export default function ProjectTab() {
  return (
    <div className="w-full">
      <TabGroup>
        <TabList className="flex gap-2 items-center">
          {portfolioProjects.map(({ name }, index) => (
            <React.Fragment key={name}>
              <Tab className="rounded-full text-nowrap py-1 px-0 md:px-5 text-sm md:text-lg font-semibold text-gray-400 dark:text-Darksecondary focus:outline-none dark:data-[selected]:text-primary dark:data-[hover]:text-primary data-[hover]:text-black data-[selected]:text-black  data-[focus]:outline-1 data-[focus]:outline-white">
                {name}
              </Tab>
              {index < portfolioProjects.length - 1 && (
                <span className="dark:text-Darksecondary/50">/</span>
              )}
            </React.Fragment>
          ))}
        </TabList>

        <TabPanels className="mt-10">
          {portfolioProjects.map(({ name, projects }) => (
            <TabPanel
              key={name}
              className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  tools={project.tools}
                  image={project.image}
                  codeLink={project.codeLink}
                  demoLink={project.demoLink}
                  isDetail={project.isDetail}
                />
              ))}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}
