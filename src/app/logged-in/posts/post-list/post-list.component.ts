import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { post } from 'src/app/_models/post.model';
import { loading } from '../../../store/app.action';
import { post_selector } from '../store/posts.selector';
import { store_state } from '../../../_models/store.model';
import { load_post, delete_post } from '../store/posts.action';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent {
  post_list$: Observable<Array<post>>;

  constructor(private _store: Store<store_state>) {
    this._store.dispatch(loading({ loading: true }));
    this._store.dispatch(load_post());
    this.post_list$ = this._store.select(post_selector);
  }

  handle_delete_post(id: any): void {
    if (!confirm('Are you sure you want to delete this post')) return;

    this._store.dispatch(delete_post({ id }));
  }
}