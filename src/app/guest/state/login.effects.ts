import {
  log_out,
  auto_login,
  login_start,
  login_failed,
  login_success,
  signup_start,
  signup_success,
  signup_failed,
} from './login.action';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { loading } from '../../store/app.action';
import { TranslateService } from '@ngx-translate/core';
import { store_state } from 'src/app/_models/store.model';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { environment } from '../../../environments/environment';
import { login_post, login_success_res } from '../../_models/login.model';
import { map, tap, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { ApiServiceService } from '../../_services/api_service/api_service.service';

@Injectable()
export class loginEffects {
  constructor(
    private _router: Router,
    private _actions: Actions,
    private _toast: ToastrService,
    private _store: Store<store_state>,
    private _api_service: ApiServiceService,
    private _translation_service: TranslateService
  ) {}

  logout_timer: any = -1;

  login_start$ = createEffect(() => {
    return this._actions.pipe(
      ofType(login_start),
      exhaustMap((action: any) => {
        return this._api_service
          .login({
            email: action.email,
            password: action.password,
          })
          .pipe(
            map((data: login_success_res) => {
              localStorage.setItem('login_data', JSON.stringify(data));
              this._store.dispatch(loading({ loading: false }));
              return login_success({ login: data });
            }),
            catchError((err: any) => {
              this._store.dispatch(loading({ loading: false }));
              this._translation_service
                .get([
                  `api_res.${err.error.error.message}`,
                  'toastr.error_title',
                ])
                .subscribe((data: any) => {
                  this._toast.error(
                    data[`api_res.${err.error.error.message}`],
                    data['toastr.error_title'],
                    { timeOut: environment.toastr_timeout }
                  );
                });
              return of(login_failed());
            })
          );
      })
    );
  });

  login_success$ = createEffect(
    () => {
      return this._actions.pipe(
        ofType(login_success, signup_success),
        tap((action: any) => {
          this.automatic_logout(+action.login.expires_in * 1000);
          this._router.navigateByUrl('/logged_in/content');
        })
      );
    },
    { dispatch: false }
  );

  signup_start$ = createEffect(() => {
    return this._actions.pipe(
      ofType(signup_start),
      exhaustMap((action: login_post) => {
        return this._api_service
          .signup({
            email: action.email,
            password: action.password,
          })
          .pipe(
            map((response: login_success_res) => {
              this._store.dispatch(loading({ loading: false }));
              console.log(response)
              localStorage.setItem('login_data', JSON.stringify(response));
              this._translation_service
                .get(['api_res.SIGNUP_SUCCESS', 'toastr.success_title'])
                .subscribe((translate_res: any) => {
                  this._toast.success(
                    translate_res['api_res.SIGNUP_SUCCESS'],
                    translate_res['toastr.success_title'],
                    { timeOut: environment.toastr_timeout }
                  );
                });
              return signup_success({ login: response });
            }),
            catchError((err: any) => {
              this._store.dispatch(loading({ loading: false }));
              this._translation_service
                .get([
                  `api_res.${err.error.error.message}`,
                  'toastr.error_title',
                ])
                .subscribe((translate_res: any) => {
                  this._toast.error(
                    translate_res[`api_res.${err.error.error.message}`],
                    translate_res['toastr.error_title'],
                    { timeOut: environment.toastr_timeout }
                  );
                });
              return of(signup_failed);
            })
          );
      })
    );
  });

  auto_login$ = createEffect(() => {
    return this._actions.pipe(
      ofType(auto_login),
      mergeMap((action: any) => {
        const login_data: string | null = localStorage.getItem('login_data');
        if (login_data)
          return of(login_success({ login: JSON.parse(login_data) }));
        else return of(login_failed());
      })
    );
  });

  log_out$ = createEffect(
    () => {
      return this._actions.pipe(
        ofType(log_out),
        tap((action: any) => {
          clearTimeout(this.logout_timer);
          localStorage.removeItem('login_data');
          this._router.navigateByUrl('/guest/login');
        })
      );
    },
    { dispatch: false }
  );

  /**
   * Automatically log out after some time
   * @param{ number } time - milliseconds after to logout
   */
  automatic_logout(time: number) {
    this.logout_timer = setTimeout(() => {
      this._store.dispatch(log_out());
    }, time);
  }
}