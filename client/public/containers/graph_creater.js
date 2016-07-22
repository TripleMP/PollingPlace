import React, { Component } from 'react';
import { Link } from 'react-router';
import rd3 from 'react-d3';
import { graphData } from '../actions/index';
const BarChart = rd3.BarChart;


export default class DraftedGraph extends Component {
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

  extractLocations(array) {
  let storage = {};
    for(var key in array) {
      if(storage.hasOwnProperty(array[key].location)) {
        storage[array[key].location] = storage[array[key].location] + 1;
      } else {
        storage[array[key].location] = 1;
      }
    }
    return storage;
  };

  extractSports(array) {
  let storage = {};
    for(var key in array) {
      if(storage.hasOwnProperty(array[key].sport)) {
        storage[array[key].sport] = storage[array[key].sport] + 1;
      } else {
        storage[array[key].sport] = 1;
      }
    }
    return storage;
  };

  sportChartData(sports) {
  let barData = [];
  let value1 = [];

    for(var key in sports) {
      value1.push({"x": key, "y": sports[key]})
    }

    barData.push({"values": value1});
    return barData;
  };

  locationsportChartData(locations) {
  let barData = [];
  let value1 = [];

      for(var key in locations) {
        value1.push({"x": key, "y": locations[key]})
      }

      barData.push({"values": value1});
      return barData;
    };

  sportsByLocation(sports, locations, array) {
  let storageSport = {};
  let storageLocation = {};

    for(var sport in sports) {
      storageSport[sport] = [];
    }

    for(var key in array) {
      storageLocation[array[key].location] = array[key].sport;
    }

    for(var place in storageLocation) {
      if(storageSport.hasOwnProperty(storageLocation[place])) {
          storageSport[storageLocation[place]].push(place, locations[place]);
      }
    }
    console.log(storageSport);
    return storageSport;
  };

  overGraphs(data) {
    var array = [];

    for(var key in data) {
      array.push(key + ": ", "Place: " + data[key], "Next Sport: ");
    }

    return array;
  }
  
  render() {
  let arrayOfData = this.buildArray();
  let locations = this.extractLocations(arrayOfData);
  let sports = this.extractSports(arrayOfData);
  let sportsData = this.sportChartData(sports);
  let locationsData = this.locationsportChartData(locations);
  let combinedData = this.sportsByLocation(sports, locations, arrayOfData);
  let table = this.overGraphs(combinedData);

    return (
      <div id="parent">
        <div className="center-align">
          <BarChart
            data={sportsData}
              width={1000}
              height={400}
              fill={'#3182bd'}
              title='Sports Played'
          />
        </div>
       <div className="center-align flow-text">
        <p>So why the graph? This first graph lets you know how active people are with certain sport in your area. This is great because it will help you
        fill your teams and get your game on by selecting the highest played sport.
        </p>
      </div>
      <div className="center-align">
          <BarChart
            data={locationsData}
              width={1000}
              height={400}
              fill={'#3182bd'}
              title='Locations Played At'
          />
        </div>
       <div className="center-align flow-text">
        <p>So why this graph? Well you gotta play somewhere right? These are the most top locations in your area. 
        </p>
      </div>
      <div>
       <h3>There was supposed to be a glorious stacked graph here but I failed. Sorry... Here's the data though!</h3>
      </div>
      <div className="center-align flow-text">
        {table}
      </div>
      </div>
    );
  }
};



