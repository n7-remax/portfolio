import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <section className="intro">
        <div className="intro-content">
          <div className="row">
          <h5>Портфолио</h5>
          <h1>Винницкий Максим</h1>
          <p className="intro-position">
	   				<span>Front-end Developer</span>
	   				<span>Верстальщик</span> 
	   			</p>
           <a className="button stroke smoothscroll" href="#about" title="">Обо мне</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
