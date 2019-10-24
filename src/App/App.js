import React from 'react';

import Intro from './Intro/Intro';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Footer from './Footer/Footer';

import './../common/style/style.css'


function App() {
  return (
    <div>
      <Intro/>
      <About/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
