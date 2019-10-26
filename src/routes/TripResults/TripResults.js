import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./TripResults.scss";

export class TripResults extends Component {
  render() {
    return (
      <div className="trip-results flex flex-column">
        <div className="trip-results-card">
          <p className="trip-results-card__ride trip-results-card__text">
            Ride data 
          </p>
          <p className="trip-results-card__time trip-results-card__text">
            Time
          </p>
          <p className="trip-results-card__time-result trip-results-card__text">
            29:00
          </p>
          <p className="trip-results-card__price trip-results-card__text">
            Price
          </p>
          <p className="trip-results-card__price-result trip-results-card__text">
            0.5$
          </p>
          <Link to="/"><p className="trip-results-card__payment-details">payment details</p></Link>
        </div>
        <Link to="/scanner">
          <div className="btn btn-green trip-results__button">
            Back to scanning
          </div>
        </Link>
      </div>
    )
  }
}
