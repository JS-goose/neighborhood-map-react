import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
    //   <nav id="navContainer">
    //     <div id="nav">
    //       <h1 className="header">Neighborhood Maps</h1>
    //       <button id="closeNav">X</button>
    //     </div>

        <aside id="sidebarContainer">
        <h1 id="sidebarHeader">San Antonio</h1>
            <ol>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
              <li>Four</li>
            </ol>
        </aside>
    //   </nav>
    );
  }
}

export default Sidebar;
