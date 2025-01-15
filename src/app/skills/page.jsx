import React from "react";
import Container from "@/components/Container";
import PageTitle from "@/components/reusable/PageTitle";
import GraphicDesign from "@/components/GraphicDesign";
import LogoBranding from "@/components/LogoBranding";
import WebDevelopment from "@/components/WebDevelopment";

const SkillPage = () => {
  return (
    <section
      id="skills"
      className=" pt-28"
    >
      <Container>
        <PageTitle
          smallTitle={"expertise"}
          mainTitle={"Fields of Proficiency"}
        />
        <div className="flex justify-center items-center my-14">
          <WebDevelopment />
        </div>

        <div className="flex justify-center items-center my-20">
          <LogoBranding />
        </div>
        <div className="flex justify-center items-center my-20">
          <GraphicDesign />
        </div>
      </Container>
    </section>
  );
};

export default SkillPage;
