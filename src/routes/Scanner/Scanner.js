import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import QrReader from 'react-qr-scanner'
import "./Scanner.scss";

export class Scanner extends Component {
  state = {
    delay: 100,
    result: 'No result',
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({isRedirect: true});
    }, 5000);
  }
  handleScan = (data) => {
    this.setState({
      result: data,
    })
  }
  render() {
    return (
      <div className="scanner">
        <div className="scanner-header flex">
          <p className="scanner-header__text scanner__text">Scan QR code</p>
        </div>
        <QrReader
          delay={this.state.delay}
          style={{ width: '100%' }}
          onScan={this.handleScan}
          />
        <div className="scanner-description">
          <p className="scanner-description-state scanner__text">Scanning</p>
          <div className="scanner-description-text scanner__text">
            <p className="scanner-description-text__headline">Align QR Code</p>
            <p className="scanner-description-text__description">to full inside the frame</p>
          </div>
        </div>
        {this.state.isRedirect && <Redirect to="/start-trip" />}
      </div>
    )
  }
}