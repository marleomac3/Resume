import React from 'react';

export default function EducationSection() {
    return (
        <div className="w-[96%]">
            <h1 className="text-xl font-bold text-left text-black">Education</h1>
            <ul>
                <li>
                    <h2 className='font-semibold italic'>CodeDifferently Fullstack Software Engineering Bootcamp</h2>
                    <li className='text-sm'>Developed technology solutions using Java, TypeScript, HTML/CSS, Frontend libraries, and Backend frameworks.</li>
                </li>
                <li>
                    <h2 className='font-semibold italic'>Towson University Bachelor of Science in Information Systems</h2>
                    <li className='text-sm'>
                        <span className='font-medium'>Relevant Courses:</span> Introduction to Computer Science II, Fundamental Of Web Technologies, 
                        Calculus I, Enterprise Systems and Architecture, Universal Usability: Designing Computer 
                        Interfaces for Blind Users
                    </li>
                </li>
            </ul>
        </div>
    );
}