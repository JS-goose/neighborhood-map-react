import React, { Component } from "react";

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.hideSideBar = this.hideSideBar.bind(this);
    this.state = {
      active: false,
    };
  }
  hideSideBar = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  render() {
    return (
      <div
        id="hamburger"
        className={this.state.active ? "hidden" : null}
        onClick={this.hideSideBar}
      >
        &#9776;
      </div>
    );
  }
}

export default Hamburger;
