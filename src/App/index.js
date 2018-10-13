import React, { Component } from 'react';
import './index.css';

import About from '../About';
import Footer from '../Footer';
import Menu from '../Menu';
import Work from '../Work';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <About />
        <Work />
        <Footer />
      </div>
    );
  }
}

export default App;
