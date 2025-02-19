import React from "react";
import CallButton from "./buttons/CallButton";
import EmailButton from "./buttons/EmailButton";

export default function HeaderSection() {
    return (
        <div className="w-full">
            <h1 className="text-2xl font-bold text-center text-black">
                Marion L. McWilliams III
            </h1>
            <h2 className="text-center">Full Stack Software Engineer</h2>
            <div className="flex justify-around w-full gap-3 mb-3">
                <div className="w-1/2">
                    <CallButton phoneNumber="3025630316" />
                </div>
                <div className="w-1/2">
                    <EmailButton
                        email="marionlmcwilliams@gmail"
                        subject="Resume Inquiry"
                        message="Hello Marion, I have a question about your resume."
                    />
                </div>
            </div>
        </div>
    );
}
