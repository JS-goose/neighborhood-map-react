import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map";
import axios from "axios";
import Sidebar from "./components/Sidebar";

//*! API Keys
const fs_client_api = `${process.env.REACT_APP_FS_CLIENT}`;
const fs_secret_api = `${process.env.REACT_APP_FS_SECRET}`;
const GM_API_KEY = `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;

class App extends Component {
  state = {
    venues: [],
  };

  //* This is a lifecycle event that fires after the component is loaded into the DOM and renders the map
  componentDidMount() {
    this.getVenues();
  }
  //* This function loads the map
  loadMap = () => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${GM_API_KEY}&callback=initMap`
    );
    window.initMap = this.initMap;
  };

  //* This function initalizes the map
  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 29.424122, lng: -98.493628 },
      zoom: 11,
    });

    //* Loops over all venue items and dynamically creates markers for them
    this.state.venues.map((index) => {
      let position = {
        lat: index.venue.location.lat,
        lng: index.venue.location.lng,
      };
      let title = index.venue.name;
      let marker = new window.google.maps.Marker({
        map: map,
        position: position,
        title: title,
        animation: window.google.maps.Animation.DROP,
        id: index,
      });

      //* Creates a new info window instance to use on markers
      let infowindow = new window.google.maps.InfoWindow();

      // *This is the information displayed in the infowindow
      let content = `
        <div id="infowindow">
        <h1 class = "infoHeader">
          ${index.venue.name}
        </h1>
        <p>
          ${index.venue.location.formattedAddress[0]}
        </p>
        <p>
          ${index.venue.location.formattedAddress[1]}
        </p>
        </div>`;

      // * Adds click event listener to markers
      marker.addListener("click", () => {
        // * Resets info window and content when marker is clicked
        infowindow.setContent(content);

        // * Opens info window on marker when clicked
        infowindow.open(map, marker);
      });
    });
  };

  //* This function provides search parameters to Foursquare to match against queries
  getVenues = () => {
    const endpoint = "https://api.foursquare.com/v2/venues/explore?";
    const parameters = {
      client_id: `${fs_client_api}`,
      client_secret: `${fs_secret_api}`,
      query: "fun",
      section: "",
      near: "San Antonio",
      v: "20181008",
    };

    //* Here we request data using Axios https://github.com/axios/axios
    axios
      .get(endpoint + new URLSearchParams(parameters))
      .then((response) => {
        // console.log(response);
        //* Setting state for venues
        this.setState(
          {
            venues: response.data.response.groups[0].items,
          },
          this.loadMap()
        ); /* //*the loadMap call was added here to load once the venues has been populated.  
            //*If this call were to be in componentDidMount our loop would have no info to loop over*/
      })
      .catch((error) => {
        console.log(`Error in Axios get: ${error}`);
      });
  };

  render() {
    return (
      <div className="App">
        <main id="main">
          <Sidebar {...this.state} />
          <Map {...this.state} />
        </main>
      </div>
    );
  }
}

// *This function creates a useable script so we can insert Google Maps without using any 3rd party loaders
// *and was used with permission from Elharony at this link
// *https://www.youtube.com/watch?v=W5LhLZqj76s&index=2&list=PLBDR9JgF-I5Qz6A2TjO2bslaltdxwWy8i
function loadScript(url) {
  let index = window.document.getElementsByTagName("script")[0];
  let script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default App;
