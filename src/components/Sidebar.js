import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <nav id="navContainer">
        <div id="nav">
          <h1 className="header">Neighborhood Maps</h1>
          <button id="closeNav">X</button>
        </div>

        <aside id="sidebarContainer">
          <div id="sidebarList">
            <ol>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
              <li>Four</li>
            </ol>
          </div>
        </aside>
      </nav>
    );
  }
}

export default Sidebar;
