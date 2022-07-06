import { login } from './login.state';
import { createEntityAdapter } from '@ngrx/entity';
import { login_success_res } from '../../_models/login.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const login_state_name = 'login';

export const login_state = createFeatureSelector<login>(login_state_name);

export const login_adapter = createEntityAdapter<login_success_res>({
  selectId: (state: login_success_res) => state.email,
});

const { selectEntities } = login_adapter.getSelectors();

const entity_selector = createSelector(login_state, selectEntities);

export const is_logged_in = createSelector(entity_selector, (entity: any) => {
  for (let key in entity) return entity[key]?.id_token ? true : false;
  return false;
});

export const auth_token = createSelector(entity_selector, (entity: any) => {
  for (let key in entity) return entity[key]?.id_token ? entity.id_token : null;
  return false;
});
