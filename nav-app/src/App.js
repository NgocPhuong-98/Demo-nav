import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import './components/Home';
import './components/Topics';
import './components/About';

import Home from './components/Home'
import Topics from './components/Topics';
import About from './components/About';

class App extends Component { 
  render()  {
    return  (
      <BrowserRouter>
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
 
          <hr />
          <div className="main-route-place">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </div>
        </div>
      </BrowserRouter>
    );
  } 
}
export default App;
