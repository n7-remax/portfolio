import React from "react";
import "./about.css";

function About() {
  return (
    <section id="about">
      <div className="row">
        <div className="about-intro">
          <h2>About me</h2>
        </div>
        <div className="about-education">
          <p>
            Open International University of Human Development "Ukraine" -
            Software Development
          </p>
        </div>
        <div className="about-content">
          <div className="col-five">
            <ul className="about-list">
              <li>
                <strong>Full name</strong>
                <span>Maksym Vinnytskyi</span>
              </li>
              <li>
                <strong>Age:</strong>
                <span>28</span>
              </li>
              <li>
                <strong>Desired position:</strong>
                <span>Junior Front-End Developer</span>
              </li>
              <li>
                <strong>Email:</strong>
                <span>ditritusa@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="col-five">
            <h3>Skills</h3>
            <p>
              -HTML/HTML5, CSS/CSS3, SASS/SCSS, Less, JavaScript/ES6, JQuery,
              ReactJS, React Native, Git
            </p>
            <p>
              -Visual Studio Code, Sublime Text 3, Adobe Photoshop, Adobe
              Premiere Pro
            </p>
          </div>
        </div>
        <div className="button-section">
          <a
            href="https://drive.google.com/open?id=1JQKfX65VaDoy-aZkn7WZRrGHgVdSJ7kk"
            title="Download CV ENG"
            className="button transition-smooth"
            target="_blank"
            without="true"
            rel="noopener noreferrer"
          >
            Download CV ENG
          </a>
          <a
            href="https://drive.google.com/open?id=1sXuOOWDEYa4SRAShAfLwvN7OWVz17SnS"
            title="Download CV RU"
            className="button transition-smooth"
            target="_blank"
            without="true"
            rel="noopener noreferrer"
          >
            Download CV RU
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
