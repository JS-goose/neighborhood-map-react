import React, { Component } from "react";
import SidebarList from "./SidebarList";

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
  }

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
          Powered by
          <a href="https://www.foursquare.com" target="blank">
            {/* Image provided by FourSquare https://www.dropbox.com/sh/webqiiog37nr3n9/AACUMJz5FsCCOVsuzYz2ovI6a/App%20Icons/Foursquare%20City%20Guide?dl=0&preview=Foursquare+Social.png&subfolder_nav_tracking=1*/}
            <img
              id="fourLogo"
              src={require("../images/FoursquareSocial.png")}
              alt="the foursquare logo"
            />
          </a>
        </h1>
        <label htmlFor="filter">Search Venue Listings</label>
        <input
          id="filter"
          type="search"
          placeholder="ex. Six Flags"
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
