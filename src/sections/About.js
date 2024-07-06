// About.js
import React from "react";
import profilePic from "../assets/chen-toaff.png";

const About = () => {
  const skills = [
    "Javascript",
    "Typescript",
    "Python",
    "MySQL",
    "React.js",
    "Express.js",
    "Flask",
    "Postgresql",
    "MongoDB",
    "Redis",
    "Material-UI",
    "Tailwind CSS",
    "Bootstrap",
    "HTML / CSS",
    "Docker",
    "NGINX",
    "Git",
    "Linux",
  ];

  return (
    <section
      id="about"
      className="site-section bg-white py-20 min-h-screen transition ease-in-out delay-150"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 gap-y-9">
          <div className="col-lg-6 counter">
            <img
              src={profilePic}
              className="mx-auto my-4 w-48 h-48 rounded-full"
            />
            <p className="m-auto text-justify">
              Hi! I'm Chen, a software developer who loves to transform ideas
              into reality using code. I enjoy being challenged and engaging
              with projects that require me to work outside my comfort zone and
              knowledge set.
            </p>
          </div>
          <div className="mb-0 my-7 md:my-0">
            <div className="sm-title">
              <h1 className="text-center text-6xl font-bold">Skills</h1>
              <p className="my-3 text-justify">
                Here you can see my skills, I try to update my knowledge every
                day and experience new technologies.
              </p>
            </div>
            <div className="flex flex-wrap justify-evenly">
              {skills.map((skill) => (
                <span key={skill} className="skill-custom hover:scale-110">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
