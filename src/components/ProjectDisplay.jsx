import React from "react";
import Project from "./Project";
import { PROJECTS } from "../constants/constants";

function ProjectDisplay() {
  return (
    <div className="snap-y flex flex-auto items-center justify-center p-5">
      <div className="grid grid-cols-1 gap-4 p-5 md:grid-rows-auto md:max-w-7xl md:max-h-screen lg:grid-cols-2 lg:gap-10">
        {PROJECTS.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectDisplay;
