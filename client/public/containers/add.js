import React, { Component } from 'react';
import $ from 'jquery';
import moment from 'moment';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitGame } from '../actions/index';

class Add extends Component { 
  constructor(props) {
    super(props)

    this.state = {
      sport: '',
      rules: '',
      time: '',
      location: '',
      players: '',
      original_players: '',
      needed_players: '',
      created_by: ''
    }

  }

  onInputChange(input, event) {
    const myObj = {
    }
    myObj[input] = event.target.value
    this.setState(myObj)
  }

  onSubmit() {
    
    // let sport = this.state.sport.toLowerCase();
    // let split = sport.split('');
    // let capital = split[0].toUpperCase();
    // split[0] = capital;
    // let joinedSport = split.join('');

    if(this.validate.call(this)) {
      this.props.submitGame( { sport: this.state.sport, rules: this.state.rules, time: this.state.time, location: this.state.location, originalPlayers: this.state.original_players, joinedPlayers: '[poop dollar]', playersNeeded: this.state.needed_players, created_by: this.state.created_by } )
      this.props.history.push('/GameListHome')
    }
  }

  validate() {
    let wasThereAnError = 0

    let sport = this.state.sport.toLowerCase(),
        rules = this.state.rules.toLowerCase(),
        time = this.state.time,
        needed_players = this.state.needed_players,
        created_by = this.state.created_by.toLowerCase(),
        original_players = this.state.original_players;

    let listOfSports = ['football', 'baseball', 'basketball', 'tennis', 'soccer'];

    $("input").removeClass("fieldError");
    $("#errorMessage").hide();

    if (listOfSports.indexOf(sport) === -1) {
      wasThereAnError ++;
      $('#sport').addClass('fieldError')
    }
    if (new Date(time) <= new Date() || time === '') {
      wasThereAnError ++;
      $('#time').addClass('fieldError')
    }
    const reOriginal_players = /[^0-9]/;
    if (reOriginal_players.test(original_players)) {
      wasThereAnError ++;
      $('#original_players').addClass('fieldError')
    }
    const reNeeded_players = /[^0-9]/;
    if (needed_players <= 0 || reNeeded_players.test(needed_players)) {
      wasThereAnError ++;
      $('#needed_players').addClass('fieldError')
    }
    const reCreated_by = /[^a-zA-Z0-9\s]/;
    if (reCreated_by.test(created_by) || created_by.length === 0) {
      wasThereAnError ++;   
      $('#created_by').addClass('fieldError')
    }
    if (wasThereAnError > 0) {
      $('#errorMessage').show()
      return false;
    } else {
      return true;
    }
  }

render() {

  return(
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <table id="addTableID" className="table table-hover">
              <thead>
                <tr>
                  <th>
                    <p id="errorMessage" style={{color: 'red'}}>Please fix incorect input fields</p>
                  </th>
                </tr>
              </thead>
                <tbody>
                  <tr>
                    <td><input id="sport" className="resetError" onChange={ this.onInputChange.bind(this, 'sport') } value={ this.state.sport } placeholder='Sport' type="text" className="form-control"/></td>
                  </tr>
                  <tr>
                    <td><input id="rules" className="resetError" onChange={ this.onInputChange.bind(this, 'rules') } value={ this.state.rules } placeholder='Rules' type="text" className="form-control"/></td>
                  </tr>
                  <tr>
                    <td><input id="time" className="resetError" onChange={ this.onInputChange.bind(this, 'time') } value={ this.state.time }placeholder='Time' type="datetime-local" className="form-control"/></td>
                  </tr>
                  <tr>
                    <td><input id="location" className="resetError" onChange={ this.onInputChange.bind(this, 'location') } value={ this.state.location }placeholder='Location' type="text" className="form-control"/></td>
                  </tr>
                  <tr>
                    <td><input id="original_players" className="resetError" onChange={ this.onInputChange.bind(this, 'original_players') } value={ this.state.original_players } placeholder='Current Players' type="text" className="form-control"/></td>
                  </tr>
                  <tr>
                    <td><input id="needed_players" className="resetError" onChange={ this.onInputChange.bind(this, 'needed_players') } value={ this.state.needed_players } placeholder='Needed Players' type="text" className="form-control"/></td>
                  </tr>
                  <tr>
                    <td><input id="created_by" className="resetError" onChange={ this.onInputChange.bind(this, 'created_by') } value={ this.state.created_by } placeholder='Created by' type="text" className="form-control"/></td>
                  </tr>
                </tbody>            
              <button onClick={ this.onSubmit.bind(this) } className="btn btn-default" type="submit">submit</button>
            </table>
          </div>
        </div> 
      </div>
    )     
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ submitGame }, dispatch);
}

export default connect(null, mapDispatchToProps)(Add)
