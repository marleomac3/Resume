import React from "react";
import CallenderIcon from "../../assets/calendar-days-solid.svg";
import GithubIcon from "../../assets/github-brands.svg";
import LinkedinIcon from "../../assets/linkedin-brands.svg";
import ArrowIcon from "../../assets/chevron-right-solid.svg";
import CallButton from "./buttons/CallButton";
import EmailButton from "./buttons/EmailButton";

export default function LinksSection() {
    return (
        <div className="flex flex-col items-start justify-center gap-3 w-full bg-white shadow-sm mb-2 py-2 px-6">
            <div
                id="linkedin-div"
                className="flex w-full justify-between gap-2">
                <a
                    href="https://www.linkedin.com/in/marion-mcwilliams/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="flex gap-2">
                        <div className="w-8 h-8 bg-[#eceff6] rounded-full flex items-center justify-center">
                            <img
                                src={LinkedinIcon}
                                alt="Linkedin"
                                className="w-4"
                            />
                        </div>
                        <div
                            id="text-div"
                            className="flex flex-col items-start">
                            <p className="text-xs text-center text-gray-500">
                                Linkedin
                            </p>
                            <p className="text-sm text-center">
                                linkedin.com/in/marion-mcwilliams/
                            </p>
                        </div>
                    </div>
                </a>
                <img src={ArrowIcon} alt="Right Arrow" className="w-[10px]" />
            </div>

            <div id="github-div" className="flex w-full justify-between gap-2">
                <a
                    href="https://github.com/marleomac3"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="flex gap-2">
                        <div className="w-8 h-8 bg-[#eceff6] rounded-full flex items-center justify-center">
                            <img
                                src={GithubIcon}
                                alt="Github"
                                className="w-5"
                            />
                        </div>
                        <div
                            id="text-div"
                            className="flex flex-col items-start">
                            <p className="text-xs text-center text-gray-500">
                                Github
                            </p>
                            <p className="text-sm text-center">
                                github.com/marleomac3
                            </p>
                        </div>
                    </div>
                </a>
                <img src={ArrowIcon} alt="Right Arrow" className="w-[10px]" />
            </div>

            <div
                id="calendly-div"
                className="flex w-full justify-between gap-2">
                <a
                    href="https://calendly.com/marionlmcwilliams/30min"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="flex gap-2">
                        <div className="w-8 h-8 bg-[#eceff6] rounded-full flex items-center justify-center">
                            <img
                                src={CallenderIcon}
                                alt="Callender"
                                className="w-4"
                            />
                        </div>
                        <div
                            id="text-div"
                            className="flex flex-col items-start">
                            <p className="text-xs text-center text-gray-500">
                                Calendly
                            </p>
                            <p className="text-sm text-center">
                                calendly.com/marionlmcwilliams/30min
                            </p>
                        </div>
                    </div>
                </a>
                <img src={ArrowIcon} alt="Right Arrow" className="w-[10px]" />
            </div>
            <div id="email-div" className="flex w-full justify-between gap-2">
                <div className="flex gap-2">
                    <EmailButton
                        email="marionlmcwilliams@gmail.com"
                        subject="Resume Inquiry"
                        message="Hello Marion, I have a question about your resume."
                    />
                    <div id="text-div" className="flex flex-col items-start">
                        <p className="text-xs text-center text-gray-500">
                            Email
                        </p>
                        <p className="text-sm text-center">
                            marionlmcwilliams@gmail.com
                        </p>
                    </div>
                </div>
                <img src={ArrowIcon} alt="Right Arrow" className="w-[10px]" />
            </div>
            <div id="phone-div" className="flex w-full justify-between gap-2">
                <div className="flex gap-2">
                    <CallButton phoneNumber="3025630316" />
                    <div id="text-div" className="flex flex-col items-start">
                        <p className="text-xs text-center text-gray-500">
                            Phone
                        </p>
                        <p className="text-sm text-center">+1 (302) 563-0316</p>
                    </div>
                </div>
                <img src={ArrowIcon} alt="Right Arrow" className="w-[10px]" />
            </div>
        </div>
    );
}
