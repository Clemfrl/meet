import React, { Component } from "react";
import EventList from "./EventList";
import { mockData } from "./mock-data";

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleButtonClicked = () => {
    if (!this.state.showDetails) {
      this.setState({
        showDetails: true,
      });
    } else {
      this.setState({
        showDetails: false,
      });
    }
  };

  render() {
    const { event } = this.props;
    return (
      <div className="event">
        <h2 className="summary"></h2>
        <p className="description"></p>
        <p className="time"></p>
        <p className="timezone"></p>
        <p className="location"></p>
        <button
          className="details"
          onClick={() => this.handleButtonClicked()}
        ></button>
      </div>
    );
  }
}
export default Event;
