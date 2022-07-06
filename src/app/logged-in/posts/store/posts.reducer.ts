import {
  add_post_success,
  edit_post_success,
  load_post_success,
  delete_post_success,
} from '../store/posts.action';
import { on, createReducer } from '@ngrx/store';
import { initial_state, post_adapter, post_state } from './posts.store';

export const post_reducer = createReducer(
  initial_state,
  on(add_post_success, (state: post_state, action: any):post_state => {
    return post_adapter.addOne(action.posts, state);
  }),
  on(edit_post_success, (state: post_state, action: any):post_state => {
    return post_adapter.updateOne(action.posts, state);
  }),
  on(delete_post_success, (state: post_state, { id }):post_state => {
    return post_adapter.removeOne(id, state);
  }),
  on(load_post_success, (state: post_state, action: any):post_state => {
    return post_adapter.setAll(action.posts, state);
  })
);
