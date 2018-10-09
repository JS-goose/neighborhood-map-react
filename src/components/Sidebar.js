import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <aside id = "sidebarContainer">
                <div id = "sidebarList">
                <ol>
                    <li>
                        One
                    </li>
                    <li>
                        Two
                    </li>
                    <li>
                        Three
                    </li>
                    <li>
                        Four
                    </li>
                </ol>
                </div>
            </aside>
        )
    }
}

export default Sidebar