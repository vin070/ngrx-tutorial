import { Params } from '@angular/router';

export interface router_state {
  url: string;
  params: Params;
  qwery_params: Params;
}

export interface router_state_whole {
  state: router_state,
  navigationId: number
};