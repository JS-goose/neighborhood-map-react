import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'
import axios from 'axios';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Map />
        <Sidebar />
      </div>
    );
  }
}

export default App;
