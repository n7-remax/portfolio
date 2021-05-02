import React from "react";
import SocialList from "../SocialList/SocialList";

function Intro() {
  return (
    <section className="intro">
      <div className="intro-content">
        <h1>Maksym Vinnytskyi</h1>
        <p className="intro-position">
          <span>Front-End Developer</span>
        </p>
      </div>
      <SocialList className="intro-social transition-smooth" />
    </section>
  );
}

export default Intro;
