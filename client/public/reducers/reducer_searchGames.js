import { SEARCH_GAMES, FILTER_GAMES, FILTER_SEARCH} from '../actions/index';

const INITIAL_STATE = { games: [], filteredGames: [], currentSort: "" };

export default function(state = INITIAL_STATE, action) {
  console.log("the action is", action);
  switch(action.type){
    case SEARCH_GAMES:
      return {...state, games: action.payload, filteredGames: action.payload}
    case FILTER_GAMES:
      return {...state,filteredGames: action.payload}
    case FILTER_SEARCH:
      return {...state,currentSort: action.payload}
    default: 
      return state;
  }
}
