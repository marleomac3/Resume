import React from 'react';

const EmailButton = ({email, subject, message}) => {
    const handleEmail = () => {
        console.log(`Sending email to ${email}`);
    };
    const encodedSubject = encodeURIComponent(subject);
    const encodedMessage = encodeURIComponent(message);

    return (
        <a href={`mailto:${email}?subject=${encodedSubject}&body=${encodedMessage}`} onClick={handleEmail}>
            <button className='bg-slate-400 text-black font-bold py-2 px-4 rounded cursor-pointer w-full'>EMAIL</button>
        </a>
    );
};

export default EmailButton;