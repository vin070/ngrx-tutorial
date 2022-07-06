import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { router_state } from '../../_models/router_state.model';

@Injectable({
  providedIn: 'root',
})
export class CustomSerializerService {
  constructor() {}

  serialize(routerState: RouterStateSnapshot): router_state {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }
    const {
      url,
      root: { queryParams: qwery_params },
    } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, qwery_params };
  }
}
