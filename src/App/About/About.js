import React from 'react';
import './about.css';

function About() {
  return (
    <section id="about">
      <div className="row">
        <div className="about-intro">
          <h2>Обо мне</h2>
        </div>
        <div className="about-education">
          <p>Открытый международный университет развития человека "Украина" - Разработка программного обеспечения</p>
        </div>
        <div className="about-content">
          <div className="col-five">
            <ul className="about-list">
              <li>
                <strong>Ф.И.О.</strong>
                <span>Винницкий Максим</span>
              </li>
              <li>
                <strong>Полных лет:</strong>
                <span>27</span>
              </li>
              <li>
                <strong>Желаемая должность:</strong>
                <span>Junior Front-End Developer</span>
              </li>
              <li>
                <strong>Email:</strong>
                <span>ditritusa@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="col-five">
            <h3>Навыки</h3>
            <p>-HTML/HTML5, CSS/CSS3, JavaScript/ES6, ReactJS, Git</p>
            <p>-Visual Studio Code, Sublime Text 3, Adobe Photoshop, Adobe Premiere Pro</p>
          </div>
        </div>
        <div class="button-section">
          <a href="mailto:ditritusa@gmail.com" title="Предложить работу" className="button transition-smooth" target="_blank" without rel="noopener noreferrer">Нанять</a>
          <a href="https://www.dropbox.com/s/8stixxbuh2xicai/CV.docx?dl=0" title="Download CV" className="button transition-smooth" target="_blank" without rel="noopener noreferrer">Download CV</a>
        </div>
      </div>
    </section>
  );
}

export default About;
