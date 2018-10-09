import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'
import axios from 'axios';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Map />
      </div>
    );
  }
}

export default App;
