import { app_state } from '../_models/app.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { router_state_whole } from '../_models/router_state.model';

export const state_name = 'shared_state';

const shared_state = createFeatureSelector<app_state>(state_name);

export const loading_selector$ = createSelector(
  shared_state,
  (state: app_state) => state.loading
);

export const router_state_name = 'router';

const router_shared_state =
  createFeatureSelector<router_state_whole>(router_state_name);

export const param_selector = createSelector(
  router_shared_state,
  (state: router_state_whole) => state.state.params
);

export const query_selector = createSelector(
  router_shared_state,
  (state: router_state_whole) => state.state.qwery_params
);
