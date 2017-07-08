import { combineReducers } from 'redux';

function input(state = '', action) {
  switch (action.type)  {
    case 'CHANGE_INPUT':
      return action.value;
    default:
      return state;
  }
}

const rootReducer = combineReducers({input});

export default rootReducer;
