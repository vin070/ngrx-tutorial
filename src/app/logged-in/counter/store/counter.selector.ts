import { state_type } from '../../../_models/counter.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const state_name = 'counter';

export const stateFeature = createFeatureSelector<state_type>(state_name);

export const counter_selector = createSelector(
  stateFeature,
  (state:state_type) => state.counter
);

export const hello_selector = createSelector(
  stateFeature,
  (state:state_type) => state.hello_world
);
