import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class FormControlErrorHandlerService {
  /**
   * Files for managing regular expression pattern and its error description globally.
   */

  /**
   * Patter name[Key] and its regex[Value] are mapped in formcontrol_regex object.
   */
  formcontrol_regex: any = {
    password: new RegExp(
      '^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%\\^&*()_+\\-=\\[{\\]}\\|:;",<>\\./]).{10,}$'
    ),
    only_letters_1: new RegExp('^[a-zA-Z\\s]{1,}$'),
    only_letters_10: new RegExp('^[a-zA-Z\\s]{10,}$'),
    only_integer: new RegExp('/^-?\\d+$/'),
  };

  /**
   * Value in formcontrol_regex object will be used as key  in regex_error_desc object
   * for retriving the error description from language file corresponding to regular expression.
   */
  regex_error_desc = {
    [this.formcontrol_regex['password']]: 'form_error.password_regex_msg',
    [this.formcontrol_regex['only_letters_1']]:
      'form_error.only_letters_regex_msg',
    [this.formcontrol_regex['only_letters_10']]:
      'form_error.only_letters_regex_msg',
    [this.formcontrol_regex['only_integer']]: 'form_error.only_integer',
    email: 'form_error.email_regex_msg',
    required: 'form_error.required_regex_msg',
    minlength: 'form_error.minlength_regex_msg',
  };

  constructor(private _translation_service: TranslateService) {}

  handle_form_error(control: AbstractControl): Observable<string> | any {
    if (!(control.touched && control.errors)) return of('');

    for (let error in control.errors) {
      switch (error) {
        case 'required':
          return this._translation_service.get(this.regex_error_desc[error]);
          break;

        case 'minlength':
          return this._translation_service.get(
            this.regex_error_desc['minlength'],
            {
              min_length: control.errors[error].requiredLength,
            }
          );
          break;

        case 'pattern':
          return this._translation_service.get(
            this.regex_error_desc[control.errors[error].requiredPattern]
          );
          break;

        case 'email':
          return this._translation_service.get(this.regex_error_desc[error]);
          break;

        default:
          return of('');
          break;
      }
    }
  }
}
