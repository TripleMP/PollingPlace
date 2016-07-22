import React, { Component } from 'react';
import { Link } from 'react-router';
import DraftedGraph from '../containers/graph_creater';
import DraftedTable from '../containers/table_creater';
import { graphData } from '../actions/index';

export default class Analytics extends Component {

  render() {
    return (
      <div>
      <h1>Analytics</h1>
        <div className="center-align flow-text">
          <p>Based on the sports that are played in your area, Click the button to get a recommnedation!</p>
          <button className="btn red waves-effect waves-light btn" type="submit">Best Location</button>
        </div>
        <div>
          <DraftedGraph />
        </div>
      </div>
    )
  }
}