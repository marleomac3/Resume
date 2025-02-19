import React from "react";
import HeaderSection from "../components/desktop/HeaderSection";
import EducationSection from "../components/desktop/EducationSection";
import SkillsSection from "../components/desktop/SkillsSection";
import ExperienceSection from "../components/desktop/ExperienceSection";
import ProjectsSection from "../components/desktop/ProjectsSection";
import BorderLine from "../components/desktop/BorderLine";

export default function DesktopResume() {
  return (
    <>
      <div
        id="content-div"
        className="flex flex-col mx-auto w-[51rem] h-[66rem] bg-white iphone14:hidden">
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
