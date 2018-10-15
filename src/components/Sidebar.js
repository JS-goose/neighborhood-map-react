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

  }

  handleInputChange = (event) => {
    this.setState({ query: event.target.value })
    const markers = this.props.venues.map((venue) => {
      const firstMatched = venue.name.toLowerCase().includes(event.target.value.toLowerCase());
      const marker = this.props.markers.find(marker => marker.id === venue.id);
      if (firstMatched) {
        firstMatched.isVisible = true;
      } else {
        firstMatched.isVisible = false;
      }
      return marker;
    })
  }

  render() {
    return (
      <aside id="sidebarContainer">
        <h1 id="sidebarHeader">San Antonio Parks</h1>
        <label htmlFor="filter">Search Venues</label>
        <input id="filter" type="search" placeholder="amusement park" />
        <SidebarList
          {...this.props}
          handleVenueClick={this.props.handleVenueClick}
          onChange={this.handleInputChange}
          />
      </aside>
    );
  }
}

export default Sidebar;
