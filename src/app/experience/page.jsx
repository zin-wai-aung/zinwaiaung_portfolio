import React from 'react'
import Container from '@/components/Container';
import PageTitle from '@/components/reusable/PageTitle';
import WorkTimelineUI from '@/components/WorkTimeline';
import EducationTimelineUI from '@/components/EducationTimeline';

const ExperiencePage = () => {
  return (
    <section id="experience" className=" pt-28">
      <Container>
        <PageTitle smallTitle={"experience"} mainTitle={"Where I've worked"} />
        <main className="flex flex-col lg:flex-row justify-between items-start gap-x-20 my-16 min-h-screen">
          <div className="lg:w-1/2">
            <WorkTimelineUI/>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <EducationTimelineUI/>
          </div>
        </main>
      </Container>
    </section>
  );
}

export default ExperiencePage