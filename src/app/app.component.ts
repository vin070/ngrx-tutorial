import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { store_state } from './_models/store.model';
import { auto_login } from './guest/state/login.action';
import { loading_selector$ } from './store/app.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ngrx-practice';
  loading$: Observable<boolean>;

  constructor(private _store: Store<store_state>) {
    this.loading$ = this._store.select(loading_selector$);
    this._store.dispatch(auto_login());
  }
}
