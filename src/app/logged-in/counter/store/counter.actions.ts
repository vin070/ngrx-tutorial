import { props, createAction } from '@ngrx/store';

export const reset = createAction('reset');
export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const modified_hello = createAction('modified');

export const custom_increment = createAction(
  'custom_increment',
  props<{ count: number }>()
);
