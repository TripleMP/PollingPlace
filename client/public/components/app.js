import React, { Component } from 'react';
import { Link } from 'react-router';
import SearchHome from '../containers/searchHome';

export default class App extends Component {

  render() {
    return (
      <div>
        <h1 className="center-align">PickUp</h1>
        <div className="valign-wrapper">
          <div className="valign center-block">
            <button className="btn red waves-effect waves-light btn"><Link to="/Search" className="linkFont">Search</Link></button>
            <button className="btn red waves-effect waves-light btn"><Link to="/Add" className="linkFont">Add</Link></button>
            <button className="btn red waves-effect waves-light btn"><Link to="/Images" className="linkFont">About Page</Link></button>

          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}
