import React, { Component } from "react";
import VenueItem from "./VenueItem";

class SidebarList extends Component {
  render() {
    return (
      <ol id="venueList">
        {this.props.venues &&
          this.props.venues.map((venue, venueKey) => (
            <VenueItem key={venueKey}/>
          ))}
      </ol>
    );
  }
}

export default SidebarList;
