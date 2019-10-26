import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Login.scss";

export class Login extends Component {
  render () {
    return (
      <div className="login-wrap">
        <div className="login flex flex-column">
          <h2 className="login__headline">Sharing App</h2>
          <div className="login-content flex flex-column">
            <input placeholder="Email" className="input login-content__email" /> 
            <input placeholder="Password" className="input login-content__pass" />
            <Link to="/scanner">
              <button className="btn btn-green login-content__btn">
                  Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}