import React from 'react';
import EmailIcon from '../../../assets/envelope-solid.svg';

const EmailButton = ({email, subject, message}) => {
    const handleEmail = () => {
        console.log(`Sending email to ${email}`);
    };
    const encodedSubject = encodeURIComponent(subject);
    const encodedMessage = encodeURIComponent(message);

    return (
        <a href={`mailto:${email}?subject=${encodedSubject}&body=${encodedMessage}`} onClick={handleEmail}>
            <div className="w-8 h-8 bg-[#eceff6] rounded-full flex items-center justify-center">
                    <img src={EmailIcon} alt="Callender" className="w-4" />
                </div>
        </a>
    );
};

export default EmailButton;