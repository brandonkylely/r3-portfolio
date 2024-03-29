import React from "react";
import projectData from "./projects/projects.json";

export default function Projects({}) {
  return (
    <div className="itimFont mt-20 w-900px-min w-600px text-lg font-bold grid xl:grid-cols-3 grid-cols-2">
      <header className="absolute text-3xl xl:ml-10 -ml-10 -mt-14 itimFont">
        Projects
        <div className="w-80 -mt-4">━━━━</div>
      </header>

      {projectData.map((project) => {
        return (
          <div className="" key={project.key}>
            <div className="z-10 absolute font-bold text-3xl xl:w-56 w-60 h-32 xl:mx-10 xl:my-0 my-4 border-1 border-black rounded-3xl bg-black xl:bg-opacity-0 xl:text-opacity-0 hover:bg-opacity-50 hover:text-opacity-80 bg-opacity-50 text-opacity-80 text-center py-12 text-white">
              {project.name}
              <br />
              <div className="flex justify-around z-20 text-3xl">
                {project.url && (
                  <a href={project.url} target="_blank">
                    <i className="fa-solid fa-location-arrow"></i>
                  </a>
                )}{" "}
                {project.github && (
                  <a href={project.github} target="_blank">
                    <i className="fa-brands fa-github"></i>
                  </a>
                )}
              </div>
            </div>
            <div
              className="z-0 xl:w-56 w-60 h-32 xl:mx-10 xl:my-0 my-4 border-1 border-black rounded-3xl bg-no-repeat bg-center lg:overflow-hidden bg-cover"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div className="xl:static text-xl absolute text-center w-56 mx-10 mb-4 invisible xl:visible">
              {project.languages}
            </div>
          </div>
        );
      })}
    </div>
  );
}
