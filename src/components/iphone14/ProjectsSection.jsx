import React, { useState } from "react";
import ProjectsButton from "./buttons/ProjectsButton";

export default function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full">
      <div className="w-full">
        <ProjectsButton onClick={toggleExpand} />
      </div>
      {isExpanded && (
        <div id="content-div" className="shadow-inner-xl mb-2">
          <ul className="p-2">
            <li>
              <h2 id="list-header">Fullstack Battleship Game</h2>
              <li id="list-content">
                Developing a full-stack Battleship game using React, Next.js,
                Tailwind CSS, and Vite.
              </li>
              <li id="list-content">
                Implementing core gameplay features, a user-friendly interface,
                and an AI opponent. Exploring state management and testing
                strategies.
              </li>
            </li>
            <li>
              <h2 id="list-header">Blackjack Game made with Python</h2>
              <li id="list-content">
                Developing a Python-based Blackjack game using TDD. Implementing
                core game logic, building a GUI, and developing an AI opponent
              </li>
              <li id="list-content">
                Features will include: Basic AI w/ default strategy, GUI,
                Betting System, and more.
              </li>
            </li>
            <li>
              <h2 id="list-header">Pokemon Pokedex API</h2>
              <li id="list-content">
                Developing a RESTful Pokemon Pokedex API using Node.js and
                Express.js. Implementing core API endpoints for fetching Pokemon
                data and planning to integrate with a frontend and database for
                user interaction.
              </li>
              <li id="list-content">
                Looking ahead to expand the API to include additional endpoints,
                a GUI, and features such as a functioning search feature,
                regional filtering, Pokedex sharing, gamification badges, and
                more.
              </li>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
