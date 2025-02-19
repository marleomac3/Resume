import React from 'react';

const CallButton = ({phoneNumber}) => {
    const handleCall = () => {
        console.log(`Calling ${phoneNumber}`);
    };

    return (
        <a href={`tel:${phoneNumber}`} onClick={handleCall}>
            <button className='bg-slate-400 text-black font-bold py-2 px-4 rounded cursor-pointer w-full'>CALL</button>
        </a>
    );
};

export default CallButton;