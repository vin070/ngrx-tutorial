import { Update } from '@ngrx/entity';
import { props, createAction } from '@ngrx/store';
import { post, posts } from '../../../_models/post.model';

export const EDIT_POST = '[post module] editing post';
export const EDIT_POST_SUCCESS = '[post module] edit post success';
export const EDIT_POST_FAILED = '[post module] edit post failed';

export const ADD_POST = '[post module] adding post';
export const ADD_POST_SUCCESS = '[post module] add post success';
export const ADD_POST_FAILED = '[post module] add post failed';

export const DELETE_POST = '[post module] deleting post';
export const DELETE_POST_SUCCESS = '[post module] delete post success';
export const DELETE_POST_FAILED = '[post module] delete post failed';

export const LOAD_POST = '[post module] loading post';
export const LOAD_POST_FAILED = '[post module] load post failed';
export const LOAD_POST_SUCCESS = '[post module] load post success';

export const load_post = createAction(LOAD_POST);
export const load_post_failed = createAction(LOAD_POST_FAILED);
export const load_post_success = createAction(
  LOAD_POST_SUCCESS,
  props<{ posts: posts }>()
);

export const add_post = createAction(ADD_POST, props<{ posts: post }>());
export const add_post_success = createAction(
  ADD_POST_SUCCESS,
  props<{ posts: post }>()
);
export const add_post_failed = createAction(ADD_POST_FAILED);

export const delete_post = createAction(DELETE_POST, props<{ id: string }>());
export const delete_post_success = createAction(
  DELETE_POST_SUCCESS,
  props<{ id: string }>()
);
export const delete_post_failed = createAction(DELETE_POST_SUCCESS);

export const edit_post = createAction(EDIT_POST, props<{ posts: post }>());
export const edit_post_success = createAction(
  EDIT_POST_SUCCESS,
  props<{ posts: Update<post> }>()
);
export const edit_post_failed = createAction(EDIT_POST_FAILED);