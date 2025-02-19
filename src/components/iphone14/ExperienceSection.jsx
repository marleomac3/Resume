import React, { useState } from 'react';
import ExperienceButton from './buttons/ExperienceButton';

export default function ExperienceSection() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="w-full">
            <div className="w-full">
                <ExperienceButton onClick={toggleExpand} />
            </div>
            {isExpanded && (
                <div id='content-div' className='shadow-inner-xl'>
                    <ul className='p-2'>
                <li>
                    <div id='job-headers'>
                        <h2 id='list-header'>Full Stack Developer (Intern)</h2>
                        <h2 id='list-header'>Sika Box</h2>
                        <h2 id='list-header'>Dec 2024 - Present</h2>
                    </div>
                    <li id='list-content'>Developed and maintained web applications using JavaScript, TypeScript, React, and Node.js</li>
                    <li id='list-content'>Collaborated with cross-functional teams in an Agile development environment</li>
                    <li id='list-content'>Implemented UI/UX enhancements to improve user experience</li>
                </li>
                <li>
                    <div id='job-headers'>
                        <h2 id='list-header'>Associate</h2>
                        <h2 id='list-header'>Walmart</h2>
                        <h2 id='list-header'>Aug 2022 - Present</h2>
                    </div>
                    <li id='list-content'>Assisted in the organization of backroom stock</li>
                    <li id='list-content'>Organized fellow associates to cut down order dispense wait time to a 2 min. average</li>
                    <li id='list-content'>Handled and dispensed up to <span className='font-medium'>200 customer orders</span> with my team</li>
                </li>
                <li>
                    <div id='job-headers'>
                        <h2 id='list-header'>Picker</h2>
                        <h2 id='list-header'>Amazon</h2>
                        <h2 id='list-header'>June 2020 - Aug 2021</h2>
                    </div>
                    <li id='list-content'>
                        <span className='font-medium'>Fulfilled 100-300 customer orders</span> 
                        daily while ensuring an inclusive and safe work environment
                    </li>
                </li>
                <li>
                    <div id='job-headers'>
                        <h2 id='list-header'>Customer Service Associate</h2>
                        <h2 id='list-header'>Wawa</h2>
                        <h2 id='list-header'>June 2016 - Aug 2020</h2>
                    </div>
                    <li id='list-content'>Worked diligently with fellow associates to maintain store order</li>
                </li>
            </ul>
                </div>
            )}
        </div>
    );
}