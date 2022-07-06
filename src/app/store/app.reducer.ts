import { loading } from './app.action';
import { initial_state } from './app.store';
import { on, createReducer } from '@ngrx/store';

const app_reducer$ = createReducer(
  initial_state,
  on(loading, (state: any, action: any) => {
    return {
      ...state,
      loading: action.loading,
    };
  })
);

export function app_reducer(state: any, action: any) {
  return app_reducer$(state, action);
}