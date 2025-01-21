import { useRouter } from "next/router";
import projects from "../_data/projects"; // Adjust relative path as necessary
import Image from "next/image";

const ProjectDetailPage = () => {
  const { query } = useRouter();
  const { slug } = query;

  const project = projects.find(
    (proj) => proj.title.replace(/\s+/g, "-").toLowerCase() === slug
  );

  if (!project) return <p>Project not found</p>;

  const { title, description, tools, image, codeLink, demoLink } = project;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <Image
        src={image}
        alt={title}
        width={800}
        height={400}
        className="mb-6"
      />
      <p className="mb-4">{description}</p>
      <h2 className="text-xl font-semibold mb-2">Technologies Used:</h2>
      <ul className="flex flex-wrap gap-2 mb-6">
        {tools.map((tool, index) => (
          <li
            key={index}
            className="px-3 py-1 bg-gray-200 rounded text-gray-700"
          >
            {tool}
          </li>
        ))}
      </ul>
      <div className="flex space-x-4">
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Code
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
