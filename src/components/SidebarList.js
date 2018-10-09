import React, { Component } from "react";
import VenueItem from "./VenueItem";

class SidebarList extends Component {
  render() {
    return (
      <ol id="venueList">
      {console.log(this.props.venues)}
      </ol>
    );
  }
}

export default SidebarList;
