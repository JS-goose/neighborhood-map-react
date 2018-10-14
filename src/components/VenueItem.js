import React, { Component } from "react";

class VenueItem extends Component {
  render() {
    return (
      <li
        className="venueItem"
        onClick={() => this.props.handleVenueClick(this.props)}
      >
        <img
          src={
            this.props.venue.venue.categories[0].icon.prefix +
            "32" +
            this.props.venue.venue.categories[0].icon.suffix
          }
          alt={this.props.venue.venue.categories[0].name}
        />

        {this.props.venue.venue.name}
      </li>
    );
  }
}

export default VenueItem;
