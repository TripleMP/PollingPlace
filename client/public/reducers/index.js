import { combineReducers } from 'redux'
import GamesReducer from './reducer_games'
import SubmitGamesReducer from './reducer_submitGame'

const rootReducer = combineReducers({
  games: GamesReducer,
  submitGame: SubmitGamesReducer,
  getGames: GetGamesReducer
})

export default rootReducer;