import React, { Component } from 'react';
import { connect } from 'react-redux'

class GamesListHome extends Component {

  renderList() {
    return this.props.games.map((game) => {
      return (
        <li 
        key={game.id}>
        {game.sport}
        </li>
      )
    })
  }

  render() {
      return (
        <ul>
          {this.renderList()}
        </ul>
      )
    }
  }

function mapStateToProps(state) {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps)(GamesListHome)