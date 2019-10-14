import React from 'react';
import Intro from './Intro/Intro';

import './../common/style/style.css'
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <Intro/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
