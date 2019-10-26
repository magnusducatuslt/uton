import React, {Component} from "react";
import {Link} from "react-router-dom";
import Timer from "react-compound-timer";
import "./Trip.scss";

export class Trip extends Component {
  render() {
    return (
      <div className="trip">
        <div className="trip-info flex">
          Start time: 2:00
        </div>
        <div className="trip-timer">
          <Timer>
            <Timer.Hours />h:
            <Timer.Minutes />m:
            <Timer.Seconds />s 
          </Timer>
        </div>
        <Link to='/trip-results'>
          <div className="btn btn-green trip-button">Finish the trip</div>
        </Link>
      </div>
    )
  }
}