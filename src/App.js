import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
