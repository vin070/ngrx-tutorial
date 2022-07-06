import { posts } from './post.model';
import { app_state } from './app.model';
import { state_type } from './counter.model';
import { login_success_res } from './login.model';
import { state_name } from '../store/app.selector';
import { app_reducer } from '../store/app.reducer';
import { routerReducer } from '@ngrx/router-store';
import { router_state_whole } from './router_state.model';
import { router_state_name } from '../store/app.selector';
import { login_reducer } from '../guest/state/login.reducer';
import { login_state_name } from '../guest/state/login.selector';

export interface store_state extends app_state {
  counter: state_type;
  post: posts;
  login: login_success_res;
  [router_state_name]: router_state_whole;
}

export const shared_state = {
  [state_name]: app_reducer,
  [login_state_name]: login_reducer,
  [router_state_name]: routerReducer,
};
