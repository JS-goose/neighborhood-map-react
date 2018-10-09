import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map";
import axios from "axios";
import Sidebar from "./components/Sidebar";

class App extends Component {
  state = {
    venues: [],
  };
  
  render() {
    return (
      <div className="App">
      {console.log(this.state)}
        <Sidebar {...this.state} />
        <Map {...this.state} />
      </div>
    );
  }
}

export default App;
