import { GET_GAMES } from '../actions/index';

export default function(state = [], action) {
  switch(action.type){
    case GET_GAMES:
      return [ action.payload.data, ...state ];
  }
  return state;
}
