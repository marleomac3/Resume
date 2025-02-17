import React from 'react';
import HeaderSection from './components/HeaderSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import BorderLine from './components/BorderLine';

function App() {
  return (
    <>
      <div id='content-div' className='flex flex-col mx-auto w-[51rem] h-[66rem] bg-white '>
        <div id='header-section' className='ml-4 w-full'>
          <HeaderSection />
          <BorderLine />
        </div>
        <main className='flex flex-col'>
          <div id='education-section' className='ml-4 w-full'>
            <EducationSection />
            <BorderLine />
          </div>
          <div id='skills-section' className='ml-4 w-full'>
            <SkillsSection />
            <BorderLine />
          </div>
          <div id='experience-section' className='ml-4 w-full'>
            <ExperienceSection />
            <BorderLine />
          </div>
          <div id='projects-section' className='ml-4 w-full'>
            <ProjectsSection />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;