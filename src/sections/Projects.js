import React from "react";
import Project from "../components/Project";
import noteBoardImg from "../assets/noteBoard.gif";
import TasksImg from "../assets/tasks.gif";

const projects = [
  {
    title: "NoteBoard",
    description:
      "I developed and designed a website using ReactJS and Bootstrap, hosted on GitHub Pages, to showcase my web presence, story, work experience, education, projects, and achievements in an interactive and visually-appealing format.",
    link: "https://github.com/ChenToaff/NoteBoard",
    technologies: ["Express.js", "MongoDB", "React.js", "Bootstrap", "JWT"],
    image: noteBoardImg,
  },
  {
    title: "Tasks",
    description:
      "A comprehensive full-stack task management web application designed to enhance team collaboration and productivity. The application allows users to create projects, invite colleagues, and manage tasks seamlessly through an intuitive Kanban board interface. With real-time updates powered by WebSocket.io",
    technologies: [
      "React",
      " Material-UI",
      "TypeScript",
      "Express",
      "MongoDB",
      "Redis",
      "Passport.js",
      "WebSocket.io",
    ],
    link: "https://github.com/ChenToaff/Tasks",
    image: TasksImg,
  },
];

const Portfolio = () => {
  return (
    <section
      id="projects"
      className="site-section bg-gray-100 py-20 min-h-screen"
    >
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-bold mb-3">Featured Projects</h3>
        <div className="max-w-6xl mx-auto px-4">
          {projects.map((project, index) => (
            <Project key={index} project={project} reverse={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
