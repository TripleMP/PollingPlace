import React, { Component } from 'react';
import $ from 'jquery';
import path from 'path';

class NavBar extends Component {
  constructor(props) {
    super(props)
}

  componentDidMount() {
    $('#addTableID').hide()
  }

  nav() {
    return(
      <ul className="nav nav-tabs">
        <li role="presentation" className="active"><a href="#">
          <img height={35} width={35} alt="Brand" src="https://sopreso.com/images/poll-2.png" className="img-responsive" alt="Responsive image"/>
          </a>
        </li>
          <li onClick={() => $('#addTableID').show()} role="presentation"><a href="#">Add</a></li>
          <li role="presentation"><a href="#">Pending</a></li>
          <li role="presentation"><a href="#">Voted</a></li>
      </ul>     
    )  
  }

  addTable() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <table id="addTableID" className="table table-hover">
              <thead>
                <tr>
                  <th>
                    <img height={15} width={15} id="x" onClick={() => $('#addTableID').hide()}src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/multiply-.png" className="img-responsive" alt="Responsive image"/>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input placeholder='Sport' type="text" className="form-control"/></td>
                </tr>
                <tr>
                  <td><input placeholder='Rules' type="text" className="form-control"/></td>
                </tr>
                <tr>
                  <td><input placeholder='Time' type="text" className="form-control"/></td>
                </tr>
                <tr>
                  <td><input placeholder='Players' type="text" className="form-control"/></td>
                </tr>
                <tr>
                  <td><input placeholder='Max Players' type="text" className="form-control"/></td>
                </tr>
                <tr>
                  <td><input placeholder='Created by' type="text" className="form-control"/></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> 
      </div>
    )
  }

  render() {
  let navRender = this.nav()
  let addTableRender = this.addTable()

    return(
      <div>
          <div>{ navRender }</div>
          <div>{ addTableRender }</div>
      </div>
    )
  }
}

export default NavBar