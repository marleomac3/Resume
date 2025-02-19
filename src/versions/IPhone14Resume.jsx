import React from "react";
import HeaderSection from "../components/iphone14/HeaderSection";
import EducationSection from "../components/iphone14/EducationSection";
import SkillsSection from "../components/iphone14/SkillsSection";
import ExperienceSection from "../components/iphone14/ExperienceSection";
import ProjectsSection from "../components/iphone14/ProjectsSection";

export default function IPhone14Resume() {
  return (
    <>
      <div
        id="content-div"
        className="hidden flex-col items-center mx-auto w-full h-[66rem] bg-[#eceff6] iphone14:flex">
        <div id="header-section" className="w-[95%]">
          <HeaderSection />
        </div>
        <main className="flex flex-col items-center justify-center w-[95%]">
          <div id="education-section" className="w-full min-w-full">
            <EducationSection />
          </div>
          <div id="skills-section" className="w-full min-w-full">
            <SkillsSection />
          </div>
          <div id="experience-section" className="w-full min-w-full">
            <ExperienceSection />
          </div>
          <div id="projects-section" className="w-full min-w-full">
            <ProjectsSection />
          </div>
        </main>
      </div>
    </>
  );
}
