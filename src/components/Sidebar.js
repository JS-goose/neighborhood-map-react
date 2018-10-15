import React, { Component } from "react";
import SidebarList from "./SidebarList";

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
  }

  filterVenueListings = () => {};

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
    const markers = this.props.venues.map((venue) => {
      const firstMatched = venue.venue.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
      const marker = this.props.markers.find(
        (marker) => marker.id === venue.venue.id
      );
      // console.log("venue id - " + venue.venue.id)
      // console.log("marker id - " + marker.id)
      if (firstMatched) {
        marker.isVisible = true;
      } else {
        marker.isVisible = false;
      }
      return marker;
    });
    this.props.updateSuperState({ markers });
  };

  render() {
    return (
      <aside id="sidebarContainer">
        <h1 id="sidebarHeader">San Antonio Parks</h1>
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
        />
      </aside>
    );
  }
}

export default Sidebar;
