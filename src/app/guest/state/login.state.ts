import { EntityState } from '@ngrx/entity';
import { login_adapter } from './login.selector';
import { login_success_res } from 'src/app/_models/login.model';

export interface login extends EntityState<login_success_res> {}

export const initial_state: login = login_adapter.getInitialState({});
