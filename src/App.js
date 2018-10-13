import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import { timingSafeEqual } from "crypto";

//*! API Keys
// const fs_client_api = `${process.env.REACT_APP_FS_CLIENT}`;
// const fs_secret_api = `${process.env.REACT_APP_FS_SECRET}`;
// const GM_API_KEY = `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;

class App extends Component {
  state = {
    venues: [],
    markers: [],
  };

  //* This is a lifecycle event that fires after the component is loaded into the DOM and renders the map
  componentDidMount() {
    this.getVenues();
  }

  // toggleBounce = () => {
  //   if (this.state.markers.getAnimation() !== null) {
  //     this.state.markers.setAnimation(null);
  //   } else {
  //     this.state.markers.setAnimation(window.google.maps.Animation.BOUNCE);
  //   }
  // }

  //* This function loads the map
  loadMap = () => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyCeg7QO_VyQ3FWMQexN8WPLJvGSDXOynuc&callback=initMap`
    );
    window.initMap = this.initMap;
  };

  handleVenueClick = (venueListItem) => {
    const marker = this.state.markers;
    let content = `
      <div id="infowindow">
      <h1 class = "infoHeader">
        ${venueListItem.venue.venue.name}
      </h1>
      <p>
        ${venueListItem.venue.venue.location.formattedAddress[0]}
      </p>
      <p>
        ${venueListItem.venue.venue.location.formattedAddress[1]}
      </p>
      </div>`;
    marker.filter((marker) => {
      if (marker.id === venueListItem.venue.venue.id) {
        this.state.infowindow.setContent(content);
        this.state.infowindow.open(this.initMap, marker);

        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(window.google.maps.Animation.BOUNCE);
        }
      }
    });
  };

  //* This function initalizes the map
  initMap = () => {
    //* Creates a new info window instance to use on markers and then sets it to state
    let infowindow = new window.google.maps.InfoWindow();
    this.setState({ infowindow: infowindow });

    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 29.424122, lng: -98.493628 },
      zoom: 11,
      styles: [
        {
          elementType: "geometry",
          stylers: [
            {
              hue: "#ff4400",
            },
            {
              saturation: -68,
            },
            {
              lightness: -4,
            },
            {
              gamma: 0.72,
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.icon",
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry",
          stylers: [
            {
              hue: "#0077ff",
            },
            {
              gamma: 3.1,
            },
          ],
        },
        {
          featureType: "water",
          stylers: [
            {
              hue: "#00ccff",
            },
            {
              gamma: 0.44,
            },
            {
              saturation: -33,
            },
          ],
        },
        {
          featureType: "poi.park",
          stylers: [
            {
              hue: "#44ff00",
            },
            {
              saturation: -23,
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              hue: "#007fff",
            },
            {
              gamma: 0.77,
            },
            {
              saturation: 65,
            },
            {
              lightness: 99,
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [
            {
              gamma: 0.11,
            },
            {
              weight: 5.6,
            },
            {
              saturation: 99,
            },
            {
              hue: "#0091ff",
            },
            {
              lightness: -86,
            },
          ],
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              lightness: -48,
            },
            {
              hue: "#ff5e00",
            },
            {
              gamma: 1.2,
            },
            {
              saturation: -23,
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "labels.text.stroke",
          stylers: [
            {
              saturation: -64,
            },
            {
              hue: "#ff9100",
            },
            {
              lightness: 16,
            },
            {
              gamma: 0.47,
            },
            {
              weight: 2.7,
            },
          ],
        },
      ],
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
        id: index.venue.id,
      });

      // * Pushes markers to state after they have been created`
      this.setState(() => this.state.markers.push(marker));

      // *This is the information displayed in the infowindow upon clicking a marker
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
        // * Resets info window content when marker is clicked
        this.setState({ content: content });
        // * Sets info window content based on state
        this.state.infowindow.setContent(this.state.content);
        // * Opens info window on marker when clicked
        this.state.infowindow.open(map, marker);
      });
    });
  };

  //* This function provides search parameters to Foursquare to match against queries
  getVenues = () => {
    const endpoint = "https://api.foursquare.com/v2/venues/explore?";
    const parameters = {
      client_id: "SHKPWDT0OVUNMDM400IYZ45CV0CWBKIPDHLD3QMTLYFMMNH4",
      client_secret: "ZOT1OGISO2HZG0WVP4B5N50XR04SDA3Y2Y4GMLAKEA0LGLVY",
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
          <Sidebar {...this.state} handleVenueClick={this.handleVenueClick} />
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
