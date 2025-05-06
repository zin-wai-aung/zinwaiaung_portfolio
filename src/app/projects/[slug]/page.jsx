import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import portfolioProjects from "../../../_data/projects";
import BreadCrumbTab from "@/components/reusable/Breadcrumb";
import { FaGithub, FaLocationArrow } from "react-icons/fa";
import ContactPage from "@/app/contact/page";

// ✅ Helper function to convert titles to slugs
const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

// ✅ Optional SEO metadata (Next.js 13+ with app router)
export async function generateMetadata({ params }) {
  const allProjects = portfolioProjects.flatMap((cat) => cat.projects);
  const project = allProjects.find((p) => slugify(p.title) === params.slug);

  return {
    title: project?.title || "Project Not Found",
    description: project?.description || "Portfolio project details page",
  };
}

// ✅ For static site generation
export async function generateStaticParams() {
  const allProjects = portfolioProjects.flatMap((cat) => cat.projects);
  return allProjects.map((project) => ({
    slug: slugify(project.title),
  }));
}

const ProjectDetailPage = ({ params }) => {
  const { slug } = params;

  const currentProject = portfolioProjects
    .flatMap((category) => category.projects)
    .find((project) => slugify(project.title) === slug);

  if (!currentProject) {
    return (
      <section className="pt-32 text-center">
        <h2 className="text-3xl font-bold">Project not found</h2>
        <p className="mt-4 text-gray-500">
          Please check the URL or return to the{" "}
          <a href="/projects" className="underline text-primary">
            Projects page
          </a>
          .
        </p>
      </section>
    );
  }

  const {
    title,
    description,
    tools,
    image,
    detailImages,
    detailDescription,
    codeLink,
    demoLink,
  } = currentProject;

  if (!currentProject) {
    console.error(`Project not found for slug: ${slug}`);
    // ...show fallback UI
  }


  return (
    <section id="projects" className="pt-28">
      {/* 🟡 Detail Header Section */}
      <header className="bg-cover bg-no-repeat bg-primaryLight bg-center h-[20rem] relative mx-auto">
        <Container>
          <BreadCrumbTab
            routeLink={`/projects`}
            frontTab="Projects"
            backTab={title}
          />
          <p className="text-[1.25rem] md:text-4xl lg:text-5xl font-bold pt-2 md:pt-10 dark:text-Darksecondary uppercase font-grotesk">
            {title}
          </p>

          {/* 🛠️ Tools and Links */}
          <div className="mt-3 lg:mt-20 w-full mx-auto">
            <h2 className="mb-2 text-nowrap">Technologies used:</h2>
            <ul className="flex flex-col lg:flex-row justify-between items-start space-y-5 lg:space-y-0">
              <li className="w-full lg:w-[70%] flex md:flex-col gap-x-3">
                {Array.isArray(tools) && (
                  <ul className="flex flex-wrap gap-2 mb-6">
                    {tools.map((tool, index) => (
                      <li
                        key={index}
                        className="px-2 md:px-3 py-1 text-sm md:text-[1rem] bg-Lightsecondary/20 dark:bg-Darksecondary/20 dark:text-Darksecondary rounded-full"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li className="w-full lg:w-[30%] flex items-center justify-center md:justify-end gap-x-1 md:gap-x-4">
                {codeLink && (
                  <div className="flex items-center gap-x-2 bg-primary/90 rounded-xl hover:bg-primary px-3 py-2">
                    <a
                      href={codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-2 text-black"
                    >
                      <FaGithub className="text-xl" />
                      <span className="text-nowrap text-[1rem]">
                        Source Code
                      </span>
                    </a>
                  </div>
                )}

                {demoLink && (
                  <div className="flex items-center gap-x-2 bg-primary/90 rounded-xl hover:bg-primary px-3 py-2">
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-2 text-black"
                    >
                      <FaLocationArrow className="text-lg" />
                      <span className="text-nowrap text-[1rem]">View Demo</span>
                    </a>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </Container>
      </header>

      {/* 🔽 Main Content */}
      <Container>
        <div className="mt-10 flex flex-col items-center">
          <Image
            src={image}
            alt={title}
            width={800}
            height={400}
            sizes="(max-width: 768px) 100vw, 800px"
            className="mb-6"
          />
          <p className="mb-8 lg:w-2/3 font-bold">{description}</p>

          {detailDescription && (
            <p className="mb-32 lg:w-2/3 whitespace-pre-line">
              {detailDescription}
            </p>
          )}

          {Array.isArray(detailImages) &&
            detailImages.map((detImage, index) => (
              <Image
                key={index}
                src={detImage}
                alt={`${title} - detail ${index + 1}`}
                width={800}
                height={400}
                className="mb-6"
                priority
              />
            ))}

          <hr className="w-full opacity-20 lg:my-20" />

          <div className="flex justify-center items-center">
            <ContactPage />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectDetailPage;
