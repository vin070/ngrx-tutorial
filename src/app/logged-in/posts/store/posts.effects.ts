import {
  add_post,
  edit_post,
  load_post,
  delete_post,
  add_post_failed,
  add_post_success,
  edit_post_failed,
  load_post_failed,
  load_post_success,
  edit_post_success,
  delete_post_failed,
  delete_post_success,
} from './posts.action';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { loading } from '../../../store/app.action';
import { posts } from 'src/app/_models/post.model';
import { store_state } from 'src/app/_models/store.model';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { ApiServiceService } from '../../../_services/api_service/api_service.service';

@Injectable({
  providedIn: 'root',
})
export class PostsEffects {
  constructor(
    private _store: Store<store_state>,
    private _actions: Actions,
    private _api_service: ApiServiceService
  ) {}

  load_post$ = createEffect(() => {
    return this._actions.pipe(
      ofType(load_post),
      exhaustMap((action: any) => {
        return this._api_service.get_posts().pipe(
          map((data: posts) => {
            this._store.dispatch(loading({ loading: false }));
            return load_post_success({ posts: data });
          }),
          catchError((err: any) => {
            this._store.dispatch(loading({ loading: false }));
            return of(load_post_failed());
          })
        );
      })
    );
  });

  delete_post$ = createEffect(() => {
    return this._actions.pipe(
      ofType(delete_post),
      exhaustMap((action: any) => {
        return this._api_service.delete_post(action.id).pipe(
          map((res: any) => {
            return delete_post_success(action.id);
          }),
          catchError((err: any) => {
            return of(delete_post_failed());
          })
        );
      })
    );
  });

  add_post$ = createEffect(() => {
    return this._actions.pipe(
      ofType(add_post),
      exhaustMap((action: any) => {
        return this._api_service.add_post(action.posts).pipe(
          map((data: any) => {
            return add_post_success({
              posts: { ...action.posts, id: data.id },
            });
          }),
          catchError((err: any) => {
            return of(add_post_failed());
          })
        );
      })
    );
  });

  edit_post$ = createEffect(() => {
    return this._actions.pipe(
      ofType(edit_post),
      exhaustMap((action: any) => {
        const { id, title, description } = action.posts;
        return this._api_service
          .update_post(id, {
            title,
            description,
          })
          .pipe(
            map((data: any) => {
              return edit_post_success({
                posts: {
                  id,
                  changes: {
                    title,
                    description,
                    id,
                  },
                },
              });
            }),
            catchError((err: any) => {
              return of(edit_post_failed());
            })
          );
      })
    );
  });
}