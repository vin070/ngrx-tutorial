import {
  reset,
  increment,
  decrement,
  modified_hello,
  custom_increment,
} from './counter.actions';
import { initial_state } from './counter.store';
import { on, createReducer } from '@ngrx/store';
import { state_type } from 'src/app/_models/counter.model';

export const counter_reducer = createReducer(
  initial_state,
  on(increment, (state: state_type): state_type => {
    return { ...state, counter: state.counter + 1 };
  }),
  on(decrement, (state: state_type): state_type => {
    return { ...state, counter: state.counter - 1 };
  }),
  on(reset, (state: state_type): state_type => {
    return { ...state, counter: 0 };
  }),
  on(custom_increment, (state: state_type, action: any): state_type => {
    return { ...state, counter: action.count + state.counter };
  }),
  on(modified_hello, (state: state_type): state_type => {
    let { hello_world } = state;
    hello_world = hello_world === 'Hello' ? 'Modified hello' : 'Hello';
    return { ...state, hello_world };
  })
);
