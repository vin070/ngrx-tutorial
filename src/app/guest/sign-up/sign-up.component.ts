import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { loading } from 'src/app/store/app.action';
import { signup_start } from '../state/login.action';
import { store_state } from '../../_models/store.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { 
  FormControlErrorHandlerService 
} from '../../_services/form_control_error_handler/form-control-error-handler.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent {
  sign_up_form: FormGroup;

  constructor(
    private _form_builer: FormBuilder,
    public _form_error_handler: FormControlErrorHandlerService,
    private _store: Store<store_state>
  ) {
    this.sign_up_form = this._form_builer.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern(
            this._form_error_handler.formcontrol_regex.password
          ),
        ],
      ],
      confirm_password: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern(
            this._form_error_handler.formcontrol_regex.password
          ),
        ],
      ]
    },
    );
  }

  get sign_up_form_controls() {
    return this.sign_up_form.controls;
  }

  handle_sign_up() {
    if (this.sign_up_form.invalid) return;
    this._store.dispatch(loading({ loading: true }));
    this._store.dispatch(signup_start(this.sign_up_form.value));
  }
}
