import React, { Component } from "react";

class Map extends Component {
  // *This function creates a useable script so we can insert Google Maps without using any 3rd party loaders
  loadMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCeg7QO_VyQ3FWMQexN8WPLJvGSDXOynuc&callback=initMap"
    );
  };

  initMap = () => {
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
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

function loadScript(url) {
  let index = window.document.getElementsByTagName("script")[0];
  let script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default Map;
