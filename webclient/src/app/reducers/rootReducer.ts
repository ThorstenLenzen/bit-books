import { combineReducers } from 'redux-seamless-immutable';
import { counterReducer } from './counter.reducer';

// IAppState
export const rootReducer = combineReducers({
  counter: counterReducer
});
