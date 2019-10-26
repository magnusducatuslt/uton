import React, {Component} from 'react';
import { Routes } from './routes/Router';
import './assets/styles/settings.scss';

export default class App extends Component {
  render () {
    return (
      <div className="app-wrap">
        <Routes />
      </div>
    )
  }
}
