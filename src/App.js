import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'
import axios from 'axios';

class App extends Component {

  getVenues = () => {
    const endpoint = 'https://api.foursquare.com/v2/venues/explore';
    const parameters = {
      clientId: "",
      clientSecret: "",
      query: "",
      section: "",
      near: "San Antonio"
    }

    axios.get(endpoint + new URLSearchParams(parameters))
    .then(response => {
      console.log(response)
    }).catch(error => {
      console.log(`Error in Axios get: ${error}`)
    });

  }
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
