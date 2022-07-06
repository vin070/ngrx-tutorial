import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { exhaustMap } from 'rxjs/operators';
import { store_state } from '../../_models/store.model';
import { auth_token } from '../../guest/state/login.selector';

@Injectable({
  providedIn: 'root',
})

export class HttpInterceptorService implements HttpInterceptor {
  constructor(private store: Store<store_state>) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select(auth_token).pipe(
      exhaustMap((token: string | null) => {
        if (!token) return next.handle(req);

        let modified_request = req.clone({
          params: req.params.append('auth', token),
        });
        return next.handle(modified_request);
      })
    );
  }
}