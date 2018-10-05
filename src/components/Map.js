import React, { Component } from "react";

initMap = () => {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

class Map extends Component {
  render() {
    return (
      <main>
        <div id="map" />
      </main>
    );
  }
}

// *This function creates a useable script so we can insert Google Maps without using any 3rd party loaders
function loadScript(url) {
    let index = window.document.getElementsByTagName("script")[0];
    let script = window.document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);

}

export default Map;
