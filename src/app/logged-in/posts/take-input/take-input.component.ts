import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { post } from 'src/app/_models/post.model';
import { add_post } from '../store/posts.action';
import { store_state } from 'src/app/_models/store.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormControlErrorHandlerService } from '../../../_services/form_control_error_handler/form-control-error-handler.service';

@Component({
  selector: 'app-take-input',
  templateUrl: './take-input.component.html'
})
export class TakeInputComponent  {
  take_input: FormGroup;

  constructor(
    private _store: Store<store_state>,
    private _form_builder: FormBuilder,
    public _form_error_handler: FormControlErrorHandlerService
  ) {
    this.take_input = this._form_builder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern(
            this._form_error_handler.formcontrol_regex.only_letters_1
          ),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern(
            this._form_error_handler.formcontrol_regex.only_letters_10
          ),
        ],
      ],
    });
  }

  get take_input_controls() {
    return this.take_input.controls;
  }

  handle_input() {
    if (this.take_input.invalid) return;

    const post: post = {
      title: this.take_input.value.title,
      description: this.take_input.value.description,
    };
    this._store.dispatch(add_post({ posts: post }));
    this.take_input.reset();
  }
}
