import React, { Component } from 'react';
import './index.css';

class Menu extends Component {
  render() {
    return (
      <nav className="Menu">
        <ul>
        <li>Bryce Bortree</li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Work">Work</a>
        </li>
        <li>
          <a href="#Footer">Elsewhere</a>
        </li>
        <li>
          <a href="#Resume">Resume</a>
        </li>  
      </ul>
       
      </nav>
    );
  }
}

export default Menu;
