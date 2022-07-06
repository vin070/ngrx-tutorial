import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { loading } from 'src/app/store/app.action';
import { login_start } from '../state/login.action';
import { store_state } from '../../_models/store.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormControlErrorHandlerService } from '../../_services/form_control_error_handler/form-control-error-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  login_form: FormGroup;

  constructor(
    private _form_builer: FormBuilder,
    public _form_error_handler: FormControlErrorHandlerService,
    private _store: Store<store_state>
  ) {
    this.login_form = this._form_builer.group({
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
    });
  }

  get login_form_controls() {
    return this.login_form.controls;
  }

  handle_login() {
    if (this.login_form.invalid) return;
    this._store.dispatch(loading({ loading: true }));
    this._store.dispatch(login_start(this.login_form.value));
  }
}
