import React, { useState } from 'react';
import EducationButton from './buttons/EducationButton';

export default function EducationSection() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full">
                <EducationButton onClick={toggleExpand} />
            </div>
            {isExpanded && (
                <div id='content-div' className='shadow-inner-xl mb-2'>
                    <ul className='p-2'>
                        <li>
                            <h2 id='list-header'>CodeDifferently Fullstack Software Engineering Bootcamp</h2>
                            <li id='list-content'>Developed technology solutions using Java, TypeScript, HTML/CSS, Frontend libraries, and Backend frameworks.</li>
                        </li>
                        <li>
                            <h2 id='list-header'>Towson University Bachelor of Science in Information Systems</h2>
                            <li id='list-content'>
                                <span className='font-medium'>Relevant Courses:</span>
                                 Introduction to Computer Science II, Fundamental Of Web Technologies, 
                                Calculus I, Enterprise Systems and Architecture, Universal Usability: Designing Computer 
                                Interfaces for Blind Users
                            </li>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}