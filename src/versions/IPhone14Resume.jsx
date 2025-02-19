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
        className="hidden flex-col items-center mx-auto w-full h-[66rem] bg-[#eceff6] iphone14:flex">
        <div id="header-section" className="w-[90%]">
          <HeaderSection />
          <BorderLine />
        </div>
        <main className="flex flex-col items-center w-[95%]">
          <div id="education-section" className="">
            <EducationSection />
            <BorderLine />
          </div>
          <div id="skills-section">
            <SkillsSection />
            <BorderLine />
          </div>
          <div id="experience-section">
            <ExperienceSection />
            <BorderLine />
          </div>
          <div id="projects-section">
            <ProjectsSection />
          </div>
        </main>
      </div>
    </>
  );
}
