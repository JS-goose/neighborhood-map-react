import React, { Component } from "react";
const GM_API_KEY = `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;

class Map extends Component {
  //* This is a lifecycle event that fires after the component is loaded into the DOM and renders the map
  componentDidMount() {
    this.loadMap();
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
  };

  render() {
    return (
      <main>
        <div id="map" />
      </main>
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

export default Map;
