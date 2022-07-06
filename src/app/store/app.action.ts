import { app_state } from '../_models/app.model';
import { props, createAction } from '@ngrx/store';

export const LOADING = '[App module] loading';

export const loading = createAction(LOADING, props<app_state>());