import React from 'react';
import HeaderSection from './components/HeaderSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <>
      <div id='content-div' className='flex flex-col items-center w-[51rem] h-[66rem] bg-gray-300 shadow-[0px_0px_16px_-2px_rgba(0,_0,_0,_0.7)]'>
        <div id='header-section'>
          <HeaderSection />
        </div>
        <main className='flex flex-col items-center w-full'>
          <div id='education-section' className='w-full flex'>
            <EducationSection />
          </div>
          <div id='skills-section' className='w-full flex justify-center'>
            <SkillsSection />
          </div>
          <div id='experience-section' className='w-full flex justify-center'>
            <ExperienceSection />
          </div>
          <div id='projects-section' className='w-full flex justify-center'>
            <ProjectsSection />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;