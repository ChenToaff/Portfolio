import React from "react";

const Project = ({ project, reverse }) => {
  return (
    <div
      className={`flex flex-wrap ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } justify-between items-center mb-10`}
    >
      <div className="w-full md:w-1/2 p-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-700 text-justify">{project.description}</p>
        <div className="items-left text-left my-2">
          {project.technologies?.map((skill) => (
            <span key={skill} className="skill-custom hover:scale-110">
              {skill}
            </span>
          ))}
        </div>

        <a href={project.link} about="github" target="_blank">
          <i className="text-4xl fa fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Project;
