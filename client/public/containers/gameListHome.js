import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class GamesListHome extends Component {

  renderList() {
    return this.props.getGames.map((game) => {
      return (
        <div className="card card-panel hoverable" key={game.id}>
          <div className="card-title">
            <h3>Game: {game.sport}</h3>
          </div>
            <h3 className="left-align">Players Needed: {game.playersNeeded}</h3>
            <h4 className="center-align">Time: {moment(game.time).format('MMMM Do YYYY, h:mm a')}</h4>
            <h4 className="center-align">Location: {game.location}</h4>
            <p className="card-text">Rules: {game.rules}</p>
          <div className="card-action">
            <p className="left-align">Host: {game.created_by}</p>
          </div>
        </div>
      )
    })
  }

  render() {
    console.log(this.props.getGames, 'getGames inside of GamesListHome')
      return (
        <div className="valign-wrapper">
          <div className="valign center-block">
            {this.renderList()}
          </div>
        </div>
      )
    }
  }

function mapStateToProps(state) {
  return {
    getGames: state.getGames
  }
}

export default connect(mapStateToProps)(GamesListHome)
