import React, { Component } from "react";
import { ErrorAlert } from "./Alert";
class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);
    this.setState({
      numberOfEvents: value,
    });
    if (value < 1 || value > 32) {
      this.setState({
        infoText: "Please choose a number between 1 and 32",
      });
    } else {
      this.setState({
        infoText: "",
      });
    }
  };

  render() {
    //const { numberOfEvents } = this.props;
    return (
      <div className="number-of-events">
        <label className="number-of-events-label">Number of Events: </label>
        <br />
        <input
          type="text"
          className="event-number-input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        ></input>
        <ErrorAlert text={this.state.infoText} />
      </div>
    );
  }
}

export default NumberOfEvents;
