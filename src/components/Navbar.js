import React, { Component } from "react";

class Navbar extends Component {
  handleButtonClick = () => {
    let sidebar = document.getElementById("sidebarContainer");
    if (sidebar.className !== "hidden") {
    sidebar.className = "hidden";
    } else {
        sidebar.className = null;
    }

  };
  render() {
    return (
      <div id="navbar">
        <button id="menu" onClick={this.handleButtonClick}>
          Menu
        </button>
        <h1 id="navbarHeader">San Antonio Parks</h1>
      </div>
    );
  }
}

export default Navbar;
