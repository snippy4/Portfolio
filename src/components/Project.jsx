import React from "react";
import github from "/assets/github_.png";
import link from "/assets/link_.png";

function Project({
  image,
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  animationClass = "animate-smooth_right2",
}) {
  return (
    <>
      <div className="animate-smooth_top">
        <img
          className="w-full h-auto rounded-xl border border-zinc-700 object-cover"
          src={image}
          alt={`${title} Image`}
        />
      </div>

      <div
        className={`bg-zinc-800 p-3 rounded-2xl flex flex-col relative ${animationClass} border border-zinc-700`}
      >
        <h className="text-white font-semibold text-4xl p-2">{title}</h>
        <p className="text-slate-400 p-2 text-xl">{description}</p>
        <div className="grid grid-cols-3 lg:grid-cols-6 grid-rows-auto max-h-full p-2">
          {technologies.map((tech, index) => (
            <h
              key={index}
              className="text-black border border-black bg-white rounded-xl p-1 font-semibold justify-center flex hover:scale-90 transition text-xs md:text-lg"
            >
              {tech}
            </h>
          ))}
        </div>
        <div className="grid grid-cols-2 grid-rows-auto p-1">
          {githubUrl && (
            <a href={githubUrl}>
              <img
                className="rounded-full hover:brightness-150 hover:drop-shadow-xl hover:scale-90 transition scale-75 max-h-60"
                src={github}
                alt="GitHub"
              />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl}>
              <img
                className="rounded-full hover:brightness-150 hover:drop-shadow-xl hover:scale-90 transition scale-75 max-h-60"
                src={link}
                alt="Live Site"
              />
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default Project;
