import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { IAppState } from './../reducers/types';

@Injectable()
export class CounterActions {

  static INCREMENT_COUNTER = 'INCREMENT_COUNTER';
  static DECREMENT_COUNTER = 'DECREMENT_COUNTER';

  constructor(private ngRedux: NgRedux<IAppState>) { }

  increment() {
    this.ngRedux.dispatch({
      type: CounterActions.INCREMENT_COUNTER,
      payload: 'UP!'
    });
  }

  decrement() {
    this.ngRedux.dispatch({
      type: CounterActions.DECREMENT_COUNTER,
      payload: 'DOWN!'
    });
  }
}
