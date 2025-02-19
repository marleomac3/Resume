import React from "react";

const ProjectsButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-white shadow-sm text-black font-bold py-2 px-4 rounded cursor-pointer w-full min-w-full mb-2">
      PROJECTS
    </button>
  );
};

export default ProjectsButton;
