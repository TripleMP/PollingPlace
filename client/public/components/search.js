import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import $ from 'jquery';

export default class Search extends Component { 

  constructor(props) {
    super(props)

    this.state = {
      dropDownSport: "",
      locationInput: ""
    }
  }


  sportsSelect(event) {
    this.setState({
      dropDownSport: event.target.value
    })
  } 

  onLocationSubmit(event) {  
    event.preventDefault()
    let temp = this.state.locationInput;
    this.setState({
      locationInput: ''
    })
  }

  onLocationEnter(event) {
    console.log(event.target.value)
    this.setState({
      locationInput: event.target.value
    })
  }

render() {
    return (
      <div>
        <form onSubmit={this.onLocationSubmit.bind(this)}>
          <input value={this.state.locationInput} onChange={this.onLocationEnter.bind(this)} type='text' placeholder='Search'/>
          <select onChange={this.sportsSelect.bind(this)}>
            <option value="default">Select Sport</option>
            <option value="baseball">Baseball</option>
            <option value="basketball">Basketball</option>
            <option value="football">Football</option>
          </select>
        </form>
      </div>
    )
  }  
}

