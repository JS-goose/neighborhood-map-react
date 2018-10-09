import React, { Component } from "react";

class VenueItem extends Component {
  render() {
    return <li>{this.props.venue}</li>;
  }
}

export default VenueItem;
