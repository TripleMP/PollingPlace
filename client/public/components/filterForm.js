import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { searchGames, filterSearch } from '../actions/index.js';

class FilterForm extends Component {

  onSubmit({ sortOption }) {
    console.log("this is the sortOption", sortOption);
    this.props.filterSearch(sortOption);
      
    }

  render () {

    const Options = ['Ascending', 'Descending' ];

    const { fields: { sortOption }, handleSubmit } = this.props;

    console.log("sort options are these", sortOption)

   return ( 

      <div id="container">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <label> Sort By: </label>
          <select {...sortOption} className="filterForm">
            {Options.map(sortOpt => <option key={sortOpt} value={sortOpt} className="filterOption"> {sortOpt} </option>)}
          </select>
     
          <button className="waves-effect red waves-light btn" type="submit"> Submit </button>
        </form>
      </div>
    )
  }

}

export default reduxForm({
  form: FilterForm,
  fields: ['sortOption']
}, null, { searchGames, filterSearch })(FilterForm)
