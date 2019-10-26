import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Login } from "../components/Login/Login";
import { Scanner } from "./Scanner/Scanner";
import { StartTrip } from "./StartTrip/StartTrip";
import { Trip } from "./Trip/Trip";

export class Routes extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/scanner" component={Scanner} />
          <Route path="/start-trip" component={StartTrip} />
          <Route path="/trip" component={Trip} />
        </Switch>
      </Router> 
    )
  }
}