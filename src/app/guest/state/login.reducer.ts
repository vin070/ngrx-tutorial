import { on, createReducer } from '@ngrx/store';
import { login_adapter } from './login.selector';
import { initial_state, login } from './login.state';
import { log_out, login_success, signup_success } from './login.action';

export const login_reducer = createReducer(
  initial_state,
  on(login_success, (state: login, action: any):login => {
    return login_adapter.addOne(action.login, state);
  }),
  on(signup_success, (state: login, action: any):login => {
    return login_adapter.addOne(action, state);
  }),
  on(log_out, (state: login):login => {
    return login_adapter.removeAll(state);
  })
);
