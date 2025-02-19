import React from "react";
import HeaderSection from "../components/iphone14/HeaderSection";
import EducationSection from "../components/iphone14/EducationSection";
import SkillsSection from "../components/iphone14/SkillsSection";
import ExperienceSection from "../components/iphone14/ExperienceSection";
import ProjectsSection from "../components/iphone14/ProjectsSection";
import BorderLine from "../components/iphone14/BorderLine";

export default function IPhone14Resume() {
  return (
    <>
      <div
        id="content-div"
        className="hidden flex-col mx-auto w-full h-[66rem] bg-white iphone14:flex">
        <div id="header-section" className="ml-4 w-full">
          <HeaderSection />
          <BorderLine />
        </div>
        <main className="flex flex-col">
          <div id="education-section" className="ml-4 w-full">
            <EducationSection />
            <BorderLine />
          </div>
          <div id="skills-section" className="ml-4 w-full">
            <SkillsSection />
            <BorderLine />
          </div>
          <div id="experience-section" className="ml-4 w-full">
            <ExperienceSection />
            <BorderLine />
          </div>
          <div id="projects-section" className="ml-4 w-full">
            <ProjectsSection />
          </div>
        </main>
      </div>
    </>
  );
}
