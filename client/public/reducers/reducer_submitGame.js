import { SUBMIT_GAME } from '../actions/index';

export default function(state = [], action) {
  switch(action.type){
    case SUBMIT_GAME:
      return [ action.payload.data, ...state ];
  }
  return state;
}
