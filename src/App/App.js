import React from 'react';
import Intro from './Intro/Intro';

import './../common/style/style.css'
import Main from './Main/Main';
import Footer from './Footer/Footer';
import About from './About/About';

function App() {
  return (
    <div>
      <Intro/>
      <About/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
