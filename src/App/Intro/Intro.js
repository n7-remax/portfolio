import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './intro.css';
import SocialList from '../SocialList/SocialList';

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
        <AnchorLink className="button transition-smooth" href='#about' title="">Обо мне</AnchorLink>
      </div>
      <SocialList className="intro-social transition-smooth"/>
    </section>
  );
}

export default Intro;
