import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphData } from '../actions/index';

export default class DraftedTable extends Component {
  constructor(props) {
    super(props)
  };

  buildArray() {
  let chartData = [];
    graphData.payload.map(function(item) {
     chartData.push(item);
    });
  return chartData;
  };

  buildArrayForMap(arr) {
  let storage = [];

  }

  render() {
  let arrayOfData = this.buildArray();
  let mapData = this.buildArrayForMap(arrayOfData);

    return (
      <div id="parent">
          <table className="highlight responsive-table">
            <thead>
              <tr>
                  <th data-field="location">Location</th>
                  <th data-field="location">Sport</th>
                  <th data-field="location">Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>taco</td>
              </tr>
            </tbody>
          </table>
      </div>
    );
  }
};
