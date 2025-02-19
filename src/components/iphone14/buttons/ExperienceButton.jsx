import React from "react";

const ExperienceButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-white shadow-sm text-black font-bold py-2 px-4 rounded cursor-pointer w-full min-w-full mb-2">
      EXPERIENCE
    </button>
  );
};

export default ExperienceButton;
