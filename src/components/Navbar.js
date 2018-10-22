import React, { Component } from "react";

class Navbar extends Component {
  handleButtonClick = () => {
    let sidebar = document.getElementById("sidebarContainer");
    let map = document.getElementById("map");
    if (sidebar.className !== "hidden") {
      sidebar.className = "hidden";
      map.className = "wideMap";
    } else {
      sidebar.className = null;
      map.className = "map";
    }
  };
  render() {
    return (
      <nav id="nav">
        <div id="navbar">
          <button id="menu" onClick={this.handleButtonClick}>
            Menu
          </button>
        </div>
        <h1 id="navbarHeader">San Antonio Parks</h1>
      </nav>
    );
  }
}

export default Navbar;
