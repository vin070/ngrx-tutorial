import {
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { store_state } from '../../_models/store.model';
import { is_logged_in } from '../../guest/state/login.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthGard {
  constructor(private _router: Router, private _store: Store<store_state>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._store.select(is_logged_in).pipe(
      map((is_authenticated) => {
        if (!is_authenticated) return this._router.navigateByUrl('/guest/login');
        else return true;
      })
    );
  }
}