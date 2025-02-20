import React from "react";
import LinksSection from "./LinksSection";

export default function HeaderSection() {
    return (
        <div className="w-full pt-2">
            <h1 className="text-2xl font-bold text-center text-black">
                Marion L. McWilliams III
            </h1>
            <h2 className="text-center">Full Stack Software Engineer</h2>
            <LinksSection />
        </div>
    );
}
