import Container from '@/components/Container';
import ProjectTab from '@/components/ProjectTab';
import PageTitle from '@/components/reusable/PageTitle';
import React from 'react'

const ProjectPage = () => {
  return (
    <section id="projects" className=" pt-28">
      <Container>
        <PageTitle smallTitle={"projects"} mainTitle={"Highlights of My Journey"} />
        <main className="flex flex-col lg:flex-row justify-between items-start gap-x-20 my-16 min-h-screen">
        <ProjectTab/>
        </main>
      </Container>
    </section>
  );
}

export default ProjectPage