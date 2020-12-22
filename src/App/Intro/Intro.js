import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialList from "../SocialList/SocialList";

function Intro() {
  return (
    <section className="intro">
      <div className="intro-content">
        <h5>Portfolio</h5>
        <h1>Maksym Vinnytskyi</h1>
        <p className="intro-position">
          <span>Front-End Developer</span>
        </p>
        <AnchorLink className="button transition-smooth" href="#about" title="">
          About me
        </AnchorLink>
      </div>
      <SocialList className="intro-social transition-smooth" />
    </section>
  );
}

export default Intro;
