import {
  reset,
  increment,
  decrement,
  modified_hello,
  custom_increment,
} from '../store/counter.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { store_state } from '../../../_models/store.model';
import { counter_selector, hello_selector } from '../store/counter.selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class ContentComponent {
  custom_input: FormControl = new FormControl();
  counter$: Observable<number>;
  hello$: Observable<string>;

  constructor(private store: Store<store_state>) {
    this.counter$ = this.store.select(counter_selector);
    this.hello$ = this.store.select(hello_selector);
  }

  handle_increment(): void {
    this.store.dispatch(increment());
  }

  handle_decrement(): void {
    this.store.dispatch(decrement());
  }

  handle_reset(): void {
    this.store.dispatch(reset());
  }

  dispatch_custom_increment() {
    this.store.dispatch(custom_increment({ count: +this.custom_input.value }));
    this.custom_input.reset()
  }

  dispatch_hello_modified() {
    this.store.dispatch(modified_hello());
  }
}
