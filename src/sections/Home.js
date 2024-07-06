// Hero.js
import React from "react";
import Typewriter from "../components/TypeWriter";

const Home = () => {
  return (
    <section id="home" className="bg-gray-100 py-20 min-h-screen flex">
      <div className="container m-auto text-center">
        <h1 className="text-8xl font-bold">Chen Toaff</h1>
        <Typewriter />
        <div className="buttons-media">
          <div className="hover:scale-110">
            <a
              href="http://github.com/chentoaff"
              about="github"
              target="_blank"
            >
              <i className="fa fa-github"></i>
            </a>
          </div>
          <div className="hover:scale-110">
            <a href="https://www.linkedin.com/in/chentoaff/" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <div className="hover:scale-110">
            <a href="https://www.linkedin.com/in/chentoaff/" target="_blank">
              <i className="fa fa-file"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
