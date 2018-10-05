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

export default Map;
