import React from 'react';

export default function SkillsSection() {
    return (
        <div className="w-[96%]">
            <h1 id='section-header'>Skills</h1>
            <ul>
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
    );
}