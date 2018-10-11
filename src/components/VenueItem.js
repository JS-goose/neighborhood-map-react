import React, { Component } from "react";

class VenueItem extends Component {
  render() {
    return (
      <li
        className="venueItem"
        onClick={() => this.props.handleVenueClick(this.props)}
      >
        {this.props.venue.venue.name}
      </li>
    );
  }
}

export default VenueItem;
