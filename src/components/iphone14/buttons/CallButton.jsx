import React from 'react';
import PhoneIcon from "../../../assets/phone-solid.svg";

const CallButton = ({phoneNumber}) => {
    const handleCall = () => {
        console.log(`Calling ${phoneNumber}`);
    };

    return (
        <a href={`tel:${phoneNumber}`} onClick={handleCall}>
            <div className="w-8 h-8 bg-[#eceff6] rounded-full flex items-center justify-center">
                    <img src={PhoneIcon} alt="Phone" className="w-4" />
                </div>
        </a>
    );
};

export default CallButton;