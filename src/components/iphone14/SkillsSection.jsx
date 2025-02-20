import React, { useState } from 'react';
import SkillsButton from './buttons/SkillsButton';

export default function SkillsSection() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="w-full">
            <div className="w-full">
                <SkillsButton onClick={toggleExpand} />
            </div>
            {isExpanded && (
                <div id='content-div' className='shadow-inner-xl mb-2'>
                    <ul className='p-2'>
                <li>
                    <h2 id='list-header'>Technical:</h2>
                    <p id='list-content'>
                        HTML/CSS, Bootstrap, JS/TS, Java, 
                        ReactJS, SASS, Git/Version Control, 
                        SCRUM/AGILE Development, Certified SCRUM Master, 
                        REST APIs, Node.js, TDD, GitHub
                    </p>
                </li>
                <li>
                    <h2 id='list-header'>Behavioral:</h2>
                    <p id='list-content'>
                    Leadership, Adaptability, Problem-Solving, 
                    Communication/Collaboration, Working Under Pressure, 
                    Public Speaking, Thinking Outside the Box, Critical Thinking
                    </p>
                </li>
            </ul>
                </div>
            )}
        </div>
    );
}