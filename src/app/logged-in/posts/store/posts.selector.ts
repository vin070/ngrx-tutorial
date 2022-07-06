import { post_adapter,post_state } from './posts.store';
import { param_selector } from '../../../store/app.selector';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const state_name = 'posts';

const post_store = createFeatureSelector<post_state>(state_name);

const {
  selectAll,
  selectEntities
} = post_adapter.getSelectors();

export const post_selector = createSelector(post_store, selectAll);

const entity_selector = createSelector(post_store, selectEntities);

export const post_by_id: any = createSelector(
  entity_selector,
  param_selector,
  (state: any, params: any) => (state ? state[params['id']] : null)
);
