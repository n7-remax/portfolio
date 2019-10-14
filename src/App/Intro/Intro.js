import React from 'react';
import './intro.css';

function Intro() {
  return (
    <section className="intro">
      <div className="intro-content">
        <div className="row">
          <h5>Портфолио</h5>
          <h1>Винницкий Максим</h1>
          <p className="intro-position">
            <span>| Front-end Developer | </span>
            <span>Верстальщик |</span>
          </p>
          <a className="button stroke smoothscroll" href="#about" title="">Обо мне</a>
        </div>
      </div>
      <ul className="intro-social">
        <li><a href="viber://chat?number=+380988328026" title="viber" target="_blank">
          <i className="fa fa-viber"></i></a></li>
        <li><a href="https://t.me/wearenumber_n7" title="telegram" target="_blank">
          <i className="fa fa-telegram"></i></a></li>
        <li><a href="mailto:ditritusa@gmail.com" title="mail" target="_blank">
          <i className="fa fa-envelope-open"></i></a></li>
        <li><a href="https://www.facebook.com/" title="facebook" target="_blank">
          <i className="fa fa-facebook-square"></i></a></li>
        <li><a href="https://www.linkedin.com/in/" title="linkedin" target="_blank">
          <i className="fa fa-linkedin"></i></a></li>
        <li><a href="https://github.com/" title="github" target="_blank">
          <i className="fa fa-github"></i></a></li>
      </ul>
    </section>
  );
}

export default Intro;
