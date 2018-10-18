import React, { Component } from "react";
import SidebarList from "./SidebarList";

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
        <h1 id="sidebarHeader">San Antonio Parks</h1>
        {/* <div hideSideBar={this.hideSideBar()} id="hamburger">&#9776;</div> */}
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
