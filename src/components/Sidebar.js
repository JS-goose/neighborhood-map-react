import React, { Component } from "react";
import SidebarList from "./SidebarList";

class Sidebar extends Component {
  render() {
    return (
      <aside id="sidebarContainer">
        <h1 id="sidebarHeader">San Antonio</h1>
        <label htmlFor="filter">Search Venues</label>
        <input id="filter" type="search" placeholder="amusement park"></input>
        <SidebarList {...this.props}/>
      </aside>
    );
  }
}

export default Sidebar;