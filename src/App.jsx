import React from 'react';
import HeaderSection from './components/HeaderSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <>
      <div id='header-section'>
        <HeaderSection />
      </div>
      <main>
        <div id='education-section'>
          <EducationSection />
        </div>
        <div id='skills-section'>
          <SkillsSection />
        </div>
        <div id='experience-section'>
          <ExperienceSection />
        </div>
        <div id='projects-section'>
          <ProjectsSection />
        </div>
      </main>
    </>
  );
}

export default App;