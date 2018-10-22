import React, { Component } from "react";
import SidebarList from "./SidebarList";
// import Hamburger from "./Hamburger";

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
  }

  // hideSideBar = () => {
  //   let menu = document.getElementById("hamburger");
  //   menu.addEventListener("click", () => {
  //     console.log("click");
  //   });
  // };

  filterVenueListings = () => {
    if (this.state.query.trim !== "") {
      const venues = this.props.venues.filter((venueListing) =>
        venueListing.venue.name
          .toLowerCase()
          .includes(this.state.query.toLowerCase())
      );
      return venues;
    }
    return this.props.venues;
  };

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
    const markers = this.props.venues.map((venue) => {
      const firstMatched = venue.venue.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
      const marker = this.props.markers.find(
        (marker) => marker.id === venue.venue.id
      );
      if (firstMatched) {
        marker.setVisible(true);
      } else {
        marker.setVisible(false);
      }
      return marker;
    });
    this.props.updateSuperState({ markers: markers });
  };

  render() {
    return (
      <aside id="sidebarContainer">
        <h1 id="sidebarHeader">
          <a href="https://www.foursquare.com" target="blank">
          <img
            id="fourLogo"
            src={require("../images/Powered-by-Foursquare-full-color-300.png")}
            alt="the foursquare logo"
          />
          </a>
        </h1>
        <label htmlFor="filter">Search Venues</label>
        <input
          id="filter"
          type="search"
          placeholder="amusement park"
          onChange={this.handleInputChange}
        />
        <SidebarList
          {...this.props}
          handleVenueClick={this.props.handleVenueClick}
          venues={this.filterVenueListings()}
        />
      </aside>
    );
  }
}

export default Sidebar;
