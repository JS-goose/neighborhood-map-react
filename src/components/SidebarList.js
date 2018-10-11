import React, { Component } from "react";
import VenueItem from "./VenueItem";

const SidebarList = ({ venues, handleVenueClick, infowindow }) => {
  return (
    <ol id="venueList">
      {venues &&
        venues.map((venue, venueKey) => (
          <VenueItem
            key={venueKey}
            venue={venue}
            handleVenueClick={handleVenueClick}
            infowindow={infowindow}
          />
        ))}
    </ol>
  );
};

export default SidebarList;
