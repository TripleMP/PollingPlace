import React, { Component } from 'react';
import FilterForm from './filterForm.js';

class Filter extends Component {

  render() {
    return(
      <div className="valign-wrapper" >
        <div className="valign center-block">
          <div className="card card-panel hoverable">

            <h1> Games </h1>
            <FilterForm />

          </div>
        </div>                    
      </div> 
    )
  }
}

export default Filter





