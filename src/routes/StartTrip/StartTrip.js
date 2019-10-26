import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./StartTrip.scss";

export class StartTrip extends Component {
  render() {
    return (
      <div className="start-trip flex flex-column">
        <div className="start-trip-text">
          <p className="start-trip-text__number">Device number 67685</p>
          <p className="start-trip-text__status">Enabled</p>
        </div>
        <Link to="/trip">
          <div className="start-trip-button flex">
            <p className="start-trip-button__text start-trip-text">Start a trip</p>
          </div>
        </Link>
      </div>
    )
  }
}