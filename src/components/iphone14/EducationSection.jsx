import React from 'react';

export default function EducationSection() {
    return (
        <div className="w-[96%]">
            <h1 id="section-header">Education</h1>
            <ul>
                <li>
                    <h2 id='list-header'>CodeDifferently Fullstack Software Engineering Bootcamp</h2>
                    <li id='list-content'>Developed technology solutions using Java, TypeScript, HTML/CSS, Frontend libraries, and Backend frameworks.</li>
                </li>
                <li>
                    <h2 id='list-header'>Towson University Bachelor of Science in Information Systems</h2>
                    <li id='list-content'>
                        <span className='font-medium'>Relevant Courses:</span> Introduction to Computer Science II, Fundamental Of Web Technologies, 
                        Calculus I, Enterprise Systems and Architecture, Universal Usability: Designing Computer 
                        Interfaces for Blind Users
                    </li>
                </li>
            </ul>
        </div>
    );
}