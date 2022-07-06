import { props, createAction } from '@ngrx/store';
import { login_post, login_success_res } from '../../_models/login.model';

export const LOGIN_START: string = '[Login module] Login start';
export const LOGIN_SUCCESS: string = '[Login module] Login success';
export const LOGIN_FAILED: string = '[Login module] Login failed';
export const AUTO_LOGIN: string = '[Login module] Auto login';

export const LOG_OUT: string = '[Login module] Log out';

export const SIGNUP_START: string = '[Login module] Sign up start';
export const SIGNUP_SUCCESS: string = '[Login module] Sign up success';
export const SIGNUP_FAILED: string = '[Login module] Sign up failed';

export const login_start = createAction(LOGIN_START, props<login_post>());
export const login_failed = createAction(LOGIN_FAILED);
export const login_success = createAction(
  LOGIN_SUCCESS,
  props<{ login: login_success_res }>()
);
export const auto_login = createAction(AUTO_LOGIN);
export const log_out = createAction(LOG_OUT);

export const signup_start = createAction(SIGNUP_START, props<login_post>());
export const signup_failed = createAction(SIGNUP_FAILED);
export const signup_success = createAction(
  SIGNUP_SUCCESS,
  props<{ login: login_success_res }>()
);
