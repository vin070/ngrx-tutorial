import { post } from '../../../_models/post.model';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export interface post_state extends EntityState<post> {}

export const post_adapter = createEntityAdapter<post>();

export const initial_state = post_adapter.getInitialState();
