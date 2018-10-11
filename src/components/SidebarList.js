import React, { Component } from "react";
import VenueItem from "./VenueItem";

const SidebarList = ({ venues, handleVenueClick }) => {
  return (
    <ol id="venueList">
      {venues &&
        venues.map((venue, venueKey) => (
          <VenueItem
            key={venueKey}
            venue={venue}
            handleVenueClick={handleVenueClick}
          />
        ))}
    </ol>
  );
};

export default SidebarList;
