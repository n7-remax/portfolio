import React from 'react';
import './intro.css';

function Intro() {
  return (
    <section className="intro">
      <div className="intro-content">
        <h5>Портфолио</h5>
        <h1>Винницкий Максим</h1>
        <p className="intro-position">
          <span>Front-end Developer</span>
          <span>Верстальщик</span>
        </p>
        <a className="button transition-smooth" href="#about" title="">Обо мне</a>
      </div>
      <ul className="intro-social transition-smooth">
        <li><a href="viber://chat?number=+380988328026" title="viber" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-phone"></i></a></li>
        <li><a href="https://t.me/wearenumber_n7" title="telegram" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-telegram"></i></a></li>
        <li><a href="mailto:ditritusa@gmail.com" title="mail" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-envelope-open"></i></a></li>
        <li><a href="https://www.facebook.com/max.shepard.739" title="facebook" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook-square"></i></a></li>
        <li><a href="https://www.linkedin.com/in/maksym-vinnytskyi" title="linkedin" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin"></i></a></li>
        <li><a href="https://github.com/n7-remax" title="github" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github"></i></a></li>
      </ul>
    </section>
  );
}

export default Intro;
