import React, { Component } from "react";

class VenueItem extends Component {
  render() {
    return <li className="venueItem">{this.props.venue.venue.name}</li>;
  }
}

export default VenueItem;