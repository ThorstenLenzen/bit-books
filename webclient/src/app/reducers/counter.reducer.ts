import { CounterActions } from './../actions/counter.action';
import * as si from 'seamless-immutable';
import { Counter } from './types';
import { Action } from 'redux';

const INITIAL_COUNTER_STATE: Counter = si.from({
  current: 0
});

export function counterReducer(
  state: Counter = INITIAL_COUNTER_STATE, action: Action
): Counter {

  switch (action.type) {

    case CounterActions.INCREMENT_COUNTER:
      return (<any>state).set('current', state.current + 1);

  default:
    return state;
  }
}
