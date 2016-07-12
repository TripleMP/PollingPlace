import React, { Component } from 'react';
import NavBar from './navBar';
import { Link } from 'react-router';

export default class App extends Component {

  render() {
    return (
      <div>
        <h1>Anything like hello world, i dont care, please god change</h1>
        <ul>
          <li><Link to="/Search">Search</Link></li>
          <li><Link to="/Add">Add</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}